import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Mobilenav from "./mobilenav";
import log3 from "../assets/images/rument.jpeg";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => setBg(window.scrollY > 80);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => setToggleNav((prev) => !prev);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    // { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[999999] w-full transition-all duration-500 ${
        bg
          ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          : "bg-white/95 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex w-[200px] items-center justify-start">
            <Link to="/" className="flex items-center gap-3">
              <motion.img
                src={log3}
                alt="Rumen Signature Beauty Empire Logo"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-text_gold shadow-[0_0_20px_rgba(212,175,55,0.3)] md:h-16 md:w-16"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: bg ? 360 : 0 }}
                transition={{ duration: 0.6 }}
              />

              <div className="hidden xl:block">
                <h1 className="font-quicksand text-xs font-extrabold uppercase tracking-[0.2em] text-black">
                  Rumen
                </h1>
                <p className="font-quicksand text-[10px] font-bold uppercase tracking-[0.18em] text-text_gold">
                  Beauty Empire
                </p>
              </div>
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="hidden flex-1 justify-center md:flex">
            <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative font-quicksand text-[12px] font-extrabold uppercase tracking-[0.12em] transition-all duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-text_gold after:transition-all after:duration-300 hover:text-text_gold hover:after:w-full ${
                        isActive
                          ? "text-text_gold after:w-full"
                          : "text-black"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side */}
          <div className="hidden w-[230px] items-center justify-end gap-3 md:flex">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-content-center rounded-full border border-black/20 text-lg text-black transition-all duration-300 hover:border-text_gold hover:bg-text_gold hover:text-black"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:info@rumensbeautyempire.com"
              className="grid h-9 w-9 place-content-center rounded-full border border-black/20 text-lg text-black transition-all duration-300 hover:border-text_gold hover:bg-text_gold hover:text-black"
            >
              <MdMailOutline />
            </a>

            <Link
              to="/contact"
              className="rounded-full bg-text_gold px-5 py-2.5 font-quicksand text-[12px] font-extrabold uppercase tracking-[0.12em] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-black hover:text-white"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 90 }}
            onClick={handleNav}
            className="relative z-10 grid h-11 w-11 place-content-center rounded-full border border-black/20 text-black md:hidden"
          >
            {toggleNav ? <FaXmark size={21} /> : <FaBars size={21} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {toggleNav && <Mobilenav handleNav={handleNav} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

// import { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { FaBars, FaXmark } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { MdMailOutline } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";
// import Mobilenav from "./mobilenav";
// import log3 from "../assets/images/rument.jpeg";

// const Navbar = () => {
//   const [bg, setBg] = useState(false);
//   const [toggleNav, setToggleNav] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setBg(window.scrollY > 80);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNav = () => setToggleNav((prev) => !prev);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-[999999] w-full transition-all duration-500 ${
//         // bg
//         //   ? "bg-black/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
//         //   : "bg-gradient-to-b from-black/90 via-black/50 to-transparent"
//         bg
//   ? "bg-white shadow-lg"
//   : "bg-white/95 backdrop-blur-xl"
//       }`}
//     >
//       <div className="mx-auto max-w-[1700px] px-5 md:px-10 lg:px-20">
//         <div className="flex h-24 items-center justify-between">
//           {/* Logo Side */}
//           <div className="flex w-[260px] items-center justify-start">
//             <Link to="/" className="flex items-center gap-4">
//               <motion.img
//                 src={log3}
//                 alt="Rumen Signature Beauty Empire Logo"
//                 className="h-16 w-16 rounded-full object-cover ring-2 ring-text_gold shadow-[0_0_25px_rgba(212,175,55,0.35)] md:h-20 md:w-20"
//                 initial={{ rotateY: 0 }}
//                 animate={{ rotateY: bg ? 360 : 0 }}
//                 transition={{ duration: 0.6 }}
//               />

//               <div className="hidden xl:block">
//                 <h1 className="font-quicksand text-sm font-extrabold uppercase tracking-[0.25em] text-white">
//                   Rumen
//                 </h1>
//                 <p className="font-quicksand text-xs font-bold uppercase tracking-[0.2em] text-text_gold">
//                   Beauty Empire
//                 </p>
//               </div>
//             </Link>
//           </div>

//           {/* Center Links */}
//           <nav className="hidden flex-1 justify-center md:flex">
//             <ul className="flex items-center gap-12 lg:gap-16 xl:gap-24">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <NavLink
//                     to={link.path}
//                     className={({ isActive }) =>
//                       `relative font-quicksand text-sm font-extrabold uppercase tracking-[0.18em] transition-all duration-300 after:absolute after:-bottom-3 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-text_gold after:transition-all after:duration-300 hover:text-text_gold hover:after:w-full ${
//                         isActive
//                           ? "text-text_gold after:w-full"
//                           : "text-black"
//                       }`
//                     }
//                   >
//                     {link.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Right Side */}
//           <div className="hidden w-[300px] items-center justify-end gap-4 md:flex">
//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="grid h-11 w-11 place-content-center rounded-full border border-white/40 text-xl text-white transition-all duration-300 hover:border-text_gold hover:bg-text_gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.45)]"
//             >
//               <FaInstagram />
//             </a>

//             <a
//               href="mailto:info@rumensbeautyempire.com"
//               className="grid h-11 w-11 place-content-center rounded-full border border-white/40 text-xl text-white transition-all duration-300 hover:border-text_gold hover:bg-text_gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.45)]"
//             >
//               <MdMailOutline />
//             </a>

//             <Link
//               to="/contact"
//               className="rounded-full bg-text_gold px-8 py-3 font-quicksand text-sm font-extrabold uppercase tracking-[0.18em] text-black shadow-[0_0_30px_rgba(212,175,55,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ rotate: 90 }}
//             onClick={handleNav}
//             className="relative z-10 grid h-12 w-12 place-content-center rounded-full border border-white/40 text-white md:hidden"
//           >
//             {toggleNav ? <FaXmark size={22} /> : <FaBars size={22} />}
//           </motion.button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {toggleNav && <Mobilenav handleNav={handleNav} />}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;
// // import { useState, useEffect } from "react";
// // import { NavLink, Link } from "react-router-dom";
// // import { FaBars, FaXmark } from "react-icons/fa6";
// // import { FaInstagram } from "react-icons/fa";
// // import { MdMailOutline } from "react-icons/md";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Mobilenav from "./mobilenav";
// // import logo from "../assets/images/logo2.png";
// // import logo2 from "../assets/images/logo-gold.png";
// // import log3 from "../assets/images/rument.jpeg"
// // const Navbar = () => {
// //   const [bg, setBg] = useState(false);
// //   const [toggleNav, setToggleNav] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setBg(window.scrollY > 100);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const handleNav = () => setToggleNav((prev) => !prev);

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "About", path: "/about" },
// //     { name: "Services", path: "/services" },
// //     { name: "Gallery", path: "/gallery" },
// //     { name: "Contact", path: "/contact" },
// //   ];

// //   return (
// //     <header
// //       className={`z-[999999] w-full fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-20 py-2 transition-all duration-500 ${
// //         bg
// //           ? "bg-black/80 backdrop-blur-md shadow-lg"
// //           : "bg-gradient-to-b from-black/80 to-transparent"
// //       }`}
// //     >
// //       <div className="flex-1">
// //         <Link to="/" className="w-fit block">
// //           <motion.img
// //             src={bg ?  log3 :  log3}
// //             alt="Rumen Signature Beauty Empire Logo"
// //             className="size-20 object-contain"
// //             initial={{ rotateY: 0 }}
// //             animate={{ rotateY: bg ? 360 : 0 }}
// //             transition={{ duration: 0.5 }}
// //             style={{ perspective: "1000px" }}
// //           />
// //         </Link>
// //       </div>

// //       <nav className="hidden md:flex justify-center flex-1">
// //         <ul className="font-quicksand flex items-center gap-8 text-base font-bold">
// //           {navLinks.map((link) => (
// //             <li key={link.name} className="hover:opacity-70 duration-300">
// //               <NavLink
// //                 to={link.path}
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "text-text_gold font-quicksand"
// //                     : "text-white font-quicksand"
// //                 }
// //               >
// //                 {link.name}
// //               </NavLink>
// //             </li>
// //           ))}
// //         </ul>
// //       </nav>

// //       <div className="hidden md:flex flex-1 text-2xl items-center gap-5 text-white justify-end">
// //         <a
// //           href="https://www.instagram.com/"
// //           target="_blank"
// //           rel="noreferrer"
// //           className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200"
// //         >
// //           <FaInstagram />
// //         </a>

// //         <a
// //           href="mailto:info@rumensbeautyempire.com"
// //           className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200"
// //         >
// //           <MdMailOutline />
// //         </a>

// //         <Link
// //           to="/contact"
// //           className="duration-200 text-sm border-2 border-white p-3 px-6 hover:bg-white text-white hover:text-black font-quicksand font-bold"
// //         >
// //           Book Now
// //         </Link>
// //       </div>

// //       <motion.div
// //         whileHover={{ scale: 1.1 }}
// //         whileTap={{ rotate: 90 }}
// //         onClick={handleNav}
// //         className="md:hidden block relative z-10 cursor-pointer"
// //       >
// //         {toggleNav ? (
// //           <FaXmark size={24} className="text-white" />
// //         ) : (
// //           <FaBars size={24} className="text-white" />
// //         )}
// //       </motion.div>

// //       <AnimatePresence>
// //         {toggleNav && <Mobilenav handleNav={handleNav} />}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Navbar;


// // // import { useState, useEffect } from "react";
// // // import { NavLink, Link } from "react-router-dom";
// // // import { FaBars, FaXmark } from "react-icons/fa6";
// // // import { FaInstagram } from "react-icons/fa";
// // // import { MdMailOutline } from "react-icons/md";
// // // import { IoLink } from "react-icons/io5";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import Mobilenav from "./mobilenav";
// // // import logo from "../assets/images/logo2.png";
// // // import logo2 from "../assets/images/logo-gold.png";
// // // import { ImYoutube } from "react-icons/im";

// // // const Navbar = () => {
// // //   const [bg, handleBg] = useState(false);
// // //   const [toggleNav, setToggleNav] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       handleBg(window.scrollY > 100);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const handleNav = () => setToggleNav((prev) => !prev);

// // //   return (
// // //     <header
// // //       className={`z-[999999999999999999999] w-full fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-20 transition-all duration-500 ${bg ? "bg-gradient-to-b from-black to-transparent dark:bg-gradient-to-b bg-opacity-50 dark:bg-opacity-50" : "bg-gradient-to-b from-black to-transparent dark:bg-gradient-to-b bg-opacity-50 dark:bg-opacity-50"}`}>
// // //       <div className="flex-1">
// // //         <div className="w-fit">
// // //           <Link to="/" className="">
// // //             <motion.img
// // //               src={bg ? logo2 : logo}
// // //               alt="logo"
// // //               className="size-20 object-contain "
// // //               initial={{ rotateY: 0 }}
// // //               animate={{ rotateY: bg ? 360 : 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               style={{ perspective: "1000px" }}
// // //             />
// // //           </Link>
// // //         </div>
// // //       </div>

// // //       <nav className="hidden md:flex justify-center flex-1">
// // //         <ul
// // //           className={`*:font-quicksand flex items-center gap-8 text-base font-bold transition-colors duration-500 ${bg ? "text-black" : "text-white"
// // //             }`}
// // //         >
// // //           <li className="hover:opacity-70 duration-300">
// // //             <NavLink className={({ isActive }) => isActive ? "text-text_gold font-quicksand" : "text-white font-quicksand"} to="/">Home</NavLink>
// // //           </li>
// // //           <li className="hover:opacity-70 duration-300">
// // //             <NavLink className={({ isActive }) => isActive ? "text-text_gold font-quicksand" : "text-white font-quicksand"} to="/about">About ABOUT </NavLink>
// // //           </li>
// // //           <li className="hover:opacity-70 duration-300">
// // //             <NavLink className={({ isActive }) => isActive ? "text-text_gold font-quicksand" : "text-white font-quicksand"} to="/gallery">Gallery</NavLink>
// // //           </li>
// // //           <li className="hover:opacity-70 duration-300">
// // //             <NavLink className={({ isActive }) => isActive ? "text-text_gold font-quicksand" : "text-white font-quicksand"} to="/contact">Contact</NavLink>
// // //           </li>
// // //         </ul>
// // //       </nav>

// // //       <div className="hidden md:flex flex-1 text-2xl items-center gap-7 text-white justify-end">
// // //         <div className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200">
// // //           <FaInstagram href="https://www.instagram.com/bamsvisuals/" />
// // //         </div>
// // //         <div className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200">
// // //           <MdMailOutline  href="https://www.youtube.com/@BamsVisuals"/>
// // //         </div>
// // //         <div className="p-1.5 grid place-content-center rounded-full border-2 border-white hover:bg-white hover:text-black duration-200">
// // //           {/* <IoLink /> */}
// // //           <ImYoutube href="https://www.youtube.com/@BamsVisuals"/>
// // //         </div>
// // //         <button className="duration-200 text-sm border-2 border-white p-3 px-6 hover:bg-white text-white hover:text-black">
// // //          <a href="/contact"> Hire Us</a>
// // //         </button>
// // //       </div>

// // //       {/* Mobile Navigation Button */}
// // //       <motion.div
// // //         whileHover={{ scale: 1.1 }}
// // //         whileTap={{ rotate: 90 }}
// // //         onClick={handleNav}
// // //         className="md:hidden block relative z-10"
// // //       >
// // //         {toggleNav ? (
// // //           <FaXmark size={24} className={bg ? "text-black" : "text-white"} />
// // //         ) : (
// // //           <FaBars size={24} className={bg ? "text-black" : "text-white"} />
// // //         )}
// // //       </motion.div>

// // //       <AnimatePresence>
// // //         {toggleNav && <Mobilenav handleNav={handleNav} />}
// // //       </AnimatePresence>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;
