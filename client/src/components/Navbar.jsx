import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const navigate = useNavigate();
  const links = [
    { route: "/", name: "Home" },
    { route: "/create", name: "Try It" },
    { route: "/examples", name: "Examples" },
    { route: "/about", name: "About" },
  ];
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [navigate]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    <>
      <nav
        className={`flex items-center font-workSans justify-between w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 ${
          isScrolled
            ? "bg-white/50 backdrop-blur-md fixed top-0 z-10"
            : "bg-[#9fcaff]"
        }`}
      >
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 md:h-12" />
        </Link>
        <div className="hidden md:flex mt-2 text-[#3a4688] font-bold">
          {links.map((link) => (
            <Link
              to={link.route}
              className="mx-4 lg:mx-7 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden" onClick={() => setIsOpen(true)}>
          <IoMenu size={37} className="text-[#004fb6] cursor-pointer" />
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navAnimation}
          className="md:hidden top-0 h-screen font-workSans w-screen fixed bg-[#9fcaff] text-[#3a4688] z-[9999] flex justify-center items-center"
        >
          <div className="font-bold text-center">
            {links.map((link) => (
              <Link
                to={link.route}
                className="block my-3 text-lg hover:text-[#29306f]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-5 flex mx-auto items-center justify-center w-12 h-12 rounded-full bg-[#3a4688] hover:bg-[#29306f]"
            >
              <IoClose size={30} className="text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
