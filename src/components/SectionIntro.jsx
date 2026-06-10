import { motion } from "framer-motion";
import img1 from "../assets/images/Snapinsta.webp";
import img2 from "../assets/images/show.webp";

const SectionIntro = () => {
  return (
    <section className="relative bg-white px-6 py-32 md:px-20 overflow-hidden">
      {/* Gold Glow */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-yellow-300/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-text_gold uppercase tracking-[0.35em] text-sm font-bold">
            Luxury Hair Styling
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold text-black leading-tight">
            Braids, Cornrows & Wigs Crafted With Excellence.
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            At Rumen Signature Beauty Empire, every hairstyle is carefully
            designed to enhance your beauty, protect your natural hair, and
            give you confidence that lasts long after you leave our chair.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <a
              href="/contact"
              className="bg-text_gold text-black px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 duration-300"
            >
              Book Appointment
            </a>

            <a
              href="/gallery"
              className="border-2 border-text_gold text-text_gold px-8 py-4 rounded-full font-bold hover:bg-text_gold hover:text-black duration-300"
            >
              View Styles
            </a>
          </div>
        </motion.div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={img1}
            alt="Luxury braids hairstyle"
            className="w-full h-[600px] object-cover rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          />

          <img
            src={img2}
            alt="Premium wig hairstyle"
            className="absolute -bottom-10 -left-10 w-56 h-72 object-cover rounded-[2rem] border-8 border-white shadow-2xl hidden md:block"
          />

          {/* Floating Card */}
          <div className="absolute top-8 right-8 bg-white border border-gray-200 rounded-3xl p-6 shadow-xl">
            <h3 className="text-4xl font-extrabold text-text_gold">
              100%
            </h3>
            <p className="text-gray-700 font-medium">
              Beauty & Confidence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionIntro;
// import { motion } from "framer-motion";

// import img1 from "../assets/images/Snapinsta.webp";
// import img2 from "../assets/images/show.webp";

// const SectionIntro = () => {
//   return (
//     <section className="relative px-6 py-28 md:px-20 overflow-hidden">
//       <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/20 blur-[120px] rounded-full" />

//       <div className="grid lg:grid-cols-2 gap-16 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-gold uppercase tracking-[0.35em] text-sm font-bold">
//             Luxury Hair Styling
//           </p>

//           <h2 className="mt-5 text-4xl md:text-6xl font-extrabold text-white leading-tight">
//             Braids, Cornrows & Wigs Made With Royal Detail.
//           </h2>

//           <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
//             At Rumen Signature Beauty Empire, every hairstyle is designed to
//             enhance your beauty, protect your hair, and give you confidence that
//             speaks before you do.
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row gap-4">
//             <a
//               href="/contact"
//               className="bg-gold text-white px-8 py-4 font-bold rounded-full hover:scale-105 duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)]"
//             >
//               Book Appointment
//             </a>

//             <a
//               href="/gallery"
//               className="border border-gold text-gold px-8 py-4 font-bold rounded-full hover:bg-gold hover:text-white duration-300"
//             >
//               View Styles
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <img
//             src={img1}
//             alt="Luxury braids hairstyle"
//             className="w-full h-[520px] object-cover rounded-[2rem] shadow-2xl"
//           />

//           <img
//             src={img2}
//             alt="Premium wig hairstyle"
//             className="absolute -bottom-10 -left-6 w-48 h-64 object-cover rounded-[2rem] border-4 border-dark shadow-2xl hidden md:block"
//           />

//           <div className="absolute top-6 right-6 bg-white backdrop-blur-md border border-gold/40 rounded-2xl p-5 text-white">
//             <h3 className="text-3xl font-extrabold text-gold">100%</h3>
//             <p className="text-sm">Beauty & Confidence</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SectionIntro;
// // import { motion } from "framer-motion";
// // import thumbNail from "../assets/images/Laura+Edwin Thumb.jpg"
// // import ReactPlayer from 'react-player'
// // import { fadeIn } from "../hooks/variants";

// // const SectionIntro = () => {
// //   return (
// //     <section className="relative bg-dark py-32 px-6 md:px-32 flex flex-col gap-20 z-[999999]">
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden">
// //         <motion.div
// //           initial={{ opacity: 0, x: -30 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 1 }}
// //           viewport={{ once: true }}
// //           className="text-left"
// //         >
// //           <p className="font-quicksand text-sm md:text-lg text-text_gold uppercase tracking-widest font-bold">
// //             BAMS VISUALS
// //           </p>
// //           <h2 className="font-cormorant text-3xl md:text-5xl font-bold text-white mt-2 leading-snug">
// //             HAVE IDEA FOR YOUR PROJECT ?
// //           </h2>
// //         </motion.div>

// //         {/* Right Side */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 30 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 1 }}
// //           viewport={{ once: true }}
// //           className="overflow-hidden"
// //         >
// //           <p className="font-open_sans text-base md:text-base text-[#F0F0F0] font-light leading-relaxed">
// //             When you choose Bamsvisuals, you&apos;re choosing a personalized cinematic experience tailored just for you.
// //           </p>
// //         </motion.div>
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-5 gap-20 items-center">
// //         <motion.div
// //           variants={fadeIn("right", 0.1, 0.3)}
// //           initial="hidden"
// //           whileInView={"show"}
// //           viewport={{ once: true, amount: 0.7 }}
// //           className="lg:col-span-3">

// //           <ReactPlayer
// //             loop={true}
// //             playing
// //             muted
// //             width="500" 
// //             light={thumbNail}
// //             // url={"https://player.vimeo.com/video/1019768938?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
// //             url={"https://player.vimeo.com/video/1085563688?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
// //              />
            
// //         </motion.div>
// //         <motion.div className="lg:col-span-2 flex flex-col gap-4">
// //           <motion.h1 variants={fadeIn("down", 0.1, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="font-cormorant text-white text-2xl font-bold">DO NOT HESITATE TO CHOOSE BAMS VISUALS  AS YOUR STUDIO PRODUCTION</motion.h1>
// //           <motion.p variants={fadeIn("up", 0.2, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="font-normal text-[#F0F0F0] font-open_sans text-base">We take the time to get to know each couple so the film captures the event in a way that reflects who they are. For us, wedding films are more than just a video. They&apos;re a keepsake that tells your love story in a way only film can. And since every couple is unique, we approach each wedding with fresh eyes and an open heart, ready to create something special.</motion.p>
// //           <div className="flex justify-around items-center">
// //             <motion.div variants={fadeIn("right", 0.3, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="text-center">
// //               {/* <h2 className="font-quicksand font-bold text-[60px] text-text_gold">250+</h2> */}
             
// //             </motion.div>
// //             <motion.div variants={fadeIn("right", 0.4, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="text-center">
// //               {/* <h2 className="font-quicksand font-bold text-[60px] text-text_gold">78+</h2> */}
            
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default SectionIntro;
