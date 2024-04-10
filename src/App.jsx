import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import MyProjects from "./components/MyProjects/MyProjects";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";

function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <About />
    <MyProjects />
    <Experience />
    <Skill />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
