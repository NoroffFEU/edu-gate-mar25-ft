export default function teacherDashboard(){
    return /*HTML*/`
    <div>
    <nav id="sidebar">
        <ul>
            <li><a href=""><img src="../public/icons/dashboard.png" alt=""></a></li>
            <li><a href=""><img src="../public/icons/results.png" alt=""></a></li>
            <li><a href=""><img src="../public/icons/user-management.png" alt=""></a></li>
            <li><a href=""><img src="../public/icons/top-students.png" alt=""></a></li>
            <li><a href=""><img src="../public/icons/logout.png" alt=""></a></li>
        </ul>
    </nav>
    <h1>Dashboard</h1>
        <img src="../public/img/Student initials.png" alt="">
        <p>Joe Bloggs</p>
        <p>Teacher at Edugate school</p>
        <div class="options">
            <img src="../public/icons/top-students.png" alt="">
            <p>Top students</p>
            <img src="../public/icons/add-results.png" alt="">
            <p>Add results</p>
            <img src="../public/icons/results.png" alt="">
            <p>View results</p>
            <img src="../public/icons/profile-icon.png" alt="">
            <p>See profile</p>
            <img src="../public/icons/logout.png" alt="">
            <p>Log out</p>
        </div>
    </div>`
}
