export default function AdminProfile() {
    return /*HTML*/ `

    <div class="admin-profile-page">
        <nav class="admin-profile-menu">
            <a href="#/admin-dashboard" data-link class="admin-profile-a">Dashboard</a>
            <p>></p>
            <p class="admin-profile-p">Profile</p>
        </nav>
        <div class="admin-profile-card">
            <h1 class="admin-profile-h1">Profile</h1>
            <img src= "../public/icons/profile-icon.png" class="admin-profile-icon" alt="Admin profile icon"/>
            <div class="admin-profile-info">
                <span class="admin-profile-label">Name:</span>
                    <span class="admin-profile-value">Joe Bloggs</span>
                <span class="admin-profile-label">Email:</span>
                    <span class="admin-profile-value">joeblog2024@edugate.no</span>
                <span class="admin-profile-label">DOB:</span>
                    <span class="admin-profile-value">01/01/1987</span>
                <span class="admin-profile-label">Position:</span>
                    <span class="admin-profile-value">Administrator</span>
                <span class="admin-profile-label">School:</span>
                    <span class="admin-profile-value">The Academy</span>
            </div>
            <a href="#/admin-edit" data-link class="btn btn--secondary">Edit Profile</a>
        </div>
    </div>
    `;
}
