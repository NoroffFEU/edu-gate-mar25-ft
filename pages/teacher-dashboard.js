export default function teacherDashboard(){
    return /*HTML*/`
    <div>
    <nav id="sidebar">
        <ul>
            <li><a href=""><img src="../public/icons/dashboard.png" alt="dashboard icon"></a></li>
            <li><a href=""><img src="../public/icons/results.png" alt="results icon"></a></li>
            <li><a href=""><img src="../public/icons/user-management.png" alt="user management icon"></a></li>
            <li><a href=""><img src="../public/icons/top-students.png" alt="top students icon"></a></li>
            <li><a href=""><img src="../public/icons/logout.png" alt="logout icon"></a></li>
        </ul>
    </nav>
    <h1>Dashboard</h1>
        <img src="../public/img/Student initials.png" alt="student initials icon">
        <p>Joe Bloggs</p>
        <p>Teacher at Edugate school</p>
        <div class="options">
            <img src="../public/icons/top-students.png" alt="top students icon">
            <p>Top students</p>
            <img src="../public/icons/add-results.png" alt="add results icon">
            <p>Add results</p>
            <img src="../public/icons/results.png" alt="results icon">
            <p>View results</p>
            <img src="../public/icons/profile-icon.png" alt="profile icon">
            <p>See profile</p>
            <img src="../public/icons/logout.png" alt="log out icon">
            <p>Log out</p>
        </div>
    </div>`
}

teacherDashboard();