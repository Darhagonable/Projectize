import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import mockData from "./mockData";
import ProjectCard from "./ProjectCard";

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: 8,
  width: 200
});

export default function ProjectList() {
  const [projects, setProjects] = useState(mockData);

  function onDragEnd({ source, destination, type }: DropResult) {
    if (!destination) return;

    const sourceIndex = source.index;
    const destIndex = destination.index;
    if (type === "droppableItem") {
      const newProjects = reorder(projects, sourceIndex, destIndex);
      setProjects(newProjects);
    } else if (type === "droppableSubItem") {
      const itemSubItemMap = projects.reduce<Record<string, ChromeWindow[]>>((acc, item) => {
        acc[item.id] = item.windows;
        return acc;
      }, {});

      const sourceParentId = source.droppableId;
      const destParentId = destination.droppableId;

      const sourceSubItems = itemSubItemMap[sourceParentId];
      const destSubItems = itemSubItemMap[destParentId];

      let newProjects = [...projects];

      /** In this case windows are reOrdered inside same Parent */
      if (sourceParentId === destParentId) {
        const reorderedSubItems = reorder(
          sourceSubItems,
          sourceIndex,
          destIndex
        );
        newProjects = newProjects.map((project) => {
          if (project.id === sourceParentId)
            project.windows = reorderedSubItems;
          return project;
        });
        setProjects(newProjects);
      } else {
        const newSourceSubItems = [...sourceSubItems];
        const [draggedItem] = newSourceSubItems.splice(sourceIndex, 1);

        const newDestSubItems = [...destSubItems];
        newDestSubItems.splice(destIndex, 0, draggedItem);
        newProjects = newProjects.map((project) => {
          if (project.id === sourceParentId) {
            project.windows = newSourceSubItems;
          } else if (project.id === destParentId) {
            project.windows = newDestSubItems;
          }
          return project;
        });
        setProjects(newProjects);
      }
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="droppableItem">
        {({innerRef, placeholder}, snapshot) => (
          <div ref={innerRef} style={getListStyle(snapshot.isDraggingOver)}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index}/>
            ))}
            {placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}