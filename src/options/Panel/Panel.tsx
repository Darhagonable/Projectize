import { DragDropContext } from "@hello-pangea/dnd";
import { useState } from "react";
import { useChromeStorageSync } from "use-chrome-storage";
import ProjectList from "Components/ProjectList";
import dragHandler from "Utils/dragHandler";
import mockData from "Utils/mockData";

const orientation: Record<Position, Orientation> = {
  "Top": "horizontal",
  "Bottom": "horizontal",
  "Left": "vertical",
  "Right": "vertical"
};

export default function Panel() {
  const [projects, setProjects] = useState(mockData);
  const [position] = useChromeStorageSync<Position>("position");

  return (
    <div>
      <h1>Panel</h1>
      {position && (
        <DragDropContext onDragEnd={(result) => dragHandler(result, projects, setProjects)}>
          <ProjectList projects={projects} orientation={orientation[position]}/>
        </DragDropContext>
      )}
    </div>
  );
}