import Navbar from "./components/Navbar";
import HomeComponent from "./components/HomeComponent";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";



export default function Home() {
  return (
    <>
    
    <Navbar/>
    <HomeComponent/>
    <AboutMe/>
    <WorkExperience/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </>
  );
}
