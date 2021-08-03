chrome.runtime.onInstalled.addListener(() => {
  console.log("Extenstion is running (onInstalled triggered)")
});


chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, "toggle");
});