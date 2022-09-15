chrome.runtime.onInstalled.addListener(() => {
  console.log("Extenstion is running (onInstalled triggered)");
});

chrome.action.onClicked.addListener((tab) => {
  if(!tab.id) return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => console.log("Yoooo")
  });
});