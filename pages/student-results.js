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
function transformResults(results){
  const tableRows = [];

  results.forEach(result => {
    const year = result.session.split('/')[0];
    const termNumber = result.term.includes('First') ? '1' :
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
      if (result.year.toLowerCase().includes(query)) { 
        return true; 
      }

      if (result.term.toLowerCase().includes(query) || 
      (query.includes(result.term)) || 
      (query === '1' && result.term === '1') ||
    (query === '2' && result.term === '2') ||
    (query === '3' && result.term === '3')) { return true; }

      if (result.subject.toLowerCase().includes(query)) { 
        return true; 
      }
      return false;
    });
  }

  /* render results to table */
  function renderResults(results) {
    const tbody = document.querySelector('#student-results tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (results.length === 0) {
      tbody.innerHTML = `
      <tr>
        <td colspan="7" class="no-results" style="text-align: center; padding: 16px;">No results found</td>
        </tr>
        `; 
        return;
  }


  results.forEach((result, index) => {
    const rowClass = index % 2 === 0 ? 'student-row-grey' : 'student-row-white';
    const row = document.createElement('tr');
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

/* initialize the page */
export async function initStudentResults() {
  const results = await getResults();
  const transformedResults = transformResults(results);

  window.StudentResults = transformedResults;

  renderResults(transformedResults);

  const searchInput = document.querySelector('#student-search input');
  const searchButton = document.querySelector('#student-search button');

  if (!searchInput || !searchButton) return;

  const performSearch = () => {
    const query = searchInput.value;
    const filteredResults = searchResults(window.StudentResults, query);
    renderResults(filteredResults);
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
  searchInput.addEventListener('input', performSearch);
}



export default function StudentResults(){
    return /*HTML*/`
<div id="main">
      <nav class="breadcrumbs" id="breadcrumbs">
        <a href="/">Dashboard</a>
        <span>></span>
        <a href="/student-results" class="your-results">Your results</a>
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
            id="page-3"
            class="pagination-button"
            type="button"
            aria-label="Go to page 3"
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
          <button class="secondary-btn">Back to dashboard</button>
      </div>
    </div>
    `;
}