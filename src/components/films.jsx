import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hair1 from "../assets/images/Snapinsta.webp";
import hair2 from "../assets/images/show.webp";
import hair3 from "../assets/images/test.webp";

const Portfolio = () => {
  const styles = [
    {
      img: hair1,
      title: "Signature Cornrows",
      description: "Clean parting and long-lasting protective styling.",
    },
    {
      img: hair2,
      title: "Luxury Wig Install",
      description: "Flawless installs with a natural finish.",
    },
    {
      img: hair3,
      title: "Premium Braids",
      description: "Elegant braided styles crafted with precision.",
    },
  ];

  return (
    <section className="relative bg-white px-6 py-32 md:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-300/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-text_gold uppercase tracking-[0.35em] font-bold text-sm">
            Our Portfolio
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-black">
            Hairstyles That Turn Heads
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Discover our signature braids, cornrows, wig installs, and luxury
            hair transformations designed to enhance your confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {styles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[450px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 h-[3px] w-16 bg-text_gold rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-16 flex justify-center gap-5 flex-wrap">
          <Link
            to="/gallery"
            className="rounded-full border-2 border-text_gold px-8 py-4 font-bold text-text_gold transition-all duration-300 hover:bg-text_gold hover:text-black"
          >
            View Full Gallery
          </Link>

          <Link
            to="/contact"
            className="rounded-full bg-text_gold px-8 py-4 font-bold text-black shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Book Your Style
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import hair1 from "../assets/images/Snapinsta.webp";
// import hair2 from "../assets/images/show.webp";
// import hair3 from "../assets/images/test.webp";

// const Films = () => {
//   const styles = [
//     { img: hair1, title: "Signature Cornrows" },
//     { img: hair2, title: "Body Wave Wigs" },
//     { img: hair3, title: "Luxury Braids" },
//   ];

//   return (
//     <section className="bg-dark2 px-6 py-28 md:px-20 overflow-hidden">
//       <div className="text-center max-w-3xl mx-auto">
//         <p className="text-gold uppercase tracking-[0.35em] font-bold text-sm">
//           Our Portfolio
//         </p>
//         <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white">
//           Hairstyles That Turn Heads
//         </h1>
//         <p className="mt-5 text-white/60">
//           Explore our clean parting, neat braids, soft wigs, and luxury finishes.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-7 mt-16">
//         {styles.map((item, index) => (
//           <motion.div
//             key={item.title}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="group relative overflow-hidden rounded-[2rem] bg-black"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="h-[430px] w-full object-cover group-hover:scale-110 duration-700"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

//             <div className="absolute bottom-0 p-7">
//               <h3 className="text-2xl font-bold text-white">{item.title}</h3>
//               <p className="text-gold mt-2">Rumen Signature Beauty Empire</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="mt-14 flex justify-center gap-5 flex-wrap">
//         <Link
//           to="/gallery"
//           className="border border-gold text-gold px-8 py-4 rounded-full font-bold hover:bg-gold hover:text-black duration-300"
//         >
//           See Gallery
//         </Link>

//         <Link
//           to="/contact"
//           className="bg-gold text-black px-8 py-4 rounded-full font-bold hover:scale-105 duration-300"
//         >
//           Book Your Style
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Films;
// // import { Link } from "react-router-dom";
// // import film1 from "../assets/images/Snapinsta.webp"
// // import film2 from "../assets/images/show.webp"
// // import film3 from "../assets/images/test.webp"
// // import { motion } from 'framer-motion';
// // import { fadeIn } from "../hooks/variants";


// // const Films = () => {
// //     return (
// //         <section className='bg-dark2 lg:p-32 md:p-10 p-4 overflow-hidden'>
// //             <div>
// //                 <motion.p variants={fadeIn("right", 0.1, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="text-base text-text_gold font-bold font-quicksand">PORTFOLIO</motion.p>
// //                 <motion.h1 variants={fadeIn("right", 0.2, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className='font-bold font-cormorant text-[48px] text-white'>FILMS</motion.h1>
// //             </div>
// //             <div className="grid grid-cols-1 lg:grid-cols-3 items-center py-20">
// //                 <div>
// //                     <img src={film1} alt="film1" className="h-64 object-cover w-full" />
// //                     {/* <p className="bg-text_gold text-center py-2 font-montserrat font-medium text-xl">Jethro weds Venus</p> */}
// //                 </div>
// //                 <div>
// //                     <img src={film2} alt="film2" className="h-80 object-cover w-full" />
// //                     {/* <p className="bg-text_gold text-center py-2 font-montserrat font-medium text-xl">Jethro weds Venus</p> */}
// //                 </div>
// //                 <div>
// //                     <img src={film3} alt="film3" className="h-64 object-cover w-full" />
// //                     {/* <p className="bg-text_gold text-center py-2 font-montserrat font-medium text-xl">Jethro weds Venus</p> */}
// //                 </div>
// //             </div>
// //             <div className="flex flex-col lg:flex-row gap-10">
// //                 <p className="flex-1 font-open_sans font-normal text-base text-white">Our process begins with an initial consultation, where we take the time to understand your vision, answer any questions, and address any specific concerns. From there, you’ll choose a customized package that aligns with your needs, style, and budget.
// //                 </p>
// //                 <div className="flex-1 flex flex-col gap-4">
// //                     <p className="font-open_sans font-normal text-base text-white">On the day of your event, you can expect a seamless and stress-free experience. The Bamsvisuals team is committed to capturing every essential detail—from key moments to authentic, candid interactions—ensuring you can remain fully present while we document your story with precision and care.</p>
// //                     <div className="flex md:flex-row flex-col gap-10">
// //                         <Link to="/gallery">
// //                             <button className="font-quicksand border-2 border-text_gold hover:bg-text_gold hover:text-black duration-300 text-text_gold p-4">SEE ALL PROJECT</button>
// //                         </Link>
// //                         <Link to="/contact">
// //                             <button className="font-quicksand border-2 border-dark2 hover:border-text_gold duration-300 p-4 text-white">START YOUR PROJECT</button>7
// //                         </Link>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // }

// // export default Films