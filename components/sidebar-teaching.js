export default function SidebarTeaching() {
  const sidebarContent = document.getElementById("sidebar");
  const sidebarButton = document.getElementById("sidebar-button");

  sidebarButton.addEventListener("click", function () {
    sidebarContent.classList.toggle("sidebar-display");

    if (sidebarContent.classList.contains("sidebar-display")) {
      sidebarButton.classList.add("close-state-button");
    } else {
      sidebarButton.classList.remove("close-state-button");
    }
  });

  return /*HTML*/ `
<div>
  <button type="button" class="sidebar-button">
    <img src="./public/icons/green-double-arrows-right.png" alt="sidebar toggle button">
  </button>
</div>
<div id="sidebar">
  <a href="#home" class="logo" title="Home">
    <img class="icon" src="./public/icons/dashboard.png" alt="home-logo">
    <span class="label">Home</span>
  </a>

   <a href="#result-management" class="logo" title="Results management">
    <img class="icon" src="./public/icons/add-results.png" alt="management-logo">
    <span class="label">Results management</span>
  </a>

    <a href="#user-management" class="logo" title="User management">
    <img class="icon" src="./public/icons/user-management.png" alt="user-management-logo">
    <span class="label">Users</span>
  </a>

    <a href="#top-students" class="logo" title="Top students">
    <img class="icon" src="./public/icons/top-students.png" alt="top-students-logo">
    <span class="label">Top students</span>
  </a>

    <a href="#logout" class="logo" title="Logout">
    <img class="icon" src="./public/icons/logout.png" alt="logout-logo">
    <span class="label">Logout</span>
  </a>
</div>
  `;
}
