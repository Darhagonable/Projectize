import React, {useEffect} from "react";
import browser from "webextension-polyfill";

import WindowCard from "./WindowCard";
import ProjectCard from "./ProjectCard";

export default function WindowList() {
  const [windows, setWindows] = React.useState([])

  useEffect(async () => {
    const tempWindows = await browser.windows.getAll({populate:true})
    for(const window of tempWindows) {
      const capturing = browser.tabs.captureVisibleTab(window.id, {quality: 12});
      await capturing.then((imageUri) => window.thumbnail = imageUri, () => window.thumbnail = "noImg");
      const [visibleTab] = await browser.tabs.query({active: true, windowId: window.id});
      window.title = visibleTab.title
    }
    setWindows(tempWindows)
  }, [])

  return (
    <div className="list">
      <ProjectCard>
        {windows.map((window) => (
          <WindowCard key={window.id} window={window}/>
        ))}
      </ProjectCard>
    </div>
  );
}