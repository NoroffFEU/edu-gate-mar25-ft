export default function AdminEdit() {
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

  <form class="adminEditForm">
    <div class="formGroups">
          <label for="Name" class="formGroupLabel">Name:</label>
            <input id="adminInput" type="text" placeholder="Joe Bloggs">        
    </div>

    <div class="formGroups">
          <label for="Email" class="formGroupLabel">Email:</label>
          <input id="adminInput" type="text" placeholder="joeblog2024@edugate no">        
    </div>

    <div class="formGroups">
          <label for="Date of birth" class="formGroupLabel">Date of birth:</label>
          <input id="adminInput" type="text" placeholder="01/01/1987">        
    </div>

    <div class="formGroups">
          <label for="School" class="formGroupLabel">School:</label>
          <input id="adminInput" type="text" placeholder="The Academy">        
    </div>  
    </form>
        <button class="primary-btn editAdminBtn">Update</button>
      </div>
    
      </div>
  `;
}
