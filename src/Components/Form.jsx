import React from "react";

export default function Form() {
    const jobDesc = `Entry Level Job Posting Available Looking for Front End Developer 
3+ years TypeScript, 
4+ years Javascript,
28+ years Python and Golang Dev,
Redux Knowledge helps,
Short Hair,
Light skinned,
From Akwa Ibom state,
Muscular...`
    const skills = `3+ Years TypeScript: I have one
4+ Years Javascript: I have one
From Akwa Ibom state: I am from Cross River...`
    return (
        <>
            <form className="pt-4 pb-10">
                <div className="pb-10">
                    <label 
                        htmlFor="job-desc"
                        className="text-[2rem] font-bold text-[#333333] pl-5"
                    >
                        Paste the Job Placement / Description
                    </label>
                    <textarea 
                        name="job-desc"
                        className="block border-2 border-[#333333] rounded-lg w-full h-[20rem] px-7 py-4 text-xl mt-4"
                        placeholder={jobDesc}
                    />
                </div>
                <div>
                    <label 
                        htmlFor="job-desc"
                        className="text-[2rem] font-bold text-[#333333] pl-5"
                    >
                        Write out skills you don't have
                    </label>
                    <textarea 
                        name="job-desc"
                        className="block border-2 border-[#333333] rounded-lg w-full h-[10rem] px-7 py-4 text-xl mt-4"
                        placeholder={skills}
                    >I do not have </textarea>
                </div>
                <div className="text-center pt-10">
                    <button
                        className="py-4 px-10 rounded-xl bg-green-600 text-white text-xl font-semibold"
                    >
                        Generate Cover Letter
                    </button>
                </div>
            </form>
        </>
    )
}