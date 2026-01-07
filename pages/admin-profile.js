export default function AdminProfile() {
    return /*HTML*/ `

    <div class="admin-profile-page">
        <div class="admin-profile-menu">
            <a href="#/admin-dashboard" data-link>Dashboard</a>
            <img src= "../public/icons/chevron-right.png"/>
            <p>Profile</p>
        </div>
        <div class="admin-profile-card">
            <h1>Profile</h1>
            <img src= "../public/icons/profile-icon.png"/>
            <div class="admin-profile-info">
                <div class="admin-profile-column">
                    <span class="admin-profile-label">Name:</span>
                    <span class="admin-profile-value">Joe Bloggs</span>
                </div>
                <div class="admin-profile-column">
                    <span class="admin-profile-label">Email:</span>
                    <span class="admin-profile-value">joeblog2024@edugate.no</span>
                </div>
                <div class="admin-profile-column">
                    <span class="admin-profile-label">DOB:</span>
                    <span class="admin-profile-value">01/01/1987</span>
                </div>
                <div class="admin-profile-column">
                    <span class="admin-profile-label">Position:</span>
                    <span class="admin-profile-value">Administrator</span>
                </div>
                <div class="admin-profile-column">
                    <span class="admin-profile-label">School:</span>
                    <span class="admin-profile-value">The Academy</span>
                </div>
            </div>
            <a href="#/admin-edit" data-link class="btn btn--secondary">Edit Profile</a>
        </div>
    </div>
    `;
}
