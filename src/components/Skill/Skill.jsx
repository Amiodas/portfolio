import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import "./skill.css";

const Skill = () => {
  const title = "My Skills";
  const description = `Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
  excepturi exercitationem quasi. In deleniti eaque aut repudiandae
  et a id nisi.`;

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="bg-[#0f0715] py-16">
      <div className="container hero min-h-screen py-16 mx-auto">
        <div className="hero-content text-center">
          <div className="">
            <Title title={title} description={description} />
            <div className="grid grid-cols-6 gap-8 mx-auto my-10">
              {skills.map((skill) => (
                <div key={skill.skillName}>
                  <div className="skill flex justify-center items-center">
                    <div className="mx-auto">
                      <img
                        className="skill-image"
                        src={skill.icon}
                        alt={skill.skillName}
                      />
                      <p className="mt-5 text-xl text-[#929292] font-semibold skill-percentage">
                        75%
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-[#8750f7] font-semibold">
                    {skill.skillName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
