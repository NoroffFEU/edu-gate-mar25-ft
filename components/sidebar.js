export default function Sidebar() {
  return /*HTML*/ `
<aside id="sidebar">

    <a href="#home" class="logo">
        <img class="icon" src="./public/icons/dashboard.png" alt="home-logo">
    </a>

    <a href="#result-management" class="logo">
        <img class="icon" src="./public/icons/add-results.png" alt="management-logo">
    </a>

    <a href="#user-management" class="logo">
        <img class="icon" src="./public/icons/user-management.png" alt="user-management-logo">
    </a>

    <a href="#top-students" class="logo">
        <img class="icon" src="./public/icons/top-students.png" alt="top-students-logo">
    </a>

    <a href="#logout" class="logo">
        <img class="icon" src="./public/icons/logout.png" alt="logout-logo">
    </a>

</aside>

  `;
}

