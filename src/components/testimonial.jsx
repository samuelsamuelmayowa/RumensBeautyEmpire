import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../hooks/variants";

const testimonial = [
  {
    text: "Working with Bamsvisuals was one of the best decisions we made for our wedding. The team was incredibly professional, attentive, and made us feel completely at ease throughout the day. The final video captured every emotion perfectly—it’s something we’ll treasure forever",
    author: "Atinuke Ogundolie.",
    // role: "Designer",
  },
  {
    text: "Bamsvisuals brought our brand story to life in a way we never imagined. From concept to final cut, their creative direction and attention to detail were top-notch. They truly understood our vision and delivered beyond expectations.",
    author: " Seyi and Tiroye Amoye",
    // role: "Developer",
  },
  {
    text: "We hired Bamsvisuals to cover our corporate launch event, and they were outstanding. Discreet, efficient, and incredibly skilled at capturing the energy of the evening. The final footage was polished, professional, and delivered promptly",
    author: "Eve and Peter",
    // role: "Eve and Peter",
  },
];

const Testimonial = () => {
  return (
    <section className="lg:p-32 p-10 bg-dark space-y-10 overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg font-bold font-quicksand tracking-widest text-text_gold uppercase"
        >
          Testimonial
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[48px] font-bold text-white font-cormorant"
        >
          WHAT THEY SAY ABOUT OUR STUDIO ?
        </motion.h1>
        {/* <p className="text-white font-open_sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> */}
      </div>
      <div className="">
        <div className="relative ">
          <div className="flex lg:flex-nowrap flex-wrap gap-4">
            {testimonial?.map((text, index) => (
              <motion.div variants={fadeIn("up", 0.2 * index, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }}
                key={index}
                className="bg-dark2 p-6 flex flex-col gap-4 justify-between"
              >
                <FaStar color="gold" />
                <p className="md:text-base text-sm font-light md:leading-[1.5] text-white font-open_sans">
                  {text.text}
                </p>
                <h3 className="text-lg font-semibold font-quicksand text-text_gold">
                  {text.author}
                </h3>
                <p className="text-white">{text.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
