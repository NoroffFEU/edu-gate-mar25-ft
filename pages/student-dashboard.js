export default function StudentDashboard() {
    
    return /*HTML*/`      
      <section class="student-dashboard">
        <div class="dashboard-container">
          <div class="dashboard-content">
            <h1>Dashboard</h1>
            <div class="avatar-container">
                <div class="avatar-circle">
                    <img src="public/icons/profile-icon.png" alt="User Icon" class="avatar-icon"/>
                </div>
                <h2 class="avatar-name">Joe Bloggs</h2>
                <p class="avatar-school">Student at Edugate school</p>
            </div>
          </div>
        </div>
          <div class="dashboard-options">
          <div class ="logo-container">
            <img src="public/icons/user-circle.png" alt="Profile Icon" class="profile-icon"/>
            <a href="#/profile" class="student-profile">See profile</a>
          </div>
        <div class ="logo-container">
        <img src="public/icons/results.png" alt="Profile Icon" class="profile-icon"/>
        <a href="#/student-results" class="student-results">See results</a>
        </div>

        <div class ="logo-container">
            <img src="public/icons/logout.png" alt="Logout Icon" class="profile-icon"/>
            <a href="#/logout" class="student-logout">Logout</a></div>
         </div>
        </div>
      </section>`
}