import React from "react";
import { useCss, k } from "kremling";
import { Droppable } from "react-beautiful-dnd";

import WindowCard from "./WindowCard";

export default function WindowList({windows}) {
  const scope = useCss(scss);

  return (
    <Droppable droppableId="windowList" direction="horizontal">
      {({innerRef, droppableProps, placeholder}) => (
        <div className="list" {...scope} ref={innerRef} {...droppableProps}>
          {windows.map((window, index) => (
            <WindowCard key={window.id} window={window} index={index}/>
          ))}
          {placeholder}
        </div>
      )}
    </Droppable>
  );
}

const scss = k`
  .list {
    display: flex;
    padding: 15px;
  }
`;