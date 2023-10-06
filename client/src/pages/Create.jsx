import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import Modal from "../components/Modal";
import { Toaster, toast } from "sonner";
import Helmet from "react-helmet";

export default function Create() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    additionalInfo: "",
    skills: [],
    skillInput: "" // Add skillInput property
  });
  const [generatedText, setGeneratedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (formData.description === "") {
      toast.error("Job description is required.");
      return false;
    }
    if (formData.additionalInfo === "") {
      toast.error("Additional information is required.");
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSkillsChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      skillInput: value // Update skillInput
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
        skillInput: "" // Clear skillInput after adding to skills array
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
      const prompt = `I am going to pass you some values one is a job description and the next is additional info about myself using those two create the perfect cover letter for the job. If what I pass in the job description section doesn't look like an actual job description don't bother creating the Cover Letter just give me the output "Not a Valid Job Description". My name is \n${
        formData.name
      }\nSkills: ${formData.skills.join(", ")}\nJob Description: ${
        formData.description
      }\nAdditional Info: ${formData.additionalInfo}`;
      try {
        const response = await axios.post(
          "https://coverwrite.onrender.com/generate",
          {
            prompt
          }
        );

        const generatedText =
          response?.data?.result?.[0]?.candidates?.[0]?.output;
        if (generatedText) {
          setGeneratedText(generatedText);
          if (generatedText === "Not a Valid Job Description") {
            toast.error("Not a Valid Job Description");
          } else {
            setShowModal(true);
            toast.success("Cover Letter Generated");
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
    <main className="bg-[#9fcaff] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
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
