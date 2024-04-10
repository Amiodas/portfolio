import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image from "../../assets/me.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-background">
      <div className="container min-h-screen mx-auto grid grid-cols-2">
        <div className="flex items-center">
          <div className="">
            <h1 className="text-4xl font-bold text-teal-500 mb-5">I am Amio</h1>
            <div className="text-6xl font-bold">
              <p className="mb-5">Web Developer +</p>
              <p className="">UX Designer</p>
            </div>
            <p className="py-6 text-xl">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div className="flex items-center">
              <button className="btn bg-teal-500 rounded-full text-black hover:text-teal-500">
                Download CV
                <FontAwesomeIcon icon={faDownload} />
              </button>
              <div className="mx-8 space-x-3">
                <button className="btn btn-circle btn-outline btn-sm">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="btn btn-circle btn-outline btn-sm">
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
                <button className="btn btn-circle btn-outline btn-sm">
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="banner-image" src={image} alt="" />
        </div>
      </div>
      <div className="background-text">
        <p>HI</p>
      </div>
      <div className="container flex justify-between mx-auto pb-16">
      <div className="flex">
          <h1 className="text-6xl font-bold">3+</h1>
          <div className="text-xl">
            <p>Years of</p>
            <p>Experience</p>
          </div>
        </div>
      <div className="flex">
          <h1 className="text-6xl font-bold">3+</h1>
          <div className="text-xl">
            <p>Years of</p>
            <p>Experience</p>
          </div>
        </div>
      <div className="flex">
          <h1 className="text-6xl font-bold">3+</h1>
          <div className="text-xl">
            <p>Years of</p>
            <p>Experience</p>
          </div>
        </div>
      <div className="flex">
          <h1 className="text-6xl font-bold">3+</h1>
          <div className="text-xl">
            <p>Years of</p>
            <p>Experience</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
