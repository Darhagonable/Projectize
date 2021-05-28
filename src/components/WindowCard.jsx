import React from "react";
//import "./WindowCard.scss"

import {Card, CardHeader, CardTitle, CardActions, CardContent} from "./Card"

export default function WindowCard({window, index}) {
  return (
    // <div className="windowCard">
    //   <div className="header">
    //     <p className="title">Window Name {console.log(window)}</p>
    //     <div className="actionArea">
    //       <i className="material-icons">close</i>
    //     </div>
    //   </div>
    //   <div className="content">
    //     <img className="richMedia" src={window.thumbnail} alt="window thumbnail"/>
    //   </div>
    // </div>

    <Card filled id={window.id} index={index}>
      <CardHeader>
        <CardTitle text={window.title}/>
        <CardActions>
          <i className="material-icons">close</i>
        </CardActions>
      </CardHeader>
      <CardContent>
        <img className="richMedia" src={window.thumbnail} alt="window thumbnail"/>
      </CardContent>
    </Card>
  );
}