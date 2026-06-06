import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoLink } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Mobilenav from "./mobilenav";
import logo from "../assets/images/logo2.png";
import logo2 from "../assets/images/logo-gold.png";
import { ImYoutube } from "react-icons/im";

const Navbar = () => {
  const [bg, handleBg] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      handleBg(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => setToggleNav((prev) => !prev);

  return (
    <header
      className={`z-[999999999999999999999] w-full fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-20 transition-all duration-500 ${bg ? "bg-gradient-to-b from-black to-transparent dark:bg-gradient-to-b bg-opacity-50 dark:bg-opacity-50" : "bg-gradient-to-b from-black to-transparent dark:bg-gradient-to-b bg-opacity-50 dark:bg-opacity-50"}`}>
      <div className="flex-1">
        <div className="w-fit">
          <Link to="/" className="">
            <motion.img
              src={bg ? logo2 : logo}
              alt="logo"
              className="size-20 object-contain "
              initial={{ rotateY: 0 }}
              animate={{ rotateY: bg ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ perspective: "1000px" }}
            />
          </Link>
        </div>
      </div>

      <nav className="hidden md:flex justify-center flex-1">
        <ul
          className={`*:font-quicksand flex items-center gap-8 text-base font-bold transition-colors duration-500 ${bg ? "text-black" : "text-white"
            }`}
        >
          <li className="hover:opacity-70 duration-300">
            <NavLink className={({ isActive }) => isActive ? "text-text_gold font-quicksand" : "text-white font-quicksand"} to="/">Home</NavLink>
          </li>
          <li className="hover:opacity-70 duration-300">
            <NavLink className={({ isActive }) => isActive ? "text-text_gold font-quicksand" : "text-white font-quicksand"} to="/about">About</NavLink>
          </li>
          <li className="hover:opacity-70 duration-300">
            <NavLink className={({ isActive }) => isActive ? "text-text_gold font-quicksand" : "text-white font-quicksand"} to="/gallery">Films</NavLink>
          </li>
          <li className="hover:opacity-70 duration-300">
            <NavLink className={({ isActive }) => isActive ? "text-text_gold font-quicksand" : "text-white font-quicksand"} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex flex-1 text-2xl items-center gap-7 text-white justify-end">
        <div className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200">
          <FaInstagram href="https://www.instagram.com/bamsvisuals/" />
        </div>
        <div className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200">
          <MdMailOutline  href="https://www.youtube.com/@BamsVisuals"/>
        </div>
        <div className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200">
          {/* <IoLink /> */}
          <ImYoutube href="https://www.youtube.com/@BamsVisuals"/>
        </div>
        <button className="duration-200 text-sm border-2 border-white p-3 px-6 hover:bg-white text-white hover:text-black">
         <a href="/contact"> Hire Us</a>
        </button>
      </div>

      {/* Mobile Navigation Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ rotate: 90 }}
        onClick={handleNav}
        className="md:hidden block relative z-10"
      >
        {toggleNav ? (
          <FaXmark size={24} className={bg ? "text-black" : "text-white"} />
        ) : (
          <FaBars size={24} className={bg ? "text-black" : "text-white"} />
        )}
      </motion.div>

      <AnimatePresence>
        {toggleNav && <Mobilenav handleNav={handleNav} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
