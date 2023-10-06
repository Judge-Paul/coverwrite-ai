import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero.webp";
import Helmet from "react-helmet";

export default function Home() {
  return (
    <main className="bg-[#9fcaff] font-workSans px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20">
      <Helmet>
        <title>CoverWriteAI - Home</title>
      </Helmet>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:mt-16 lg:pr-20">
          <h2 className="font-bold text-3xl md:text-6xl text-[#004fb6]">
            <span className="md:block">Create an </span>
            <span className="md:block">Amazing </span>
            <span className="md:block">Cover Letter </span>
            <span>Effortlessly</span>
          </h2>
          <img
            src={Hero}
            alt="Hero for homepage"
            className="mt-12 w-full md:w-1/2 block md:hidden"
          />
          <p className="text-[#3a4688] font-semibold mt-8 text-lg">
            Paste the text from the job posting into our tool. Our AI analyzes
            the requirements and crafts a cover letter that sells you as the
            ideal candidate.
          </p>
          <Link
            to="/create"
            className="text-[#fcfcd4] bg-[#004fb6] hover:bg-[#003d99] active:bg-[#003c99] font-bold px-20 py-3 rounded-full mt-8 inline-block w-full md:w-max text-center"
          >
            Get Started
          </Link>
        </div>
        <img
          src={Hero}
          alt="Hero for homepage"
          className="w-full md:w-1/2 hidden md:block"
        />
      </div>
    </main>
  );
}
