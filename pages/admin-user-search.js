export default function adminUserSearch() {
 const existing = document.querySelector("link[data-profile-style]");
 if (!existing) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./css/admin-user-search.css";
  link.setAttribute("data-profile-style", "true");
  link.href =
   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
  document.head.appendChild(link);
 }

 return /*HTML*/ `
  <div class="edit-wrapper">
    
      <a href="./admin-dashboard" class="breadcrumb">
        Dashboard <span>&gt;</span> <strong>Select user</strong>
      </a>
<section class="admin-select-user">
      <h1 class="h1-userSearch">Select User</h1>
      <p class="userSearch-sub">
        Search for the user below &amp; select to make changes to their info:
      </p>

      <form class="search-form" role="search" novalidate> 
        <label for="user-search" class="sr-only">Search for user</label>
        <input
          id="user-search"
          type="search"
          placeholder="Search for user..."
          autocomplete="off"
          required data-required
        />
        <button type="submit" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>

      <div class="user-table" role="table" aria-label="User list">
        <div class="user-table__header" role="row">
          <span>ID</span>
          <span>First name</span>
          <span>L. Name</span>
          <span>Year</span>
          <span>Role</span>
          <span>DOB</span>
        </div>

       
        <a class="user-row" href="#">
          <span>1921840</span>
          <span>Joe</span>
          <span>Bloggs</span>
          <span>2020</span>
          <span>Student</span>
          <span>01/01/2002</span>
          <span class="actions">
            <button class="editBtn">Edit</button>
            <button class="deleteBtn btn--alert">Delete</button>
          </span>
        </a>

         <a class="user-row" href="#">
          <span>1921840</span>
          <span>Joe</span>
          <span>Bloggs</span>
          <span>2020</span>
          <span>Student</span>
          <span>01/01/2002</span>
          <span class="actions">
            <button class="editBtn">Edit</button>
            <button class="deleteBtn btn--alert">Delete</button>
          </span>
        </a>

         <a class="user-row" href="#">
          <span>1921840</span>
          <span>Joe</span>
          <span>Bloggs</span>
          <span>2020</span>
          <span>Student</span>
          <span>01/01/2002</span>
          <span class="actions">
            <button class="editBtn">Edit</button>
            <button class="deleteBtn btn--alert">Delete</button>
          </span>
        </a>

         <a class="user-row" href="#">
          <span>1921840</span>
          <span>Joe</span>
          <span>Bloggs</span>
          <span>2020</span>
          <span>Student</span>
          <span>01/01/2002</span>
          <span class="actions">
            <button class="editBtn">Edit</button>
            <button class="deleteBtn btn--alert">Delete</button>
          </span>
        </a>
      </div>

      <nav class="pagination" aria-label="Pagination">
        <button class="btnSymbol">&laquo;</button>
        <button class="btnSymbol">&lsaquo;</button>
        <button class="active-admin-search">1</button>
        <button>...</button>
        <button>8</button>
        <button class="btnSymbol">&rsaquo;</button>
        <button class="btnSymbol">&raquo;</button>
      </nav>

      <a href="./admin-dashboard" class="btn btn-user-search btn--secondary">Back to dashboard</a>
    </section>
    </div>
  `;
}
