import { motion } from "framer-motion";
import thumbNail from "../assets/images/Laura+Edwin Thumb.jpg"
import ReactPlayer from 'react-player'
import { fadeIn } from "../hooks/variants";

const SectionIntro = () => {
  return (
    <section className="relative bg-dark py-32 px-6 md:px-32 flex flex-col gap-20 z-[999999]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <p className="font-quicksand text-sm md:text-lg text-text_gold uppercase tracking-widest font-bold">
            BAMS VISUALS
          </p>
          <h2 className="font-cormorant text-3xl md:text-5xl font-bold text-white mt-2 leading-snug">
            HAVE IDEA FOR YOUR PROJECT ?
          </h2>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <p className="font-open_sans text-base md:text-base text-[#F0F0F0] font-light leading-relaxed">
            When you choose Bamsvisuals, you&apos;re choosing a personalized cinematic experience tailored just for you.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-20 items-center">
        <motion.div
          variants={fadeIn("right", 0.1, 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="lg:col-span-3">

          <ReactPlayer
            loop={true}
            playing
            muted
            width="500" 
            light={thumbNail}
            // url={"https://player.vimeo.com/video/1019768938?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
            url={"https://player.vimeo.com/video/1085563688?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
             />
            
        </motion.div>
        <motion.div className="lg:col-span-2 flex flex-col gap-4">
          <motion.h1 variants={fadeIn("down", 0.1, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="font-cormorant text-white text-2xl font-bold">DO NOT HESITATE TO CHOOSE BAMS VISUALS  AS YOUR STUDIO PRODUCTION</motion.h1>
          <motion.p variants={fadeIn("up", 0.2, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="font-normal text-[#F0F0F0] font-open_sans text-base">We take the time to get to know each couple so the film captures the event in a way that reflects who they are. For us, wedding films are more than just a video. They&apos;re a keepsake that tells your love story in a way only film can. And since every couple is unique, we approach each wedding with fresh eyes and an open heart, ready to create something special.</motion.p>
          <div className="flex justify-around items-center">
            <motion.div variants={fadeIn("right", 0.3, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="text-center">
              {/* <h2 className="font-quicksand font-bold text-[60px] text-text_gold">250+</h2> */}
             
            </motion.div>
            <motion.div variants={fadeIn("right", 0.4, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="text-center">
              {/* <h2 className="font-quicksand font-bold text-[60px] text-text_gold">78+</h2> */}
            
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionIntro;
