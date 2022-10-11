import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import dragHandler from "Utils/dragHandler";
import mockData from "Utils/mockData";
import ProjectCard from "./ProjectCard";

const orientToDirect: Record<Orientation, "row" | "column"> = {
  horizontal: "row",
  vertical: "column"
};

interface Props {
  orientation: Orientation
}

export default function ProjectList({ orientation }: Props) {
  const [projects, setProjects] = useState(mockData);

  const spacing = 2;

  return (
    <DragDropContext onDragEnd={(result) => dragHandler(result, projects, setProjects)}>
      <Droppable droppableId="droppable" type="droppableItem" direction={orientation}>
        {({innerRef, placeholder}, snapshot) => (
          <Stack spacing={spacing} direction={orientToDirect[orientation]} ref={innerRef} sx={[snapshot.isDraggingOver && {pointerEvents: "none"}]}>
            <Box m={-spacing / 2}/>
            {projects.map((project, index) => ({
              horizontal: <ProjectCard key={project.id} project={project} index={index}/>,
              vertical: <ProjectCard key={project.id} project={project} index={index}/>
            }[orientation]))}
            {placeholder}
          </Stack>
        )}
      </Droppable>
    </DragDropContext>
  );
}