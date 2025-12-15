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

export async function initTeacherProfile() {
  const teachers = await getTeachers();
  const schools = await getSchools();

  // temporary, to check that it works
  console.log("Teachers from JSON:", teachers);
  console.log("Schools from JSON:", schools);
}

export default function TeacherProfilePage() {
  return /*HTML*/ `
  <section class="profile-card">
    <div class="profile-card__wrapper">
      <h2 class="profile-title">Profile</h2>

      <div class="profile-avatar">
      <img src="./public/img/Student initials mobile.png" alt="Profile initials" class="avatar-mobile">
      <img src="./public/img/Student initials.png" alt="Profile initials" class="avatar-desktop">
      </div>

      <div class="profile-field">
        <span class="profile-label">Name:</span>
        <span class="profile-value">Lorem ipsum</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">Email:</span>
        <span class="profile-value">Lorem ipsum</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">Date of birth:</span>
        <span class="profile-value">Lorem ipsum</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">ID:</span>
        <span class="profile-value">Lorem ipsum</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">Position:</span>
        <span class="profile-value">Lorem ipsum</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">School:</span>
        <span class="profile-value">Lorem ipsum</span>
      </div>

      <button class="secondary-btn edit-profile-btn">Edit Profile</button>
    </div>
  </section>
   `;
}
