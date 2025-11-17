export default function Students(){
    return /*HTML*/`
    <div class="student-dashboard">
        <h1>Dashboard</h1>
        <div class="student-dashboard-information">
            <div class="student-profile-logo">
                <img src="public/icons/profile-icon.png" alt="" loading="lazy"/>
            </div>
            <h2>Joe Bloggs</h2>
            <h3>Student at Edugate school</h3>
        </div>

        <section class="student-dashboard-buttons">
            <a href="/" data-link class="tooltip">
                <div>
                    <img src="public/icons/user-circle.png" alt="" loading="lazy"/>
                </div>
                <p>See profile</p>
                <span class="tooltip-text">View your profile</span>
            </a>
            <a href="/" data-link  class="tooltip">
                <div>
                    <img src="public/icons/results.png" alt="" loading="lazy"/>
                </div>
                <p>My results</p>
                <span class="tooltip-text">View your results</span>
            </a>
            <a href="/" data-link  class="tooltip">
                <div>
                    <img src="public/icons/logout.png" alt="" loading="lazy"/>
                </div>
                <p>Log out</p>
                <span class="tooltip-text">Log out of your account</span>
            </a>
        </section>
    </div>  
    `;
}

//add correct href paths
//change data to using the json data?