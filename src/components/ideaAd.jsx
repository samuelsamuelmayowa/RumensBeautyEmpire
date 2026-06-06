import { Link } from "react-router-dom"

const IdeaAd = () => {
    return (
        <div className="py-32">
            <div className="flex gap-14 lg:flex-nowrap flex-wrap bg-[url('./assets/images/servicebg.png')] bg-cover bg-fixed p-10">
                <div className="lg:flex-[2] flex-1">
                    <h2 className="font-quicksand font-bold text-lg tracking-[30%] text-text_gold">HAVE IDEA IN YOUR MIND ?</h2>
                    <p className="font-cormorant text-white font-bold text-[48px]">LETS HAVE A PROJECT WITH BAM VISUALS</p>
                </div>
                <div className="flex-1 flex flex-col gap-4 items-start">
                    <p className="font-open_sans text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <Link to="/contact">
                        <button className="border-2 border-text_gold text-text_gold p-4 font-quicksand font-bold">CONTACT US</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default IdeaAd