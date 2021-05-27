import React from "react";
import ReactDOM from "react-dom";
import { useCss, k } from "kremling";

import ProjectList from "../components/ProjectList";
import WindowList from "../components/WindowList";
import {
  handleSaveSession,
  loadLastSavedSession
} from "./actions";

import "../variables.css";

function Popup() {
  const scope = useCss(scss);
  document.getElementById("root").setAttribute(...Object.entries(scope)[0])

  const getDisplays = () => {
    chrome.system.display.getInfo((layout) => console.log(layout))
  }

  return (
    < >
      <button onClick={handleSaveSession}>Save entire Session</button>
      <button onClick={loadLastSavedSession}>Load Session</button>
      <button onClick={getDisplays}>Log Display Info</button>
      <ProjectList/>
      <WindowList/>
    </>
  );
}

const scss = k`
  #root {
    background-color: var(--bg-main);
    border: 1px solid var(--border-main-color);
  }
`;

ReactDOM.render(<Popup/>, document.getElementById("root"));