export default function adminUserSearch() {
 const existing = document.querySelector("link[data-profile-style]");
 if (!existing) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/css/user-search.css";
  link.setAttribute("data-profile-style", "true");
  document.head.appendChild(link);
 }

 return /*HTML*/ `
    <section class="admin-select-user">
      <p class="breadcrumb">
        Dashboard <span>&gt;</span> <strong>Select user</strong>
      </p>

      <h1 class="h1-Usearch">Select User</h1>
      <p class="subtitle">
        Search for the user below &amp; select to make changes to their info:
      </p>

      <form class="search-form" role="search">
        <label for="user-search" class="sr-only">Search for user</label>
        <input
          id="user-search"
          type="search"
          placeholder="Search for user..."
          autocomplete="off"
          required
        />
        <button type="submit" aria-label="Search">🔍</button>
      </form>

      <div class="user-table" role="table" aria-label="User list">
        <div class="user-table__header" role="row">
          <span>ID</span>
          <span>L. Name</span>
          <span>Role</span>
        </div>

        <a class="user-row" href="/admin/users/1921840">
          <span>1921840</span>
          <span>Bloggs</span>
          <span>Student</span>
        </a>

        <a class="user-row" href="/admin/users/2035168">
          <span>2035168</span>
          <span>Swanson</span>
          <span>Teacher</span>
        </a>

        <a class="user-row" href="/admin/users/1921840">
          <span>1921840</span>
          <span>Bloggs</span>
          <span>Student</span>
        </a>
      </div>

      <nav class="pagination" aria-label="Pagination">
        <button disabled>&laquo;</button>
        <button disabled>&lsaquo;</button>
        <button class="active">1</button>
        <span>…</span>
        <button>8</button>
        <button>&rsaquo;</button>
        <button>&raquo;</button>
      </nav>

      <a href="/dashboard" class="btn btn--secondary">Back to dashboard</a>
    </section>
  `;
}
