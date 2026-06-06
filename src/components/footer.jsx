import { motion } from "framer-motion"
import { fadeIn } from "../hooks/variants"

const Footer = () => {
    return (
        <>
            <div className="text-center md:py-20 py-10 bg-dark space-y-10">
                <div>
                    <motion.h1 variants={fadeIn("up", 0.2, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="font-cormorant text-lg lg:text-3xl md:my-6 my-3 xl:w-[1000px] w-full mx-auto text-white">HAVE IDEA IN YOUR MIND ? LET&apos;S START YOUR PROJECT WITH US</motion.h1>
                    {/* <motion.p variants={fadeIn("up", 0.4, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="font-quicksand font-bold text-text_gold text-sm md:text-xl">BAMS VISUALS</motion.p> */}
                </div>
                <div className="flex md:flex-row flex-col text-white justify-center gap-5 items-center">
                      <button className="duration-200  font-bold text-sm border-2 border-white p-3 px-6 hover:bg-white text-white hover:text-black">
         <a href="/contact"> Book Now</a>
        </button>
                </div>

                <div className="flex md:flex-row flex-col text-white justify-center gap-5 items-center">
                    {/* <motion.p variants={fadeIn("opacity", 0.2, 0.3)} initial="opacity" whileInView={"show"} viewport={{ once: true }} className="font-cormorant text-base lg:text-2xl font-bold">FACEBOOK</motion.p> */}
                    {/* <motion.p variants={fadeIn("opacity", 0.4, 0.3)} initial="opacity" whileInView={"show"} viewport={{ once: true }} className="font-cormorant text-base lg:text-2xl font-bold">TWITTER</motion.p> */}
                    <motion.p variants={fadeIn("opacity", 0.6, 0.3)} initial="opacity" whileInView={"show"} viewport={{ once: true }} className="font-cormorant text-base lg:text-2xl font-bold"> TIKTOK</motion.p>
                    <motion.p variants={fadeIn("opacity", 0.8, 0.3)} initial="opacity" whileInView={"show"} viewport={{ once: true }} className="font-cormorant text-base lg:text-2xl font-bold">INSTAGRAM</motion.p>
                    <motion.p variants={fadeIn("opacity", 1, 0.3)} initial="opacity" whileInView={"show"} viewport={{ once: true }} className="font-cormorant text-base lg:text-2xl font-bold">YOUTUBE</motion.p>
                </div>
            </div>
            <div className="overflow-hidden py-10 px-4 lg:px-20 bg-[url('./assets/images/servicebg.png')] bg-cover bg-fixed bg-no-repeat relative after:absolute after:inset-0 after:bg-black/80">
                <motion.p variants={fadeIn("left", 0.5, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="relative z-10 text-white text-right font-open_sans">COPYRIGHT {new Date().getFullYear()} © BAMVISUALS </motion.p>
            </div>
        </>
    )
}

export default Footer