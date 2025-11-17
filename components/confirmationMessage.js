export default function ConfirmationMessage(title, message) {
  return /*HTML*/ `
    <section class="popUp-container confirmation-popUp">
      <div class="close-popup">
        <img src="public/icons/green-x.png" alt="" loading="lazy" onclick="closePopUp()">
      </div>
        <div class="popUp-icon">
            <img src="public/icons/verified.png" alt="" loading="lazy">
        </div>
            <h1>${title}</h1>
            <p>${message}</p>
    </section>
  `;
}