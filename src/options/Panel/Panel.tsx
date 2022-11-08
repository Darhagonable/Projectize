import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { useChromeStorageSync } from "use-chrome-storage";
import ProjectList from "Components/ProjectList";
import dragHandler from "Utils/dragHandler";
import mockData from "Utils/mockData";
import WindowsList from "Components/WindowsList";

const orientation: Record<Position, Orientation> = {
  "Top": "horizontal",
  "Bottom": "horizontal",
  "Left": "vertical",
  "Right": "vertical"
};

export default function Panel() {
  const [projects, setProjects] = useState(mockData);
  const [position] = useChromeStorageSync<Position>("position");

  const [windows, setWindows] = useState<chrome.windows.Window[]>([]);

  function getWindows() {
    chrome.windows.getAll({populate: true}, setWindows);
  }

  useEffect(() => {
    getWindows();

    const windowEvents = Object.specificValues(chrome.windows, ["onBoundsChanged", "onCreated", "onFocusChanged", "onRemoved"]);
    const tabEvents = Object.specificValues(chrome.tabs, ["onActivated", "onAttached", "onCreated", "onDetached", "onMoved", "onRemoved", "onReplaced", "onUpdated"]);

    windowEvents.forEach((event) => event.addListener(getWindows));
    tabEvents.forEach((event) => event.addListener(getWindows));

    return () => {
      windowEvents.forEach((event) => event.removeListener(getWindows));
      tabEvents.forEach((event) => event.removeListener(getWindows));
    };
  }, []);

  return (
    <div>
      <h1>Panel</h1>
      {position && (
        <DragDropContext onDragEnd={(result) => dragHandler(result, projects, setProjects)}>
          <ProjectList projects={projects} orientation={orientation[position]}/>
          <WindowsList windows={windows as unknown as Array<ProjectizeWindow>} projectId={-1} orientation={orientation[position]}/>
        </DragDropContext>
      )}
    </div>
  );
}