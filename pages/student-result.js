import { getStudentById } from '../utils/student-api.js';

export default function StudentResult() {
    const currentStudentId = "stu-101";
    async function loadStudentData() {
        const student = await getStudentById(currentStudentId);
        if (student) {
            const userName = `${student.firstName} ${student.lastName}`;
            const userElement = document.querySelector('.student-name');
            if (userElement) {
                userElement.textContent = userName;
            }
        }
    }
    
    setTimeout(loadStudentData, 100);

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
          <div class="result-content">
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
                  </tr>
                </thead>
                <tbody id="results-tbody">
                  <tr class="result-row">
                    <td>2019</td>
                    <td class="align-right">3</td>
                    <td>Mathematics</td>
                    <td>M1</td>
                    <td>90/120</td>
                    <td>B</td>
                    <td class="result-actions"><p class="edit">Edit</p><button>Delete</button></td>
                  </tr>
                </tbody>
                <tbody id="results-tbody">
                  <tr class="result-row-secondary">
                    <td>2019</td>
                    <td class="align-right">3</td>
                    <td>Mathematics</td>
                    <td>M1</td>
                    <td>90/120</td>
                    <td>B</td>
                    <td class="result-actions"><p class="edit">Edit</p><button>Delete</button></td>
                  </tr>
                </tbody>
                <tbody id="results-tbody">
                  <tr class="result-row">
                    <td>2019</td>
                    <td class="align-right">3</td>
                    <td>Mathematics</td>
                    <td>M1</td>
                    <td>90/120</td>
                    <td>B</td>
                    <td class="result-actions"><p class="edit">Edit</p><button>Delete</button></td>
                  </tr>
                </tbody>
                <tbody id="results-tbody">
                  <tr class="result-row-secondary">
                    <td>2019</td>
                    <td class="align-right">3</td>
                    <td>Mathematics</td>
                    <td>M1</td>
                    <td>90/120</td>
                    <td>B</td>
                    <td class="result-actions"><p class="edit">Edit</p><button>Delete</button></td>
                  </tr>
                </tbody>
                <tbody id="results-tbody">
                  <tr class="result-row">
                    <td>2019</td>
                    <td class="align-right">3</td>
                    <td>Mathematics</td>
                    <td>M1</td>
                    <td>90/120</td>
                    <td>B</td>
                    <td class="result-actions"><p class="edit">Edit</p><button>Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="pagination">
              <button class="page-nav"><img src="public/icons/chevron-double-left.png" alt="First page" /></button>
              <button class="page-nav"><img src="public/icons/chevron-left.png" alt="Previous page" class="chevron-single" /></button>
              <button class="page-number active">1</button>
              <button class="page-number">2</button>
              <button class="page-ellipsis">...</button>
              <button class="page-number">7</button>
              <button class="page-number">8</button>
              <button class="page-nav"><img src="public/icons/chevron-right.png" alt="Next page" class="chevron-single" /></button>
              <button class="page-nav"><img src="public/icons/chevron-double-right.png" alt="Last page" /></button>
            </div>

            <div class="back-to-dashboard-container">
              <a href="/student-dashboard" class="back-to-dashboard-btn">Back to dashboard</a>
            </div>
          </div>
        </div>
      </section>`
}
