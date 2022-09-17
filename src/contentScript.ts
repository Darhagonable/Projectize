class ProjectizePanel extends HTMLElement {
  connectedCallback() {
    const iframe = document.createElement("iframe");
    iframe.src = chrome.runtime.getURL("options/index.html#/panel");
    iframe.style.border = "none";
    iframe.style.position = "fixed";
    iframe.style.zIndex = "2147483647";
    iframe.style.visibility = "hidden";
    this.append(iframe);

    chrome.storage.sync.get("position", ({position}) => {
      this.setPosition(position);
    });

    chrome.storage.onChanged.addListener(({position}) => {
      this.setPosition(position.newValue);
    });
  }

  toggle() {
    const iframe = this.querySelector("iframe");
    if(!iframe)
      throw new Error("Iframe wasn't found");
    iframe.style.visibility === "hidden" ? iframe.style.visibility = "visible" : iframe.style.visibility = "hidden";
  }

  setPosition(position: ChromeStorage["position"]) {
    const iframe = this.querySelector("iframe");
    if(!iframe)
      throw new Error("Iframe wasn't found");

    iframe.style.top = "unset";
    iframe.style.bottom = "unset";
    iframe.style.right = "unset";
    iframe.style.left = "unset";

    switch(position) {
      case "Top":
        iframe.style.top = "0";
        iframe.style.width = "100%";
        iframe.style.height = "250px";
        break;
      case "Bottom":
        iframe.style.bottom = "0";
        iframe.style.width = "100%";
        iframe.style.height = "250px";
        break;
      case "Left":
        iframe.style.left = "0";
        iframe.style.width = "250px";
        iframe.style.height = "100%";
        break;
      case "Right":
        iframe.style.right = "0";
        iframe.style.width = "250px";
        iframe.style.height = "100%";
        break;
    }
  }
}

window.customElements.define("projectize-panel", ProjectizePanel);

const projectizePanel = document.createElement("projectize-panel");
document.documentElement.appendChild(projectizePanel);