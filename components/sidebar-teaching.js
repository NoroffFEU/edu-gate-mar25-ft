export default function SidebarTeaching() {

  return /*HTML*/ `
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

