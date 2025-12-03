export default function StudentProfileEdit() {
  const existing = document.querySelector('link[data-profile-style]');
  if (!existing) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/student-profile-edit.css";
    link.setAttribute("data-profile-style", "true");
    document.head.appendChild(link);
  }

  return /*HTML*/ `
    <section class="profile-page">
      <div class="profile-card">
        <h1>Edit profile</h1>

        <form id="profile-edit-form" class="profile-form">
          <div class="profile-avatar">
            <div class="profile-avatar-image">
              <span>JB</span>
            </div>
            <button type="button" class="btn-secondary">
              Change picture
            </button>
          </div>

          <div class="form-group">
            <label for="full-name">Full name</label>
            <input
              id="full-name"
              name="full-name"
              type="text"
              placeholder="Ola Nordmann"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@mail.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+47 123 45 678"
              required
            />
          </div>

          <button type="submit" class="profile-update-btn">
            Save changes
          </button>
        </form>
      </div>
    </section>
  `;
}

export function initStudentProfileEdit() {
  const form = document.querySelector("#profile-edit-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = form.querySelector("#full-name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const phone = form.querySelector("#phone").value.trim();

    if (!fullName || !email || !phone) {
      console.log("Please fill in all fields");
      return;
    }

    console.log("Profile updated");
  });
}
