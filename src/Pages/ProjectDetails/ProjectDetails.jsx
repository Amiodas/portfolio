import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const [loader, setLoader] = useState(false);
  const id = useParams();
  const projects = useLoaderData();
  const [selectedProject, setSelectedProject] = useState();

  useEffect(() => {
    projects?.filter((project) => {
      if (project.id === parseInt(id.id)) {
        setLoader(true);
        setSelectedProject(project);
        setLoader(false);
      }
    });
  }, [projects, id, loader]);

  console.log(selectedProject);
  return (
    <div>
      <section>
        <div className="wave">
          <div>
            <h1 className="text-[#8750f7] text-center mb-0">
              {selectedProject?.projectName}
            </h1>
            <p className="text-2xl text-center">
              Here you find your dream job.
            </p>
          </div>
        </div>
      </section>
      <div className="container min-h-screen mx-auto">
        <div className="py-16">
          {/* <h2 className="text-3xl font-bold text-[#8750f7]">Project Details</h2> */}
          <div>
            <div>
              {loader !== true ? (
                <div className="">
                  {/* <h3 className="text-[#8750f7] text-center">
                    {selectedProject?.projectName}
                  </h3> */}
                  <img
                    className="text-center"
                    src={selectedProject?.imageURL}
                    alt=""
                  />
                  
                  <p className="mb-2 mt-8 text-lg">
                    <span className="font-bold text-[#8750f7]">Category:</span>{" "}
                    {selectedProject?.category}
                  </p>
                  <p className="mb-2 text-lg">
                    <span className="font-bold text-[#8750f7]">Live link:</span>
                    <a
                      className="underline ml-2"
                      target={`_blank`}
                      href={selectedProject?.liveLink}
                    >
                      {selectedProject?.liveLink}
                    </a>
                  </p>
                  <p className="mb-2 text-lg">
                    <span className="font-bold text-[#8750f7]">Git link:</span>
                    <a
                      className="underline ml-2"
                      target={`_blank`}
                      href={selectedProject?.gitLink}
                    >
                      {selectedProject?.gitLink}
                    </a>
                  </p>
                  <p className="mb-5 text-lg">
                    <span className="font-bold mr-2 text-[#8750f7]">
                      Technologies:
                    </span>
                    {selectedProject?.technologies?.map((technology, index) => (
                      <span
                        key={index}
                        className="bg-[#8750f7] mr-2 p-2 rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </p>

                  <p className="text-lg mt-5">
                    At Chef Squad, we bring culinary creativity to your
                    fingertips. Here, you can explore an array of mouth-watering
                    recipes crafted by talented chefs from around the world. Our
                    website offers a seamless experience where you can easily
                    add your favorite recipes to a personalized list, ensuring
                    your culinary inspirations are always just a click away.
                    We've integrated a blog section filled with engaging and
                    informative content to elevate your cooking journey. You can
                    even download these blogs to enjoy offline! Technologies
                    Used: Frontend: HTML5, CSS3, React, React Router, React PDF
                    Downloader Backend: Node.js, MongoDB, Express.js
                    Authentication: Firebase With a user-friendly interface
                    powered by React and Firebase authentication, Chef Squad
                    ensures a smooth and secure browsing experience. Our
                    backend, built with Node.js, Express.js, and MongoDB,
                    guarantees robust performance and reliability.
                  </p>
                </div>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
