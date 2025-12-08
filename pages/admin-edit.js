export default function AdminEdit() {
 const existing = document.querySelector("link[data-profile-style]");
 if (!existing) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/css/admin-edit.css";
  link.setAttribute("data-profile-style", "true");
  document.head.appendChild(link);
 }
 return /*HTML*/ `
   <div class="edit-wrapper">

   <div class="breadcrumb">
        <span>Dashboard</span>
        <span class="arrow">></span>
        <span class="current">Profile</span>
      </div>

 <div class="edit-card">
    <h1 class="adminTitle">Edit Profile</h1>

  <div class="avatar-wrapper">
      <img src="/public/icons/user-circle-edit-mobile.png" alt="User avatar" class="avatar-circle"/>
  </div>

  <form id="adminEditForm">
    <div class="formGroups">
          <label for="name">Name:</label>
            <input id="adminName" type="text" placeholder="Joe Bloggs"
            novalidate/>        
    </div>

    <div class="formGroups">
          <label for="Email">Email:</label>
          <input id="adminEmail" type="text" placeholder="joeblog2024@edugate no" novalidate/>        
    </div>

    <div class="formGroups">
          <label for="Date of birth">Date of birth:</label>
          <input id="adminDate" type="text" placeholder="01/01/1987" novalidate/>        
    </div>

    <div class="formGroups">
          <label for="School">School:</label>
          <input id="adminSchool" type="text" placeholder="The Academy" disabled/>        
    </div>  
    <button type="submit" class="primary-btn editAdminBtn">Update</button>
    </form>
        
      </div>
    
      </div>
  `;
}

export function initAdminProfileEdit() {
 const form = document.querySelector("#adminEditForm");
 if (!form) return;

 //Show error under an input
 function showError(input, message) {
  let error = input.parentElement.querySelector(".error-message");

  if (!error) {
   error = document.createElement("div");
   error.classList.add("error-message");
   input.parentElement.appendChild(error);
  }

  error.textContent = message;
 }

 // Clear error when user focuses field
 form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("focus", () => {
   const error = input.parentElement.querySelector(".error-message");
   if (error) error.remove();
  });
 });

 form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = form.querySelector("#adminName");
  const email = form.querySelector("#adminEmail");
  const date = form.querySelector("#adminDate");

  let hasError = false;

  if (!fullName.value.trim()) {
   showError(fullName, "Name is required.");
   hasError = true;
  }

  if (!email.value.trim()) {
   showError(email, "Email is required.");
   hasError = true;
  }

  if (!date.value.trim()) {
   showError(date, "Date of birth is required.");
   hasError = true;
  }

  if (hasError) return;

  console.log("Profile updated");
 });
}
