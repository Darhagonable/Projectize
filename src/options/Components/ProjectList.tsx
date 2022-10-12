import { Droppable } from "@hello-pangea/dnd";
import { Box, Stack } from "@mui/material";
import ProjectCard from "./ProjectCard";

const orientToDirect: Record<Orientation, "row" | "column"> = {
  horizontal: "row",
  vertical: "column"
};

const spacing = 1.75;

interface Props {
  projects: Array<Project>
  orientation: Orientation
}

export default function ProjectList({ projects, orientation }: Props) {
  return (
    <Droppable droppableId="droppable" type="droppableItem" direction={orientation}>
      {({innerRef, placeholder}, snapshot) => (
        <Stack spacing={spacing} height={1} direction={orientToDirect[orientation]} ref={innerRef} sx={[snapshot.isDraggingOver && {pointerEvents: "none"}]}>
          <Box m={-spacing / 2}/>
          {projects.map((project, index) => ({
            horizontal: <ProjectCard key={project.id} project={project} index={index} orientation={orientation}/>,
            vertical: <ProjectCard key={project.id} project={project} index={index} orientation={orientation}/>
          }[orientation]))}
          {placeholder}
        </Stack>
      )}
    </Droppable>
  );
}