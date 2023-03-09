import React, { useState } from "react";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

export default function App() {
  // const [theme, setTheme] = useState()
  return (
    <div className="bg-[#ffffff] dark:bg-gray-800 h-full px-4 sm:px-8 md:px-20 lg:px-24 xl:px-52">
      <Navbar />  
      <Home />
      <Form />
    </div>
  )
}