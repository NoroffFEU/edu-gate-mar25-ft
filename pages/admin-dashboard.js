export default function AdminDashboard() {
  return /*HTML*/ `
<main class="dashboard">

  <section class="admin-info">
  <h1>Dashboard</h1>
  
  <img src="public/img/Student initials mobile.png" alt="student initials icon" class="sim-mobile">
  <img src="public/img/Student initials.png" alt="student initials icon" class="sim-desktop">
    <h2 class="admin-name">Joe Bloggs</h2> 
    <p class="admin-role">Admin at Edugate School</p>
  </section>

  <nav class="dashboard-nav"> 

    <a href="/users" class="nav-item ">
    <img src="./public/icons/add-user.png" alt="manage users icon">
    <p>Manage Users</p> </a>

    <a href="/students/create" class="nav-item">
    <img src="./public/icons/add-student.png" alt="add student icon">
    <p>Add Student</p> </a>

    <a href="/teachers/create" class="nav-item ">
    <img src="./public/icons/add-teacher.png" alt="add teacher icon">
    <p>Add Teacher</p> </a>

    <a href="/schools/create" class="nav-item ">
    <img src="./public/icons/add-school.png" alt="add school icon">
    <p>Add School</p> </a>

    <a href="/profiles" class="nav-item profile">
    <img src="./public/icons/user-circle.png" alt="view profiles icon">
    <p>See Profile</p> </a>
    
    <a href="/logout" class="nav-item ">
    <img src="./public/icons/logout.png" alt="logout icon">
    <p>Logout</p> </a>

  </nav>

  </main>
  `;
}
