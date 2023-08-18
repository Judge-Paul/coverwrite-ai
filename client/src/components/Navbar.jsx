import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between fixed top-0 z-10 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 ${
        isScrolled ? "bg-white/50 backdrop-blur-md" : ""
      }`}
    >
      <div className="text-4xl font-bold text-gray-800 dark:text-white">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>
      <div className="mt-2 text-[#3a4688] font-bold">
        <Link className="mx-7">About</Link>
        <Link className="mx-7">Pricing</Link>
        <Link className="mx-7">Contact</Link>
        <Link className="mx-7">Log In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
