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
        <a href="/signup" data-link class="btn btn--primary">Sign Up</a>
        <a href="#" class="btn btn--secondary">Log In</a>
      </div>
    </section>  
    <a href="/admin-profile" data-link class="btn">Admin Profile</a>
    `;
}
