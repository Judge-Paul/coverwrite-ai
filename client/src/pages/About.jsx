import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Hero from "../assets/hero.webp";

const About = () => {
    return (
        <main className="bg-[#9fcaff] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
            <Helmet>
                <title>CoverWriteAI - About</title>
            </Helmet>
            <div>
                <div className="flex flex-col md:flex-row mb-10">
                    <div className="w-full md:w-1/2 md:mt-16 lg:pr-20">
                        <h2 className="font-bold text-2xl md:text-4xl text-[#004fb6]">
                            <span className="md:block">
                                Empower Your Applications
                            </span>
                            <span className="md:block">With Advanced </span>
                            <span className="md:block">
                                AI-Powered Cover Letters
                            </span>
                        </h2>

                        <p className="text-[#3a4688] font-semibold mt-8 text-lg">
                            At CoverWriteAI, we believe that the first
                            impression is everything, especially when it comes
                            to job applications. Our state-of-the-art AI
                            analyzes job postings and crafts compelling cover
                            letters that portray you as the ideal candidate.
                        </p>
                    </div>
                    <img
                        src={Hero}
                        alt="Hero for homepage"
                        className="w-full md:w-1/2 hidden md:block"
                    />
                </div>

                <div className="mt-14 ">
                    <div className=" w-full md:w-3/4 mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-4xl text-[#004fb6] font-medium">
                                How to Use CoverWriteAI
                            </h2>

                            <p className="text-[#3a4688] font-semibold mt-8 text-lg">
                                Join countless professionals who have elevated
                                their job applications with CoverWriteAI. Take
                                the next step in your career journey
                                effortlessly and effectively.
                            </p>
                        </div>

                        <div className="flex gap-y-8 md:gap-x-11 items-center mt-12 flex-wrap flex-col md:flex-row justify-center">
                            <div className="bg-white rounded-lg border p-6  w-52 md:h-[25vh]">
                                <p className="text-[#004fb6] font-medium text-sm mb-2">
                                    Copy &amp; Paste
                                </p>
                                <span className="text-[#3a4688] text-xs">
                                    Begin by copying the text from the job
                                    posting you're interested in.
                                </span>
                            </div>
                            <div className="bg-white rounded-lg border p-6  w-52 md:h-[25vh]">
                                <p className="text-[#004fb6] font-medium text-sm mb-2">
                                    Input into CoverWriteAI
                                </p>
                                <span className="text-[#3a4688] text-xs">
                                    Navigate to our 'Try It' page and paste the
                                    text into the designated area.
                                </span>
                            </div>
                            <div className="bg-white rounded-lg border p-6  w-52 md:h-[25vh]">
                                <p className="text-[#004fb6] font-medium text-sm mb-2">
                                    Instant Creation
                                </p>
                                <span className="text-[#3a4688] text-xs">
                                    Hit 'Submit' and let our AI work its magic.
                                    Within moments, you'll receive a
                                    professionally crafted cover letter ready
                                    for submission.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
