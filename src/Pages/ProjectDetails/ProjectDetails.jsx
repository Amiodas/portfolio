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
    <div className="container min-h-screen mx-auto">
      <h2 className="text-3xl font-bold text-teal-500">Project Details</h2>
      <div>
        <div>
          {loader === false ? (
            <div>
              <h1>{selectedProject?.projectName}</h1>
              <p>Category: {selectedProject?.category}</p>
              <img src={selectedProject?.imageURL} alt="" />
            </div>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
