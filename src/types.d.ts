interface ChromeStorage {
  position: "Top" | "Bottom" | "Right" | "Left"
}

interface Tab {
  id: string
  name: string
}

interface ChromeWindow {
  id: string
  name: string
  tabs: Array<Tab>
}

interface Project {
  id: string
  name: string
  windows: Array<ChromeWindow>
}