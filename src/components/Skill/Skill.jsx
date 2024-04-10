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

  console.log(skills);
  return (
    <div>
      <div className="container hero min-h-screen mx-auto">
        <div className="hero-content text-center">
          <div className="">
            <Title title={title} description={description} />
            <div className="grid grid-cols-6 gap-8 mx-auto">
              {skills.map((skill) => (
                <div
                  className="card skill border p-4 flex justify-center"
                  key={skill.id}
                >
                  <div className="mx-auto">
                    <img
                      className="skill-image"
                      src={skill.icon}
                      alt={skill.skillName}
                    />
                    <h4>{skill.skillName}</h4>
                  </div>
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
