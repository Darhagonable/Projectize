import { Droppable } from "@hello-pangea/dnd";
import { Box, Stack } from "@mui/material";
import WindowCard from "./WindowCard";

const orientToDirect: Record<Orientation, "row" | "column"> = {
  horizontal: "row",
  vertical: "column"
};

const spacing = 1.75;

interface Props {
  windows: Array<ProjectizeWindow>
  projectId: number
  orientation: Orientation
}

export default function WindowsList({ windows, projectId, orientation }: Props) {
  return (
    <Droppable droppableId={String(projectId)} type="droppableSubItem" direction={orientation}>
      {({innerRef, placeholder}, snapshot) => (
        <Stack spacing={spacing} height={1} direction={orientToDirect[orientation]} ref={innerRef} sx={[snapshot.isDraggingOver && {pointerEvents: "none"}]}>
          <Box m={-spacing / 2}/>
          {windows.map((window, index) => ({
            horizontal: <WindowCard key={window.id} window={window} index={index}/>,
            vertical: <WindowCard key={window.id} window={window} index={index}/>
          }[orientation]))}
          {placeholder}
        </Stack>
      )}
    </Droppable>
  );
}
