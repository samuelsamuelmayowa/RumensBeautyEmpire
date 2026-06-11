import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "./pageHeader";

import hero1 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.23 PM (3).jpeg";
import hero2 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.21 PM (4).jpeg";
import hero3 from "../assets/images/main/wigone.jpeg";
import hero4 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.20 PM.jpeg";

const BgChange = () => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(0);

  const images = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="Rumen Signature Beauty Empire hairstyle"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/55 md:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 w-full px-5 text-center sm:px-8">
        {pathname === "/" && (
          <PageHeader
            subtitle="Welcome to"
            title="Rumen Signature Beauty Empire"
            description={
              <>
                Enhancing Beauty. Creating Confidence.
                <br className="hidden sm:block  font-semibold" />
                Premium braids, cornrows, wigs and luxury hair styling.
              </>
            }
            align="center"
          />
        )}

        {pathname === "/about" && <PageHeader title="About Rumen Signature" />}
        {pathname === "/gallery" && <PageHeader title="Hair Gallery" />}
        {pathname === "/services" && <PageHeader title="Our Services" />}
        {pathname === "/contact" && <PageHeader title="Book Appointment" />}
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-text_gold" : "w-2.5 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BgChange;

// import { useLocation } from "react-router-dom";
// import PageHeader from "./pageHeader";
// import heroImage from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.23 PM (3).jpeg";;

// const BgChange = () => {
//   const { pathname } = useLocation();

//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <img
//           src={heroImage}
//           // alt="Luxury hairstyle"
//           className="h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/50" />
//       </div>

//       {pathname === "/" && (
//         <PageHeader
//           subtitle="Welcome to"
//           title="Rumen Signature Beauty Empire"
//           description={
//             <>
//               Enhancing Beauty. Creating Confidence.
//               <br />
//               Premium braids, cornrows, wigs and luxury hair styling.
//             </>
//           }
//           align="center"
//         />
//       )}

//       {pathname === "/about" && <PageHeader title="About Rumen Signature" />}
//       {pathname === "/gallery" && <PageHeader title="Hair Gallery" />}
//       {pathname === "/services" && <PageHeader title="Our Services" />}
//       {pathname === "/contact" && <PageHeader title="Book Appointment" />}
//     </div>
//   );
// };

// export default BgChange;
// // import ReactPlayer from "react-player";
// // import { useLocation } from "react-router-dom";
// // import PageHeader from "./pageHeader";

// // const BgChange = () => {
// //   const { pathname } = useLocation();

// //   return (
// //     <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center z-[9999]">
// //       <div className="absolute top-0 left-0 w-full min-h-screen -z-10">
// //         <div className="absolute top-0 left-0 w-full h-full scale-[4] lg:scale-150">
// //           <ReactPlayer
// //             url="YOUR_BEAUTY_VIDEO_URL_HERE"
// //             playing
// //             muted
// //             loop
// //             width="100%"
// //             height="100%"
// //             className="!absolute !top-0 !left-0 !w-full !h-full"
// //             style={{ pointerEvents: "none" }}
// //           />
// //         </div>

// //         <div className="absolute inset-0 bg-black/65"></div>
// //       </div>

// //       {pathname === "/" && (
// //         <PageHeader
// //           subtitle="Welcome to"
// //           title="Rumen Signature Beauty Empire"
// //           description={
// //             <>
// //               Enhancing Beauty. Creating Confidence. <br />
// //               Premium braids, cornrows, wigs, and luxury hair styling.
// //             </>
// //           }
// //           align="center"
// //         />
// //       )}

// //       {pathname === "/about" && <PageHeader title="About Rumen Signature" />}
// //       {pathname === "/gallery" && <PageHeader title="Hair Gallery" />}
// //       {pathname === "/services" && <PageHeader title="Our Services" />}
// //       {pathname === "/contact" && <PageHeader title="Book Appointment" />}
// //     </div>
// //   );
// // };

// // export default BgChange;
// // import ReactPlayer from 'react-player';
// // import { useLocation } from "react-router-dom";

// // import PageHeader from "./pageHeader"

// // const BgChange = () => {
// //   const { pathname } = useLocation()
// //   return (
// //     <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center z-[9999]">
// //       <div className="absolute top-0 left-0 w-full min-h-screen -z-10">
// //         <div className="absolute top-0 left-0 w-full h-full scale-[4] lg:scale-150">
// //           <ReactPlayer
// //             url="https://player.vimeo.com/video/1085563688?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
// //             playing
// //             muted
// //             loop
// //             width="100%"
// //             height="100%"
// //             className="!absolute !top-0 !left-0 !w-full !h-full"
// //             style={{ pointerEvents: "none" }}
// //           />
// //         </div>
// //         <div className="absolute inset-0 bg-black/60"></div>
// //       </div>

// //       {pathname === "/" && (
// //         <PageHeader
// //           subtitle="Welcome to"
// //           title="BAMS VISUALS"
// //           description={
// //             <>
// //               A wedding film is more than just a recording —<br />
// //               It’s a timeless keepsake, capturing the emotions
// //               and memories you’ll cherish for a lifetime.
// //             </>
// //         }
// //           align="center"
// //         />
// //       )}

// //       {pathname === "/about" && <PageHeader title="About Us" />}
// //       {pathname === "/gallery" && <PageHeader title="FILMS" />}
// //       {pathname === `/projectDetail/${pathname.slice(pathname.length - 1, pathname.length)}` && <PageHeader title="PROJECT DETAIL" />}
// //     {pathname === "/contact" && <PageHeader title="CONTACT US" />}
// //     </div>
// //   );
// // };

// // export default BgChange;
