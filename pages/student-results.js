export default function StudentResults() {
  return /*HTML*/ `
<div id="student-page">

  <nav class="breadcrumbs" id="breadcrumbs">
    <a href="/">Dashboard</a>
    <span>></span>
    <a href="/student-results" class="your-results">Select Student</a>
  </nav>

  <div class="student-results-container">

    <!-- Chevron + Heading -->
    <div class="student-heading">
      <img class="chevron-icon" src="./public/icons/chevron-dubble-right.png" alt="Chevron icon"/>
      <h1>Select Student</h1>
    </div>

    
    <div class="student-intro">
      <img class="results-icon" src="./public/icons/results.png" alt="Results icon"/>
      <p>View your results</p>
    </div>

    <div class="student-search" id="student-search">
     <input type="text" placeholder="Search for results" aria-label="Search for results"/>
      <button type="submit" aria-label="Search"> <div class="search-icon" aria-label="Search">
       <img src="./public/icons/search.png" alt="Search" />
        </div> 
        </button>
         </div>

    <!-- Table -->
    <div class="student-results-table-container"> 
      <table class="student-results" id="student-results"> 
        <thead class="student-row-white"> 
          <tr> 
            <th>ID</th> 
            <th>First Name</th> 
            <th>Last Name</th> 
            <th>Year</th> 
          </tr> 
        </thead>
        <tbody>

          <tr class="student-row-grey">
    
          <td>1921840</td><td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>

          <tr class="student-row-white">
          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>

          <tr class="student-row-grey">
          <td>1921840</td>
          <td>Joe</td><td>Bloggs</td>
          <td>2020</td>
          </tr>


          <tr class="student-row-white">
          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>

           <tr class="student-row-grey">
          <td>1921840</td>
          <td>Joe</td><td>Bloggs</td>
          <td>2020</td>
          </tr>


          <tr class="student-row-white">
          <td>1921840</td>
          <td>Joe</td>
          <td>Bloggs</td>
          <td>2020</td>
          </tr>

           <tr class="student-row-grey">
          <td>1921840</td>
          <td>Joe</td><td>Bloggs</td>
          <td>2020</td>
          </tr>

        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="pagination" id="pagination">
  <button id="page-first" class="pagination-button" aria-label="Go to first page" type="button">
    <img src="./public/icons/chevron-dubble-left.png" alt="Go to first page"/>
  </button>

  <button id="page-previous" class="pagination-button" aria-label="Go to previous page" type="button">
    <img src="./public/icons/chevron-single-left.png" alt="Go to previous page"/>
  </button>

  
<button id="page-1" class="pagination-button active-page-button" data-page="1" aria-label="Go to page 1" type="button">1</button>
<button id="page-2" class="pagination-button" data-page="2" aria-label="Go to page 2" type="button">2</button>
<button id="page-3-gap" class="pagination-button" aria-label="Gap" type="button" disabled>...</button>
<button id="page-7" class="pagination-button" data-page="7" aria-label="Go to page 7" type="button">7</button>
<button id="page-8" class="pagination-button" data-page="8" aria-label="Go to page 8" type="button">8</button>


  <button id="page-next" class="pagination-button" aria-label="Go to next page" type="button">
    <img src="./public/icons/chevron-single-right.png" alt="Go to next page"/>
  </button>

  <button id="page-last" class="pagination-button" aria-label="Go to last page" type="button">
    <img src="./public/icons/chevron-dubble-right.png" alt="Go to last page"/>
  </button>
</div>

    <!-- Back Button -->
    <div class="button-wrapper">
      <button class="secondary-btn">Back to dashboard</button>
    </div>

  </div>
</div>
  `;
}


 export function selectPageNumber() {
  const pageButtons = document.querySelectorAll("div#pagination button");
  // console.log("pageButtons", pageButtons)

  pageButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const clickedButton = event.target;

      const page = clickedButton.dataset.page;
      if (page) {
        // clear styles off the other buttons
        pageButtons.forEach((button) =>
          button.classList.remove("active-page-button")
        );
        clickedButton.classList.add("active-page-button");
      }
    });
  });
}

// function callbackExample(someFunction) {
//   someFunction();
// }

// callbackExample(function () {
//   console.log("HELLO");
// });