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
    
          <td>1921840</td><td>Joe</td>
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
          <td>Joe</td><td>Bloggs</td>
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
          <td>Joe</td><td>Bloggs</td>
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
          <td>Joe</td><td>Bloggs</td>
          <td>2020</td>
          </tr>

        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="pagination" id="pagination">
      <button id="page-first" class="pagination-button" aria-label="Go to first page">
        <img src="./public/icons/chevron-dubble-left.png" alt="Go to first page"/>
      </button>

      <button id="page-previous" class="pagination-button" aria-label="Go to previous page">
        <img src="./public/icons/chevron-single-left.png" alt="Go to previous page"/>
      </button>

      <button id="page-1" class="pagination-button" aria-label="Go to page 1">1</button>
      <button id="page-2" class="pagination-button" aria-label="Go to page 2">2</button>
      <button id="page-3" class="pagination-button" aria-label="Go to page 3">...</button>
      <button id="page-7" class="pagination-button" aria-label="Go to page 3">7</button>
      <button id="page-8" class="pagination-button" aria-label="Go to page 3">8</button>
      <button id="page-next" class="pagination-button" aria-label="Go to next page">
        <img src="./public/icons/chevron-single-right.png" alt="Go to next page"/>
      </button>
     


      <button id="page-last" class="pagination-button" aria-label="Go to last page">
        <img src="./public/icons/chevron-dubble-right.png" alt="Go to last page"/>
      </button>
    </div>

    <!-- Back Button -->
    <div class="button-wrapper">
      <button class="secondary-btn">Back to dashboard</button>
    </div>

  </div>
</div>
  `;
}

export function StudentResultsPagination() {
  // --- Selectors html ---
  const allRows = Array.from(document.querySelectorAll('#student-results tbody tr'));
  const firstButton = document.getElementById('page-first');
  const prevButton  = document.getElementById('page-previous');
  const nextButton  = document.getElementById('page-next');
  const lastButton  = document.getElementById('page-last');
  const paginationRoot = document.getElementById('pagination');

  // --- Config + state ---
  const rowsPerPage = 5;         // Change if you want
  let currentPage = 1;
  const totalPages = Math.max(1, Math.ceil(allRows.length / rowsPerPage));

  // --- Core render: show the slice that belongs to a page ---
  function showPage(page) {
    // clamp to valid page range
    currentPage = Math.min(Math.max(1, page), totalPages);
    const start = (currentPage - 1) * rowsPerPage;
    const end   = start + rowsPerPage;

    allRows.forEach((row, i) => {
      row.style.display = (i >= start && i < end) ? '' : 'none';
    });

    updateButtons();
    highlightActiveNumber();
  }

  // Enable/disable chevrons at boundaries
  function updateButtons() {
    const atFirst = currentPage === 1;
    const atLast  = currentPage === totalPages;

    if (firstButton) firstButton.disabled = atFirst;
    if (prevButton)  prevButton.disabled  = atFirst;
    if (nextButton)  nextButton.disabled  = atLast;
    if (lastButton)  lastButton.disabled  = atLast;
  }

  // Highlight the numeric buttons and set aria-current for the active page.
  function highlightActiveNumber() {
    if (!paginationRoot) return;

    // find only numeric buttons (exclude chevrons and "..." by parsing int)
    const pageButtons = Array.from(paginationRoot.querySelectorAll('.pagination-button'));

    pageButtons.forEach(btn => {
      // try to parse integer from button text
      const text = btn.textContent.trim();
      const n = parseInt(text, 10);

      // If parsed number is finite and equals a valid page, treat it as a numeric page button
      if (Number.isFinite(n)) {
        // disable numeric button if it's outside range (optional)
        btn.disabled = (n < 1 || n > totalPages);

        // toggle active styling
        if (n === currentPage) {
          btn.classList.add('active');
          btn.setAttribute('aria-current', 'page');
        } else {
          btn.classList.remove('active');
          btn.removeAttribute('aria-current');
        }
      } else {
        // for non-numeric buttons (chevrons or '...') remove aria-current and active
        btn.classList.remove('active');
        btn.removeAttribute('aria-current');
      }
    });
  }

  // --- Event handlers ---
  if (firstButton) firstButton.addEventListener('click', () => showPage(1));
  if (prevButton)  prevButton.addEventListener('click', () => showPage(currentPage - 1));
  if (nextButton)  nextButton.addEventListener('click', () => showPage(currentPage + 1));
  if (lastButton)  lastButton.addEventListener('click', () => showPage(totalPages));

  // Delegate clicks for numeric buttons (works for 1,2,7,8; ignores "..." non-numeric)
  if (paginationRoot) {
    paginationRoot.addEventListener('click', (event) => {
      const btn = event.target.closest('button.pagination-button');
      if (!btn) return;

      const text = btn.textContent.trim();
      const n = parseInt(text, 10);

      if (Number.isFinite(n) && n >= 1 && n <= totalPages) {
        showPage(n);
      }
    });
  }

  // --- Initial render ---
  showPage(1);
}
