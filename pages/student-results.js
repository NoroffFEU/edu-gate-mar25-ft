export default function StudentResults() {
  return /*HTML*/ `
<div id="student-page">

  <nav class="breadcrumbs" id="breadcrumbs">
    <a href="/">Dashboard</a>
    <span>></span>
    <a href="/student-results" class="your-results">Select Student</a>
  </nav>

  <div class="student-results-container">

    <!-- Chevron + Heading -->
    <div class="student-heading">
      <img class="chevron-icon" src="./public/icons/chevron-dubble-right.png" alt="Chevron icon"/>
      <h1>Select Student</h1>
    </div>

    
    <div class="student-intro">
      <img class="results-icon" src="./public/icons/results.png" alt="Results icon"/>
      <p>View your results</p>
    </div>

    <div class="student-search" id="student-search">
     <input type="text" placeholder="Search for results" aria-label="Search for results"/>
      <button type="submit" aria-label="Search"> <div class="search-icon" aria-label="Search">
       <img src="./public/icons/search.png" alt="Search" />
        </div> 
        </button>
         </div>

    <!-- Table -->
    <div class="student-results-table-container"> 
      <table class="student-results" id="student-results"> 
        <thead class="student-row-white"> 
          <tr> 
            <th>ID</th> 
            <th>First Name</th> 
            <th>Last Name</th> 
            <th>Year</th> 
          </tr> 
        </thead>
        <tbody>

          <tr class="student-row-grey">
    
          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>

          <tr class="student-row-white">

          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>

          <tr class="student-row-grey">

          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>


          <tr class="student-row-white">

          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>

           <tr class="student-row-grey">

          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>


          <tr class="student-row-white">

          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>

           <tr class="student-row-grey">

          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>

        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="pagination" id="pagination">
  <button id="page-first" class="pagination-button" data-page="page-first" aria-label="Go to first page" type="button">
    <img src="./public/icons/chevron-dubble-left.png"  alt="Go to first page"/>
  </button>

  <button id="page-previous" class="pagination-button" data-page="page-previous" aria-label="Go to previous page" type="button" >
    <img src="./public/icons/chevron-single-left.png" alt="Go to previous page"/>
  </button>

  
<button id="page-1" class="pagination-button active-page-button" data-page="1"  aria-label="Go to page 1" type="button">1</button>
<button id="page-2" class="pagination-button" data-page="2" aria-label="Go to page 2" type="button"  >2</button>
<button id="page-3-gap" class="pagination-button " data-page="3" aria-label="Go to page 3" type="button">3</button>
<button id="page-4" class="pagination-button " data-page="4" aria-label="Go to page 4 " type="button">4</button>
<button id="page-5" class="pagination-button" data-page="5" aria-label="Go to page 5" type="button">5</button>


  <button id="page-next" class="pagination-button" data-page="page-next" aria-label="Go to next page"  type="button" >
    <img src="./public/icons/chevron-single-right.png" alt="Go to next page"/>
  </button>

  <button id="page-last" class="pagination-button" data-page="page-last" aria-label="Go to last page" type="button" >
    <img src="./public/icons/chevron-dubble-right.png" alt="Go to last page"/>
  </button>
</div>

</div>
  `;
}


export function selectPageNumber() {
  const rowsPerPage = 7;
  const tableRows = Array.from(
    document.querySelectorAll("#student-results tbody tr")
  );

  const pageButtons = document.querySelectorAll(
    "#pagination button[data-page]:not([data-page^='page-'])"
  );

  const firstBtn = document.querySelector("#page-first");
  const prevBtn = document.querySelector("#page-previous");
  const nextBtn = document.querySelector("#page-next");
  const lastBtn = document.querySelector("#page-last");
  let currentPage = 1;



  // ==========================
  // SHOW ROWS FOR PAGE
  // ==========================
  function renderPage(page) {
    currentPage = page;

    tableRows.forEach((row, index) => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      row.style.display = index >= start && index < end ? "" : "none";
    });

    updateActiveButton();
    updateArrowButtons();
  }

  // ==========================
  // ACTIVE BUTTON
  // ==========================
  function updateActiveButton() {
    pageButtons.forEach(btn => {
      btn.classList.toggle(
        "active-page-button",
        Number(btn.dataset.page) === currentPage
      );
    });
  }

  // ==========================
  // ARROWS STATE
  // ==========================
  function updateArrowButtons() {
    firstBtn.disabled = currentPage === 1;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    lastBtn.disabled = currentPage === 8;
  }

  // ==========================
  // PAGE NUMBER CLICKS
  // ==========================
  pageButtons.forEach(button => {
    button.addEventListener("click", () => {
      const page = Number(button.dataset.page);
      if (!page) return;
      renderPage(page);
    });
  });


  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      renderPage(currentPage + 1);
    }
  });


  // ==========================
  // ARROWS
  // ==========================
  firstBtn.addEventListener("click", () => renderPage(1));
  lastBtn.addEventListener("click", () => renderPage(8));

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) renderPage(currentPage - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage + 1) renderPage(currentPage + 1);
  });

  // ==========================
  // INIT
  // ==========================
  renderPage(1);



  const searchInput = document.querySelector("#search");
  tableRows = Array.from(
    document.querySelectorAll("#student-results tbody tr")
  )

  let searchValue = "";




}

