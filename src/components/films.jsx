import { Link } from "react-router-dom";
import film1 from "../assets/images/Snapinsta.webp"
import film2 from "../assets/images/show.webp"
import film3 from "../assets/images/test.webp"
import { motion } from 'framer-motion';
import { fadeIn } from "../hooks/variants";


const Films = () => {
    return (
        <section className='bg-dark2 lg:p-32 md:p-10 p-4 overflow-hidden'>
            <div>
                <motion.p variants={fadeIn("right", 0.1, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="text-base text-text_gold font-bold font-quicksand">PORTFOLIO</motion.p>
                <motion.h1 variants={fadeIn("right", 0.2, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className='font-bold font-cormorant text-[48px] text-white'>FILMS</motion.h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center py-20">
                <div>
                    <img src={film1} alt="film1" className="h-64 object-cover w-full" />
                    {/* <p className="bg-text_gold text-center py-2 font-montserrat font-medium text-xl">Jethro weds Venus</p> */}
                </div>
                <div>
                    <img src={film2} alt="film2" className="h-80 object-cover w-full" />
                    {/* <p className="bg-text_gold text-center py-2 font-montserrat font-medium text-xl">Jethro weds Venus</p> */}
                </div>
                <div>
                    <img src={film3} alt="film3" className="h-64 object-cover w-full" />
                    {/* <p className="bg-text_gold text-center py-2 font-montserrat font-medium text-xl">Jethro weds Venus</p> */}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
                <p className="flex-1 font-open_sans font-normal text-base text-white">Our process begins with an initial consultation, where we take the time to understand your vision, answer any questions, and address any specific concerns. From there, you’ll choose a customized package that aligns with your needs, style, and budget.
                </p>
                <div className="flex-1 flex flex-col gap-4">
                    <p className="font-open_sans font-normal text-base text-white">On the day of your event, you can expect a seamless and stress-free experience. The Bamsvisuals team is committed to capturing every essential detail—from key moments to authentic, candid interactions—ensuring you can remain fully present while we document your story with precision and care.</p>
                    <div className="flex md:flex-row flex-col gap-10">
                        <Link to="/gallery">
                            <button className="font-quicksand border-2 border-text_gold hover:bg-text_gold hover:text-black duration-300 text-text_gold p-4">SEE ALL PROJECT</button>
                        </Link>
                        <Link to="/contact">
                            <button className="font-quicksand border-2 border-dark2 hover:border-text_gold duration-300 p-4 text-white">START YOUR PROJECT</button>7
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Films