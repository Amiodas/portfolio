import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import image from "../../assets/me.png";
import "./Banner.css";

const Banner = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Check if count has reached 100
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId); // Stop the interval when count reaches 100
      }
    }, 30);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [count]);
  return (
    <div className="banner-background background-image pt-12">
      <div className="container min-h-screen mx-auto grid grid-cols-2">
        <div className="flex items-center">
          <div className="">
            <h1 className="text-4xl font-bold mb-5">I am Amio</h1>
            <div className="text-7xl font-bold gradient-text">
              <p className="mb-5">Web Developer +</p>
              <p className="">UX Designer</p>
            </div>
            <p className="py-6 text-2xl">
              I break down complex user experinece problems to <br /> create
              integritiy focussed solutions that connect <br /> billions of
              people
            </p>
            <div className="flex items-center mt-5">
              <button className="download-btn">
                Download CV
                <FontAwesomeIcon className="ms-2" icon={faDownload} />
              </button>

              <ul className="mx-8">
                <li className="social-link">
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="social-link">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
                <li className="social-link">
                  <FontAwesomeIcon icon={faGithub} />
                </li>
              </ul>
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
          <h1 className="text-6xl font-bold">{count}+</h1>
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
