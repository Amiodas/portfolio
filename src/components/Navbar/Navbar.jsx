import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="container mx-auto  bg-base-100 font-bold flex justify-between py-5">
      <div className="">
        <a className="text-xl">amio.das.dip@gmail.com</a>
      </div>
      <div className="navbar-center flex gap-5">
        <div>
          <a href="">Services</a>
        </div>
        <div>
          <a href="">Works</a>
        </div>
        <div>
          <a href="">Resume</a>
        </div>
        <div>
          <a href="">Skills</a>
        </div>
        <div>
          <a href="">Testimonials</a>
        </div>
        <div>
          <a href="">Contact</a>
        </div>
      </div>
      <div className="flex gap-2">
        {/* <a href="CV Amio Das.pdf" download="CV Amio Das.pdf">
          <button className="btn btn-outline">Resume</button>
        </a> */}
        <button className="btn bg-white text-gray-900 btn-ghost">
          <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
