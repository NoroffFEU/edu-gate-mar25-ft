export default function Home() {
  return /*HTML*/ `
    <section class="home__container">

      <div class="home__media">
        <img src="/public/img/heroimage-edugate.png" alt="two-students-sitting-on-the-grass-with-laptops">
      </div>

      <div class="home__content">
        <h1>Edugate</h1>
        <p>Welcome to Edugate, the platform that lets you access your exam results online.</p>
      </div>

      <div class="home__actions">
        <a href="/signup" data-link class="btn">Sign Up</a>
        <a href="#" class="btn btn--secondary">Log In</a>
      </div>
    </section>  
  </div>

  <!-- Temporary alert test setup in home.js. Final placement goes to login.js and signup.js after merge -->
  <div class="alert">
    <div class="alert-text">
      <h2 class="alert-title">Failed Sign Up!</h2>
      <p class="alert-message">Wrong password or email address!</p>
    </div>
    <button class="alert-close"><img src="/public/icons/x-red.png" alt="x symbol"></button>
  </div>

    `;
}
