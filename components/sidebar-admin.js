export default function SidebarAdmin() {
  setTimeout(() => {
    const sidebarContent = document.getElementById("sidebar");
    const sidebarButton = document.getElementById("sidebar-button");

    if (!sidebarButton || !sidebarContent) return;

    sidebarButton.addEventListener("click", () => {
      sidebarContent.classList.toggle("sidebar-display");

      if (sidebarContent.classList.contains("sidebar-display")) {
        sidebarButton.classList.add("close-state-button");
      } else {
        sidebarButton.classList.remove("close-state-button");
        sidebarButton.id = "sidebar-button";
      }
    });
  });
  return /*HTML*/ `
<div>
  <button type="button" id="sidebar-button">
    <img src="./public/icons/green-double-arrows-right.png" alt="sidebar toggle button">
  </button>
  <div id="sidebar">
    <div>
      <a href="#home" class="logo" title="Home">
        <img class="icon" src="./public/icons/dashboard.png" alt="home-logo">
        <span class="label">Home</span>
      </a>
    </div>
    <div>
      <a href="#result-management" class="logo" title="Results management">
        <img class="icon" src="./public/icons/add-results.png" alt="management-logo">
        <span class="label">Results management</span>
      </a>
    </div>
    <div>
      <a href="#user-management" class="logo" title="User management">
        <img class="icon" src="./public/icons/user-management.png" alt="user-management-logo">
        <span class="label">Users</span>
      </a>
    </div>
    <div>
      <a href="#top-students" class="logo" title="school management">
        <img class="icon" src="./public/icons/school-management.png" alt="school management-logo">
        <span class="label">School management</span>
      </a>
    </div>
    <div>
      <a href="#logout" class="logo" title="Logout">
        <img class="icon" src="./public/icons/logout.png" alt="logout-logo">
        <span class="label">Logout</span>
      </a>
    </div>
  </div>
</div>
  `;
}
