// get key DOM elements
const paperSearch = document.querySelector(".paper_search");
const paperHeadings = Array.from(document.querySelectorAll(".paper_heading"));
const paperSearchHeading = document.querySelector(".paper_search_heading");
const paperCards = Array.from(document.querySelectorAll(".paper_card"));
const paperButtons = Array.from(
  document.querySelectorAll(".paper_link_button")
);

const toggleButton = (event) =>
  (event.currentTarget.dataset.active =
    event.currentTarget.dataset.active !== "true");

const filterPapers = () => {
  // get search box text search terms
  const search = paperSearch.value
    .split(/\s/)
    .map((term) => term.trim().toLowerCase())
    .filter((term) => term);
  // get selected link types
  const types = paperButtons
    .map((button) =>
      button.dataset.active === "true" ? button.dataset.type : null
    )
    .filter((button) => button);

  // reset highlights
  resetHighlights();

  // hide headings if there is any filtering being done
  const anyFilters = search.length || types.length ? true : false;
  paperSearchHeading.dataset.hide = !anyFilters;
  paperHeadings.forEach((heading) => (heading.dataset.hide = anyFilters));

  // filter paper cards
  for (const paper of paperCards) {
    // hide/show paper
    const matchesSearch =
      search.length === 0 ||
      search.every((term) => paper.innerText.toLowerCase().includes(term));
    const matchesTypes =
      types.length === 0 ||
      types.every((type) => paper.querySelector(`[data-type="${type}"`));
    const show = matchesSearch && matchesTypes;
    paper.dataset.hide = !show;

    // to avoid slowdown, only highlight if more than a few letters typed in
    if (show && search.join(" ").length > 2)
      // highlight search terms
      highlightTerms(paper, search);
  }
};

// reset mark.js highlights
const resetHighlights = () => {
  try {
    new Mark(document.body).unmark();
  } catch (error) {}
};

// highlight search terms with mark.js
const highlightTerms = (element, terms) => {
  try {
    terms.forEach((term) => new Mark(element).mark(term));
  } catch (error) {}
};

// attach functions in this script to HTML elements
paperSearch.addEventListener("input", filterPapers);
paperButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    toggleButton(event);
    filterPapers(event);
  })
);
