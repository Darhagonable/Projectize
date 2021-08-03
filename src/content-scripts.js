import React from "react";
import ReactWebComponent from "react-web-component";
import Panel from "./panel/panel";

chrome.runtime.onMessage.addListener((msg) => {
  if(msg == "toggle"){
    toggle();
  }
})

document.addEventListener('click', function(event) {
  let elem = document.querySelector("projectize-panel")
  if(!elem.contains(event.target))
    elem.remove()
})

function toggle() {
  let elem = document.querySelector("projectize-panel")

  if(!elem) {
    elem = document.createElement("projectize-panel")
    document.documentElement.appendChild(elem)
  }
  else
    elem.remove()
}


ReactWebComponent.create(<Panel/>, "projectize-panel", false);