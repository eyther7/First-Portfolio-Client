import Hero from "../../component/Hero";
import Skills from "../../component/Skills";
import AboutMe from "../../component/AboutMe";
import Projects from "../../component/Projects";
import Experience from "../../component/Experience";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer";

const Home = () => {
    return (
        <div>
            <div className="border-b border-[#263449] my-6">
                <Hero/>
            </div>
            <div className="border-b border-[#263449] mb-6">
                <Skills/>
            </div>
            <div className="borde-b border-[#263449]">
                <Projects/>
            </div>
            <div className="border-b border-[#263449]">
                <Experience/>
            </div>
            <div className="border-b border-[#263449] ">
                <AboutMe/>
            </div>
            <div className="border-b border-[#263449] ">
                <Contact/>
            </div>
            <div className="border-b border-[#263449] ">
                <Footer/>
            </div>
        </div>
    );
};

export default Home;