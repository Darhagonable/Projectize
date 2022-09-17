class ProjectizePanel extends HTMLElement {
  connectedCallback() {
    const iframe = document.createElement("iframe");
    iframe.src = chrome.runtime.getURL("options/index.html#/panel");
    iframe.style.border = "none";
    iframe.style.position = "fixed";
    iframe.style.zIndex = "2147483647";
    iframe.style.visibility = "hidden";
    this.append(iframe);
  }

  toggle() {
    const iframe = this.querySelector("iframe");
    if(!iframe)
      throw new Error("Iframe wasn't found");
    iframe.style.visibility === "hidden" ? iframe.style.visibility = "visible" : iframe.style.visibility = "hidden";
  }
}

window.customElements.define("projectize-panel", ProjectizePanel);

const projectizePanel = document.createElement("projectize-panel");
document.documentElement.appendChild(projectizePanel);