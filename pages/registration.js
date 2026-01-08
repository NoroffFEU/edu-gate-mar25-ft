export default function Registration() {
 return /*HTML*/ `
<section class="registrationPage">
      <div class="registrationCard">
      
        <h1 class="page-title">
            <span class="mobile">Registration</span>
            <span class="desktop">Register</span>
        </h1>

        <form class="registrationForm">
          <div class="form-group">
            <label for="name" class="form-group-label">School</label>
            <input id="schoolInput" type="text"
            placeholder="Edugate" required />
          </div>

          <div class="form-group">
            <label for="Address"class="form-group-label">Address line 1</label>
            <input id="addressInput1" type="text"
            placeholder="Address" required />
          </div>

           <div class="form-group">
            <label for="Address"class="form-group-label">Address line 2</label>
            <input id="addressInput2" type="text"
            placeholder="Address" required />
          </div>

        <div class="city-group">
          <div class="form-group">
            <label for="City"class="form-group-label">City</label>
            <input id="cityInput" type="text"
            placeholder="Oslo" required />
          </div>

          <div class="form-group">
            <label for="postalCode"class="form-group-label">Postal Code</label>
           <input id="postalCodeInput" type="text" inputmode="numeric" pattern="[0-9]*"
            placeholder="0000" required />
          </div>
          </div>
          <div class="reg-div">
          <button type="submit" class="primary-btn">Submit</button>
          </div>
        </form>
      </div>
  `;
}
