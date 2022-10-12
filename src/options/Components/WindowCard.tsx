import { Draggable } from "@hello-pangea/dnd";
import { Card, CardHeader, Divider, IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  window: ChromeWindow
  index: number
}

export default function WindowCard({ window, index }: Props) {
  const { palette } = useTheme();

  const hoverStyle = {
    borderColor: palette.primary.main,
    boxShadow: `${palette.primary.main} 0 0 0 1px`
  };

  return (
    <Draggable key={window.id} draggableId={window.id} index={index}>
      {({innerRef, draggableProps, dragHandleProps}, snapshot) => (
        <Card
          ref={innerRef}
          className="window-card"
          sx={{
            bgcolor: "background.paper",
            "&:hover": hoverStyle,
            ...(snapshot.isDragging && hoverStyle)
          }}
          {...draggableProps}
          {...dragHandleProps}
        >
          <CardHeader
            title={window.name}
            action={
              < >
                <IconButton sx={{p: .5}}>
                  <CloseIcon sx={{fontSize: 15}}/>
                </IconButton>
              </>
            }
            titleTypographyProps={{fontSize: 13}}
            sx={{p: 1.4}}
            {...dragHandleProps}
          />
          <Divider/>
        </Card>
      )}
    </Draggable>
  );
}