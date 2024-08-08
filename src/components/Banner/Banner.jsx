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
        <div
          className="flex items-center"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div className="">
            <h1 className="text-4xl font-bold mb-5">I am Amio</h1>
            <div className="text-7xl font-bold gradient-text">
              <p className="mb-5">Web Developer +</p>
              <p className="">UX Designer</p>
            </div>
            <p className="py-6 text-xl">
              I am a graduate from Metropolitan University, Bangladesh. With a
              strong dedication to advancing my skills in web development, and
              immersed myself in the world of technology.
            </p>
            <div className="flex items-center mt-5">
              <a
                href="../../../public/Resume.pdf"
                download={`Resume.pdf`}
              >
                <button className="download-btn">
                  Download CV
                  <FontAwesomeIcon className="ms-2" icon={faDownload} />
                </button>
              </a>

              <ul className="mx-8">
                <li className="social-link">
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="social-link">
                  <a
                    target={`_blank`}
                    href="https://www.linkedin.com/in/amio-das-8a420a191/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className="social-link">
                  <a target={`_blank`} href="https://github.com/Amiodas">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
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
