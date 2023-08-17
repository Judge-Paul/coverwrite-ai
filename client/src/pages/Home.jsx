import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#9fcaff] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20">
      <div className="flex-col md:flex-row">
        <h2 className="w-full md:w-1/2 font-bold text-4xl md:text-6xl text-[#004fb6]">
          <span className="md:block">Create an </span>
          <span className="md:block">Amazing </span>
          <span className="md:block">Cover Letter </span>
          <span>Effortlessly</span>
        </h2>
        <img src="" alt="" width="" className="w-full md:w-1/2" />
      </div>
      <div className="md:w-1/2 mt-7">
        <p className="text-[#E6F4F1] font-semibold">
          Paste the text from the job posting into our tool. Our AI analyzes the
          requirements and crafts a cover letter that sells you as the ideal
          candidate.
        </p>
        <Link
          to="/form"
          className="text-[#004fb6] bg-[#fcfcd4] font-bold px-20 py-3 rounded-md mt-5 inline-block w-full md:w-max text-center"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
