// get key DOM elements
const searchBox = document.querySelector(".paper_search_box");
const headings = Array.from(document.querySelectorAll(".paper_heading"));
const resultsInfo = document.querySelector(".paper_results_info");
const cards = Array.from(document.querySelectorAll(".paper_card"));

// filter papers
const filterPapers = () => {
  // get search box text search terms
  const query = searchBox.value
    .split(/\s/)
    .map((term) => term.trim().toLowerCase())
    .filter((term) => term);

  // reset highlights
  resetHighlights();

  // filter paper cards
  let count = 0;
  for (const paper of cards) {
    // hide/show paper
    const show =
      query.length === 0 ||
      query.every((term) => paper.innerText.toLowerCase().includes(term));
    paper.dataset.hide = !show;

    // count if shown
    if (show) count++;

    // highlight query terms
    if (show) highlightTerms(paper, query);
  }

  // if there is any filtering being done, hide headings and show result info
  const anyFilters = query.length ? true : false;
  headings.forEach((heading) => (heading.dataset.hide = anyFilters));

  // update results info
  resultsInfo.innerHTML =
    "Showing " +
    count.toLocaleString() +
    " of " +
    cards.length.toLocaleString() +
    " papers";
};

// if mark.js library couldn't load, set dummy functions to avoid errors
if (typeof Mark === "undefined")
  Mark = function () {
    this.unmark = () => null;
    this.mark = () => null;
  };

// reset mark.js highlights
const resetHighlights = () => new Mark(document.body).unmark();

// highlight search terms with mark.js
const highlightTerms = (element, terms) => {
  // to avoid slowdown, only highlight if more than a few letters typed in
  for (const term of terms) if (term.length > 2) new Mark(element).mark(term);
};

// util func to debounce search box
const debounce = (func, key, delay) => () => {
  window.clearTimeout(window[key]);
  window[key] = window.setTimeout(func, delay);
};

// attach functions in this script to HTML elements
searchBox.addEventListener("input", debounce(filterPapers, "filterPapers", 50));
filterPapers();

// popoluate search box based on url param
const updateSearch = () => {
  const query = new URLSearchParams(window.location.search).get("search");
  if (!query.trim()) return;
  searchBox.value = query;
  filterPapers();
};
updateSearch();
