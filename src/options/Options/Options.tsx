import { useChromeStorageSync } from "use-chrome-storage";

const positions: Array<Position> = ["Top", "Bottom", "Right", "Left"];

export default function Options() {
  const [currentPosition, setPosition] = useChromeStorageSync<Position>("position");

  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const newPosition = event.currentTarget.dataset.position as Position;
    setPosition(newPosition);
  }

  return (
    <div>
      <h1>Options</h1>
      {positions.map((position) => (
        <button
          key={position}
          data-position={position}
          onClick={handleButtonClick}
          style={position === currentPosition ? {border: "2px solid blue"} : undefined}
        >
          {position}
        </button>
      ))}
    </div>
  );
}