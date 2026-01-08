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
      <!-- Breadcrumb-->
            <div class="profile-breadcrumb">
              <span class="crumb-link">Dashboard</span>
              <span class="crumb-separator">&gt;</span>
              <span class="crumb-current">Profile</span>
            </div>

      <div class="profile-card">

        <h3>Edit Profile</h3>

        <!-- Profile picture-->
        <form id="profile-edit-form" class="profile-form">
        <div class="profile-avatar">
        <div class="profile-avatar-wrapper">
            <button class="avatar-upload-btn" type="button">
              <img
                id="adminAvatarPreview"
                src="/public/icons/user-circle-edit-mobile.png"
                alt="User avatar"
                class="avatar-circle-img"
              />
            </button>

            <input type="file" id="adminAvatarInput" accept="image/*" hidden />
        </div>
        </div>

          <!-- The form -->
          <div class="form-group">
            <label for="fullname">Name:</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Joe Bloggs"
              novalidate
            />
            <div class="error-message"></div>
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="joeblog2024@edugate.no"
              novalidate
            />
            <div class="error-message"></div>
          </div>

          <div class="form-group">
            <label for="dob">DOB:</label>
            <input
              id="dob"
              name="dob"
              type="dob"
              placeholder="01/01/2002"
              novalidate
            />
            <div class="error-message"></div>
          </div>

          <div class="form-group id-desktop-only">
            <label for="student-id">ID:</label>
            <input
            id="student-id"
            name="student-id"
            type="text"
            placeholder="1921840"
            class="readonly-field"
            readonly
          />
          </div>

          <div class="form-group">
            <label for="gradYear">Grad Year:</label>
            <input
            id="gradYear"
            name="gradYear"
            type="text"
            placeholder="2020"
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
            Update
          </button>
        </form>
      </div>
    </section>
  `;
}



export function initStudentProfileEdit() {
  const form = document.querySelector("#profile-edit-form");
  if (!form) return;

  // ---- Create and display error message 
  function showError(input, message) {
    let error = input.parentElement.querySelector(".error-message");

    if (!error) {
      error = document.createElement("div");
      error.classList.add("error-message");
      input.parentElement.appendChild(error);
    }

    error.textContent = message;
  }

  // ---- Clear error 
  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", () => {
      const error = input.parentElement.querySelector(".error-message");
      if (error) error.remove();
    });
  });

  // ---- Form validation
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = form.querySelector("#fullname");
    const email = form.querySelector("#email");
    const dob = form.querySelector("#dob");

    let hasError = false;

    if (!fullName.value.trim()) {
      showError(fullName, "Name is required.");
      hasError = true;
    }

    if (!email.value.trim()) {
    showError(email, "Email is required.");
    hasError = true;
    }

    if (!dob.value.trim()) {
    showError(dob, "Date of birth is required.");
    hasError = true;
    }

    if (hasError) return;

  console.log("Profile updated");
 });
}
