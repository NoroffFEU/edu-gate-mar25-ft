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

export default function TeacherProfilePage() {
  return /*HTML*/ `
  <section class="profile-card">
    <div class="profile-card__wrapper">
      <h2>Profile</h2>

      <div class="profile-avatar">JB</div>

      <div class="profile-field">
        <span class="profile-label">Name:</span>
        <span class="profile-value"></span>
      </div>

      <div class="profile-field">
        <span class="profile-label">Email:</span>
        <span class="profile-value"></span>
      </div>

      <div class="profile-field">
        <span class="profile-label">Date of birth:</span>
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

      <button class="secondary-btn">Edit Profile</button>
    </div>
  </section>
   `;
}
