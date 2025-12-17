import SidebarTeacher from "../components/sidebar-teaching.js";
const { default: spreadsheet } = await import("./spreadsheet/parser.js");

export default function AddStudent() {
  setTimeout(() => {
    const container = document.getElementById("spreadsheet");
    const fileInput = document.getElementById("excel-file");
    const uploadBtn = document.getElementById("uploadBtn");

    container.innerHTML = "";

    let spreadsheet = null;
    const exampleData = [
      ["first_name", "surname", "grad_year", "id", "dob"][
        ("First Name",
        "Last Name",
        "Year of Graduation",
        "School Student ID Number",
        "Date of Birth")
      ],
    ];

    // display example spreadsheet upon loading the page

    (spreadsheet = jspreadsheet(container, {
      data: exampleData,

      readOnly: true,
      editable: false,

      allowInsertRow: false,
      allowInsertColumn: false,
      allowDeleteRow: false,
      allowDeleteColumn: false,
      allowRenameColumn: false,
      allowSorting: false,
      allowFilter: false,

      columns: [
        { type: "text", title: "first_name" },
        { type: "text", title: "surname" },
        { type: "number", title: "grad_year" },
        { type: "number", title: "id" },
        { type: "date", title: "dob" },
      ],
    })),
      // display uploaded file after chosen, and switch out with the example spreadsheet

      fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (spreadsheet) {
          spreadsheet.destroy();
          container.innerHTML = "";
        }

        spreadsheet = jspreadsheet(container, {
          file,
          readOnly: true,
          editable: false,
          loadingSpin: true,
        });
      });

    // validation logic

    // send input to server
    // display error messages
    // display success message
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
        <div id="spreadsheet">
          <img src="../public/img/excel_table_desktop.png" class="example-table-desktop">
          <img src="../public/img/excel_table_mobile.png" class="example-table-mobile">
        </div>
        <input type="file" id="excel-file" accept=".xlsx, .xls" />
        <button type="button" id="uploadBtn" class="primary-btn">Upload +</button>
        <button type="button" class="secondary-btn">Back to dashboard</button>
      </div>
    </div>
    `;
}

AddStudent();
