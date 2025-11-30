export default function AdminDashboard() {
  return /*HTML*/ `
<main class="dashboard">

  <section class="admin-info">
  <h1>Dashboard</h1>
    <div class="avatar">JB</div>
    <h2 class="admin-name">Joe Bloggs</h2>  
    <p class="admin-role">Admin at Edugate School</p>
  </section>

  <nav class="dashboard-nav"> 

    <a href="/users" class="nav-item Manage Users">
    <img src="./public/icons/user-circle.png" alt="manage users icon">
    <p>Manage Users</p> </a>

    <a href="/students/create" class="nav-item add-student">
    <img src="./public/icons/add-student.png" alt="add student icon">
    <p>Add Student</p> </a>

    <a href="/teachers/create" class="nav-item add-teacher">
    <img src="./public/icons/add-teacher.png" alt="add teacher icon">
    <p>Add Teacher</p> </a>

    <a href="/schools/create" class="nav-item add-school">
    <img src="./public/icons/add-school.png" alt="add school icon">
    <p>Add School</p> </a>

    <a href="/profiles" class="nav-item profile">
    <img src="./public/icons/user-circle.png" alt="view profiles icon">
    <p>View Profiles</p> </a>
    
    <a href="/logout" class="nav-item logout">
    <img src="./public/icons/logout.png" alt="logout icon">
    <p>Logout</p> </a>

  </nav>

  </main>
  `;
}
