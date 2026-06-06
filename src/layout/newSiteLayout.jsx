import { useState } from "react";
import Navbar from "../components/navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Footer from "../components/footer";
import BgChange from "../components/bgChange";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/home.css";
import Gallery from "../pages/gallery";
import Home from "../pages/home";
import Background from "../pages/backgroundimage";
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

const NewSiteLayout = () => {
  const { pathname } = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const text = "Crafting cinematic tales that inspire";
  const words = text.split("");
  return (
    <>
      <div className="relative">
        <Navbar />
        <BgChange />
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
              <motion.h1 className="md:text-5xl text-2xl font-medium tracking-wide md:hidden block font-poppins">
                Crafting cinematic tales that inspire
              </motion.h1>
              <Link to="/gallery#works">
                <motion.button className="border-2 border-button bg-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 font-poppins">
                  SEE MY WORKS
                </motion.button>
              </Link>
            </div>
          )}

          {/* {pathname === "/gallery" && (
            <div className="flex flex-col gap-5 min-h-screen justify-center">
              <motion.h1 className="md:text-4xl text-3xl font-medium">
                Gallery
              </motion.h1>
              <motion.p className="cursive text-2xl md:text-5xl">
                Your event through my lens
              </motion.p>
            </div>
          )} */}
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
      </div>
      {/* <Home/> */}

      <div className="testimonial md:py-28 py-10">
        <div className="relative z-10 bg-[#F6E7BE] lg:w-[700px] w-[90%] mx-auto cursor-grab">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              perMove: 1,
              autoplay: true,
              arrows: false,
              speed: 3000,
              interval: 4000,
              drag: "free",
              snap: true,
            }}
          >
            <SplideSlide>
              <div className="text-center px-6 py-10 md:px-10 md:py-24 flex flex-col gap-4 justify-between">
                <p className="md:text-base text-sm font-light md:leading-[1.5]">
                  Absolutely THE BEST videographer out there!!! Bams captured
                  our special day with such grace and elegance. His talent is
                  unmatched and his kindness is contagious! I can&apos;t
                  recommend him enough - he&apos;s a gem! We received our sneak
                  peek within a week and I&apos;m OBSESSED with the footage.
                  Can&apos;t wait to see the final product.
                </p>
                <h3 className="cursive text-3xl md:text-5xl">
                  Adetola & Henry
                </h3>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="text-center px-6 py-10 md:px-10 md:py-24 flex flex-col gap-4 justify-between">
                <p className="md:text-base text-sm font-light md:leading-[1.5]">
                  Working with Bams was an absolute dream! He captured our love
                  story with such passion and creativity. The final film is a
                  masterpiece! I&apos;ve never seen anything so beautiful. Bams
                  is a true artist and I&apos;m so grateful to have had him as a
                  part of our special day. Highly recommend him to anyone
                  looking for a talented and dedicated videographer.
                </p>
                <h3 className="cursive text-3xl md:text-5xl">Ari & Micheal</h3>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="text-center px-6 py-10 md:px-10 md:py-24 flex flex-col gap-4 justify-between">
                <p className="md:text-base text-sm font-light md:leading-[1.5]">
                  Where do I even begin? Bams is a rockstar videographer who
                  went above and beyond to capture our wedding day. His energy
                  is infectious and talent undeniable. We just received our
                  highlight reel and it&apos;s pure magic! I&apos;ve watched it
                  a million times already. If you&apos;re looking for a
                  videographer who will deliver exceptional quality and service,
                  look no further!
                </p>
                <h3 className="cursive text-3xl md:text-5xl">Simone & Deji</h3>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div>
        <div>
          {/* <Background/> */}
        </div>
     
      </div>

      {/* <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full min-h-screen"
      >
        <Outlet />
        </motion.div> */}
    <Outlet />
        <Footer />
    </>
  );
};

export default NewSiteLayout;
