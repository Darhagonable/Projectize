import { Draggable } from "@hello-pangea/dnd";
import WindowsList from "./WindowsList";

const getItemStyle = (isDragging: boolean): React.CSSProperties => ({
  userSelect: "none",
  padding: 8,
  marginBottom: 8,
  background: isDragging ? "lightgreen" : "grey"
});


interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <Draggable key={project.id} draggableId={project.id} index={index}>
      {({innerRef, draggableProps, dragHandleProps}, snapshot) => (
        <div
          ref={innerRef}
          {...draggableProps}
          style={{...getItemStyle(snapshot.isDragging), ...draggableProps.style}}
          {...dragHandleProps}
        >
          {project.name}
          <WindowsList windows={project.windows} type={project.id}/>
        </div>
      )}
    </Draggable>
  );
}