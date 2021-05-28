import React from "react";
import { useCss, k } from "kremling";
import browser from "webextension-polyfill";

import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const scope = useCss(scss);

  const [projects, setProjects] = React.useState([])

  const handleAdd = () => {
    setProjects([...projects, {id: "test"}])
  }

  return (
    <div className="list" {...scope}>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index}/>
      ))}
      <button onClick={handleAdd}>New Project</button>
    </div>
  );
}

const scss = k`
  .list {
    display: flex;
    gap: 14px;
    padding: 15px;
  }
`;