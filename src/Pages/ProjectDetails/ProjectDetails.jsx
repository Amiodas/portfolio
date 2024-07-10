import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
    <div className="container min-h-screen mx-auto pt-16">
      <div className="py-16">
        <h2 className="text-3xl font-bold text-[#8750f7]">Project Details</h2>
        <div>
          <div>
            {loader === false ? (
              <div>
                <h4>Project Name: {selectedProject?.projectName}</h4>
                <p>Category: {selectedProject?.category}</p>
                <p>
                  Live link:
                  <a href="https://assignment-11-client-3fe02.web.app/">
                    https://assignment-11-client-3fe02.web.app/
                  </a>
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
  );
};

export default ProjectDetails;
