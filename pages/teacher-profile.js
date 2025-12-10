export default function TeacherProfilePage() {
  return /*HTML*/ `
  <section class="profile-card">
    <div class="profile-card__wrapper">
      <h2>Profile</h2>

      <div class="profile-avatar">JB</div>

      <div class="profile-field">
        <span class="profile-label">Name:</span>
        <span class="profile-value">${}</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">Email:</span>
        <span class="profile-value">${}</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">Date of birth:</span>
        <span class="profile-value">${}</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">ID:</span>
        <span class="profile-value">${}</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">Position:</span>
        <span class="profile-value">${}</span>
      </div>

      <div class="profile-field">
        <span class="profile-label">School:</span>
        <span class="profile-value">${}</span>
      </div>

      <button class="secondary-btn">Edit Profile</button>
    </div>
  </section>
   `;
}
