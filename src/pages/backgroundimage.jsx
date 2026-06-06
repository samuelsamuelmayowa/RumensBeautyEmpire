import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img0 from "../assets/images/test.webp";
import img4 from "../assets/images/Snapinsta.webp";

const images = [img0, img4];

const Background = () => {
  return (
    <>  
      <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-black text-white p-6">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('/your-wedding-image.jpg')] bg-cover bg-center opacity-30"></div>

        {/* Content with fade-in effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl text-center z-10"
        >
          {/* <h1 className="text-5xl font-bold mb-6 tracking-wide text-white">
            More Than Just a Recording
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A wedding film is a beautifully crafted story, preserving the emotions, laughter, and love of your special day.
            A timeless keepsake you'll cherish for a lifetime.
          </p> */}
        </motion.div>

        {/* Call to Action Section */}
        {/* <div className="relative text-center py-12 z-10">
          <h2 className="font-cursive text-4xl md:text-7xl my-6 text-white">
            Can’t wait to chat with you!!
          </h2>
          <Link to="/contact">
            <button className="bg-button border-2 border-button hover:bg-transparent hover:text-white transition duration-200 mx-auto px-8 py-4 text-lg font-bold text-white rounded-lg">
              LET'S TALK
            </button>
          </Link>
        </div> */}
      </div>
      
      {/* Image Gallery */}
      <div className="relative w-full py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden h-[500px] rounded-2xl shadow-lg"
              whileHover={{ scale: 1.08 }}
            >
              <img
                src={image}
                alt={`Background ${index}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Background;
