import { Draggable, DraggableStyle } from "@hello-pangea/dnd";
import WindowsList from "./WindowsList";

const getItemStyle = (isDragging: boolean, draggableStyle?: DraggableStyle ): React.CSSProperties => ({
  userSelect: "none",
  padding: 8,
  marginBottom: 8,
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle
});


interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <Draggable key={project.id} draggableId={project.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
          {...provided.dragHandleProps}
        >
          {project.name}
          <WindowsList windows={project.windows} type={project.id}/>
        </div>
      )}
    </Draggable>
  );
}