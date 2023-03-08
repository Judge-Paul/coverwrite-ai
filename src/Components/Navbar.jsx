import React, { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex justify-between items-center py-4 bg-gray-100 dark:bg-gray-800">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        JobWriteAi
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="flex justify-between rounded-full p-3 w-[130px] bg-gray-500 box-border"
          onClick={toggleDarkMode}
        >
            <BsSunFill color="#FFFF00" size="25px" className="dark:invisible" />
            {<BsMoonFill size="25px" className="invisible dark:visible" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
