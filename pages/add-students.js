import SidebarTeacher from "../components/sidebar-teaching.js";

// Load CSS/JS once
async function loadJSpreadsheet() {
  // 1) CSS
  if (!document.querySelector('link[data-jss-css="1"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/jspreadsheet-ce/dist/jspreadsheet.css";
    link.dataset.jssCss = "1";
    document.head.appendChild(link);
  }

  // Global

  if (!window.jspreadsheet) {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/jspreadsheet-ce/dist/jspreadsheet.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // 2) JS modules
  const parserModule = await import("https://esm.sh/@jspreadsheet/parser");

  console.log("jspreadsheet global:", window.jspreadsheet);

  return {
    jspreadsheet: window.jspreadsheet,
    parser: parserModule.default,
  };
}

export default function AddStudent() {
  setTimeout(async () => {
    const container = document.getElementById("spreadsheet");
    const fileInput = document.getElementById("excel-file");
    if (!container || !fileInput) return;

    const { jspreadsheet, parser } = await loadJSpreadsheet();

    let sheetInstance = null;

    const columns = [
      { type: "text", title: "first_name" },
      { type: "text", title: "surname" },
      { type: "number", title: "grad_year" },
      { type: "number", title: "id" },
      { type: "date", title: "dob" },
    ];

    const exampleData = [
      [
        "First Name",
        "Last Name",
        "Year of Graduation",
        "Student ID",
        "Date of Birth",
      ],
    ];

    sheetInstance = jspreadsheet(container, {
      data: exampleData,
      readOnly: true,
      allowInsertRow: false,
      allowInsertColumn: false,
      allowDeleteRow: false,
      allowDeleteColumn: false,
    });

    if (!fileInput.dataset.listenerAttached) {
      fileInput.dataset.listenerAttached = "1";

      fileInput.addEventListener("change", async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (sheetInstance) {
          sheetInstance.destroy();
          container.innerHTML = "";
        }

        sheetInstance = jspreadsheet(container, {
          file,
          columns,
          readOnly: true,
          editable: false,
          loadingSpin: true,
        });
      });
    }
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
