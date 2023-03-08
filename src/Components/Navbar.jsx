import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

function Navbar() {

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark")
  };

  return (
    <nav className="flex justify-between items-center py-4">
      <div className="text-4xl font-bold text-gray-800 dark:text-white">
        JobWriteAi
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="flex justify-between p-1 rounded-full w-[120px] bg-orange-500 dark:bg-gray-100 box-border"
          onClick={toggleDarkMode}
        >
            {<>
                <BsSunFill color="#FFFF00" size="20px" className="block dark:hidden my-auto ml-1" />
                <FaCircle size="30px" className="text-white dark:text-black"/>
            </>}
            {<BsMoonFill size="20px" className="hidden dark:flex my-auto mr-1" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
