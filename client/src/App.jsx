import React, { useState } from "react";
import Home from "./components/Home";
import Form from "./components/Form"
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="transition duration-500 bg-[#ffffff] dark:bg-gray-800 h-full px-4 sm:px-8 md:px-20 lg:px-24 xl:px-52">
      {/* <Navbar />   */}
      {/* <Home /> */}
      <Form />
    </div>
  )
}