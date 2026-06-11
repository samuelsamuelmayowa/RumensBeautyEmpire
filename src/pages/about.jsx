import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import about1 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.27 PM (3).jpeg";
import about2 from "../assets/images/main/wigone.jpeg";
import about3 from "../assets/images/main/WhatsApp Image 2026-06-09 at 7.12.23 PM (3).jpeg";

import StatsAndStory from "../components/StatsAndStory";

const About = () => {
  return (
    <main className="bg-white text-black">
      <section className="relative overflow-hidden bg-white px-6 pb-28 pt-40 md:px-20 lg:pt-52">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="font-quicksand text-sm font-bold uppercase tracking-[0.35em] text-text_gold">
                About Rumen Signature
              </p>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight text-black md:text-6xl">
                Beauty, Confidence & Signature Hair Care.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed text-gray-600">
                Rumen Signature Beauty Empire is dedicated to creating beautiful,
                neat, and confidence-boosting hairstyles. From luxury braids and
                detailed cornrows to flawless wig installs, every look is crafted
                with care, patience, and attention to detail.
              </p>
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-5 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative lg:col-span-3"
            >
              <img
                src={about1}
                alt="Rumen Signature hairstyle"
                className="h-[520px] w-full rounded-[2.5rem] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              />

              <img
                src={about2}
                alt="Luxury wig hairstyle"
                className="absolute -bottom-10 -right-6 hidden h-64 w-48 rounded-[2rem] border-8 border-white object-cover shadow-2xl md:block"
              />

              <div className="absolute left-6 top-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
                <h3 className="text-4xl font-extrabold text-text_gold">
                  100%
                </h3>
                <p className="font-medium text-gray-700">
                  Beauty & Confidence
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 lg:col-span-2"
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-text_gold">
                Our Promise
              </p>

              <h1 className="text-3xl font-extrabold leading-tight text-black md:text-4xl">
                Every crown deserves a signature touch.
              </h1>

              <p className="text-base leading-relaxed text-gray-600">
                We believe great hair is more than a style. It is how you walk
                into a room, how you feel about yourself, and how confidently you
                show up. That is why we focus on neat finishing, protective
                styling, comfort, and looks that last.
              </p>

              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-3xl bg-[#FFF9F0] p-6">
                  <h2 className="text-4xl font-extrabold text-text_gold">
                    50+
                  </h2>
                  <p className="mt-2 text-sm font-bold uppercase tracking-widest text-black">
                    Styles Created
                  </p>
                </div>

                <div className="rounded-3xl bg-[#FFF9F0] p-6">
                  <h2 className="text-4xl font-extrabold text-text_gold">
                    4+
                  </h2>
                  <p className="mt-2 text-sm font-bold uppercase tracking-widest text-black">
                    Services
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-4 w-fit rounded-full bg-text_gold px-8 py-4 font-bold text-black shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-black hover:text-white"
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsAndStory />
    </main>
  );
};

export default About;
// import { motion } from "framer-motion";
// import thumbNail from "../assets/images/screencapture-vimeo-1030637546-2025-03-08-21_24_18.png"
// import ReactPlayer from 'react-player'
// import StatsAndStory from "../components/StatsAndStory";
// import Studio from "../components/studio";
// import CountUpOnView from "../components/countUpOnView";


// const About = () => {

//   return (
//     <main className="bg-black text-white">
//       <section className="relative bg-dark pt-52 pb-32 px-6 md:px-32 flex flex-col gap-20 z-[999999]">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-left"
//           >
//             <p className="font-quicksand text-sm md:text-lg text-text_gold uppercase tracking-widest font-bold">
//               CINESTER STUDIO
//             </p>
//             <h2 className="font-cormorant text-3xl md:text-5xl font-bold text-white mt-2 leading-snug">
//               HAVE IDEA FOR YOUR PROJECT ?
//             </h2>
//           </motion.div>

//           {/* Right Side */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <p className="font-open_sans text-base md:text-base text-[#F0F0F0] font-light leading-relaxed">
//               When you choose Bamsvisuals, you&apos;re choosing a personalized cinematic experience tailored just for you.
//             </p>
//           </motion.div>
//         </div>
//         <div className="relative grid grid-cols-1 md:grid-cols-5 gap-20 items-center">
//           <div className="lg:col-span-3">
//             <ReactPlayer
//               loop={true}
//               playing
//               muted
//               width="500"
//               light={thumbNail}
//               url={"https://player.vimeo.com/video/1010058915?h=c7c983dfc5&amp%3Bbadge=0&amp%3Bautopause=0&amp%3Bplayer_id=0&amp%3Bapp_id=58479&turnstile=0.jkUrXTWsU2boirbAQbatHJem9fIhqPvDDb8rEi0Y-IKsNU62mRPLomUwTAkfiGvlCzkHCpMsTTCDG_RUoVCDH-gRtiHKOubV0zqY-tS2yUM5s6X7-6y8pB489BpjVwE27ObET7JCltAX5b2BCY6MjW7XzMhuFW_QuKH488KvQk94fMo92N6fdaWPyjy0uozLIIiJvUvTpo9UfNXMjbh_-gEsNEbIZoSWDlU0O2uaVEjKFiT5J8XDIWE_47I9Y1z2LHptJCPpDdY6VFn8h22YWbGGMtVwl8FT2kICaocZZ8RdK8DZ0ihD-3D94XT_K_tL8WjjzBW5jXiSsxVF8uqjM2iM1evHCA2AwcvLWHA4xUwvwrPWO8zzfcE35C8D0Ptv9g8Ve5cwUY1xhL9oiJ1mXBo3THh0R97Z92_Pu05U2Vm8YQRN0_0paeh2mdGhzHgrry7wu_VdXbXorx5aYtDULON__gtps1LQDbeInFq-Paq_o7fzEvJA6HzVg-6o1ufpTzh0ENPgcgRpJqcM6iiDVlZYx-EQIercB6GVCYkHgp8FSqI5gLkEqdVs7CI-t-xE6VNS7dwvaFa3kLTnWcnp6bJpQaY2oeYjEqQ5OpiqCg3dtTg6oJuHNTQUrOGY71t99MDV1VLoSv0bppiC2bx1bgrcNiz5vDJbpjiemnrT9_JeBAuT6PlRL-qB8kPrKzE-3AlqsbxJJIuEZffL0W3PYwHKRZ0KoyFn0mgDCCoi721g0FTloIVEJTdL5tQAOUGGom4u3cbG9x5fQKn2pKSPsje2dblXg9uZX7EJyU58PndaUD21Z-O5KNkmfkX1v5cAZqB3-SXZ2yGh7cYEcgYLkNJlrdsypXLL9Zhfuxl4ubY.RK23gTeQPbRuaQpL6Bw9Rg.eeef0194d603fbe9324fbbe009331d5938b2553ac12b4375b8d5690d30f00412&ref="} />
//           </div>
//           <div className="lg:col-span-2 flex flex-col gap-4">
//             <h1 className="font-cormorant text-white text-2xl font-bold">DO NOT HESITATE TO CHOOSE BAM VISUALS  AS YOUR STUDIO PRODUCTION</h1>
//             <p className="font-normal text-[#F0F0F0] font-open_sans text-base">We take the time to get to know each couple so the film captures the event in a way that reflects who they are. For us, wedding films are more than just a video. They&apos;re a keepsake that tells your love story in a way only film can. And since every couple is unique, we approach each wedding with fresh eyes and an open heart, ready to create something special.</p>
//             <div className="flex justify-around items-center">
//               <div className="text-center">
//                 <h2 className="font-quicksand font-bold text-[60px] text-text_gold">
//                    {/* <CountUpOnView to={250} className="" />+ */}
//                 </h2>
//                 {/* <p className="font-quicksand font-bold text-base text-white">WEDDING FILMS</p> */}
//               </div>
//               <div className="text-center">
//                 <h2 className="font-quicksand font-bold text-[60px] text-text_gold">
//                   {/* <CountUpOnView to={78} className="" />+ */}
//                 </h2>
//                 {/* <p className="font-quicksand font-bold text-base text-white">BIRTHDAY VIDEOS</p> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <div className="lg:grid hidden -top-[80px] right-0 left-0 grid-cols-4 px-20 bg-dark2">
//         <motion.div variants={fadeIn("up", 0.2, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="p-6 bg-text_gold">
//           <h2 className="font-cormorant font-bold text-xl">WE ARE THE BEST STUDIO PRODUCTION</h2>
//           <p className="font-open_sans font-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </motion.div>
//         <motion.img variants={fadeIn("up", 0.4, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} src={award1} className="" alt="" />
//         <motion.img variants={fadeIn("up", 0.6, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} src={award2} className="" alt="" />
//         <motion.img variants={fadeIn("up", 0.8, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} src={award3} className="" alt="" />
//     </div> */}
//       <StatsAndStory />
//       {/* <Studio /> */}
//     </main>
//   );
// };

// export default About;
