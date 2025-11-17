export default function ErrorMessage(title, message) {
  return /*HTML*/ `
    <section class="popUp-container error-popUp">
      <div class="close-popup">
        <img src="public/icons/x-red.png" alt="" loading="lazy" onclick="closePopUp()">
      </div>
        <div class="popUp-icon">
            <img src="public/icons/fail.png" alt="" loading="lazy">
        </div>
            <h1>${title}</h1>
            <p>${message}</p>
    </section>
  `;
}