import React from "react";
import ReactDOM from "react-dom";
import { useCss, k } from "kremling";

import "../variables.css";

function Options() {
  const scope = useCss(scss);

  return (
    <form {...scope}>
      <h1>Options</h1>
      {/* options goes here... */}
    </form>
  );
}

const scss = k`
  form {
    background-color: red;
    h1 {
      color: var(--text-color);
    }
  }
`;

ReactDOM.render(<Options/>, document.getElementById("root"));