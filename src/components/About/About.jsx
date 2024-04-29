import React from "react";
import Title from "../Title/Title";
import "./About.css"

const About = () => {
  const title = "My Quality Service";
  const description =
    "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.";
  return (
    <div className="container min-h-screen flex justify-center items-center mx-auto">
      <div>
        <Title title={title} description={description} />
        <div className="mt-16 pt-8">
          <div className="qualities grid grid-cols-3 items-center p-5">
            <h3 className="text-3xl font-bold">01</h3>
            <h2 className="text-4xl font-bold">Brandig Design</h2>
            <p className="text-xl">
              I break down complex user experience problems to create intigrity
              focussed solutions that connect thousands of people
            </p>
          </div>
          <div className="qualities grid grid-cols-3 items-center p-5">
            <h3 className="text-3xl font-bold">02</h3>
            <h2 className="text-4xl font-bold">Brandig Design</h2>
            <p className="text-xl">
              I break down complex user experience problems to create intigrity
              focussed solutions that connect thousands of people
            </p>
          </div>
          <div className="qualities grid grid-cols-3 items-center p-5">
            <h3 className="text-3xl font-bold">03</h3>
            <h2 className="text-4xl font-bold">Brandig Design</h2>
            <p className="text-xl">
              I break down complex user experience problems to create intigrity
              focussed solutions that connect thousands of people
            </p>
          </div>
          <div className="qualities grid grid-cols-3 items-center p-5">
            <h3 className="text-3xl font-bold">04</h3>
            <h2 className="text-4xl font-bold">Brandig Design</h2>
            <p className="text-xl">
              I break down complex user experience problems to create intigrity
              focussed solutions that connect thousands of people
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
