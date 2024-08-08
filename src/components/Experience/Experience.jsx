import {
  faGraduationCap,
  faPlus,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Experence.css"

const Experience = () => {
  return (
    <div
      id="experiences"
      className="container grid grid-cols-2 gap-16 min-h-screen mx-auto my-16 py-16"
    >
      <div className="space-y-6">
        <h1
          className="text-5xl font-bold mb-12 space-x-4"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <FontAwesomeIcon className="text-[#8750f7]" icon={faUserGear} />
          <span className="gradient-text">My Experience</span>
        </h1>
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
          <div className="card bg-[#140c1c] experience p-5 space-y-2">
            <p className="text-xl text-[#8750f7] font-bold">2020 - 2022</p>
            <p className="text-white text-2xl font-bold">Frontend Engineer</p>
            <p className="text-xl">Console IT, Sylhet.</p>
          </div>
          <div className="card bg-[#140c1c] experience p-5 space-y-2">
            <p className="text-xl text-[#8750f7] font-bold">2018 - 2019</p>
            <p className="text-white text-2xl font-bold">ICT Lecturer</p>
            <p className="text-xl">Mother Coaching Center, Sylhet.</p>
          </div>
          <div className="card bg-[#140c1c] experience p-5 space-y-2">
            <div className="flex justify-center items-center gap-3  text-[#8750f7] py-8">
              <p className="text-center mb-2 text-xl font-semibold">Next one</p>
              <FontAwesomeIcon className="text-xl -mt-2" icon={faPlus} />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h1
          className="text-5xl font-bold mb-12 space-x-4"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <FontAwesomeIcon className="text-[#8750f7]" icon={faGraduationCap} />
          <span className="gradient-text">My Education</span>
        </h1>
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
          <div className="card bg-[#140c1c] education p-5 space-y-2">
            <p className="text-xl text-[#8750f7] font-bold">2017 - 2022</p>
            <p className="text-white text-2xl font-bold">
              Bsc in Computer Science and Engineering
            </p>
            <p className="text-xl">Metroploitan University, Sylhet.</p>
          </div>

          <div className="card bg-[#140c1c] education p-5 space-y-2">
            <p className="text-xl text-[#8750f7] font-bold">2014 - 2015</p>
            <p className="text-white text-2xl font-bold">
              Higher Secondary Certificate
            </p>
            <p className="text-xl">
              Sylhet Science & technology college, Sylhet.
            </p>
          </div>

          <div className="card bg-[#140c1c] education p-5 space-y-2">
            <p className="text-xl text-[#8750f7] font-bold">2012 - 2013</p>
            <p className="text-white text-2xl font-bold">
              Secondary School Certificate
            </p>
            <p className="text-xl">
              Shahjalal University School & college, Sylhet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
