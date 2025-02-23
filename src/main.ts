import DropdownView from "./views/DropdownView";
import OperationsView from "./views/OperationsView";
import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindow = getCurrentWindow();

document.addEventListener('DOMContentLoaded', () => {
  const dropdownView = new DropdownView();
  new OperationsView(dropdownView);

  loadWindowButtons();
});

function loadWindowButtons() {
  document
  .getElementById('titlebar-minimize')
  ?.addEventListener('click', () => appWindow.minimize());
document
  .getElementById('titlebar-close')
  ?.addEventListener('click', () => appWindow.close());
}