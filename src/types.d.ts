type Position = "Top" | "Bottom" | "Right" | "Left";
type Orientation = "horizontal" | "vertical";

interface ChromeStorage {
  position: Position
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