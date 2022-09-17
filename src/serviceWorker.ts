chrome.runtime.onInstalled.addListener(() => {
  // eslint-disable-next-line no-console
  console.log("Extenstion is running (onInstalled triggered)");
});

chrome.action.onClicked.addListener((tab) => {
  if(!tab.id) return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const panel = document.querySelector<ProjectizePanel>("projectize-panel");
      if(!panel)
        throw new Error("Panel wasn't found");
      panel.toggle();
    }
  });
});