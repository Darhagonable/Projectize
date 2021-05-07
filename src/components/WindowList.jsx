import React, {useEffect} from "react";
import browser from "webextension-polyfill";

export default function WindowList() {
  const [windows, setWindows] = React.useState([])

  useEffect(async () => {
    let tempWindows = await browser.windows.getAll({populate:true})
    for(const window of tempWindows) {
      let capturing = browser.tabs.captureVisibleTab(window.id, {quality: 12});
      await capturing.then((imageUri) => window.thumbnail = imageUri, () => window.thumbnail = "noImg");
    }
    setWindows(tempWindows)
  }, [])

  return (
    <ul>
      {windows.map((window) => (
        <li key={window.id}>text {console.log(window)}
          <img src={window.thumbnail} alt="window thumbnail" height="115px" width="226px"/>
        </li>
      ))}
    </ul>
  );
}