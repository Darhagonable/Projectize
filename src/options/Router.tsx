import { HashRouter, Routes, Route } from "react-router-dom";
import Options from "./Options/Options";
import Panel from "./Panel/Panel";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Options/>}/>
        <Route path="panel" element={<Panel/>}/>
      </Routes>
    </HashRouter>
  );
}