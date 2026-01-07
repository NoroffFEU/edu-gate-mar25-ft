export function initFormValidation() {
 document.querySelectorAll("form").forEach((form) => {
  if (form.dataset.validationInit) return;
  form.dataset.validationInit = "true";

  form.addEventListener("submit", (event) => {
   event.preventDefault();
   form.classList.add("is-submitted");

   if (!validateForm(form)) return;

   console.log("Form is valid – submit or fetch()");
  });

  form.querySelectorAll("input").forEach((input) => {
   input.addEventListener("focus", () => {
    clearError(input);
    input.classList.remove("has-error");
   });
  });
 });
}

/*show error on page*/
function showError(input, message) {
 let error = input.parentElement.querySelector(".error-message");

 if (!error) {
  error = document.createElement("div");
  error.classList.add("error-message");
  input.parentElement.appendChild(error);
 }

 error.textContent = message;
}

/*Clear error from page*/
function clearError(input) {
 const error = input.parentElement.querySelector(".error-message");
 if (error) error.remove();
}

/*validate if any input field has errors */
function validateForm(form) {
 let hasError = false;

 form.querySelectorAll("input").forEach((input) => {
  clearError(input);
  input.classList.remove("has-error");

  if (input.dataset.required !== undefined && !input.value.trim()) {
   showError(input, "This field is required.");
   input.classList.add("has-error");
   hasError = true;
   return;
  }

  /* Validate email format for inputs marked with data-email */
  if (input.dataset.email !== undefined) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(input.value)) {
    showError(input, "Invalid email address.");
    input.classList.add("has-error");
    hasError = true;
   }
  }
 });

 //Signup-only password match check
 if (form.dataset.hasPasswordConfirm === "true") {
  const password = form.querySelector("#password");
  const confirm = form.querySelector("#confirm-password");
  const alertContainer = document.querySelector("#alert-container");

  if (password && confirm && password.value !== confirm.value) {
   showError(confirm, "Passwords must match");
   confirm.classList.add("has-error");
   hasError = true;

   if (alertContainer) {
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
   }
  }
 }

 return !hasError;
}
