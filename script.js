const sidebar = document.getElementById("Sidebar");
const sidebarButtonIcon = document.getElementById("ButtonIcon");
const overlay = document.getElementById("Overlay");

function openSidebar() {
  sidebar.classList.toggle("show");
  sidebarButtonIcon.classList.toggle("fa-rotate-90");
  overlay.classList.toggle("visible");
}

//should usually be called when clicked on the overlay
function closeSidebar() {
  sidebar.classList.remove("show");
  sidebarButtonIcon.classList.remove("fa-rotate-90");
  overlay.classList.remove("visible");
}
