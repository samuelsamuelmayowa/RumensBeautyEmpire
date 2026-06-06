import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { videos } from "../data/projects";
import IdeaAds from "../components/ideaAd";
import { fadeIn } from "../hooks/variants";

const Gallery = () => {
  return (
    <section className="bg-black text-white lg:p-32 p-10">
      <div className="">
        <div className="text-center py-12 flex flex-col gap-4">
          <motion.h1 variants={fadeIn("up", 0.1, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="font-quicksand text-lg uppercase text-text_gold">portflio</motion.h1>
          <motion.p variants={fadeIn("up", 0.2, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="md:text-[38px] font-cormorant font-bold text-base">
            OUR LATEST PROJECT
          </motion.p>
          <motion.p variants={fadeIn("opacity", 0.3, 0.3)} initial="opacity" whileInView={"show"} viewport={{ once: true }} className="text-white font-open_sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</motion.p>
        </div>
        <motion.div
          id="works"
          className="gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 col-span-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="relative w-full overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ReactPlayer
                url={video.url}
                width="100%"
                height={300}
                controls={true}
                light={video.light}
                className="w-full"
              // playIcon={
              //   <motion.button
              //     className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white rounded-full shadow-md transition-all ease-in-out transform hover:scale-110 hover:rotate-3"
              //     whileHover={{ scale: 1.15, rotate: -2 }}
              //     whileTap={{ scale: 0.9 }}
              //   >
              //     PLAY VIDEO
              //   </motion.button>
              // }
              />
              <div className="flex flex-col items-start justify-between gap-2 py-3">
                <h1 className="font-cormorant text-2xl text-center  font-bold line-clamp-1">{video.title}</h1>
                {/* <p className="font-semibold text-lg font-quicksand text-text_gold">SINONPSIS</p> */}
                <p>{video.description}</p>
                <Link to={`/projectDetail/${index + 1}`}>
                  <button className="border-2 border-text_gold text-text_gold hover:bg-text_gold hover:text-black duration-300 p-4 font-quicksand font-bold">READ MORE</button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <IdeaAds />

      </div>
    </section>
  );
};

export default Gallery;
