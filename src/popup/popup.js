saveAllTabs.addEventListener("click", async () => {
  let windows = await chrome.windows.getAll({populate:true})
  chrome.storage.local.set({windows})
  console.log("Save:")
  console.log(windows)
});

loadAllTabs.addEventListener("click", async () => {
  chrome.storage.local.get("windows", ({windows}) => {
    generateWindows(windows)
  })
});


Object.prototype.pick = function(keys) {
  return Object.fromEntries(keys.map(k=>[k, this[k]]))
};

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
    const currentWindow = await chrome.windows.create(createData);
    if (window.state == "maximized")
      chrome.windows.update(currentWindow.id, { state: "maximized" });
    generateTabs(currentWindow, window.tabs);
  }
}

function generateTabs(window, tabs) {
  const firstTabId = window.tabs[0].id;
  for(const tab of tabs) {
    const createProperties = tab.pick(["index", "pinned", "active", "url"])
    chrome.tabs.create({...createProperties, windowId: window.id})
  }
  chrome.tabs.remove(firstTabId);
}