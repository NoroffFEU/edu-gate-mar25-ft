export default function StudentResults(){
    return /*HTML*/`
<div id="student-page">

      <nav class="breadcrumbs" id="breadcrumbs">
        <a href="/">Dashboard</a>
        <span>></span>
        <a href="/student-results" class="your-results">Your results</a>
      </nav>

      <div class="student-results-container">
        <h1>Your Results</h1>
        <img
          class="results-icon"
          src="./public/icons/results.png"
          alt="Results icon"
        />

        <p>View your results</p>
        <div class="student-search" id="student-search">
          <input type="text" placeholder="Search for results..." />
          <button type="submit" aria-label="Search">
            <div class="search-icon" aria-label="Search">
              <img src="./public/icons/search.png" alt="Search" />
            </div>
          </button>
        </div>


       <div class="student-results-table-container"> 
       <table class="student-results" id="student-results"> 
       <thead class="student-row-white"> 
       <tr> 
       <th class=" ID">Student ID </th> 
       <th class="First Name">First Name </th> 
       <th class="Last Name">Last Name </th> 
       <th class="Year"> Year </th> 
       </tr> 
       </thead>

            <tbody>
              <tr class="student-row-grey">
                <td>1921840</td>
                <td>Joe</td>
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
                <td>Joe</td>
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
                <td>Joe</td>
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
                <td>Joe</td>
                <td>Bloggs</td>
                <td>2020</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="pagination" id="pagination">
          <button
            id="page-first"
            class="pagination-button"
            type="button"
            aria-label="Go to first page"
          >
            <img
              src="./public/icons/chevron-dubble-left.png"
              alt="Go to first page"
            />
          </button>
          <button
            id="page-previous"
            class="pagination-button"
            type="button"
            aria-label="Go to previous page"
          >
            <img
              src="./public/icons/chevron-single-left.png"
              alt="Go to previous page"
            />
          </button>
          <button
            id="page-1"
            class="pagination-button"
            type="button"
            aria-label="Go to page 1"
          >
            1
          </button>
          <button
            id="page-2"
            class="pagination-button"
            type="button"
            aria-label="Go to page 2"
          >
            2
          </button>
          <button
            id="page-3"
            class="pagination-button"
            type="button"
            aria-label="Go to page 3"
          >
            ...
          </button>
          <button
            id="page-7"
            class="pagination-button"
            type="button"
            aria-label="Go to page 7"
          >
            7
          </button>
          <button
            id="page-8"
            class="pagination-button"
            type="button"
            aria-label="Go to page 8"
          >
            8
          </button>

          <button
            id="page-next"
            class="pagination-button"
            type="button"
            aria-label="Go to next page"
          >
            <img
              src="./public/icons/chevron-single-right.png"
              alt="Go to next page"
            />
          </button>
          <button
            id="page-last"
            class="pagination-button"
            type="button"
            aria-label="Go to last page"
          >
            <img
              src="./public/icons/chevron-dubble-right.png"
              alt="Go to last page"
            />
          </button>
          </div>
          <button class="secondary-btn">Back to dashboard</button>
      </div>
    </div>
    `;
}