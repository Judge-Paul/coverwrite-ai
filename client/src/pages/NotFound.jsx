import React from "react";
import Image from "../assets/sad-robot.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <main className="bg-[#9fcaff] font-workSans min-h-[80vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-28 pb-10 flex items-center justify-center">
      <Helmet>
        <title>CoverWriteAI - 404</title>
      </Helmet>
      <div className="block text-[#004fb6]">
        <img src={Image} alt="Sad Robot" className="w-80 mx-auto md:w-max" />
        <div className="text-center">
          <h4 className="text-xl md:text-3xl font-black">
            The page you're looking for does not exist.
          </h4>
          <p className="text-lg md:text-xl font-bold mt-3">
            Navigate to the{" "}
            <Link
              to="/"
              className="underline text-blue-900 hover:text-blue-600"
            >
              homepage
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
