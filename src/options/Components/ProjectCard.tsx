import { Draggable } from "@hello-pangea/dnd";
import { Card, CardHeader, Divider, IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import WindowsList from "./WindowsList";

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const { palette } = useTheme();

  const hoverStyle = {
    borderColor: palette.primary.main,
    boxShadow: `${palette.primary.main} 0 0 0 1px`
  };

  return (
    <Draggable key={project.id} draggableId={project.id} index={index}>
      {({innerRef, draggableProps, dragHandleProps}, snapshot) => (
        <Card
          ref={innerRef}
          sx={{
            bgcolor: "background.default",
            "&:hover": hoverStyle,
            ...(snapshot.isDragging && hoverStyle)
          }}
          {...draggableProps}>
          <CardHeader
            title={project.name}
            action={
              < >
                <IconButton sx={{p: .5}}>
                  <OpenInBrowserIcon sx={{fontSize: 15}}/>
                </IconButton>
                <IconButton sx={{p: .5}}>
                  <CloseIcon sx={{fontSize: 15}}/>
                </IconButton>
                <IconButton color="error" sx={{p: .5}}>
                  <DeleteOutlineIcon sx={{fontSize: 15}}/>
                </IconButton>
              </>
            }
            titleTypographyProps={{fontSize: 13}}
            sx={{p: 1.4}}
            {...dragHandleProps}
          />
          <Divider/>
          <WindowsList windows={project.windows} type={project.id}/>
        </Card>
      )}
    </Draggable>
  );
}