import SidebarTeacher from "../components/sidebar-teaching.js";
import * as XLSX from "xlsx";

export default function AddStudent() {
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

    console.log(XLSX);

    let ws = XLSX.utils.aoa_to_sheet(exampleData);
    const html = XLSX.utils.sheet_to_html(ws);

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
