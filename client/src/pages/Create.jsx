import React, { useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";

export default function Create() {
  const [formData, setFormData] = useState({
    description: "",
    additionalInfo: "",
  });
  const [formErrors, setFormErrors] = useState({
    description: "",
    additionalInfo: "",
  });
  const [generatedText, setGeneratedText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = {};

    if (!formData.description) {
      newFormErrors.description = "Job description is required.";
      isValid = false;
    }

    if (!formData.additionalInfo) {
      newFormErrors.additionalInfo = "Additional information is required.";
      isValid = false;
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      const prompt = `Take this Job Description and Create the perfect Cover Letter for me.\n Some information about me first:\n${formData.additionalInfo}\nCover Letter:\n${formData.description}\n\n`;
      try {
        const response = await axios.post("http://localhost:3000/generate", {
          prompt,
        });
        setGeneratedText(response.data.result[0].candidates[0].output);
        setShowModal(true);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <main className="bg-[#9fcaff] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
      {showModal && (
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
          required
        />
        {formErrors.description && (
          <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>
        )}

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
          required
        />
        {formErrors.additionalInfo && (
          <p className="text-red-500 text-sm mt-1">
            {formErrors.additionalInfo}
          </p>
        )}

        <button
          type="submit"
          className="w-full md:w-max mt-8 px-12 py-3 bg-[#004fb6] text-white text-xl font-semibold rounded-full hover:bg-[#3a4688]"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
