import React from "react";

import {Card, CardHeader, CardTitle, CardActions, CardContent} from "./Card"

export default function ProjectCard({children}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle text="Project Name"/>
        <CardActions>
          <i className="material-icons">open_in_browser</i>
          <i className="material-icons">close</i>
          <i className="material-icons" style={{color: "red"}}>delete_outline</i>
        </CardActions>
      </CardHeader>
      <CardContent list>
        {children}
      </CardContent>
    </Card>
  );
}