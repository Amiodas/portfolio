import React from "react";
import image from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className=" bg-[#140c1c] py-8">
      <div className="container mx-auto flex flex-col justify-center items-center space-y-6">
        <div className="">
          <img src={image} alt="" />
        </div>
        <div className="flex gap-6 font-bold">
          <div className="nav-link">
            <a href="">Services</a>
            <div className="seleted-nav-link"></div>
          </div>
          <div className="nav-link">
            <a href="">Works</a>
            <div className="seleted-nav-link"></div>
          </div>
          <div className="nav-link">
            <a href="">Resume</a>
            <div className="seleted-nav-link"></div>
          </div>
          <div className="nav-link">
            <a href="">Skills</a>
            <div className="seleted-nav-link"></div>
          </div>
          <div className="nav-link">
            <a href="">Testimonials</a>
            <div className="seleted-nav-link"></div>
          </div>
          <div className="nav-link">
            <a href="">Contact</a>
            <div className="seleted-nav-link"></div>
          </div>
        </div>
        <div className="flex-auto">
          <p className="text-[#8750f7]">© 2024 All rights reserved by Amio Das</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
