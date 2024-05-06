import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import "./MyProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const MyProjects = () => {
  const [myProjects, setMyProjects] = useState([]);
  const [displayProjects, setDisplayProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const title = "My Recent Works";
  const description =
    "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.";

  useEffect(() => {
    fetch("my_projects.json")
      .then((res) => res.json())
      .then((data) => setMyProjects(data));
  }, []);

  useEffect(() => {
    const slicedData = myProjects.slice(0, 4);
    setDisplayProjects(slicedData);
  }, [myProjects]);

  const handleShowAllData = () => {
    setLoading(true);
    setDisplayProjects(myProjects);
    setLoading(false);
  };
  return (
    <div className="bg-[#0f0715] py-16">
      <div className="container hero min-h-screen mx-auto py-16">
        <div className="hero-content text-center">
          {/* <img src={image} alt="" /> */}
          <div className="">
            <Title title={title} description={description} />

            {/* Custom button */}
            <div>
              <div className="list my-10">
                <label className="all-category">
                  <span className="category">All</span>
                </label>
                <label className="web-category">
                  <span className="category">Web Development</span>
                </label>
                <label className="design-category">
                  <span className="category">UI/UX</span>
                </label>
                <div className="indicator"></div>
              </div>

              {/* <div className="bg-[#050709] space-x-5 rounded-full inline-block p-2">
                <button className="category-btn rounded-full">All</button>
                <button className="">Web Development</button>
                <button className="">UI/UX</button>
              </div> */}
            </div>
            <div>
              {loading === false ? (
                <div className="grid grid-cols-2 gap-10">
                  {displayProjects?.map((project) => (
                    <div
                      key={project.id}
                      className="card bg-[#140c1c] my-project-card"
                    >
                      <div className="card-body px-10 pt-10">
                        <div className="h-80">
                          <img
                            className="my-project-card-thumbnail inline"
                            src={project.imageURL}
                            alt={project.projectName}
                          />
                        </div>
                        <div className="my-project-card-detail-btn">
                          <Link
                            to={`project-details/${project.id}`}
                            className="font-bold flex justify-between items-center"
                          >
                            <div className="text-left">
                              <p className="text-3xl mb-2 font-bold">
                                {project.projectName}
                              </p>
                              <p className="font-normal">
                                Project was about precision and information.
                              </p>
                            </div>

                            <div>
                              <FontAwesomeIcon
                                className="detail-btn-icon text-2xl"
                                icon={faArrowRight}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="">Loading...</div>
              )}
            </div>
            <div className="mt-16 mb-5">
              <button className="show-all-project-btn" onClick={handleShowAllData}>
                Show All Projects
                <FontAwesomeIcon className="ms-3" icon={faArrowDown} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
