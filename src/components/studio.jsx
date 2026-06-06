import { motion } from "framer-motion"

const Studio = () => {
    return (
        <section className="lg:p-32 md:p-10 p-4 bg-dark2 py-20">
            <div className="flex gap-10 lg:flex-row flex-col">
                <div className="flex-1 flex flex-col gap-12 w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <h2 className="text-lg font-bold font-quicksand tracking-widest text-text_gold uppercase">STUDIO</h2>
                            <h3 className="leading-[1.2] text-4xl md:text-[48px] font-bold text-white font-cormorant">BAM VISUAL STAGE</h3>
                            <p className="font-open_sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <table className="border border-white w-full">
                            <thead>
                                <tr>
                                    <th className="lg:p-10 p-2 border text-white font-bold text-2xl font-cormorant text-left">DESCRIPTION</th>
                                    <th className="lg:p-10 p-2 border text-white font-bold text-2xl font-cormorant">AREA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="lg:p-10 p-2 border font-open_sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</td>
                                    <td className="p-5 border font-open_sans">21,550 sq ft</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="font-open_sans">Fusce nec mauris purus. Vestibulum ut sagittis turpis, ac dapibus libero. Curabitur sed leo dictum, pellentesque lorem nec, sagittis magna. Proin dictum nisl nec volutpat convallis. Maecenas ullamcorper sed urna non tristique.</p>
                        <div className="flex gap-10">
                            <button className="font-quicksand border-2 border-text_gold text-text_gold p-4">MAP LOCATION</button>
                        </div>
                    </motion.div>
                </div>

                <div className="flex-1">
                    <p className="text-white font-open_sans">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus id dui sed lorem maximus tristique. Nam magna diam, suscipit varius elit eget, finibus egestas massa.</p>
                </div>
            </div>
        </section>
    )
}

export default Studio