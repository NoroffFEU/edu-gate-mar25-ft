import { getSubjectsByStudentId } from '../utils/student-api.js';

export default function StudentResult() {
    const currentStudentId = "stu-105";
    let currentPage = 1;
    let totalPages = 1;
    let allResults = [];
    let filteredResults = [];
    let searchQuery = '';

    function updateTable(data) {
        const tbody = document.querySelector('#results-tbody');
        if (!tbody || !data) {
            return;
        }

        if (data.items.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;">No results found</td></tr>';
            return;
        }

        tbody.innerHTML = data.items.map(subject => /*HTML*/`
            <tr class="result-row">
                <td>${subject.year || 'N/A'}</td>
                <td class="align-right">${subject.term || 'N/A'}</td>
                <td>${subject.subjectName || subject.name || 'N/A'}</td>
                <td>${subject.examType || 'M1'}</td>
                <td>${subject.score || 'N/A'}</td>
                <td>${subject.grade || 'N/A'}</td>
                <td class="result-actions"><p class="edit">Edit</p><button>Delete</button></td>
            </tr>
        `).join('');
    }

    function filterResults(query) {
        if (!query.trim()) {
            return allResults;
        }

        const lowerQuery = query.toLowerCase();
        return allResults.filter(subject => {
            const year = (subject.year || '').toString().toLowerCase();
            const term = (subject.term || '').toString().toLowerCase();
            const subjectName = (subject.subjectName || subject.name || '').toLowerCase();
            const examType = (subject.examType || '').toLowerCase();
            const score = (subject.score || '').toString().toLowerCase();
            const grade = (subject.grade || '').toLowerCase();

            return year.includes(lowerQuery) ||
                   term.includes(lowerQuery) ||
                   subjectName.includes(lowerQuery) ||
                   examType.includes(lowerQuery) ||
                   score.includes(lowerQuery) ||
                   grade.includes(lowerQuery);
        });
    }

    function paginateResults(results, page, limit = 7) {
        const totalCount = results.length;
        const totalPages = Math.ceil(totalCount / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedItems = results.slice(startIndex, endIndex);

        return {
            items: paginatedItems,
            totalCount,
            totalPages,
            pageNumber: page,
            pageSize: limit,
        };
    }

    function performSearch() {
        const searchInput = document.querySelector('.search-input');
        
        if (!searchInput) {
            return;
        }
        
        searchQuery = searchInput.value;
        filteredResults = filterResults(searchQuery);
        currentPage = 1;
        
        const paginatedData = paginateResults(filteredResults, currentPage);
        updateTable(paginatedData);
        updatePagination(paginatedData);
    }

    function attachSearchListeners() {
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-button');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                performSearch();
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }

        if (searchButton) {
            searchButton.addEventListener('click', () => {
                performSearch();
            });
        }
    }

    function updatePagination(data) {
        currentPage = data.pageNumber;
        totalPages = data.totalPages;

        const paginationContainer = document.querySelector('.pagination');
        
        if (!paginationContainer.dataset.initialized || paginationContainer.dataset.totalPages != totalPages) {
            const pageNumbersHTML = generatePageNumbers(currentPage, totalPages);
            const isFirstPage = currentPage === 1;
            const isLastPage = currentPage === totalPages;
            
            paginationContainer.innerHTML = `
                <button class="page-nav" data-page="first" ${isFirstPage ? 'disabled' : ''}>
                    <img src="public/icons/chevron-double-left.png" alt="First page" />
                </button>
                <button class="page-nav" data-page="prev" ${isFirstPage ? 'disabled' : ''}>
                    <img src="public/icons/chevron-left.png" alt="Previous page" class="chevron-single" />
                </button>
                ${pageNumbersHTML}
                <button class="page-nav" data-page="next" ${isLastPage ? 'disabled' : ''}>
                    <img src="public/icons/chevron-right.png" alt="Next page" class="chevron-single" />
                </button>
                <button class="page-nav" data-page="last" ${isLastPage ? 'disabled' : ''}>
                    <img src="public/icons/chevron-double-right.png" alt="Last page" />
                </button>
            `;
            
            paginationContainer.dataset.initialized = 'true';
            paginationContainer.dataset.totalPages = totalPages;
            attachPaginationListeners();
        } else {
            const pageNumbers = paginationContainer.querySelectorAll('.page-number');
            pageNumbers.forEach(btn => {
                if (parseInt(btn.dataset.page) === currentPage) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            const firstBtn = paginationContainer.querySelector('[data-page="first"]');
            const prevBtn = paginationContainer.querySelector('[data-page="prev"]');
            const nextBtn = paginationContainer.querySelector('[data-page="next"]');
            const lastBtn = paginationContainer.querySelector('[data-page="last"]');
            
            const isFirstPage = currentPage === 1;
            const isLastPage = currentPage === totalPages;
            
            firstBtn.disabled = isFirstPage;
            prevBtn.disabled = isFirstPage;
            nextBtn.disabled = isLastPage;
            lastBtn.disabled = isLastPage;
        }
    }

    function generatePageNumbers(current, total) {
        let pages = [];

        if (total <= 7) {
            for (let i = 1; i <= total; i++) {
                pages.push(`<button class="page-number ${i === current ? 'active' : ''}" data-page="${i}">${i}</button>`);
            }
        } else {
            pages.push(`<button class="page-number ${current === 1 ? 'active' : ''}" data-page="1">1</button>`);

            if (current > 3) {
                pages.push(`<button class="page-ellipsis" disabled>...</button>`);
            }

            let start = Math.max(2, current - 1);
            let end = Math.min(total - 1, current + 1);

            for (let i = start; i <= end; i++) {
                pages.push(`<button class="page-number ${i === current ? 'active' : ''}" data-page="${i}">${i}</button>`);
            }

            if (current < total - 2) {
                pages.push(`<button class="page-ellipsis" disabled>...</button>`);
            }

            pages.push(`<button class="page-number ${current === total ? 'active' : ''}" data-page="${total}">${total}</button>`);
        }

        return pages.join('');
    }

    function attachPaginationListeners() {
        const pageNavButtons = document.querySelectorAll('.page-nav');
        const pageNumberButtons = document.querySelectorAll('.page-number');

        pageNavButtons.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                if (btn.disabled) return;
                
                const action = btn.dataset.page;
                let newPage = currentPage;

                switch(action) {
                    case 'first':
                        newPage = 1;
                        break;
                    case 'prev':
                        newPage = Math.max(1, currentPage - 1);
                        break;
                    case 'next':
                        newPage = Math.min(totalPages, currentPage + 1);
                        break;
                    case 'last':
                        newPage = totalPages;
                        break;
                }
                if (newPage !== currentPage && newPage >= 1 && newPage <= totalPages) {
                    currentPage = newPage;
                    const paginatedData = paginateResults(filteredResults, currentPage);
                    updateTable(paginatedData);
                    updatePagination(paginatedData);
                }
            });
        });

        pageNumberButtons.forEach(btn => {
            btn.addEventListener('click', async () => {
                const newPage = parseInt(btn.dataset.page);
                
                if (isNaN(newPage) || newPage < 1 || newPage > totalPages) return;
                
                if (newPage !== currentPage) {
                    currentPage = newPage;
                    const paginatedData = paginateResults(filteredResults, currentPage);
                    updateTable(paginatedData);
                    updatePagination(paginatedData);
                }
            });
        });
    }

    async function loadStudentData(page = 1) {
        const url = new URL(window.location.href);
        const studentId = url.searchParams.get('studentId') || currentStudentId;

        if (!studentId) {
            return location.href = '/404';
        }

        const subjectData = await getSubjectsByStudentId({ studentId, page: 1, limit: 1000 });

        if (!subjectData) {
            return location.href = '/404';
        }

        if (!subjectData.items || subjectData.items.length === 0) {
            return;
        }

        allResults = subjectData.items;
        filteredResults = allResults;
        
        const paginatedData = paginateResults(filteredResults, page);
        updateTable(paginatedData);
        updatePagination(paginatedData);
        
        attachSearchListeners();
        
        const resultContent = document.querySelector('.result-content');
        if (resultContent) {
            resultContent.classList.add('loaded');
        }
    }
    
    setTimeout(() => loadStudentData(1), 0);

    return /*HTML*/`
      <section class="student-result">
        <div class="result-container">
          <nav class="breadcrumbs">
            <a href="/student-dashboard">Dashboard</a>
            <span class="breadcrumb-separator">></span>
            <a href="/student-dashboard">Student Dashboard</a>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-current">Student Results</span>
          </nav>
          <div class="result-content result-loading">
            <h1>Student Result Page</h1>
            <p>Here are the results for <span class="student-name">Loading...</span>.</p>
<div class="search-wrapper">          
<div class="search-container">
    <input type="text" placeholder="Search for results..." class="search-input">
    <button class="search-button">
        <img src="public/icons/search.png" alt="Search Icon" class="search-icon"/>
    </button>
</div>
</div>

            <div class="add-result-wrapper">
              <button class="add-result-btn">Add result</button>
            </div>
            
            <div class="results-table-container">
              <table class="results-table">
                <thead>
                  <tr class="result-header-row">
                    <th>Year</th>
                    <th>Term</th>
                    <th>Subject</th>
                    <th>Exam</th>
                    <th>Result</th>
                    <th>Grade</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="results-tbody">
                  
                </tbody>
              </table>
            </div>

            <div class="pagination">
              
            </div>

            <div class="back-to-dashboard-container">
              <a href="/student-dashboard" class="back-to-dashboard-btn">Back to dashboard</a>
            </div>
          </div>
        </div>
      </section>`
}
