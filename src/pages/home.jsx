import Films from "../components/films";
import SectionIntro from "../components/SectionIntro";
import StatsAndStory from "../components/StatsAndStory";
import Services from "../components/Services";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Blog from "../components/blog";

const Home = () => {
    let loced;
    return (
        <>
            <SectionIntro />
            <Films />
            <Services/>
            <StatsAndStory/>
            <Testimonial />
            {/* <Contact /> */}
        {/* <Blog /> */}
        </>
    );
}

export default Home
