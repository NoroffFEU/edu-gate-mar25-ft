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
  
  
  function paginationButtons(totalResults){
    const totalPages = getTotalPages(totalResults);

    const currentPageDisplay = document.getElementById('current-page-display');
    const totalPagesDisplay = document.getElementById('total-pages-display');
    if (currentPageDisplay) {
      currentPageDisplay.textContent = currentPage;
    }
    if (totalPagesDisplay) {
      totalPagesDisplay.textContent = totalPages;
    }
    
    const firstButton = document.getElementById('page-first');
    const previousButton = document.getElementById('page-previous');
    const nextButton = document.getElementById('page-next');
    const lastButton = document.getElementById('page-last');
    const page1Button = document.getElementById('page-1');
    const page2Button = document.getElementById('page-2');
    const dotButton = document.getElementById('dot-button');
    const page7Button = document.getElementById('page-7');
    const page8Button = document.getElementById('page-8');

    const isMobile = window.innerWidth < 767;

    if (totalPages > 7) {
      if (page7Button && !isMobile) {
        page7Button.style.display = '';
      }
      if (page8Button && !isMobile) {
        page8Button.style.display = '';
      }
    } else {
      if (page7Button) {  
        page7Button.style.display = 'none';
      }
      if (page8Button) {
        page8Button.style.display = 'none';
      }
    }

    if (totalPages > 3) {
      if (dotButton) {    
        dotButton.style.display = '';
      }
    } else {
      if (dotButton) {
        dotButton.style.display = 'none';
      }
    }

    function disableButtons(button, isDisabled) 
    {
      if (button) {
        button.disabled = isDisabled;
        button.style.opacity = isDisabled ? '0.5' : '1';
        button.style.pointerEvents = isDisabled ? 'none' : 'auto';
      }
    }
    
    if (currentPage === 1) {
      if (firstButton) {
        disableButtons(firstButton, true);
      }
      if (previousButton) {
        disableButtons(previousButton, true);
      }
    } else {
      if (firstButton) {
        disableButtons(firstButton, false);
      }
      if (previousButton) {
        disableButtons(previousButton, false);
      }
    }
    
    if (currentPage === totalPages) {
      if (lastButton) {
        disableButtons(lastButton, true);
      }
      if (nextButton) {
        disableButtons(nextButton, true);
      }
    } else {
      if (lastButton) {
        disableButtons(lastButton, false);
      }
      if (nextButton) {
        disableButtons(nextButton, false);
      }
    }
    
    [page1Button, page2Button, page7Button, page8Button].forEach(button => {
      if (button) {
        button.classList.add('pagination-button');
        button.style.border = '0.5px solid var(--color-neutral-medium-gray)';
        button.style.color = 'var(--color-neutral-medium-gray)';
      }
    });
    
    const activeButton = document.getElementById(`page-${currentPage}`);
    
    if (activeButton) {
      activeButton.classList.add('pagination-button');
      activeButton.style.border = '2px solid var(--primary-color)';
      activeButton.style.color = 'var(--primary-color)';
    }
  }

  function updatePage(currentResults, page) {

    const totalPages = getTotalPages(currentResults.length);
    if (page < 1) page = 1;
    if (page > totalPages && totalPages) page = totalPages;
    
    currentPage = page;
    renderResults(currentResults, page);
    paginationButtons(currentResults.length);
  }
  
  function handlePageChange() {
    const totalPages = getTotalPages(currentResults.length);
    
    const firstButton = document.getElementById('page-first');
    if (firstButton) {
      firstButton.onclick = () => {
        updatePage(currentResults, 1);
      };
    }
    
    const previousButton = document.getElementById('page-previous');
    if (previousButton) {
      previousButton.onclick = () => {
        if (currentPage > 1) {
          updatePage(currentResults, currentPage - 1);
        }
      };
    }
    const page1Button = document.getElementById('page-1');
    if (page1Button) {
      page1Button.onclick = () => {
        updatePage(currentResults, 1);
      };
    }
    const page2Button = document.getElementById('page-2');
    if (page2Button) {
      page2Button.onclick = () => {
        updatePage(currentResults, 2);
      };
    }

    const page7Button = document.getElementById('page-7');
    
    if (page7Button) {
      page7Button.onclick = () => {
        updatePage(currentResults, 7);
      };
    }
    const page8Button = document.getElementById('page-8');
    if (page8Button) {
        page8Button.onclick = () => {
        updatePage(currentResults, 8);
      };
    }
    const nextButton = document.getElementById('page-next');
    if (nextButton) {
      nextButton.onclick = () => {
        if (currentPage < totalPages) {
          updatePage(currentResults, currentPage + 1);
        }
      };
    }
    const lastButton = document.getElementById('page-last');
    if (lastButton) {
      lastButton.onclick = () => {
        updatePage(currentResults, totalPages);
      };
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

    paginationButtons(transformedResults.length);

    handlePageChange();
  
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

      paginationButtons(filteredResults.length);



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
          <button
            id="page-1"
            class="pagination-button"
            type="button"
            aria-label="Go to page 1"
          >
            1
          </button>
          <button
            id="page-2"
            class="pagination-button"
            type="button"
            aria-label="Go to page 2"
          >
            2
          </button>
          <button
            id="dot-button"
            class="pagination-button"
            type="button"
            aria-label="bundled pages"
          >
            ...
          </button>
          <button
            id="page-7"
            class="pagination-button"
            type="button"
            aria-label="Go to page 7"
          >
            7
          </button>
          <button
            id="page-8"
            class="pagination-button"
            type="button"
            aria-label="Go to page 8"
          >
            8
          </button>

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