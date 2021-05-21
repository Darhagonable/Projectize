import React from "react";
import "./Card.scss"

export function Card({children, filled}) {
  return (
    <div className={`card ${filled ? "filled" : ""}`}>
      {children}
    </div>
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