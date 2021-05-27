import browser from "webextension-polyfill";

Object.prototype.pick = function(keys) {
  return Object.fromEntries(keys.map(k=>[k, this[k]]))
};

export const handleSaveSession = async () => {
  const windows = await browser.windows.getAll({populate:true})
  browser.storage.local.set({windows})
}

export const loadLastSavedSession = async () => {
  const {windows} = await browser.storage.local.get("windows")
  windows.map(window => createWindow(window))
}

async function createWindow(window) {
  const createData = window.pick(["height", "width", "top", "left"]);
  const currentWindow = await browser.windows.create(createData);
  browser.windows.update(currentWindow.id, window.pick(["state"]));
  generateTabs(currentWindow, window.tabs);
}

function generateTabs(window, tabs) {
  const firstTabId = window.tabs[0].id;
  for(const tab of tabs) {
    const createProperties = tab.pick(["index", "pinned", "active", "url"])
    browser.tabs.create({...createProperties, windowId: window.id})
  }
  browser.tabs.remove(firstTabId);
}