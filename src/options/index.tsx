import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Options from "./Options/Options";
import Panel from "./Panel/Panel";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Options/>}/>
        <Route path="panel" element={<Panel/>}/>
      </Routes>
    </HashRouter>
  );
}


const rootElement = document.getElementById("root");

if(!rootElement)
  throw new Error("Failed to find the root element");

const Root = ReactDOM.createRoot(rootElement);

Root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);