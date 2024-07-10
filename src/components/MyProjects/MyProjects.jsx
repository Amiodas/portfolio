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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const title = "My Recent Works";
  const description =
    "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.";
  const categories = [
    {
      id: "web_development",
      categoryName: "Web Development",
    },
    {
      id: "ui_design",
      categoryName: "UI/UX",
    },
  ];
  useEffect(() => {
    fetch("my_projects.json")
      .then((res) => res.json())
      .then((data) => setMyProjects(data));
  }, []);

  useEffect(() => {
    const slicedData = myProjects.slice(0, 4);
    setDisplayProjects(slicedData);
  }, [myProjects]);

  useEffect(() => {}, []);

  const handleShowAllData = () => {
    setLoading(true);
    setDisplayProjects(myProjects);
    setLoading(false);
  };
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    const matchedCategory = myProjects.filter(
      (project) => project.category === category
    );
    setDisplayProjects(matchedCategory);
    console.log(displayProjects);
  };
  return (
    <div className="bg-[#0f0715] py-16">
      <div className="container hero min-h-screen mx-auto py-16">
        <div id="projects" className="hero-content text-center">
          {/* <img src={image} alt="" /> */}
          <div className="">
            <Title title={title} description={description} />

            {/* Custom button */}

            <div className="flex justify-center gap-5 my-10">
            <button onClick={handleShowAllData} className="custom-btn font-semibold rounded-full">
              All
            </button>
              {categories.map((category, index) => (
                <div key={index}>
                  <button
                    className={`${selectedCategory} custom-btn font-semibold rounded-full`}
                    onClick={() => handleSelectCategory(category.id)}
                  >
                    {category.categoryName}
                  </button>
                </div>
              ))}
            </div>

            {/* </div> */}
            <div>
              {loading === false ? (
                <div className="grid grid-cols-2 gap-10">
                  {displayProjects?.map((project) => (
                    <div
                      key={project.id}
                      className="card bg-[#140c1c] my-project-card"
                    >
                      <div className="card-body px-10 pt-10 pb-16">
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
              <button
                className="show-all-project-btn"
                onClick={handleShowAllData}
              >
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
