import { motion } from "framer-motion"
import film1 from "../assets/images/Snapinsta.webp"
import film2 from "../assets/images/show.webp"
import film3 from "../assets/images/test.webp"


const BlogPosts = [
    {
        img: film1,
        title: "SUCCESSFUL WEDDING FILMINGS IN 2024",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus quis risus ac lacinia. Phasellus…"
    },
    {
        img: film2,
        title: "BIRTHDAY AND ANNIVERSARY CELEBRATIONS DONE TOGETHER - SMILES EVERYWHERE",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet nisi nec pellentesque.…"
    },
    {
        img: film3,
        title: "INTERVIEW WITH JETHRO ADEMOLA (THE KING HIMSELF)",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet nisi nec pellentesque.…"
    },
]


const Blog = () => {
    return (
        <section className="lg:p-32 md:p-10 p-4 py-20 bg-dark2 overflow-hidden">
            <div className="space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <p className="font-quicksand text-sm md:text-lg text-text_gold uppercase tracking-widest font-bold">
                            BLOG
                        </p>
                        <h2 className="font-cormorant text-3xl md:text-5xl font-bold text-white mt-2 leading-snug">
                            OUR LATEST BLOG
                        </h2>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-open_sans text-base md:text-base text-[#F0F0F0] font-light leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet nisi nec pellentesque. Ut vitae metus blandit, ornare dolor at, pretium ligula. Sed dapibus tortor nisl, quis pretium metus finibus ac.
                        </p>
                    </motion.div>
                </div>
                <div className="flex gap-10 lg:flex-nowrap flex-wrap">
                    {BlogPosts.map((blog, index) => (
                        <div key={index} className="flex-1 border border-[#F0F0F0]">
                            <img className="w-full h-48 object-cover object-center" src={blog.img} alt="" />
                            <div className="p-4 text-white">
                                <h2 className="font-bold font-quicksand text-lg">{blog.title}</h2>
                                <p className="text-base font-open_sans">{blog.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog