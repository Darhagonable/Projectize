import React from "react";
import { useCss, k } from "kremling";
import browser from "webextension-polyfill";

import WindowCard from "./WindowCard";

export default function WindowList() {
  const scope = useCss(scss);

  const [windows, setWindows] = React.useState([])

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

  return (
    <div className="list" {...scope}>
      {windows.map((window) => (
        <WindowCard key={window.id} window={window}/>
      ))}
    </div>
  );
}

const scss = k`
  .list {
    display: flex;
    gap: 14px;
    padding: 15px;
  }
`;