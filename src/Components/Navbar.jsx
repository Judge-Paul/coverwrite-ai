import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";

function Navbar() {
  const [dark, setDark] = useState(false)
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark")
    setDark(prevTheme => !prevTheme)
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
            {dark && <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <BsMoonFill size="20px" className="mt-1 ml-2" />
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaCircle size="30px" className="text-white dark:text-black"/>
                </motion.div>
            </>}
            {!dark && <>
              <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaCircle size="30px" className="text-white dark:text-black"/>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <BsSunFill color="#FFFF00" size="22px" className="mr-2 mt-1" />
                </motion.div>
            </>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
