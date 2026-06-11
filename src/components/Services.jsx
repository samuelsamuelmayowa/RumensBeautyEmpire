import { motion } from "framer-motion";
import { GiHairStrands, GiComb, GiQueenCrown } from "react-icons/gi";
import { FaSpa } from "react-icons/fa";

const services = [
  {
    title: "Luxury Braids",
    description:
      "Beautiful, neat, and long-lasting braids crafted with clean parting, comfort, and a premium finish.",
    icon: <GiHairStrands />,
  },
  {
    title: "Cornrows",
    description:
      "Detailed cornrow styles designed to protect your natural hair while giving you a clean and elegant look.",
    icon: <GiComb />,
  },
  {
    title: "Wig Install",
    description:
      "Flawless wig installation with a natural-looking finish, secure fitting, and beautiful styling.",
    icon: <GiQueenCrown />,
  },
  {
    title: "Hair Styling",
    description:
      "Professional styling for everyday beauty, special occasions, birthdays, photoshoots, and events.",
    icon: <FaSpa />,
  },
];

const Services = () => {
  return (
    <section className="relative w-full bg-[#FFF9F0] px-6 py-32 md:px-20 overflow-hidden">
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-yellow-300/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-bold font-quicksand tracking-[0.35em] text-text_gold uppercase"
          >
            Services
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl md:text-6xl font-extrabold text-black"
          >
            Premium Hair Services
          </motion.h1>

          <p className="mt-5 text-gray-600 text-lg">
            From protective styles to flawless wig installs, every service is
            created to enhance your beauty and confidence.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:border-text_gold hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-8 grid h-16 w-16 place-content-center rounded-full bg-text_gold text-3xl text-black shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-2xl font-extrabold text-black mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mt-8 h-[3px] w-14 rounded-full bg-text_gold transition-all duration-300 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
// import { motion } from "framer-motion";
// import { FaFilm, FaMusic  } from "react-icons/fa";
// import { MdSmartDisplay } from "react-icons/md";
// import { ImVideoCamera } from "react-icons/im";

// const services = [
//   {
//     title:  "CREATIVE DIRECTION",
//     description: "We provide end-to-end film production services, from concept development and scripting to filming and post-production. Our team delivers visually compelling and story-driven content tailored to your audience and objectives.",
//     icon: <FaFilm />,
//   },
//   {
//     title: "WEDDINGS",
//     description: "Our wedding coverage is designed to be elegant, unobtrusive, and emotionally resonant—capturing every meaningful moment so you can relive your special day for years to come",
//     icon: <MdSmartDisplay />,
//   },
//   {
//     title: "EVENTS",
//     description: "From corporate functions to private celebrations, we specialize in documenting events with professionalism and creativity, ensuring every detail and interaction is captured with clarity and purpose",
//     icon: <ImVideoCamera />,
//   },
//   {
//     title: "FILM PRODUCTION",
//     description: "We offer strategic creative direction that brings your vision to life—from visual branding to storytelling—guiding each project with a cohesive aesthetic and clear artistic intent.",
//     icon: <FaMusic />,
//   },
// ];

// const Services = () => {
//   return (
//     <section className="w-full bg-dark2 py-32 px-4 md:px-20 overflow-hidden">
//       <div className="text-center space-y-16 py-20 lg:px-10 bg-[url('./assets/images/servicebg.png')] bg-contain bg-fixed">
//         <div className="flex flex-col gap-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-lg font-bold font-quicksand tracking-widest text-text_gold uppercase"
//           >
//             SERVICES
//           </motion.h2>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-[48px] font-bold text-white font-cormorant"
//           >
//             WHAT SERVICES WE OFFER ?
//           </motion.h1>
//         </div>

//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="flex items-start gap-5 border border-text_gold p-3"
//             >
//               <div className="text-5xl">{service.icon}</div>
//               <div className="text-left">
//                 <h3 className="text-white text-[21px] font-bold font-cormorant text-xl mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-white font-open_sans font-normal text-sm">{service.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
