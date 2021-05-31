import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(() => {
  console.log("Extenstion is running (onInstalled triggered)")
});



browser.windows.onCreated.addListener(() => {
  console.log("A new window was created")
})

browser.windows.onRemoved.addListener(() => {
  console.log("A window was removed")
})

browser.windows.onBoundsChanged.addListener((test) => {
  console.log("A window had its bounds changed (height, width, top, left (indirectly state))")
  console.log(test)
})



browser.tabs.onCreated.addListener(() => {
  console.log("A new tab was created")
})

browser.tabs.onRemoved.addListener(() => {
  console.log("A tab was removed")
})

browser.tabs.onUpdated.addListener(() => {
  console.log("A tab was updated")
})

browser.tabs.onMoved.addListener(() => {
  console.log("A tab was moved")
})






export const handleSaveSession = async () => {
  const windows = await browser.windows.getAll({populate:true})
  browser.storage.local.set({windows})
}

Object.prototype.pick = function(keys) {
  return Object.fromEntries(keys.map(k=>[k, this[k]]))
};

async function test() {
  let windows = await browser.windows.getAll({populate:true})
  console.log("all data", windows)
  windows = windows.map((window) => window.pick(["height", "width", "top", "left", "state", "tabs", "id"]))
  console.log("after picked data", windows)

  /* const capturing = browser.tabs.captureVisibleTab(window.id, {quality: 12});
  await capturing.then(
    (imgUri) =>  window.thumbnail = imgUri,
    () => window.thumbnail = "noImg"
  ) */


  
  let allWindows = []
  const {windows: storedWindows} = await browser.storage.local.get("windows")
  const storedWindowsSet = new Set(storedWindows)

  label1: for(const window of windows) {
    for(const storedWindow of storedWindowsSet) {
      const matches = compareWindows(window, storedWindow)
      if(matches) {
        storedWindow.id = window.id
        storedWindowsSet.delete(storedWindow)
        allWindows.push(storedWindow)
        continue label1
      }
    }
    allWindows.push(window)
  }
  allWindows = [...allWindows, ...storedWindowsSet]
  console.log(allWindows)
}

test()

handleSaveSession()



function compareWindows(window, storedWindow) {
  if(window.tabs.length !== storedWindow.tabs.length)
    return false
  
  for(const i in window.tabs) {
    if(window.tabs[i].url !== storedWindow.tabs[i].url)
      return false
  }
  return true
}