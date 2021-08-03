import React from "react";
import { useCss, k } from "kremling";

import ProjectList from "../components/ProjectList";
import WindowList from "../components/WindowList";
import {
  handleSaveSession,
  loadLastSavedSession
} from "./actions";

import "../variables.css";

export default function Panel() {
  const scope = useCss(scss);

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