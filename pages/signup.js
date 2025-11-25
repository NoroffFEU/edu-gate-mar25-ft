
export default function signup(){

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

          <div class="form-group">
            <label for="firstname">Firstname</label>
            <input id="firstname" type="text"
            placeholder="Ola" required />
          </div>

          <div class="form-group">
            <label for="surname">Surname</label>
            <input id="surname" type="text" 
            placeholder="Nordmann" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password"
            placeholder="Choose password" required />
          </div>

          <div class="form-group">
            <label for="confirm-password">Confirm password</label>
            <input id="confirm-password" type="password"
            placeholder="Repeat password" required />
          </div>

          <button type="submit" class="btn">Submit</button>
        </form>

        <!-- Alert-boks LATER!! -->
      </div>
  `;

}
