export default function adminUserSearch() {
 return /*HTML*/ `

  <div class="edit-wrapper">
      <div class="breadcrumb-top">
        <a href="#/admin-dashboard" class="breadcrumb-link">Dashboard</a>
        <span class="arrow">></span>
        <span class="current">Select user</span>
    </div>
      
  <section class="admin-select-user">
      <h1 class="h1-userSearch">Select User</h1>
      <p class="userSearch-sub">
        Search for the user below &amp; select to make changes to their info:
      </p>

      <form class="admin-search-form" role="search" novalidate> 
        <label for="user-search" class="sr-only">Search for user</label>
        <input
          id="admin-user-search"
          type="search"
          placeholder="Search for user..."
          autocomplete="off"
          required data-required />

        <button type="submit" aria-label="Search"><img class="admin-search-img" src="./public/icons/search.png" alt="Search icon"></button>
      </form>

      <div class="admin-add-user">
        <button class="btn btn--primary">Add user</button>
      </div>


      <div class="user-table" role="table" aria-label="User list">
        <div class="user-table__header" role="row">
          <span>ID</span>
          <span>First name</span>
          <span>L. Name</span>
          <span>Year</span>
          <span>Role</span>
          <span>DOB</span>
        </div>

       
        <a class="admin-user-row" href="#">
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

         <a class="admin-user-row" href="#">
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

         <a class="admin-user-row" href="#">
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

         <a class="admin-user-row" href="#">
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

      <nav class="admin-pagination" aria-label="Pagination">
        <button class="btnSymbol"><img src="./public/icons/chevron-double-left.png" alt="Double arrow left"></button>
        <button class="btnSymbol"><img src="./public/icons/chevron-left.png" alt="Single arrow left"></button>
        <button class="active-admin-search">1</button>
        <button>...</button>
        <button>8</button>
        <button class="btnSymbol"><img src="./public/icons/chevron-right.png" alt="Double arrow right"></button>
        <button class="btnSymbol"><img src="./public/icons/chevron-double-right.png" alt="Single arrow right"></button>
      </nav>

      <a href="#/admin-dashboard" class="btn btn-user-search btn--secondary">Back to dashboard</a>
    </section>
    </div>
  `;
}
