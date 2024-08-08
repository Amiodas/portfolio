import React from "react";
import Title from "../Title/Title";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const title = "My Quality Service";
  const description =
    "I put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.";
  return (
    <div
      id="services"
      className="container min-h-screen flex justify-center items-center mx-auto my-16"
    >
      <div>
        <div data-aos="fade-right" data-aos-delay="400">
          <Title title={title} description={description} />
        </div>
        <div className="mt-8" data-aos="fade-up" data-aos-delay="600">
          <div className="qualities grid grid-cols-4 items-center justify-items-center gap-16 p-5">
            <h3 className="text-3xl font-bold">01</h3>
            <h2 className="text-3xl font-bold text-white quality-title">
              Frontend Development
            </h2>
            <p className="text-white">
              I have more than 3 years of experience in frontend technology. A
              good experience I got by making different types of website.
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
            <h2 className="text-3xl font-bold text-white quality-title">
              Backend Development
            </h2>
            <p className="text-white">
              {`I have just about 2 years of experience with backend technology.
              I'm now focused with it, in order to increase my level up. I have
              experience of rest api and little bit of graphql.`}
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
            <h2 className="text-3xl font-bold text-white quality-title">
              UI/UX Design
            </h2>
            <p className="text-white">
              I also have some hand on UI/UX design. I made some web or app
              design with figma which you could see in my portfolio section.
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
      <div className="fixed bottom-12 right-12">
        <a href="#">
          <FontAwesomeIcon
            className="btn btn-circle home-btn font-light btn-xs rounded-full p-4"
            icon={faArrowUp}
          />
        </a>
      </div>
    </div>
  );
};

export default About;
