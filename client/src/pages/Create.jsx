import React, { useEffect, useState, useRef } from "react";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import Modal from "../components/Modal";
import { Toaster, toast } from "sonner";
import Helmet from "react-helmet";
import getPDFText from "../lib/getPDFText";
import isURL from "../lib/isURL";
import getTextContent from "../lib/getTextContent";

const serverURL = import.meta.env.VITE_APP_SERVER_URL;

export default function Create() {
	const localStorageFormData = JSON.parse(localStorage.getItem("formData"));
	const resumeRef = useRef(null);
	const [formData, setFormData] = useState(
		localStorageFormData || {
			name: "",
			resume: "",
			description: "",
			additionalInfo: "",
			companyURL: "",
			skills: [],
			skillInput: "",
		},
	);
	const [generatedText, setGeneratedText] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		localStorage.setItem("formData", JSON.stringify(formData));
	}, [formData]);

	const validateForm = () => {
		if (formData.name === "") {
			toast.error("Additional information is required.");
			return false;
		}
		if (formData.description === "") {
			toast.error("Job description is required.");
			return false;
		}
		if (formData.companyURL && !isURL(formData.companyURL)) {
			toast.error("Company URL is not valid.");
			return false;
		}
		return true;
	};

	const handleChange = async (event) => {
		const { name, value } = event.target;
		if (name === "resume") {
			const file = event.target.files[0];

			if (file && file.size > 2097152) {
				toast.error("File Uploaded is too large.");
				resumeRef.current.value = null;
				return;
			}

			if (file && file.type === "application/pdf") {
				getPDFText(file)
					.then((text) => {
						setFormData((prevFormData) => ({
							...prevFormData,
							resume: text,
						}));
					})
					.catch((error) => {
						toast.error("Error Uploading PDF. Try Again");
						resumeRef.current.value = null;
					});
			} else {
				toast.error("Please select a PDF file.");
				resumeRef.current.value = null;
			}
		}

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSkillsChange = (event) => {
		const { value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			skillInput: value,
		}));
	};

	const handleSkillsKeyPress = (event) => {
		if (event.key === "Enter" || event.key === ",") {
			event.preventDefault();
			addSkill();
		}
	};

	const addSkill = () => {
		const { skillInput, skills } = formData;
		if (skillInput.trim() !== "") {
			setFormData({
				...formData,
				skills: [...skills, skillInput.trim()],
				skillInput: "",
			});
		}
	};

	const removeSkill = (event, index) => {
		event.preventDefault();
		const updatedSkills = [...formData.skills];
		updatedSkills.splice(index, 1);
		setFormData({ ...formData, skills: updatedSkills });
	};

	async function handleSubmit(event) {
		event.preventDefault();
		if (validateForm()) {
			setIsLoading(true);
			try {
				let prompt = "";
				let companyInfo = "";

				if (formData.companyURL) {
					companyInfo = await getTextContent(formData.companyURL);
				}

				setFormData((prevFormData) => ({
					...prevFormData,
					companyInfo,
				}));
				for (const key in formData) {
					if ((formData[key] === "") | (formData[key].length > 0)) {
						prompt += `${key}: ${formData[key]}\n`;
					}
				}
				const response = await axios.post(`${serverURL}/generate`, {
					prompt,
				});

				if (response.status === 429) {
					return toast.error("Too many requests");
				}

				const generatedText = response?.data?.text;
				if (generatedText) {
					setGeneratedText(generatedText);
					if (generatedText === "Not a Valid Job Description") {
						toast.error("Not a Valid Job Description");
					} else {
						setShowModal(true);
						toast.success("Cover Letter Generated");
						localStorage.removeItem("formData");
					}
				} else {
					console.error("Invalid response format");
				}
			} catch (error) {
				toast.error(error.message);
			} finally {
				setIsLoading(false);
			}
		}
	}

	return (
		<main className="bg-[#c5ddfa] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
			<Helmet>
				<title>CoverWriteAI - Create</title>
			</Helmet>
			<Toaster position="top-right" richColors />
			{showModal && generatedText !== "Not a Valid Job Description" && (
				<Modal
					showModal={showModal}
					setShowModal={setShowModal}
					text={generatedText}
				/>
			)}
			<form
				onSubmit={handleSubmit}
				className="w-full bg-white rounded-lg p-6 md:p-14 shadow-lg text-[#3a4688]"
			>
				<label htmlFor="name" className="block font-semibold mb-2">
					Name:
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					className="mb-7 w-full p-2 border rounded-md"
					placeholder="David Adeleke"
				/>
				<label htmlFor="resume" className="block font-semibold mb-2">
					Resume:
				</label>
				<input
					type="file"
					accept=".pdf"
					id="resume"
					name="resume"
					className="mb-7 w-full p-2 border rounded-md"
					onChange={handleChange}
					ref={resumeRef}
				/>
				<label htmlFor="description" className="block font-semibold mb-2">
					Job Description:
				</label>
				<textarea
					id="description"
					name="description"
					value={formData.description}
					onChange={handleChange}
					className="w-full p-2 border rounded-md"
					placeholder="Paste the job description here..."
					rows="9"
				/>
				<label
					htmlFor="additionalInfo"
					className="block font-semibold mt-6 mb-2"
				>
					Additional Information:
				</label>
				<input
					type="text"
					id="additionalInfo"
					name="additionalInfo"
					value={formData.additionalInfo}
					onChange={handleChange}
					className="w-full p-2 border rounded-md"
					placeholder="I am a recent graduate with a degree in..."
				/>
				<label htmlFor="companyURL" className="block font-semibold mt-6 mb-2">
					Company About us URL:
				</label>
				<input
					type="text"
					id="companyURL"
					name="companyURL"
					value={formData.companyURL}
					onChange={handleChange}
					className="w-full p-2 border rounded-md"
					placeholder="https://www.company.com/about-us"
				/>
				<label htmlFor="skills" className="block font-semibold mt-6 mb-2">
					Skills (Separated by commas):
				</label>
				<div className="flex flex-wrap mb-2">
					{formData.skills.map((skill, index) => (
						<span
							key={index}
							className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2 mt-2 flex items-center w-max"
						>
							{skill}
							<button
								className="ml-2 text-white hover:text-gray-100"
								onClick={(event) => removeSkill(event, index)}
							>
								&#10005;
							</button>
						</span>
					))}
				</div>
				<input
					type="text"
					id="skills"
					name="skills"
					value={formData.skillInput}
					onChange={handleSkillsChange}
					onKeyDown={handleSkillsKeyPress}
					className="w-full p-2 border rounded-md"
					placeholder="e.g., JavaScript, React, Node.js, Microsoft Word"
				/>
				<button
					type="submit"
					disabled={isLoading}
					className={`w-full md:w-max mt-8 px-12 py-3 text-white text-xl font-semibold rounded-full ${
						isLoading
							? "bg-gray-400 cursor-not-allowed"
							: "bg-[#004fb6] hover:bg-[#3a4688]"
					} flex items-center justify-center`}
				>
					{isLoading ? <FaSpinner className="animate-spin mr-2" /> : "Submit"}
				</button>
			</form>
		</main>
	);
}
