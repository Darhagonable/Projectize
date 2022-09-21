import { Draggable } from "@hello-pangea/dnd";

const getItemStyle = (isDragging: boolean): React.CSSProperties => ({
  userSelect: "none",
  background: isDragging ? "lightgreen" : "grey",
  padding: "10px",
  marginBottom: "10px"
});


interface Props {
  window: ChromeWindow
  index: number
}

export default function WindowCard({ window, index }: Props) {
  return (
    <Draggable key={window.id} draggableId={window.id} index={index}>
      {({innerRef, draggableProps, dragHandleProps}, snapshot) => (
        <div
          ref={innerRef}
          {...draggableProps}
          style={{...getItemStyle(snapshot.isDragging), ...draggableProps.style}}
          {...dragHandleProps}
        >
          {window.name}
        </div>
      )}
    </Draggable>
  );
}