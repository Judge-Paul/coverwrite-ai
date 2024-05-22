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
			<div className="flex justify-center items-center">
				<div className="text-center w-[56rem]">
					<h2 className="font-bold text-3xl md:text-7xl text-[#004fb6]">
						Create an Amazing Cover Letter Effortlessly
					</h2>
					<p className="text-[#3a4688] font-semibold mt-12 text-sm sm:text-lg">
						Simply paste the text from the job posting into our free tool, and
						add some details about yourself and watch our AI analyze the
						requirement and carefully select information about you and craft the
						perfect cover letter that sells you as the ideal candidate.
					</p>
					<Link
						to="/create"
						className="text-[#ffffff] bg-[#004fb6] hover:bg-[#003d99] active:bg-[#003c99] font-bold sm:px-28 py-4 rounded-full mt-12 inline-block w-full md:w-max text-center text-lg sm:text-2xl"
					>
						Get Started
					</Link>
				</div>
			</div>
		</main>
	);
}
