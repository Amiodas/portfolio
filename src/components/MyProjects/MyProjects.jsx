import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

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
    <div>
      <div className="container hero min-h-screen mx-auto">
        <div className="hero-content text-center">
          {/* <img src={image} alt="" /> */}
          <div className="">
            <Title title={title} description={description} />

            <div>
              <div className="bg-teal-500 space-x-1 rounded-full inline-block px-2">
                <button className="btn rounded-full">All</button>
                <button className="btn rounded-full">Web Development</button>
                <button className="btn rounded-full">UI/UX</button>
              </div>
            </div>
            <div>
              {(loading === false)  ? (
                <div className="grid grid-cols-2">
                  {displayProjects?.map((project) => (
                    <div key={project.id} className="card border m-5">
                      <div className="card-body">
                        <img
                          className="h-80 inline"
                          src={project.imageURL}
                          alt={project.projectName}
                        />
                        <p className="text-xl mt-3 font-bold">
                          {project.projectName}
                        </p>

                        <Link
                          to={`project-details/${project.id}`}
                          className="btn btn-primary font-bold"
                        >
                          <button>Project Details</button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="">Loading...</div>
              )}
            </div>
            <div className="mt-5 mb-5">
              <button className="btn btn-primary" onClick={handleShowAllData}>
                Show All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
