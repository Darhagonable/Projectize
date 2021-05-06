import browser from "webextension-polyfill";
Object.prototype.pick = function(keys) {
  return Object.fromEntries(keys.map(k=>[k, this[k]]))
};

export const handleSaveSession = async () => {
  let windows = await browser.windows.getAll({populate:true})
  browser.storage.local.set({windows})
}

export const loadLastSavedSession = async () => {
  let {windows} = await browser.storage.local.get("windows")
  generateWindows(windows)
}

async function generateWindows(windows) {
  for (const window of windows) {
    let createData = {};
    switch (window.state) {
      case "minimized":
        createData = window.pick(["state"]);
        break;
      case "normal":
        createData = window.pick(["height", "width", "top", "left"]);
        break;
      case "maximized":
        createData = window.pick(["top", "left"]);
        break;
    }
    
    const currentWindow = await browser.windows.create(createData);
    if (window.state == "maximized")
      browser.windows.update(currentWindow.id, { state: "maximized" });
    generateTabs(currentWindow, window.tabs);
  }
}

function generateTabs(window, tabs) {
  const firstTabId = window.tabs[0].id;
  for(const tab of tabs) {
    const createProperties = tab.pick(["index", "pinned", "active", "url"])
    browser.tabs.create({...createProperties, windowId: window.id})
  }
  browser.tabs.remove(firstTabId);
}