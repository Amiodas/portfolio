import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="container navbar-background mx-auto font-bold flex items-center justify-between py-5 mt-5">
      <div className="flex items-center gap-6">
        <a href="/"><img src={logo} width={60} alt="" /></a>
        <a className="text-xl">amio.das.dip@gmail.com</a>
      </div>
      <div className="navbar-center flex items-center gap-8">
        <div className="nav-link">
          <a href="#services">Services</a>
          <div className="seleted-nav-link"></div>
        </div>
        <div className="nav-link">
          <a href="#projects">Works</a>
          <div className="seleted-nav-link"></div>
        </div>
        {/* <div className="nav-link">
          <a href="">Resume</a>
          <div className="seleted-nav-link"></div>
        </div> */}
        <div className="nav-link">
          <a href="#experiences">Experience</a>
          <div className="seleted-nav-link"></div>
        </div>
        <div className="nav-link">
          <a href="#skills">Skills</a>
          <div className="seleted-nav-link"></div>
        </div>
        {/* <div className="nav-link">
          <a href="">Testimonials</a>
          <div className="seleted-nav-link"></div>
        </div> */}
        <div className="nav-link">
          <a href="#contact">Contact</a>
          <div className="seleted-nav-link"></div>
        </div>

        {/* <a href="CV Amio Das.pdf" download="CV Amio Das.pdf">
          <button className="btn btn-outline">Resume</button>
        </a> */}
        <button className="custom-btn rounded-full">
          <FontAwesomeIcon
            className="mr-2"
            icon={faPhoneVolume}
          ></FontAwesomeIcon>
          Hire Me!
        </button>
      </div>
    </div>
  );
};

export default Navbar;
