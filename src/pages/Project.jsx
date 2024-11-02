import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../constants";
import { MainLayout } from "../layouts/MainLayout";

export const Project = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const projectData = projectsData.find(
    (projectData) => projectData.id === projectId
  );

  useEffect(() => {
    console.log(projectData);
  }, []);

  return (
    <MainLayout>
      <div>
        <div>
          <div>
            <h1>{projectData.title}</h1>
            <button>Live Demo</button>
          </div>
          <p>{projectData.description}</p>
          <div>
            {projectData.techStack.map((skill, index) => (
              <div>{skill}</div>
            ))}
          </div>
        </div>
        <div>
          <p>{projectData.projectDetails.overview}</p>
          <ul>
            {projectData.projectDetails.details.map((detail, index) => (
              <li>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      {projectId === 1 && <p>Showing project one data</p>}
      {projectId === 2 && <p>Showing project two data</p>}
    </MainLayout>
  );
};
