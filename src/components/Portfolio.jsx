import { motion } from "framer-motion";

const videoSrc =
  "https://player.vimeo.com/video/1010058915?h=c7c983dfc5&autoplay=0&muted=1&background=0&badge=0&autopause=0&player_id=0&app_id=58479";

const Portfolio = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-20 text-white space-y-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-5xl font-semibold tracking-widest uppercase"
      >
        P O R T F O L I O
      </motion.h2>

      {/* Layout */}
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Large video full width */}
        <motion.div
          className="w-full aspect-video rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src={videoSrc}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Two side-by-side videos */}
        <div className="flex flex-col md:flex-row gap-8">
          {[1, 2].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 aspect-video rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <iframe
                src={videoSrc}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>

        {/* Another full-width video */}
        <motion.div
          className="w-full aspect-video rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src={videoSrc}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Two more side-by-side */}
        <div className="flex flex-col md:flex-row gap-8">
          {[4, 5].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 aspect-video rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <iframe
                src={videoSrc}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Text & Button */}
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6 mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus velit,
          iaculis quis mauris et, dignissim hendrerit ex. Nulla ultrices vel tellus lacinia
          pharetra. Integer commodo ligula lobortis sapien vehicula placerat eu id tellus.
          Ut faucibus neque eget dui rutrum, in hendrerit diam euismod. Nam congue diam nulla,
          vitae sagittis elit.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#D7A86E] text-black px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
        >
          Start Your Project
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Portfolio;
