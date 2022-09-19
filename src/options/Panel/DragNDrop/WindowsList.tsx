import { Droppable } from "@hello-pangea/dnd";
import WindowCard from "./WindowCard";

const grid = 8;

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  margin: "10px 0"
});

interface Props {
  windows: Array<ChromeWindow>
  type: string
}

export default function WindowsList({ windows, type }: Props) {
  return (
    <Droppable droppableId={type} type="droppableSubItem">
      {(provided, snapshot) => (
        <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
          {windows.map((window, index) => (
            <WindowCard key={window.id} window={window} index={index}/>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
