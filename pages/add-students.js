import SidebarTeacher from "../components/sidebar-teaching.js";
import parser from "@jspreadsheet/parser";

export default function AddStudent() {
  setTimeout(() => {
    const spreadsheetInfo = document.getElementById("spreadsheet-info");
    const uploadBtn = document.getElementById("uploadBtn");

    // parse excel-file

    // validation logic

    // send input to server
    // display error messages
    // display success message
  });

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
        <div id="spreadsheet-info">
          <img src="../public/img/excel_table_desktop.png" class="example-table-desktop">
          <img src="../public/img/excel_table_mobile.png" class="example-table-mobile"> 
        </div>
        <input type="file" id="excelFile" accept=".xlsx, .xls" />
        <button type="button" id="uploadBtn" class="primary-btn">Upload +</button>
        <button type="button" class="secondary-btn">Back to dashboard</button>
      </div>
    </div>
    `;
}

AddStudent();
