import React from "react";
import Home from "./Components/Home";
import Form from "./Components/Form";

export default function App() {
  return (
    <div className="bg-[#D3D3D3] h-full px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36">
      <Home />
      <Form />
    </div>
  )
}