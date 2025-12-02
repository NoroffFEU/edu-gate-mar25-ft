export default function StudentProfile() {
  return /*HTML*/ `
    <div class = "profile-page">
        <nav class = "profile-breadcrumb">
            <span>Dashboard</span>
            <span>&gt; </span>
            <span class = "profile-breadcrumb-active">Profile</span>
        </nav>
    <section class = "profile-card">
        <h1 class = "profile-title"> Profile </h1>

        <div class = "profile-avatar"> JB </div>

        <div class = "profile-details"> 
            <div class = "profile-row">
                <span class = "profile-label">Name: </span>
                <span class = "profile-value">Joe Bloggs </span>
            </div> 

            <div class = "profile-row">
                <span class = "profile-label">Email: </span>
                <span class = "profile-value"> joeblog2024@edugate.no </span>
            </div>

            <div class = "profile-row">
                <span class = "profile-label">DOB: </span>
                <span class =  "profile-value">01/01/2002</span>
            </div>

            <div class = "profile-row">
                <span class = "profile-label">ID: </span>
                <span class = "profile-value">1921840</span>
            </div>

            <div class = "profile-row">
                <span class = "profile-label">Grad Year: </span>
                <span class = "profile-value">2020</span>
            </div>

            <div class = "profile-row">
                <span class = "profile-label">School: </span>
                <span class = "profile-value">The Academy</span>
            </div>

        </div>

        <button class = "profile-edit-button"> Edit profile </button>

    </section>

    </div>
  
  
  `;
}

/*export default renderStudentProfile(){
    const app = document.getElementById("app"); 

    app.innerHTML = `
    <div class = "profile-page">
        <nav class = "profile-breadcrumb">
            <span>Dashboard</span>
            <span>&gt; </span>
            <span class = "profile-breadcrumb-active">Profile</span>
        </nav>
    <section class = "profile-card">
        <h1 class = "profile-title"> Profile </h1>

        <div class = "profile-avatar"> JB </div>

        <div class = "profile-details"> 
            <div class = "profile-row">
                <span class = "profile-label">Name: </span>
                <span class = "profile-value">Joe Bloggs </span>
            </div> 

            <div class = "profile-row">
                <span class = "profile-label">Email: </span>
                <span class = "profile-value"> joeblog2024@edugate.no </span>
            </div>

            <div class = "profile-row">
                <span class = "profile-label">DOB: </span>
                <span class =  "profile-value">01/01/2002</span>
            </div>

            <div class = "profile-row">
                <span class = "profile-label">ID: </span>
                <span class = "profile-value">1921840</span>
            </div>

            <div class = "profile-row">
                <span class = "profile-label">Grad Year: </span>
                <span class = "profile-value">2020</span>
            </div>

            <div class = "profile-row">
                <span class = "profile-label">School: </span>
                <span class = "profile-value">The Academy</span>
            </div>

        </div>

        <button class = "profile-edit-button"> Edit profile </button>

    </section>

    </div>
    `;
}*/
