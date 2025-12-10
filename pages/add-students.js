import SidebarTeacher from "../components/sidebar-teaching.js";

export default function AddStudent() {
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
        <div id="excel-sheet"></div>
        <button type="button" class="primary-btn">Upload +</button>
        <button type="button" class="secondary-btn">Back to dashboard</button>
        </div>
    </div>
    `;
}
