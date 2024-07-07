import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Experience = () => {
  return (
    <div className="container grid grid-cols-2 gap-16 min-h-screen mx-auto my-16 py-16">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold mb-12 space-x-4">
          <span className="gradient-text">My Experience</span>
        </h1>
        <div className="card bg-[#140c1c] p-5 space-y-2">
          <p className="text-xl text-[#8750f7] font-bold">2020 - 2022</p>
          <p className="text-white text-2xl font-bold">Frontend Engineer</p>
          <p className="text-xl">Console IT, Sylhet.</p>
        </div>
        <div className="card bg-[#140c1c] p-5 space-y-2">
          <p className="text-xl text-[#8750f7] font-bold">2020 - 2022</p>
          <p className="text-white text-2xl font-bold">Frontend Engineer</p>
          <p className="text-xl">Console IT, Sylhet.</p>
        </div>
        <div className="card bg-[#140c1c] p-5 space-y-2">
          <p className="text-xl text-[#8750f7] font-bold">2020 - 2022</p>
          <p className="text-white text-2xl font-bold">Frontend Engineer</p>
          <p className="text-xl">Console IT, Sylhet.</p>
        </div>
      </div>
      <div className="space-y-6">
        <h1 className="text-5xl font-bold mb-12 space-x-4">
          <FontAwesomeIcon className="text-[#8750f7]" icon={faGraduationCap} />
          <span className="gradient-text">My Education</span>
        </h1>
        <div className="card bg-[#140c1c] p-5 space-y-2">
          <p className="text-xl text-[#8750f7] font-bold">2017 - 2022</p>
          <p className="text-white text-2xl font-bold">
            Bsc in Computer Science and Engineering
          </p>
          <p className="text-xl">Metroploitan University, Sylhet.</p>
        </div>

        <div className="card bg-[#140c1c] p-5 space-y-2">
          <p className="text-xl text-[#8750f7] font-bold">2017 - 2022</p>
          <p className="text-white text-2xl font-bold">
            Bsc in Computer Science and Engineering
          </p>
          <p className="text-xl">Metroploitan University, Sylhet.</p>
        </div>

        <div className="card bg-[#140c1c] p-5 space-y-2">
          <p className="text-xl text-[#8750f7] font-bold">2017 - 2022</p>
          <p className="text-white text-2xl font-bold">
            Bsc in Computer Science and Engineering
          </p>
          <p className="text-xl">Metroploitan University, Sylhet.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
