
export default function Signup() {

    const existing = document.querySelector('link[data-signup-style]');
  if (!existing) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/css/signup.css";
      link.setAttribute("data-signup-style", "true");
      document.head.appendChild(link);
  }

  return /*HTML*/ `
    <section class="signup-page">
      <div class="signup-card">
        <h1>Sign up</h1>

        <form id="signup-form" class="signup-form">
          <div class="form-group">
            <label for="email"class="form-group-label">Email</label>
            <input id="email" type="email"
            placeholder="example@mail.com" required />
          </div>

          <div class="name-row">
          <div class="form-group">
            <label for="firstname"class="form-group-label">First name</label>
            <input id="firstname" type="text"
            placeholder="Ola" required />
          </div>

          <div class="form-group">
            <label for="surname"class="form-group-label">Surname</label>
            <input id="surname" type="text" 
            placeholder="Nordmann" required />
          </div>
          </div>

          <div class="form-group">
            <label for="password"class="form-group-label">Password</label>
            <input id="password" type="password"
            placeholder="Choose password" required />
          </div>

          <div class="form-group">
            <label for="confirm-password"class="form-group-label">Confirm password</label>
            <input id="confirm-password" type="password"
            placeholder="Repeat password" required />
          </div>

          <button type="submit" class="btn">Submit</button>
        </form>

        <!-- Alert-boks LATER -->
      </div>
  `;

}

export function initSignupForm() {
  const form = document.querySelector("#signup-form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const password = document.querySelector("#password").value;
    const confirm = document.querySelector("#confirm-password").value;

    /* -------- Extra function -----------
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    alert("Form passed validation ✅");*/
  });
}
