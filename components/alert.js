export default function Alert(type, title, message) {
  return /* HTML */ `
    <div class="alert alert--failed" role="alert" aria-live="assertive">
      <div class="alert-text">
        <h2>Failed Sign Up!</h2>
        <p>Wrong password or email address!</p>
      </div>
      <button class="alert-close" type="button" aria-label="Close alert">
        <img src="/public/icons/x-red.png" alt="" />
      </button>
    </div>
  `;
}
