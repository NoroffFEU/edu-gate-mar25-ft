import SidebarTeacher from "../components/sidebar-teaching.js";

export default function AddStudent() {
  const sheetStyles = document.createElement("link");
  sheetStyles.href =
    "https://cdn.jsdelivr.net/npm/jspreadsheet-ce@4.15.0/dist/jspreadsheet.css";
  sheetStyles.rel = "stylesheet";

  const xlsxScript = document.createElement("script");
  xlsxScript.src =
    "https://cdn.jsdelivr.net/npm/jspreadsheet-ce@4.15.0/dist/jspreadsheet.js";

  const parseXlsx = document.createElement("script");
  parseXlsx.src = "https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js";

  document.head.appendChild(sheetStyles);
  document.head.appendChild(xlsxScript);
  document.head.appendChild(parseXlsx);

  setTimeout(() => {
    // display spreadsheet with example input when site is loaded
    const spreadsheet = document.getElementById("spreadsheet");
    const exampleData = [
      [
        "First Name",
        "Second Name",
        "Year of Graduation",
        "School Student ID Number",
        "Date of Birth",
      ],
    ];

    console.log(xlsx);

    let ws = xlsx.utils.aoa_to_sheet(exampleData);
    const html = xlsx.utils.sheet_to_html(ws);

    spreadsheet.innerHTML = html;

    // upload and validate xlsx-file
    // switch out displayed spreadsheet to the one uploaded by user
    // display error messages
    // interact with the spreadsheet to fix errors
    // click upload button to update after error handling
    // validate again and send input to server

    // spreadsheet,
    //   {
    //     data: exampleData,
    //     columns: [
    //       { type: "text", title: "first_name" },
    //       { type: "text", title: "surname" },
    //       { type: "number", title: "grad_year" },
    //       { type: "number", title: "id" },
    //       { type: "date", title: "dob" },
    //     ],
    //   };
  }, 0);

  return /*HTML*/ `
    <div>
    <div id="sidebar-container">${SidebarTeacher()}</div>
        <div class="breadcrumbs">
            <p>Dashboard</p>
            <p>></p>
            <p>Add students</p>
        </div>
        <div class="main-content">
        <h1>Add student</h1>
        <p>To add students, upload an Excel spreadsheet with this format:</p>
        <div>
            <input type="file" id="uploadExcel" accept=".xlsx, .xls" />
            <div id="spreadsheet"></div>
            <button type="button" id="uploadBtn" class="primary-btn">Upload +</button>
        </div>
        <button type="button" class="secondary-btn">Back to dashboard</button>
        </div>
    </div>
    `;
}

AddStudent();
