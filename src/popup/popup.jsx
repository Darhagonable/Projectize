import React from "react";
import ReactDOM from "react-dom";

import WindowList from "../components/WindowList";
import {
  handleSaveSession,
  loadLastSavedSession
} from "./actions";

import "./style.scss";

function Popup() {

  const getDisplays = () => {
    chrome.system.display.getInfo((layout) => console.log(layout))
  }

  return (
    <React.Fragment>
      <button onClick={handleSaveSession}>Save entire Session</button>
      <button onClick={loadLastSavedSession}>Load Session</button>
      <button onClick={getDisplays}>Log Display Info</button>
      <WindowList/>
    </React.Fragment>
  );
}

ReactDOM.render(<Popup/>, document.getElementById("root"));