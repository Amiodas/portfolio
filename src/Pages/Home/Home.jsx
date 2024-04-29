import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Experience from "../../components/Experience/Experience";
import MyProjects from "../../components/MyProjects/MyProjects";
import Skill from "../../components/Skill/Skill";

const Home = () => {
  return (
    <div>
    {/* <div className="loaded">
    <div className="preloader">
      <div className="preloader-heading">
        <h3 className="load-text">Loading...</h3>
      </div>
    </div>
    </div> */}
      <Banner />
      <About />
      <MyProjects />
      <Experience />
      <Skill />
      <Contact />
    </div>
  );
};

export default Home;
