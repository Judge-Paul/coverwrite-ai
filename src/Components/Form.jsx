import React, { useState, useEffect } from "react";

export default function Form() {
    const jobDesc = `Entry Level Job Posting Available 
Looking for Front End Developer 
3+ years TypeScript, 
4+ years Javascript,
28+ years Python and Golang Dev,
Redux Knowledge helps,
Short Hair,
Light skinned,
From Akwa Ibom state,
Muscular...`
    const skills = `3+ Years TypeScript: I have one year experience
4+ Years Javascript: I have two years experience
From Akwa Ibom state: I am from Cross River...`
    const [formData, setFormData] = useState({
        jobDesc: "",
        skills: ""
    })
    const [coverLetter, setCoverLetter] = useState("")
    const [apiInfo, setApiInfo] = useState({url: "", data: null})

    function handleFormChange(event){
        const {name, value} = event.target
        setFormData((currFormData) => ({
            ...currFormData,
            [name]: value
        }))
    }
    
    function generatePrompt(jobDescr, skills = "") {
        let skillsSec = skills === "" ? "" : `Please note I do not have the following skills ${skills}`
        return `Generate a cover letter for the Job description below
${skillsSec}
${jobDescr}`
     }    
     
     useEffect(() => {
        setApiInfo(currApiInfo => ({
            ...currApiInfo,
             url: "https://api.openai.com/v1/completions",
             data: `{
                 "model": "text-davinci-003",
                 "prompt": ${JSON.stringify(generatePrompt(formData.jobDesc, formData.skills))},
                 "max_tokens": 1000
              }`
         }))
     }, [])

    function fetchResult() {
        return makeRequest(apiInfo.url, apiInfo.data)
        .then(function(response) {
            setCoverLetter(JSON.stringify(JSON.parse(response).choices[0].text))
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function makeRequest(url, data) {
       return new Promise(function(resolve, reject) {
           var xhr = new XMLHttpRequest();
           xhr.open("POST", url);
           xhr.setRequestHeader("Content-Type", "application/json");
           xhr.setRequestHeader("Authorization", `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`);
           xhr.onload = function() {
               if (xhr.status >= 200 && xhr.status < 300) {
                   resolve(xhr.responseText);
               } else {
                   reject({
                   status: xhr.status,
                   statusText: xhr.statusText
                   });
               }
           };
           xhr.onerror = function() {
               reject({
                   status: xhr.status,
                   statusText: xhr.statusText
               });
           };
           xhr.send(data);
       });
    }

    return (
        <>
            <div className="pt-4 pb-10">
                <div className="pb-10">
                    <label 
                        htmlFor="jobDesc"
                        className="text-[1.2rem] md:text-[2rem] font-bold text-[#333333] md:pl-5"
                    >
                        Paste the Job Placement / Description
                    </label>
                    <textarea 
                        name="jobDesc"
                        className="border focus:border-2 border-[#333333] rounded-lg w-full h-[20rem] px-7 py-4 text-xl md:mt-4"
                        placeholder={jobDesc}
                        value={formData.jobDesc}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label 
                        htmlFor="skills"
                        className="text-[1.2rem] md:text-[2rem] font-bold text-[#333333] md:pl-5"
                    >
                        Fill out the skills you don't have
                    </label>
                    <textarea 
                        name="skills"
                        className="border focus:border-2 border-[#333333] rounded-lg w-full h-[10rem] px-7 py-4 text-xl md:mt-4"
                        placeholder={skills}
                        value={formData.skills}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="text-center pt-10">
                    <button
                        className="py-5 w-full md:w-2/5 rounded-xl bg-green-600 text-white text-xl font-semibold"
                        onClick={fetchResult}
                    >
                        Generate Cover Letter
                    </button>
                </div>
                {coverLetter !== "" && <h2 className="text-center pt-16 text-3xl md:text-4xl font-bold">
                    Cover Letter
                </h2>}
                <div className="py-4">
                    {coverLetter}
                </div>
            </div>
        </>
    )
}