import { useEffect, useState } from "react";

const positions: Array<ChromeStorage["position"]> = ["Top", "Bottom", "Right", "Left"];

export default function Options() {
  const [currentPosition, setCurrentPossition] = useState<ChromeStorage["position"]>();

  function getStoredPosition() {
    chrome.storage.sync.get("position", ({position}) => {
      setCurrentPossition(position);
    });
  }

  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const position = event.currentTarget.dataset.position;
    chrome.storage.sync.set({position}, getStoredPosition);
  }

  useEffect(() => {
    getStoredPosition();
  }, []);

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