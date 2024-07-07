import React from "react";
import Title from "../Title/Title";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const title = "My Quality Service";
  const description =
    "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.";
  return (
    <div className="container min-h-screen flex justify-center items-center mx-auto my-16">
      <div>
        <Title title={title} description={description} />
        <div className="mt-8">
          <div className="qualities grid grid-cols-4 items-center justify-items-center gap-16 p-5">
            <h3 className="text-3xl font-bold">01</h3>
            <h2 className="text-3xl font-bold text-white quality-title">Web Development</h2>
            <p className="text-white">
              I break down complex user experience problems to create intigrity
              focussed solutions that connect thousands of people
            </p>
            <div>
              <FontAwesomeIcon
                className="text-3xl text-white"
                icon={faArrowRight}
              />
            </div>
          </div>
          <div className="qualities grid grid-cols-4 items-center justify-items-center gap-16 p-5">
            <h3 className="text-3xl font-bold">02</h3>
            <h2 className="text-3xl font-bold text-white quality-title">UI/UX Design</h2>
            <p className="text-white">
              I break down complex user experience problems to create intigrity
              focussed solutions that connect thousands of people
            </p>
            <div>
              <FontAwesomeIcon
                className="text-3xl text-white"
                icon={faArrowRight}
              />
            </div>
          </div>
          <div className="qualities grid grid-cols-4 items-center justify-items-center gap-16 p-5">
            <h3 className="text-3xl font-bold">03</h3>
            <h2 className="text-3xl font-bold text-white quality-title">Devops</h2>
            <p className="text-white">
              I break down complex user experience problems to create intigrity
              focussed solutions that connect thousands of people
            </p>
            <div>
              <FontAwesomeIcon
                className="text-3xl text-white"
                icon={faArrowRight}
              />
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default About;
