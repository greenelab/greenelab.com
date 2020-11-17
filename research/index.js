// get key DOM elements
const searchBox = document.querySelector(".paper_search_box");
const headings = Array.from(document.querySelectorAll(".paper_heading"));
const resultsInfo = document.querySelector(".paper_results_info");
const papers = Array.from(document.querySelectorAll(".paper_card"));

// determine if string is a term (single word) or phrase (quoted multiple words)
const isPhrase = (str) => /\s/g.test(str);

// determine if paper should show up in results based on query
const showPaper = (paper, query) => {
  // if nothing searched, show
  if (!query.length) return true;
  // get paper card text content
  paper = paper.innerText.toLowerCase();
  // get arrays of terms and phrases
  let terms = query.filter((string) => !isPhrase(string));
  let phrases = query.filter((string) => isPhrase(string));
  // func to check if string is in paper card text
  const includes = (string) => paper.includes(string);
  // show paper if all terms match, and at least one phrase matches
  // pass test if terms or phrases empty
  terms = terms.length ? terms.every(includes) : true;
  phrases = phrases.length ? phrases.some(includes) : true;
  return terms && phrases;
};

// filter papers
const filterPapers = () => {
  // get search box text
  const query = (searchBox.value.match(/(".*?"|[^"\s]+)(?=\s*|\s*$)/g) || [])
    .map((string) => string.split('"').join("").trim().toLowerCase())
    .filter((string) => string);

  // reset highlights
  resetHighlights();

  // hide/show papers
  let count = 0;
  for (const paper of papers) {
    if (showPaper(paper, query)) {
      paper.dataset.hide = false;
      // count if shown
      count++;
      // highlight query words
      highlightTerms(paper, query);
    } else paper.dataset.hide = true;
  }

  // if there is any filtering being done, hide headings and show result info
  const anyFilters = count < papers.length;
  headings.forEach((heading) => (heading.dataset.hide = anyFilters));

  // update results info
  resultsInfo.innerHTML =
    "Showing " +
    count.toLocaleString() +
    " of " +
    papers.length.toLocaleString() +
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
const highlightTerms = (element, query) => {
  // to avoid slowdown, only highlight if more than a few letters typed in
  for (const string of query)
    if (string.length > 2) {
      new Mark(element).mark(string, {
        separateWordSearch: isPhrase(string) ? false : true,
      });
    }
};

// util func to debounce search box
const debounce = (func, key, delay) => () => {
  window.clearTimeout(window[key]);
  window[key] = window.setTimeout(func, delay);
};

// populate search box based on url param
const updateSearch = () => {
  const query = new URLSearchParams(window.location.search).get("search") || "";
  if (!query.trim()) return;
  searchBox.value = query;
  filterPapers();
};

// attach functions in this script to HTML elements
searchBox.addEventListener("input", debounce(filterPapers, "filterPapers", 50));

// get url param and search
updateSearch();
filterPapers();
