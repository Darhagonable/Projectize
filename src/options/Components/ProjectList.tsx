import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import dragHandler from "Utils/dragHandler";
import mockData from "Utils/mockData";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [projects, setProjects] = useState(mockData);

  return (
    <DragDropContext onDragEnd={(result) => dragHandler(result, projects, setProjects)}>
      <Droppable droppableId="droppable" type="droppableItem" direction="horizontal">
        {({innerRef, placeholder}, snapshot) => (
          <Stack spacing={2} direction="row" ref={innerRef} sx={[snapshot.isDraggingOver && {pointerEvents: "none"}]}>
            <Box m={-1}/>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index}/>
            ))}
            {placeholder}
          </Stack>
        )}
      </Droppable>
    </DragDropContext>
  );
}