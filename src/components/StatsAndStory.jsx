import { motion } from "framer-motion";
import storyImage from "../assets/images/main/wigone.jpeg";

const StatsAndStory = () => {
  return (
    <section className="bg-[#FFF9F0] px-6 py-32 md:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-text_gold text-sm font-bold uppercase tracking-[0.35em]">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-black leading-tight">
              Beauty Is More Than Hair.
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              Rumen Signature Beauty Empire was founded with one mission:
              helping women look and feel their absolute best.
            </p>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              We specialize in premium braids, elegant cornrows, flawless wig
              installations, and luxury hair styling. Every style is carefully
              crafted with attention to detail, comfort, and long-lasting beauty.
            </p>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Our goal is simple: create hairstyles that enhance confidence,
              celebrate individuality, and leave every client feeling beautiful.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-5xl font-extrabold text-text_gold">100+</h3>
                <p className="text-black font-semibold mt-2">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-extrabold text-text_gold">4+</h3>
                <p className="text-black font-semibold mt-2">
                  Premium Services
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-extrabold text-text_gold">100%</h3>
                <p className="text-black font-semibold mt-2">
                  Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={storyImage}
              alt="Rumen Signature Beauty Empire"
              className="h-[650px] w-full object-cover rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
            />

            <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-6 shadow-xl">
              <h3 className="text-3xl font-extrabold text-text_gold">
                Luxury
              </h3>
              <p className="text-gray-700">
                Hair Styling Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndStory;
// import { motion } from "framer-motion";
// import { fadeIn } from "../hooks/variants";

// const StatsAndStory = () => {
//   return (
//     <section className="w-full bg-dark py-32 px-6 md:px-32 overflow-hidden">
//       <div className="flex flex-col lg:flex-row gap-16 items-start">
//         <div className="flex-1 flex flex-col gap-12 w-full lg:w-1/2">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="flex flex-col gap-10"
//           >
//             <div>
//               <motion.h2 variants={fadeIn("up", 0.1, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="text-lg font-bold font-quicksand tracking-widest text-text_gold uppercase">STORY</motion.h2>
//               <h3 className="lg:w-[400px] leading-[1.2] text-4xl md:text-[48px] font-bold text-white font-cormorant">STORY BEHIND BAMS VISUALS</h3>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <p className="text-white text-lg leading-relaxed font-open_sans">
//             Bamsvisuals was born from a passion for storytelling through the lens. What began as a creative pursuit quickly evolved into a full-service visual production company committed to capturing moments with purpose and artistry. Founded by a team of filmmakers and creatives, our mission has always been to blend technical expertise with authentic storytelling—whether we’re documenting a wedding, producing a film, directing a brand campaign, or covering a live event. At the heart of Bamsvisuals is a dedication to creating timeless visuals that resonate, inspire, and connect.
//             </p>

//             {/* <p className="text-white text-lg md:text-xl font-light font-open_sans">
//             ” Vivamus quam lectus, facilisis a massa facilisis,
//             imperdiet maximus nunc. Integer ut metus eget lectus imperdiet pulvinar in ac urna “
//             </p> */}

//             <div>
//               <p className="text-text_gold font-bold font-cormorant text-2xl">Ayobami Samuel Daramola</p>
//               <p className="font-open_sans text-base text-white">CEO OF BAM VISUALS</p>
//             </div>
//           </motion.div>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="flex-1 w-full flex flex-col items-center justify-center gap-8"
//         >
//           <div className="w-full h-64 md:h-96">
//             <iframe
//               src="https://player.vimeo.com/video/1010058915?h=c7c983dfc5&autoplay=0&muted=1&background=0&badge=0&autopause=0"
//               className="w-full h-full rounded-xl shadow-lg"
//               frameBorder="0"
//               allow="autoplay; fullscreen; picture-in-picture"
//               allowFullScreen
//               title="Bams Visual CTA Video"
//             ></iframe>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default StatsAndStory;
