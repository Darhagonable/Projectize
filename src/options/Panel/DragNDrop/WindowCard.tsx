import { Draggable, DraggableStyle } from "@hello-pangea/dnd";

const getItemStyle = (isDragging: boolean, draggableStyle?: DraggableStyle ): React.CSSProperties => ({
  userSelect: "none",
  background: isDragging ? "lightgreen" : "grey",
  padding: "10px",
  marginBottom: "10px",
  ...draggableStyle
});


interface Props {
  window: ChromeWindow
  index: number
}

export default function WindowCard({ window, index }: Props) {
  return (
    <Draggable key={window.id} draggableId={window.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
          {...provided.dragHandleProps}
        >
          {window.name}
        </div>
      )}
    </Draggable>
  );
}