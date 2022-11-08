type Position = "Top" | "Bottom" | "Right" | "Left";
type Orientation = "horizontal" | "vertical";

interface ChromeStorage {
  position: Position
}

interface ProjectizeTab {
  id: number
  title: string
  windowId: number
  index?: number
  url?: string
  pinned?: boolean
  favIconUrl?: string
}

interface ProjectizeWindow {
  id: number
  title: string
  tabs: Array<ProjectizeTab>
  top?: number
  left?: number
  height?: number
  width?: number
  state?: windowStateEnum
  thumbnail?: string
}

interface Project {
  id: number
  title: string
  windows: Array<ProjectizeWindow>
}