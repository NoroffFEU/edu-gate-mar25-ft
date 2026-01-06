export default function StudentManageUser() {
 return /*HTML*/ `
    <div class="breadcrumb-top">
        <a href="/student-dashboard" class="breadcrumb-link">Dashboard</a>
        <span class="arrow">></span>
        <a href="/select-user" class="breadcrumb-link">Select user</a>
        <span class="arrow">></span>
        <span class="current">Manage user</span>
    </div>

    <section class="student-manage">

    <h1>Manage user</h1>
    <p>Edit the user info below:</p>

        <form id="manageStudentForm" class="manage-form" novalidate>
          <div class="userInfo-group readonly">
            <label for="idInput" class="userInfo-label">ID:</label>
            <input id="idInput" type="text"
            placeholder="1921840" readonly />
          </div>

          <div class="userInfo-group">
            <label for="first-name" class="userInfo-label">First name:</label>
            <input id="first-name" type="text"
            placeholder="Joe" required data-required/>
          </div>

           <div class="userInfo-group">
            <label for="last-name" class="userInfo-label">Last name:</label>
            <input id="last-name" type="text"
            placeholder="Bloggs" required data-required>
          </div>

          <div class="userInfo-group">
            <label for="grad-year" class="userInfo-label">Grad year:</label>
            <input id="grad-year" type="text"
            placeholder="2020" required data-required/>
          </div>

          <div class="userInfo-group">
            <label for="position" class="userInfo-label">Position:</label>
            <input id="position" type="text"
            placeholder="Student" required data-required/>
          </div>

          <div class="userInfo-group">
            <label for="dateOfBirth" class="userInfo-label">DOB:</label>
            <input id="dateOfBirth" type="text"
            placeholder="01/01/2002" required data-required/>
          </div>

          <div class="userInfo-group">
            <label for="email" class="userInfo-label">Email:</label>
            <input id="email" type="email"
            placeholder="joeblog2020@edugate.no" required data-required/>
          </div>

          <div class="userInfo-group">
            <label for="school" class="userInfo-label">School:</label>
            <input id="school" type="text"
            placeholder="The Academy" readonly />
          </div>

         <div class="manage-btn">
          <button type="submit" class="btn btn--primary mng-btn">Update</button>
          <button type="delete" class="btn btn--alert mng-btn">Delete user</button>
        </div>

        </form>

        </section>

    `;
}
