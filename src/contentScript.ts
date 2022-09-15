class ProjectizePanel extends HTMLElement {
  connectedCallback() {
    const iframe = document.createElement("iframe");
    iframe.src = `chrome-extension://${chrome.runtime.id}/options/options.html`;
    iframe.style.border = "none";
    iframe.style.position = "fixed";
    iframe.style.zIndex = "2147483647";
    this.append(iframe);
  }
}

window.customElements.define("projectize-panel", ProjectizePanel);

const projectizePanel = document.createElement("projectize-panel");
document.documentElement.appendChild(projectizePanel);