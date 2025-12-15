/* fetch teachers from JSON file */
async function getTeachers() {
  const response = await fetch("./Data/Teachers.json");
  if (!response.ok) {
    throw new Error("Failed to fetch teacher");
  }
  try {
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
}

/* fetch schools from JSON file */
async function getSchools() {
  const response = await fetch("./Data/Schools.json");
  if (!response.ok) {
    throw new Error("Failed to fetch school");
  }
  try {
    const data = await response.json();
    return data.schools;
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
}

/* Load first teacher and first school into the profile fields */
export async function initTeacherProfile() {
  const teachers = await getTeachers();
  const schools = await getSchools();

  const teacher = teachers[0];
  const school = schools[0];
  const values = document.querySelectorAll(".profile-field .profile-value");

  values[0].textContent = teacher.firstName + " " + teacher.lastName;
  values[1].textContent = "joeblog2020@edugate.no";
  values[2].textContent = "19/11/1988";
  values[3].textContent = teacher.id;
  values[4].textContent = "Teacher";
  values[5].textContent = school.name;
}

export default function TeacherProfilePage() {
  return /*HTML*/ `
<div class="teacher-page-wrapper">
  <nav class="teacher-breadcrumb">
        <a href="#" class="breadcrumb-link">Dashboard</a>
        <span class="breadcrumb-arrow">></span>
        <a href="#" class="breadcrumb-link breadcrumb-link__active">Profile</a>
  </nav>

  <section class="profile-card">
    <div class="profile-card__wrapper">
      <h2 class="profile-title">Profile</h2>

      <div class="profile-avatar">
      <img src="./public/img/Student initials mobile.png" alt="Profile initials" class="avatar-mobile">
      <img src="./public/img/Student initials.png" alt="Profile initials" class="avatar-desktop">
      </div>

      <div class="profile-fields">
        <div class="profile-field">
          <span class="profile-label">Name:</span>
          <span class="profile-value"></span>
        </div>

        <div class="profile-field">
          <span class="profile-label">Email:</span>
          <span class="profile-value"></span>
        </div>

        <div class="profile-field">
          <span class="profile-label full-label">Date of birth:</span>
          <span class="profile-label short-label">DOB:</span>
          <span class="profile-value"></span>
        </div>

        <div class="profile-field">
          <span class="profile-label">ID:</span>
          <span class="profile-value"></span>
        </div>

        <div class="profile-field">
          <span class="profile-label">Position:</span>
          <span class="profile-value"></span>
        </div>

        <div class="profile-field">
          <span class="profile-label">School:</span>
          <span class="profile-value"></span>
        </div>
      </div>  

      <button class="secondary-btn edit-profile-btn">Edit Profile</button>
    </div>  
    </div>
  </section>
   `;
}
