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

      <div class="profile-breadcrumb">
        <span class="crumb-link">Dashboard</span>
        <span class="crumb-separator">&gt;</span>
        <span class="crumb-current">Profile</span>
      </div>

        <h1>Edit profile</h1>

        <form id="profile-edit-form" class="profile-form">
          <div class="profile-avatar">
            <div class="profile-avatar-image">
              <span class="initials">JB</span>
              <img src="/public/icons/camera-icon.png" alt="Change photo" class="camera-icon" />
            </div>
            <button type="button" class="btn-secondary">Change picture</button>
          </div>


          <div class="form-group">
            <label for="full-name">Name:</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Joe Bloggs"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="joeblog2024@edugate.no"
              required
            />
          </div>

          <div class="form-group">
            <label for="phone">DOB:</label>
            <input
              id="dob"
              name="dob"
              type="date"
              placeholder="01/01/2002"
              required
            />
          </div>

          <div class="form-group">
            <label for="gradYear">Grad Year:</label>
            <input
            id="gradYear"
            name="gradYear"
            type="number"
            placeholder="2020"
            min="1900"
            max="2050"
            class="readonly-field"
            readonly
          />
        </div>

        <div class="form-group">
            <label for="school">School:</label>
            <input
            id="school"
            name="school"
            type="text"
            placeholder="The Academy"
            class="readonly-field"
            readonly
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


//<a href="/student-profile-edit" data-link>Edit profile</a>

/*<!-- TEMP: link to profile edit (for development only) -->
        <a href="/student-profile-edit" data-link>Edit profile</a>*/