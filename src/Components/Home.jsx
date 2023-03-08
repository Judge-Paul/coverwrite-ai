import React from "react";

export default function Home() {
    return (
        <div>
            <h1 className="text-center pt-4 text-5xl font-bold tracking-wide text-[#333333] dark:text-[#f2f2f2]">
                JobWriteAI
            </h1>
            <div className="pt-10 lg:pt-5 text-justify">
                <p className="text-2xl md:text-2xl font-semibold text-[#222222] dark:text-[#e5e5e5]">
                    Welcome to <span className="font-extrabold">JobWriteAI</span>, your ultimate solution for creating professional and personalized cover letters in minutes. <span className="hidden md:inline">Say goodbye to the hassle of writing cover letters from scratch and let our cutting-edge AI technology help you land your dream job. With GPT-3 at the forefront of our platform, we generate cover letters that are tailored to your specific experience and qualifications. Simply input the required information, and our AI will do the rest. Start crafting your winning cover letter now!</span>
                </p>
            </div>
        </div>
    )
}