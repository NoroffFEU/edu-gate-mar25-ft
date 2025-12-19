import Alert from "../components/alert.js";

export default function Signup() {
 const existing = document.querySelector("link[data-signup-style]");
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

        <form id="signup-form" class="signup-form" novalidate>
          <div class="form-group">
            <label for="email"class="form-group-label">Email</label>
            <input id="email" type="email"
            placeholder="example@mail.com" required data-email/>
          </div>

          <div class="name-row">
          <div class="form-group">
            <label for="firstname"class="form-group-label">First name</label>
            <input id="firstname" type="text"
            placeholder="Ola" required data-required />
          </div>

          <div class="form-group">
            <label for="surname"class="form-group-label">Surname</label>
            <input id="surname" type="text" 
            placeholder="Nordmann" required data-required/>
          </div>
          </div>

          <div class="form-group">
            <label for="password"class="form-group-label">Password</label>
            <input id="password" type="password"
            placeholder="Choose password" required data-required />
          </div>

          <div class="form-group">
            <label for="confirm-password"class="form-group-label">Confirm password</label>
            <input id="confirm-password" type="password"
            placeholder="Repeat password" required data-required/>
          </div>
          <div class="btn-div">
          <button type="submit" class="btn btn--primary">Submit</button>
          </div>
        </form>
        
        <div id="alert-container">
        </div>
      </div>
  `;
}

export function initSignupForm() {
 const form = document.querySelector("#signup-form");
 if (!form) return;

 const passwordInput = form.querySelector("#password");
 const confirmInput = form.querySelector("#confirm-password");
 const alertContainer = document.querySelector("#alert-container");

 if (!passwordInput || !confirmInput || !alertContainer) return;

 form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous inline errors
  [passwordInput, confirmInput].forEach((input) => {
   input.classList.remove("has-error");
   const error = input.parentElement.querySelector(".error-message");
   if (error) error.remove();
  });

  alertContainer.innerHTML = "";

  if (passwordInput.value !== confirmInput.value) {
   showPasswordError(confirmInput);

   alertContainer.innerHTML = Alert(
    "failed",
    "Sign up failed",
    "Passwords do not match."
   );

   const closeBtn = alertContainer.querySelector(".alert-close");
   if (closeBtn) {
    closeBtn.addEventListener("click", () => {
     alertContainer.innerHTML = "";
    });
   }
   return;
  }
  // Form is valid – do your fetch or submit here
  console.log("Form is valid – submit or fetch()");
 });
}

function showPasswordError(input) {
 input.classList.add("has-error");

 let error = input.parentElement.querySelector(".error-message");
 if (!error) {
  error = document.createElement("div");
  error.className = "error-message";
  input.insertAdjacentElement("afterend", error); // place under input
 }

 error.textContent = "Passwords must match";
}

/*****KOD JENNY*******/

// export function initSignupForm() {
//  const form = document.querySelector("#signup-form");
//  if (!form) return;

//  form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const passwordInput = form.querySelector("#password");
//   const confirmInput = form.querySelector("#confirm-password");
//   if (!passwordInput || !confirmInput) return;

//   const password = passwordInput.value;
//   const confirm = confirmInput.value;

//   const alertContainer = document.querySelector("#alert-container");
//   if (!alertContainer) return;

//   alertContainer.innerHTML = "";

//   if (password !== confirm) {
//    alertContainer.innerHTML = Alert(
//     "failed",
//     "Failed Sign Up!",
//     "Passwords do not match!"
//    );

//    const closeButton = alertContainer.querySelector(".alert-close");
//    if (closeButton) {
//     closeButton.addEventListener("click", () => {
//      alertContainer.innerHTML = "";
//     });
//    }

//    return;
//   }
//  });
// }
