export default function StudentProfile() {
  return /*HTML*/ `

    <nav class = "profile-breadcrumb">
        <span>Dashboard</span>
        <span>&gt; </span>
        <span class = "profile-breadcrumb-active"> Profile </span>
    </nav> 
    <div class = "profile-page">
    <section class = "profile__card">
        <h1 class = "profile-title"> Profile </h1>

        <div class = "profile-image" >
            <img src="./public/icons/profile-icon.png" alt="student profile icon">
        </div>

        <div class = "profile__details"> 
            <div class = "profile__row">
                <p class = "profile-label">Name: </p>
                <p class = "profile-value">Joe Bloggs </p>
            </div>

            <div class = "profile__row">
                <p class = "profile-label">Email: </p>
                <p class = "profile-value">joeblog2024@edugate.no </p>
            </div> 

            <div class = "profile__row">
                <p class = "profile-label">DOB: </p>
                <p class =  "profile-value">01/01/2002 </p>
            </div>

            <div class = "profile__row">
                <p class = "profile-label">ID: </p>
                <p class = "profile-value">1921840 </p>
            </div>

            <div class = "profile__row">
                <p class = "profile-label">Grad Year: </p>
                <p class = "profile-value">2020 </p>
            </div>

            <div class = "profile__row">
                <p class = "profile-label">School: </p>
                <p class = "profile-value">The Academy </p>
            </div>

        </div>

        <button class = "profile-edit-button"> Edit profile </button>

    </section>

    </div>
  
  
  `;
}

