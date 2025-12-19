export default function topperformingstudents() {
  const students = [
    { LastName: "Bloggs", Subject: "Mathematics", Grade: "A" },
    { LastName: "Bloggs", Subject: "Mathematics", Grade: "A" },
    { LastName: "Bloggs", Subject: "Mathematics", Grade: "A" },
    { LastName: "Bloggs", Subject: "Mathematics", Grade: "A" },
    { LastName: "Bloggs", Subject: "Mathematics", Grade: "A" },
    { LastName: "Bloggs", Subject: "Mathematics", Grade: "A" },
    { LastName: "Bloggs", Subject: "Mathematics", Grade: "A" },
  ];

  function renderTopStudentsTable(students) {
    const tbody = document.getElementById("topStudentsBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    students.forEach((student) => {
      const row = document.createElement("tr");

      row.innerHTML = `
      <td class="col-id">132</td>
      <td class="col-firstname">joe</td>
      <td class="col-lastname">${student.LastName}</td>
      <td class="col-year">2024</td>
      <td class="col-subject">${student.Subject}</td>
      <td class="col-grade">${student.Grade}</td>
      <td>
        <button class="info-btn">
           <img src="./public/icons/info.png" alt="info" />
           </button>
           </td>
      `;

      tbody.appendChild(row);
    });
  }

  setTimeout(() => renderTopStudentsTable(students), 0);

  return /*HTML*/ `

  <div class="top-performing-students">
    <nav class="breadcrumb">
      <a href="#/teacher-dashboard">dashboard</a>
      <span class="breadcrumb-separator"></span>
      <span class="current">Top Performing Students</span>
    </nav>

    <div class="section-header">
      <h1>Top Performing Students</h1>
      <p>View the top performing students in your classes</p>
      <img src="./public/icons/results.png" alt="Book icon" class="book-icon" />
    </div>
  <div class="search-wrapper">
    <div class="search-container">
      <input type="text" id="studentSearch" placeholder="Search for student" />
      <button class="search-btn">
        <img src="./public/icons/search.png" alt="search" />
      </button>
    </div>
  </div>
    

    <div class="table-wrapper">
      <table class="student-table">
        <thead>
          <tr>
            <th class="col-id">ID</th>
            <th class="col-firstname">First Name</th>
            <th class="col-lastname">Last Name</th>
            <th class="col-year">Year</th>
            <th class="col-subject">Subject</th>
            <th class="col-grade">Grade</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="topStudentsBody"></tbody>
      </table>
    </div>

    <div class="pagination">
      <button class="page-btn first-page" aria-label="First page">
      <img src="./public/icons/chevron-dubble-left.png" alt="#"/>
      </button> 

      <button class="page-btn prev-page" aria-label="Previous page">
      <img src="./public/icons/chevron-single-left.png" alt="#"/>
      </button>

      <div class="page-numbers" id="pagenumbers">
      </div>

        <button class="page-btn next-page" aria-label="Next page">
        <img src="./public/icons/chevron-single-right.png" alt="#"/>
        </button>

        <button class="page-btn last-page" aria-label="Last page">
        <img src="./public/icons/chevron-dubble-right.png" alt="#"/>
        </button>
      </div>

    <a href="#/teacher-dashboard" class="secondary-btn">
      Back to dashboard
    </a>
  </div>
  `;
}
