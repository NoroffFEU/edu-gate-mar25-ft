import SidebarTeaching from "../components/sidebar-teaching.js";

export default function TeacherDashboard() {
  return /*HTML*/ `
    <div>
    <div id="sidebar-container">${SidebarTeaching()}</div>
      <div main-content>
        <div class="user-info">
          <h1>Dashboard</h1>
          <img
            src="../public/img/Student initials.png"
            alt="student initials icon"
            class="desktop-img"
          />
          <img
            src="../public/img/Student initials mobile.png"
            alt="student initials icon"
            class="mobile-img"
          />
          <h2>Joe Bloggs</h2>
          <p>Teacher at Edugate school</p>
        </div>
        <div class="options">
          <div class="option">
            <img
              src="../public/icons/top-students.png"
              alt="top students icon"
            />
            <h3>Top students</h3>
          </div>
          <div class="option">
            <img src="../public/icons/add-results.png" alt="add results icon" />
            <h3>Add results</h3>
          </div>
          <div class="option">
            <img src="../public/icons/results.png" alt="results icon" />
            <h3>View results</h3>
          </div>
          <div class="option" class="desktop-img">
            <img src="../public/icons/user-circle.png" alt="profile icon" />
            <h3>See profile</h3>
          </div>
          <div class="option">
            <img src="../public/icons/logout.png" alt="log out icon" />
            <h3>Log out</h3>
          </div>
        </div>
      </div>
    </div>`;
}
