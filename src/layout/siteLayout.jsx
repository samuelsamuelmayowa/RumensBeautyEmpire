import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BgChange from "../components/bgChange";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";

const containerVariant = {
  initial: { opacity: 0, y: -30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      stiffness: 50,
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { when: "beforeChildren", duration: 0.3 },
  },
};

const SiteLayout = () => {
  const { pathname } = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const text = "Crafting cinematic tales that inspire";
  const words = text.split("");

  return (
    <div className="relative">
      <Navbar />
      <BgChange />

      {/* Page Content Wrapper */}
      <motion.div
        key={pathname} // Ensures re-animation when navigating
        initial="initial"
        animate="animate"
        exit="exit"
        variants={containerVariant}
        className="w-full flex flex-col items-center text-white text-center"
      >
        {pathname === "/" && (
          <div className="flex flex-col gap-5 min-h-screen justify-center">
            <motion.h1 className="md:text-5xl text-2xl font-medium tracking-wide md:block hidden">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`cursor-pointer ${
                    hoveredIndex === index ? "hovered" : ""
                  } ${
                    hoveredIndex !== null &&
                    (index === hoveredIndex - 1 || index === hoveredIndex + 1)
                      ? "adjacent"
                      : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {word === " " ? `\u00A0` : word}
                </span>
              ))}
            </motion.h1>
            <motion.h1 className="md:text-5xl text-2xl font-medium tracking-wide md:hidden block">
              Crafting cinematic tales that inspire
            </motion.h1>
            <Link to="/gallery#works">
              <motion.button className="border-2 border-button bg-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6">
                SEE MY WORKS
              </motion.button>
            </Link>
          </div>
        )}
        {pathname === "/gallery" && (
          <div className="flex flex-col gap-5 min-h-screen justify-center">
            <motion.h1 className="md:text-4xl text-3xl font-medium">
              Gallery
            </motion.h1>
            <motion.p className="cursive text-2xl md:text-5xl">
              Your event through my lens
            </motion.p>
          </div>
        )}
        {pathname === "/contact" && (
          <div className="flex flex-col gap-5 min-h-screen justify-center">
            <motion.h1 className="md:text-4xl text-3xl font-medium">
              Contact Me
            </motion.h1>
            <motion.p className="cursive text-2xl md:text-5xl">
              Dreams become reality with me
            </motion.p>
          </div>
        )}
        {pathname === "/about" && (
          <div className="flex flex-col gap-5 min-h-screen justify-center">
            <motion.h1 className="md:text-4xl text-3xl font-medium">
              About Me
            </motion.h1>
            <motion.p className="cursive text-2xl md:text-5xl">
              Find out what makes me tick
            </motion.p>
          </div>
        )}
      </motion.div>

      {/* Outlet for Dynamic Page Content */}
      {/* <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full min-h-screen"
      >
        <Outlet />
      </motion.div>
      */}
      <Footer />
    </div>
  );
};

export default SiteLayout;

// import { useState } from "react"
// import Navbar from "../components/navbar"
// import Footer from "../components/footer"
// import BgChange from "../components/bgChange"
// import { motion } from "framer-motion"
// import { Link, Outlet, useLocation } from "react-router-dom"

// const containerVariant = {
//   initial:{
//     opacity: 0, y: -30
//   },
//   animate:{
//     opacity: 1, y: 0,
//     transition:{
//       type: "spring", duration: 0.3, stiffness: 50, dampness: 10 , delayChildren: 0.4, staggerChildren: 0.2
//     }
//   },
//   exit:{
//     opacity: 0, y: -30,
//     transition:{
//       when:"beforeChildren", duration: 0.3
//     }
//   }
// }

// const mainChildVariant = {
//   initial: {
//     scale: 0,
//   },
//   animate: {
//     scale: 1
//   },
//   exit: {
//     scale: 0,
//   }
// }

// const subChildVariant = {
//   initial:{
//     opacity: 0,
//     y: -30
//   },
//   animate:{
//     opacity: 1,
//     y: 0
//   },
//   exit: {
//     opacity: 0,
//     y: -30
//   }
// }

// const SiteLayout = () => {
//   const { pathname } = useLocation()
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };
//   const text = "Crafting cinematic tales that inspire";
//   const words = text.split("");

//   return (
//     <div className="">
//       <Navbar />
//       <div className="home relative bg-cover min-h-screen flex justify-center items-center overflow-hidden">
//         <BgChange />
//         {pathname === "/" && (
//           <motion.div variants={containerVariant} initial="initial" animate="animate" exit="exit" className="relative z-10 text-white text-center flex flex-col gap-5">
//             <motion.h1 variants={mainChildVariant} className="origin-top md:text-5xl text-2xl font-medium tracking-wide md:block hidden roboto">
//               {words.map((word, index) => (
//                 <span
//                   key={index}
//                   className={`word cursor-pointer ${hoveredIndex === index ? 'hovered' : ''
//                     } ${hoveredIndex !== null &&
//                       (index === hoveredIndex - 1 || index === hoveredIndex + 1)
//                       ? 'adjacent'
//                       : ''
//                     }`}
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {word === ' ' ? `\u00A0` : word}
//                 </span>
//               ))}
//             </motion.h1>
//             <motion.h1 variants={mainChildVariant} className="origin-top md:text-5xl text-2xl font-medium tracking-wide md:hidden block">Crafting cinematic tales that inspire</motion.h1>
//             <Link to="/gallery#works">
//               <motion.button variants={subChildVariant} className="border-2 border-button bg-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6">SEE MY WORKS</motion.button>
//             </Link>
//           </motion.div>
//         )}
//         {pathname === "/gallery" && (
//           <motion.div variants={containerVariant} initial="initial" animate="animate" exit="exit" className="relative z-10 text-white text-center flex flex-col gap-5">
//             <motion.h1 variants={mainChildVariant} className="origin-top md:text-4xl text-3xl font-medium">Gallery</motion.h1>
//             <motion.p variants={subChildVariant} className='cursive text-2xl md:text-5xl'>Your event through my lens</motion.p>
//           </motion.div>
//         )}
//         {pathname === "/contact" && (
//           <motion.div variants={containerVariant} initial="initial" animate="animate" exit="exit" className="relative z-10 text-white text-center flex flex-col gap-5">
//             <motion.h1 variants={mainChildVariant} className="origin-top md:text-4xl text-3xl font-medium">Contact Me</motion.h1>
//             <motion.p variants={subChildVariant} className='cursive text-2xl md:text-5xl'>Dreams become reality with me</motion.p>
//           </motion.div>
//         )}
//         {pathname === "/about" && (
//           <motion.div variants={containerVariant} initial="initial" animate="animate" exit="exit" className="relative z-10 text-white text-center flex flex-col gap-5">
//             <motion.h1 variants={mainChildVariant} className="origin-top md:text-4xl text-3xl font-medium">About Me</motion.h1>
//             <motion.p variants={subChildVariant} className='cursive text-2xl md:text-5xl'>Find out what makes me ticks</motion.p>
//           </motion.div>
//         )}
//       </div>
//       <Outlet />
//       <Footer />
//     </div>
//   )
// }

// export default SiteLayout
