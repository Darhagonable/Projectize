import React from "react";
import ReactDOM from "react-dom";
import browser from "webextension-polyfill";
import { useCss, k } from "kremling";
import { DragDropContext } from "react-beautiful-dnd";

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

  const [windows, setWindows] = React.useState([]);

  React.useEffect(async () => {
    const tempWindows = await browser.windows.getAll({populate:true})
    for(const window of tempWindows) {
      const capturing = browser.tabs.captureVisibleTab(window.id, {quality: 12});
      await capturing.then((imageUri) => window.thumbnail = imageUri, () => window.thumbnail = "noImg");
      const [visibleTab] = await browser.tabs.query({active: true, windowId: window.id});
      window.title = visibleTab.title
    }
    setWindows(tempWindows)
  }, [])

  const onDragEnd = ({ destination, source, draggableId }) => {
    if (!destination || destination.index === source.index)
      return
    const temp = windows
    temp.splice(destination.index, 0, temp.splice(source.index, 1)[0])
    setWindows(temp)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <button onClick={handleSaveSession}>Save entire Session</button>
      <button onClick={loadLastSavedSession}>Load Session</button>
      <button onClick={getDisplays}>Log Display Info</button> 
      <ProjectList/>
      <WindowList windows={windows}/>
    </DragDropContext>
  );
}

const scss = k`
  #root {
    background-color: var(--bg-main);
    border: 1px solid var(--border-main-color);
  }
`;

ReactDOM.render(<Popup/>, document.getElementById("root"));