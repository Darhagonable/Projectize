import React from "react";
import ReactDOM from "react-dom/client";

function Options() {
  return (
    <div>
      <h1>Options</h1>
      {/* options goes here... */}
    </div>
  );
}


const rootElement = document.getElementById("root");

if(!rootElement)
  throw new Error("Failed to find the root element");

const Root = ReactDOM.createRoot(rootElement);

Root.render(
  <React.StrictMode>
    <Options/>
  </React.StrictMode>
);