export default function Alert(type, title, message) {
  return /* HTML */ `
    <div class="alert alert--${type}" role="alert" aria-live="assertive">
      <div class="alert-text">
        <h2>${title}</h2>
        <p>${message}</p>
      </div>
      <button class="alert-close" type="button" aria-label="Close alert">
        <img src="./public/icons/x-${type}.png" alt="" />
      </button>
    </div>
  `;
}
