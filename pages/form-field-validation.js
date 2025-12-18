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

  form.addEventListener("input", () => {
   if (form.checkValidity()) {
    form.classList.remove("is-submitted");
   }
  });

  form.querySelectorAll("input").forEach((input) => {
   input.addEventListener("focus", () => clearError(input));
   input.classList.remove("has-error");
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

  if (input.dataset.email !== undefined) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(input.value)) {
    showError(input, "Invalid email address.");
    input.classList.add("has-error");
    hasError = true;
   }
  }
 });

 return !hasError;
}
