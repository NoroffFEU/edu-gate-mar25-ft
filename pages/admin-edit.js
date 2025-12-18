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
        <a href="/admin-dashboard" class="breadcrumb-link" alt="Green circular avatar with the white initials JB and a small camera icon in the lower-right corner">Dashboard</a>
        <span class="arrow">></span>
        <span class="current">Profile</span>
  </div>

 <div class="edit-card">
    <h1 class="adminTitle">Edit Profile</h1>

  <div class="avatar-wrapper">
      <img id="adminAvatarPreview" src="/public/icons/user-circle-edit-mobile.png" alt="User avatar" class="avatar-circle"/>
      <input type="file" accept="image/*" id="adminAvatarInput" style="display: none;"/>
</div>

  <form id="adminEditForm" novalidate>
    <div class="formGroups">
      <label class="adminLabel">Name: 
          <input id="adminName" type="text" required data-required placeholder="Joe Bloggs"/>
      </label>      
    </div>

    <div class="formGroups">
      <label class="adminLabel">Email:
          <input id="adminEmail" type="text" required data-email placeholder="joeblog2024@edugate.no"/>
      </label>        
    </div>

    <div class="formGroups">
      <label class="adminLabel">Date of birth:
          <input id="adminDate" type="text" required data-required placeholder="01/01/1987"/>
      </label>        
    </div>

    <div class="formGroups positionHidden">
      <label class="adminLabel">Position:
          <input id="adminPosition" type="text" placeholder="Administrator" readonly/>
      </label>        
    </div>  

    <div class="formGroups">
      <label class="adminLabel">School:
          <input id="adminSchool" type="text" placeholder="The Academy" readonly/>
      </label>        
    </div>  
    
    <div class="admin-div">
    <button type="submit" class="btn btn--primary">Update</button>
    </div>
    </form>    
      </div>
    </div>
  `;
}

export function initAdminProfileEdit() {
 const form = document.querySelector("#adminEditForm");
 if (!form) return;

 const avatar = document.querySelector("#adminAvatarPreview");
 const fileInput = document.querySelector("#adminAvatarInput");

 if (avatar && fileInput) {
  // Clicking the avatar opens file picker
  avatar.addEventListener("click", () => {
   fileInput.click();
  });

  // Preview selected image
  fileInput.addEventListener("change", () => {
   const file = fileInput.files[0];
   if (!file) return;

   const reader = new FileReader();
   reader.onload = () => {
    avatar.src = reader.result;
   };
   reader.readAsDataURL(file);
  });
 }
}
