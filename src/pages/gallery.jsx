import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.20 PM.jpeg";
import img2 from "../assets/images/main/wigone.jpeg";
import img3 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.26 PM (5).jpeg";
import img4 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.22 PM.jpeg";
import img5 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.27 PM (2).jpeg";
import img6 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.27 PM (5).jpeg";

const galleryItems = [
  { img: img1, title: "Signature Braids", category: "Braids" },
  { img: img2, title: "Luxury Wig Install", category: "Wigs" },
  { img: img3, title: "Clean Cornrows", category: "Cornrows" },
  { img: img4, title: "Protective Style", category: "Styling" },
  { img: img5, title: "Premium Finish", category: "Braids" },
  { img: img6, title: "Soft Glam Hair", category: "Wigs" },
];

const Gallery = () => {
  return (
    <main className="bg-white text-black">
      <section className="relative overflow-hidden px-6 pb-28 pt-40 md:px-20 lg:pt-52">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-[120px]" />

        <div className="mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold uppercase tracking-[0.35em] text-text_gold"
          >
            Hair Gallery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-7xl"
          >
            Signature Looks, Luxury Finishes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
          >
            Explore beautiful braids, cornrows, wig installs, and premium hair
            styles crafted by Rumen Signature Beauty Empire.
          </motion.p>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(0,0,0,0.1)] ${
                index === 1 || index === 4 ? "lg:translate-y-12" : ""
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-[470px] w-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-5 py-2 text-sm font-bold text-black">
                {item.category}
              </div>

              <div className="absolute bottom-0 p-7">
                <h2 className="text-2xl font-extrabold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-text_gold">
                  Rumen Signature Beauty Empire
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF9F0] px-6 py-28 md:px-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-white px-6 py-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-text_gold">
            Love These Looks?
          </p>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Book Your Signature Style.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Ready for braids, cornrows, wig install, or a fresh beauty
            transformation? Let us create your next confident look.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-text_gold px-9 py-4 font-bold text-black shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="rounded-full border-2 border-text_gold px-9 py-4 font-bold text-text_gold transition-all duration-300 hover:bg-text_gold hover:text-black"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
// import ReactPlayer from "react-player";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { videos } from "../data/projects";
// import IdeaAds from "../components/ideaAd";
// import { fadeIn } from "../hooks/variants";

// const Gallery = () => {
//   return (
//     <section className="bg-black text-white px-6 md:px-12 lg:px-32 py-16">
//       {/* Section Header */}
//       <div className="text-center space-y-4 mb-12">
//         <motion.h1
//           variants={fadeIn("up", 0.1, 0.3)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-text_gold uppercase font-quicksand text-sm tracking-widest"
//         >
//           Portfolio
//         </motion.h1>
//         <motion.h2
//           variants={fadeIn("up", 0.2, 0.3)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-cormorant font-bold"
//         >
//           Our Latest Projects
//         </motion.h2>
//         <motion.p
//           variants={fadeIn("up", 0.3, 0.3)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto text-base text-gray-300 font-open_sans"
//         >
//           Explore our most recent and exciting projects that reflect our creativity, dedication, and attention to detail.
//         </motion.p>
//       </div>

//       {/* Video Grid - 2 Columns Always */}
//       <motion.div
//         id="works"
//         className="grid gap-10 grid-cols-1 md:grid-cols-2"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         {videos.map((video, index) => (
//           <motion.div
//             key={index}
//             className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
//             whileHover={{ rotate: 0.5 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ReactPlayer
//               url={video.url}
//               width="100%"
//               height={200}
//               controls
//               light={video.light}
//               className="w-full"
//             />
//             <div className="p-4 space-y-3">
//               <h3 className="font-cormorant text-xl font-bold text-white line-clamp-1">{video.title}</h3>
//               <p className="text-sm text-gray-300 line-clamp-3 italic">{video.description}</p>
//               <Link 
//               // to={`/projectDetail/${index + 1}`}
//               >
//                 <button className="mt-2 px-5 py-2 border border-text_gold text-text_gold hover:bg-text_gold hover:text-black transition-colors duration-300 font-quicksand font-semibold rounded">
//                   Read More
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Idea Advertisement */}
//       <div className="mt-20">
//         <IdeaAds />
//       </div>
//     </section>
//   );
// };

// export default Gallery;
