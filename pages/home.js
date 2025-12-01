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

  <!-- temporary alert component used for testing in home.js only. After merge, move the final implementation to login.js and signup.js -->
  <div class="alert alert--success" role="alert" aria-live="assertive">
    <div class="alert-text">
      <h2>Success!!</h2>
      <p>Please check your email for instructions on how to verify your account.</p>
    </div>
    <button class="alert-close" type="button" aria-label="Close alert"><img src="/public/icons/green-x.png" alt=""></button> <!-- change the icon depending on the alert -->
  </div>

    `;
}
