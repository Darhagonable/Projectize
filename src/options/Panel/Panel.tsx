import ProjectList from "Components/ProjectList";
import { useChromeStorageSync } from "use-chrome-storage";

export default function Panel() {
  const [position] = useChromeStorageSync<Position>("position");

  const orientation: Record<Position, Orientation> = {
    "Top": "horizontal",
    "Bottom": "horizontal",
    "Left": "vertical",
    "Right": "vertical"
  };

  return (
    <div>
      <h1>Panel</h1>
      {position && <ProjectList orientation={orientation[position]}/>}
    </div>
  );
}