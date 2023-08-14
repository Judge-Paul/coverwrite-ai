import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/generate", {
        prompt,
      });
      setGeneratedText(response.data.result[0].candidates[0].output);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          className="block border border-black mt-20"
        />
        <button
          type="submit"
          className="bg-blue-500 rounded-sm text-white p-1.5 mt-5"
        >
          Generate Text
        </button>
      </form>
      {generatedText && (
        <div>
          <h2>Generated Text:</h2>
          <p className="whitespace-pre w-96">{generatedText}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
