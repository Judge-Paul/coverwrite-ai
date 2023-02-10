import React, { useState, useEffect } from "react";
import placeholder from "../placeholder";
import axios from "axios";
import Modal from "./Modal";
import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Form() {
    const jobDesc = placeholder.jobDesc
    const skills = placeholder.skills
    const [formData, setFormData] = useState({
        jobDesc: "",
        skills: ""
    })
    const [coverLetter, setCoverLetter] = useState("")
    const [showModal, setShowModal] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    
    function getCoverLetter() {
        setIsLoading(true)
        const client = axios.create({
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            },
        })
    
        const params = {
            prompt: generatePrompt(formData.jobDesc, formData.skills),
            model: "text-davinci-003",
            max_tokens: 1000
        }
    
        client
            .post("https://api.openai.com/v1/completions", params)
            .then((result) => {
                setCoverLetter(result.data.choices[0].text)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function generatePrompt(jobDescr, skills = "") {
            let skillsSec = skills === "" ? "" : `Please note I do not have the following skills ${skills}`
            return `Generate a cover letter for the Job description below
    ${skillsSec}
    ${jobDescr}`
    }  

    function handleFormChange(event){
        const {name, value} = event.target
        setFormData((currFormData) => ({
            ...currFormData,
            [name]: value
        }))
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
                        className="border focus:border-2 border-[#333333] rounded-lg w-full h-[20rem] px-3 md:px-7 py-4 text-xl md:mt-4"
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
                        className="border focus:border-2 border-[#333333] rounded-lg w-full h-[8rem] px-3 md:px-7 py-4 text-xl md:mt-4"
                        placeholder={skills}
                        value={formData.skills}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="text-center pt-10">
                    <button
                        className="py-5 w-full md:w-2/5 rounded-lg md:rounded-xl bg-green-600 text-white text-2xl font-semibold"
                        onClick={getCoverLetter}
                    >
                        Generate Cover Letter
                    </button>
                </div>
                {coverLetter !== "" &&   
                    <Modal 
                        text={coverLetter} 
                        showModal={showModal} 
                        closeModal={() => {
                            setShowModal(false)
                            setCoverLetter("")
                            setShowModal(true)
                        }} 
                    />
                }
            </div> 
            {isLoading && <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>}
        </>
    )
}