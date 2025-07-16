import Navbar from "./components/Navbar";
import HomeComponent from "./components/HomeComponent";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HomeComponent/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}
