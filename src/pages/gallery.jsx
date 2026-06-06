import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { videos } from "../data/projects";
import IdeaAds from "../components/ideaAd";
import { fadeIn } from "../hooks/variants";

const Gallery = () => {
  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-32 py-16">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <motion.h1
          variants={fadeIn("up", 0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-text_gold uppercase font-quicksand text-sm tracking-widest"
        >
          Portfolio
        </motion.h1>
        <motion.h2
          variants={fadeIn("up", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-cormorant font-bold"
        >
          Our Latest Projects
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.3, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-base text-gray-300 font-open_sans"
        >
          Explore our most recent and exciting projects that reflect our creativity, dedication, and attention to detail.
        </motion.p>
      </div>

      {/* Video Grid - 2 Columns Always */}
      <motion.div
        id="works"
        className="grid gap-10 grid-cols-1 md:grid-cols-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
            whileHover={{ rotate: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <ReactPlayer
              url={video.url}
              width="100%"
              height={200}
              controls
              light={video.light}
              className="w-full"
            />
            <div className="p-4 space-y-3">
              <h3 className="font-cormorant text-xl font-bold text-white line-clamp-1">{video.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-3 italic">{video.description}</p>
              <Link 
              // to={`/projectDetail/${index + 1}`}
              >
                <button className="mt-2 px-5 py-2 border border-text_gold text-text_gold hover:bg-text_gold hover:text-black transition-colors duration-300 font-quicksand font-semibold rounded">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Idea Advertisement */}
      <div className="mt-20">
        <IdeaAds />
      </div>
    </section>
  );
};

export default Gallery;
