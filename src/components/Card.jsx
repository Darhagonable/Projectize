import React from "react";
import { useCss, k } from "kremling";
import { Draggable } from "react-beautiful-dnd";

export function Card({children, filled, id, index}) {
  const scope = useCss(scss);
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {({innerRef, draggableProps, dragHandleProps}) => (
        <div className={`card ${filled ? "filled" : ""}`} {...scope} ref={innerRef} {...draggableProps} {...dragHandleProps}>
          {children}
        </div>
      )}
    </Draggable>
  );
}

export function CardHeader({children}) {
  return (
    <div className="cardHeader">
      {children}
    </div>
  );
}

export function CardTitle({text}) {
  return (
    <p className="cardTitle">{text}</p>
  );
}

export function CardActions({children}) {
  return (
    <div className="cardActions">
      {children}
    </div>
  );
}

export function CardContent({children, list}) {
  return (
    <div className={`cardContent ${list ? "list" : ""}`}>
      {children}
    </div>
  );
}


const scss = k`
  .card {
    border: 1px solid var(--card-border-color);
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
    overflow: hidden;
    color: var(--text-color);
    margin-right: 14px;

    &.filled {
      background-color: var(--bg-card);
      cursor: pointer;
    }

    &:hover {
      border-color: #4285f4;
      box-shadow: #4285f4 0 0 0 1px;
    }

    .richMedia {
      /*width: 226px;*/
      height: 115px;
      display: block;
    }

    .cardHeader {
      display: flex;
      align-items: center;
      padding: .9em 1em;
      border-bottom: 1px solid var(--card-divider-color);
      .cardTitle {
        font: 13px Roboto;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
      }
      .cardActions {
        display: flex;
        gap: 10px;
        .material-icons {
          font-size: 17px;
          padding: 3px;
          margin: -3px;
          border-radius: 50%;
          cursor: pointer;
          &:hover {
            background-color: var(--btn-hover-bg-color);
          }
        }
      }
    }
  }
`;