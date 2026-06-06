import { motion } from "framer-motion";
import thumbNail from "../assets/images/screencapture-vimeo-1030637546-2025-03-08-21_24_18.png"
import ReactPlayer from 'react-player'
import StatsAndStory from "../components/StatsAndStory";
import Studio from "../components/studio";
import CountUpOnView from "../components/countUpOnView";


const About = () => {

  return (
    <main className="bg-black text-white">
      <section className="relative bg-dark pt-52 pb-32 px-6 md:px-32 flex flex-col gap-20 z-[999999]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="font-quicksand text-sm md:text-lg text-text_gold uppercase tracking-widest font-bold">
              CINESTER STUDIO
            </p>
            <h2 className="font-cormorant text-3xl md:text-5xl font-bold text-white mt-2 leading-snug">
              HAVE IDEA FOR YOUR PROJECT ?
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
              When you choose Bamsvisuals, you&apos;re choosing a personalized cinematic experience tailored just for you.
            </p>
          </motion.div>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-20 items-center">
          <div className="lg:col-span-3">
            <ReactPlayer
              loop={true}
              playing
              muted
              width="500"
              light={thumbNail}
              url={"https://player.vimeo.com/video/1010058915?h=c7c983dfc5&amp%3Bbadge=0&amp%3Bautopause=0&amp%3Bplayer_id=0&amp%3Bapp_id=58479&turnstile=0.jkUrXTWsU2boirbAQbatHJem9fIhqPvDDb8rEi0Y-IKsNU62mRPLomUwTAkfiGvlCzkHCpMsTTCDG_RUoVCDH-gRtiHKOubV0zqY-tS2yUM5s6X7-6y8pB489BpjVwE27ObET7JCltAX5b2BCY6MjW7XzMhuFW_QuKH488KvQk94fMo92N6fdaWPyjy0uozLIIiJvUvTpo9UfNXMjbh_-gEsNEbIZoSWDlU0O2uaVEjKFiT5J8XDIWE_47I9Y1z2LHptJCPpDdY6VFn8h22YWbGGMtVwl8FT2kICaocZZ8RdK8DZ0ihD-3D94XT_K_tL8WjjzBW5jXiSsxVF8uqjM2iM1evHCA2AwcvLWHA4xUwvwrPWO8zzfcE35C8D0Ptv9g8Ve5cwUY1xhL9oiJ1mXBo3THh0R97Z92_Pu05U2Vm8YQRN0_0paeh2mdGhzHgrry7wu_VdXbXorx5aYtDULON__gtps1LQDbeInFq-Paq_o7fzEvJA6HzVg-6o1ufpTzh0ENPgcgRpJqcM6iiDVlZYx-EQIercB6GVCYkHgp8FSqI5gLkEqdVs7CI-t-xE6VNS7dwvaFa3kLTnWcnp6bJpQaY2oeYjEqQ5OpiqCg3dtTg6oJuHNTQUrOGY71t99MDV1VLoSv0bppiC2bx1bgrcNiz5vDJbpjiemnrT9_JeBAuT6PlRL-qB8kPrKzE-3AlqsbxJJIuEZffL0W3PYwHKRZ0KoyFn0mgDCCoi721g0FTloIVEJTdL5tQAOUGGom4u3cbG9x5fQKn2pKSPsje2dblXg9uZX7EJyU58PndaUD21Z-O5KNkmfkX1v5cAZqB3-SXZ2yGh7cYEcgYLkNJlrdsypXLL9Zhfuxl4ubY.RK23gTeQPbRuaQpL6Bw9Rg.eeef0194d603fbe9324fbbe009331d5938b2553ac12b4375b8d5690d30f00412&ref="} />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h1 className="font-cormorant text-white text-2xl font-bold">DO NOT HESITATE TO CHOOSE BAM VISUALS  AS YOUR STUDIO PRODUCTION</h1>
            <p className="font-normal text-[#F0F0F0] font-open_sans text-base">We take the time to get to know each couple so the film captures the event in a way that reflects who they are. For us, wedding films are more than just a video. They&apos;re a keepsake that tells your love story in a way only film can. And since every couple is unique, we approach each wedding with fresh eyes and an open heart, ready to create something special.</p>
            <div className="flex justify-around items-center">
              <div className="text-center">
                <h2 className="font-quicksand font-bold text-[60px] text-text_gold">
                   {/* <CountUpOnView to={250} className="" />+ */}
                </h2>
                {/* <p className="font-quicksand font-bold text-base text-white">WEDDING FILMS</p> */}
              </div>
              <div className="text-center">
                <h2 className="font-quicksand font-bold text-[60px] text-text_gold">
                  {/* <CountUpOnView to={78} className="" />+ */}
                </h2>
                {/* <p className="font-quicksand font-bold text-base text-white">BIRTHDAY VIDEOS</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="lg:grid hidden -top-[80px] right-0 left-0 grid-cols-4 px-20 bg-dark2">
        <motion.div variants={fadeIn("up", 0.2, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="p-6 bg-text_gold">
          <h2 className="font-cormorant font-bold text-xl">WE ARE THE BEST STUDIO PRODUCTION</h2>
          <p className="font-open_sans font-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>
        <motion.img variants={fadeIn("up", 0.4, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} src={award1} className="" alt="" />
        <motion.img variants={fadeIn("up", 0.6, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} src={award2} className="" alt="" />
        <motion.img variants={fadeIn("up", 0.8, 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true }} src={award3} className="" alt="" />
    </div> */}
      <StatsAndStory />
      {/* <Studio /> */}
    </main>
  );
};

export default About;
