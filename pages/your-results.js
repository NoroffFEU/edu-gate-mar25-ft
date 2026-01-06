/* search functionality */

/* fetch results from JSON file */
async function getResults(){
  const response = await fetch('./Data/Results.json');
  if (!response.ok) {
    throw new Error('Failed to fetch results');
  }
  try {
  const data = await response.json();
  return data.results;
} catch (error) {
  console.error('Error fetching results:', error);
  return [];
}
}

/* transform results to table rows */
function transformResults(allResults){
  const tableRows = [];

  allResults.forEach(result => {
    const year = result.session.split('/')[0];
    const termNumber = 
    result.term.includes('First') ? '1' :
    result.term.includes('Second') ? '2' :
    result.term.includes('Third') ? '3' : '3';

    result.subjects.forEach(subject => {
      tableRows.push({
        year: year,
        term: termNumber,
        subject: subject.name,
        exam: subject.name.substring(0, 1).toUpperCase() + termNumber,
        result: `${subject.score}/120`,
        grade: subject.grade.toUpperCase(),
        moreInfo: `<img src="./public/icons/info.png" alt="More information" />`
      });
    });
  });
  return tableRows;
  }

  /* search function that filters by year, subject or term */
  function searchResults(allResults, searchQuery) {
    if (!searchQuery || searchQuery.trim() === '') {
      return allResults;
    }
    const query = searchQuery.toLowerCase().trim();
  
    return allResults.filter(result => {
      return result.year.toLowerCase().includes(query) ||
             result.term.toLowerCase().includes(query) ||
             (query === '1' && result.term === '1') ||
             (query === '2' && result.term === '2') ||
             (query === '3' && result.term === '3') ||
             result.subject.toLowerCase().includes(query);
    });
  }

  /* global variables */
  let currentPage = 1;
  const rowsPerPage = 7;
  let currentResults = [];
  
  /* setup pagination with variables */
  function getPagination(allResults, currentPage){
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return allResults.slice(start, end);
  }
  
  function getTotalPages(totalResults){
    return Math.ceil(totalResults / rowsPerPage);
  }
  
  /* render results to table */
  function renderResults(allResults, currentPage) {
    const tbody = document.querySelector('#student-results tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (allResults.length === 0) {
      tbody.innerHTML = `
      <tr>
      <td colspan="7" class="no-results" style="text-align: center; padding: 16px;">No results found</td>
      </tr>
      `; 
      return;
    }
    const paginatedResults = getPagination(allResults, currentPage);
    
    paginatedResults.forEach((result, index) => {
      const rowClass = index % 2 === 0 ? 'student-row-grey' : 'student-row-white';
      const row =document.createElement('tr');
      row.className = rowClass;
      row.innerHTML = `
      <td>${result.year}</td>
      <td>${result.term}</td>
      <td>${result.subject}</td>
      <td>${result.exam}</td>
      <td>${result.result}</td>
      <td>${result.grade}</td>
      <td class="more-info-button"><img src="./public/icons/info.png" alt="More information" />
      </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  
  function paginate(allResults, currentPage){

  let isMobile = window.innerWidth < 768;

    const totalPages = getTotalPages(allResults.length);
    const pageButtonsContainer = document.getElementById('page-buttons');
    const currentPageDisplay = document.getElementById('current-page-display');
    const totalPagesDisplay = document.getElementById('total-pages-display');
  
    if (currentPageDisplay) currentPageDisplay.textContent = currentPage;
    if (totalPagesDisplay) totalPagesDisplay.textContent = totalPages;
    
    const paginationContainer = document.getElementById('pagination');
    if (paginationContainer) {
      paginationContainer.style.display = totalPages <= 1 ? 'none' : 'flex';
    }
  
    if (!pageButtonsContainer) return;
    pageButtonsContainer.innerHTML = '';
  
    const createButton = (page) => {
      const button = document.createElement('button');
      button.id = `page-${page}`;
      button.className = 'pagination-button';
      button.textContent = page;
      
      if (page === currentPage) {
        button.classList.add('active');
        button.style.border = '2px solid var(--primary-color)';
        button.style.color = 'var(--primary-color)';
        button.style.fontWeight = '500';
      } else {
        button.style.border = '0.5px solid var(--color-neutral-medium-gray)';
        button.style.color = 'var(--color-neutral-medium-gray)';
      }
      
      button.onclick = () => updatePage(allResults, page);
      return button;
    };
  
    const createEllipsis = () => {
      const ellipsis = document.createElement('span');
      ellipsis.className = 'ellipsis';
      ellipsis.textContent = '...';
      ellipsis.style.cursor = 'default';
      return ellipsis;
    };
  
    


  
    // If 3 or fewer pages for mobile show all pages
    if (isMobile) {
      if (totalPages <= 3) {
        for (let i = 1; i <= totalPages; i++) {
          pageButtonsContainer.appendChild(createButton(i));
        }
        return;
      }
    }
    // If 5 or fewer pages for desktop show all pages
    if (!isMobile) {
   if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtonsContainer.appendChild(createButton(i));
      }
      return;
    }
  }

    // MOBILE
    if (isMobile) {
      if (currentPage <= totalPages / 2) {
        // First half: show currentPage on left, totalPages on right
        pageButtonsContainer.appendChild(createButton(currentPage));
        pageButtonsContainer.appendChild(createEllipsis());
        pageButtonsContainer.appendChild(createButton(totalPages));
      } else {
        // Second half: show 1 on left, currentPage on right
        pageButtonsContainer.appendChild(createButton(1));
        pageButtonsContainer.appendChild(createEllipsis());
        pageButtonsContainer.appendChild(createButton(currentPage));
      }
      return;
    }

    // DESKTOP
    if (currentPage <= 2) {
      pageButtonsContainer.appendChild(createButton(1));
      pageButtonsContainer.appendChild(createButton(2));
      pageButtonsContainer.appendChild(createEllipsis());
      pageButtonsContainer.appendChild(createButton(totalPages - 1));
      pageButtonsContainer.appendChild(createButton(totalPages));
      return;
    } else if (currentPage >= 3 && currentPage <= totalPages / 2) {
      pageButtonsContainer.appendChild(createButton(1));
      pageButtonsContainer.appendChild(createButton(currentPage));
      pageButtonsContainer.appendChild(createEllipsis());
      pageButtonsContainer.appendChild(createButton(totalPages - 1));
      pageButtonsContainer.appendChild(createButton(totalPages));
      return;
    } else if (currentPage === totalPages) {
      pageButtonsContainer.appendChild(createButton(1));
      pageButtonsContainer.appendChild(createButton(2));
      pageButtonsContainer.appendChild(createEllipsis());
      pageButtonsContainer.appendChild(createButton(totalPages - 1));
      pageButtonsContainer.appendChild(createButton(totalPages));
      return;
    } else if (currentPage >= totalPages / 2) {
      pageButtonsContainer.appendChild(createButton(1));
      pageButtonsContainer.appendChild(createButton(2));
      pageButtonsContainer.appendChild(createEllipsis());
      pageButtonsContainer.appendChild(createButton(currentPage));
      pageButtonsContainer.appendChild(createButton(totalPages));
      return;
    }

  }

  function updatePage(currentResults, page) {

    const totalPages = getTotalPages(currentResults.length);
    if (page < 1) page = 1;
    if (page > totalPages && totalPages) page = totalPages;
    
    currentPage = page;
    renderResults(currentResults, page);
    paginate(currentResults, page);
    setupNavigationButtons(currentResults);
  }
  
  function setupNavigationButtons(allResults) {
    const totalPages = getTotalPages(allResults.length);
    
    // Get all navigation buttons
    const firstButton = document.getElementById("page-first");
    const previousButton = document.getElementById("page-previous");
    const nextButton = document.getElementById("page-next");
    const lastButton = document.getElementById("page-last");
  
    // Helper function to disable/enable buttons
    const setButtonState = (button, disabled) => {
      if (!button) return;
      button.disabled = disabled;
      button.style.opacity = disabled ? "0.5" : "1";
      button.style.pointerEvents = disabled ? "none" : "auto";
    };
  
    // First button - disabled on page 1
    if (firstButton) {
      firstButton.onclick = () => {
        updatePage(allResults, 1);
      };
      setButtonState(firstButton, currentPage === 1);
    }
  
    // Previous button - disabled on page 1
    if (previousButton) {
      previousButton.onclick = () => {
        if (currentPage > 1) {
          updatePage(allResults, currentPage - 1);
        }
      };
      setButtonState(previousButton, currentPage === 1);
    }
  
    // Next button - disabled on last page
    if (nextButton) {
      nextButton.onclick = () => {
        if (currentPage < totalPages) {
          updatePage(allResults, currentPage + 1);
        }
      };
      setButtonState(nextButton, currentPage === totalPages);
    }
  
    // Last button - disabled on last page
    if (lastButton) {
      lastButton.onclick = () => {
        updatePage(allResults, totalPages);
      };
      setButtonState(lastButton, currentPage === totalPages);
    }
  }
  



  /* initialize the page */
  export async function initYourResults() {
    const allResults = await getResults();
    const transformedResults = transformResults(allResults);
  
    window.YourResults = transformedResults;
    window.filteredResults = transformedResults;

    currentResults = transformedResults;

    renderResults(transformedResults, currentPage);

    paginate(transformedResults, currentPage);

    setupNavigationButtons(transformedResults);
  
    const searchInput = document.querySelector('#student-search input');
    const searchButton = document.querySelector('#student-search button');
  
    if (!searchInput || !searchButton) return;
  
    const performSearch = () => {
      const query = searchInput.value;
        const filteredResults = searchResults(window.YourResults, query);

      window.filteredResults = filteredResults;

      currentResults = filteredResults;

      currentPage = 1;

      renderResults(filteredResults, currentPage);

      paginate(filteredResults, currentPage);

      setupNavigationButtons(filteredResults);

    };
  
    searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      performSearch();
    });
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
   if (searchInput) {
    searchInput.addEventListener('input', () => {
      performSearch();
    });
   }

    // Re-run pagination when window resizes
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        paginate(currentResults, currentPage);
      }, 250);
    });
  }
  
  
  export default function YourResults(){
    return /*HTML*/`
    <div id="main">
    <nav class="breadcrumbs" id="breadcrumbs">
    <a href="/">Dashboard</a>
    <span>></span>
    <a href="/your-results" class="your-results">Your results</a>
    </nav>
    <div class="student-results-container">
    <h1>Your Results</h1>
    <img
    class="results-icon"
          src="./public/icons/results.png"
          alt="Results icon"
        />
        <p>View your results</p>
        <div class="student-search" id="student-search">
          <input type="text" placeholder="Search for results..." />
          <button type="submit" aria-label="Search">
            <div class="search-icon" aria-label="Search">
              <img src="./public/icons/search.png" alt="Search" />
            </div>
          </button>
        </div>
        <div class="student-results-table-container">
          <table class="student-results" id="student-results">
            <thead class="student-row-white">
              <tr>
                <th class="year-column">Year</th>
                <th class="term-column">Term</th>
                <th class="subject-column">Subject</th>
                <th class="exam-column">Exam</th>
                <th class="result-column">Result</th>
                <th class="grade-column">Grade</th>
                <th class="more-info-button"></th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
        <div class="pagination" id="pagination">
          <button
            id="page-first"
            class="pagination-button"
            type="button"
            aria-label="Go to first page"
          >
            <img
              src="./public/icons/chevron-dubble-left.png"
              alt="Go to first page"
            />
          </button>
          <button
            id="page-previous"
            class="pagination-button"
            type="button"
            aria-label="Go to previous page"
          >
            <img
              src="./public/icons/chevron-single-left.png"
              alt="Go to previous page"
            />
          </button>

          <div id="page-buttons"></div>

          <button
            id="page-next"
            class="pagination-button"
            type="button"
            aria-label="Go to next page"
          >
            <img
              src="./public/icons/chevron-single-right.png"
              alt="Go to next page"
            />
          </button>
          <button
            id="page-last"
            class="pagination-button"
            type="button"
            aria-label="Go to last page"
          >
            <img
              src="./public/icons/chevron-dubble-right.png"
              alt="Go to last page"
            />
          </button>
          </div>
          <div class="pagination-info">
            <p>Page <span id="current-page-display">1</span> of <span id="total-pages-display">1</span> </p>
          </div>
          <button class="secondary-btn">Back to dashboard</button>
      </div>
    </div>
    `;
}




