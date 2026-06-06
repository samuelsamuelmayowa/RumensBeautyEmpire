import { FaPhone, FaLocationArrow } from "react-icons/fa"
import { FaMessage, FaUser } from "react-icons/fa6"
import { useLocation } from "react-router-dom"


const Contact = () => {
    const { pathname } = useLocation()
    return (
        <section className={`${pathname === "/contact" ? "bg-dark2" : "bg-[#949191]"} lg:p-32 md:p-10 p-4 py-20`}>
        
        </section>
    )
}

export default Contact