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
          <h2 className="text-[#8750f7] text-center">
            {selectedProject?.projectName}
          </h2>
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
                  <p className="mb-2">
                    <span className="font-bold text-[#8750f7]">Category:</span>{" "}
                    {selectedProject?.category}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold text-[#8750f7]">Live link:</span>
                    <a
                      className="underline ml-2"
                      target={`_blank`}
                      href={selectedProject?.liveLink}
                    >
                      {selectedProject?.liveLink}
                    </a>
                  </p>
                  <p className="mb-2">
                    <span className="font-bold text-[#8750f7]">Git link:</span>
                    <a
                      className="underline ml-2"
                      target={`_blank`}
                      href={selectedProject?.gitLink}
                    >
                      {selectedProject?.gitLink}
                    </a>
                  </p>
                  <p className="mb-5">
                    <span className="font-bold text-[#8750f7]">
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

                  <img src={selectedProject?.imageURL} alt="" />
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
