import React from "react";
import Project from "./Project";
import { projectData } from "@/lib/constants";

function Projects() {
  const projectItems = projectData.map((project, index) => (
    <Project
      key={index}
      image={project?.image}
      title={project?.title}
      githubLink={project?.githubLink}
      appUrl={project?.appUrl}
      desc={project?.desc}
      highlights={project?.highlights}
      stacks={project?.stacks}
      isLive={project?.isLive}
    />
  ));

  return <section className=" flex flex-col space-y-5">{projectItems}</section>;
}

export default Projects;
