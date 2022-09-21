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
      {({innerRef, placeholder}, snapshot) => (
        <div ref={innerRef} style={getListStyle(snapshot.isDraggingOver)}>
          {windows.map((window, index) => (
            <WindowCard key={window.id} window={window} index={index}/>
          ))}
          {placeholder}
        </div>
      )}
    </Droppable>
  );
}
