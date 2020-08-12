// sections of papers
// data file, id of section heading
const sections = [
  ["data/research-preprints.json", "Preprints"],
  ["data/research-2020.json", "2020"],
  ["data/research-2019.json", "2019"],
  ["data/research-2018.json", "2018"],
  ["data/research-2017.json", "2017"],
  ["data/research-2016.json", "2016"],
  ["data/research-2015.json", "2015"],
  ["data/research-2014.json", "2014"],
  ["data/research-2013.json", "2013"],
  ["data/research-2012.json", "2012"],
];

const run = async () => {
  // for each section
  for (const [sectionFile, sectionName] of sections) {
    // load list of papers
    const papers = await (await fetch(sectionFile)).json();

    // sort papers by date, newest to oldest
    papers.sort((a, b) => {
      a = a.issued["date-parts"][0];
      b = b.issued["date-parts"][0];
      const [aYear = 2000, aMonth = 0, aDay = 0] = a;
      const [bYear = 2000, bMonth = 0, bDay = 0] = b;
      return bYear - aYear || bMonth - aMonth || bDay - aDay;
    });

    // reverse order because cards will be inserted at top of list
    papers.reverse();

    // for each paper
    for (const paper of papers) {
      // get dom elements
      let card = document.querySelector("#paper_card").content.cloneNode(true);
      const titleEl = card.querySelector(".paper_title");
      const authorsEl = card.querySelector(".paper_authors");
      const detailsEl = card.querySelector(".paper_details");

      // set title
      titleEl.href = paper.URL;
      titleEl.innerHTML = paper.title;
      titleEl.title = paper.title;

      // set authors
      const authorsText = (paper.author || [])
        .map((name) => (name.given || "") + " " + (name.family || ""))
        .join(", &nbsp;");
      authorsEl.innerHTML = authorsText;
      authorsEl.title = authorsText;

      // set details
      const detailsText = [];
      // set publisher
      if (paper.publisher && paper.publisher !== "(:unav)")
        detailsText.push(paper.publisher);
      // date
      const [year = 0, month = 0, day = 0] = paper.issued["date-parts"][0];
      const date = [];
      if (day) date.push(day);
      if (month) date.push(monthToName(month));
      if (year) date.push(year);
      detailsText.push(date.join(" "));
      // combine details
      detailsEl.innerHTML = detailsText.join("&nbsp; · &nbsp;");

      // add card after the appropriate section heading
      document.getElementById(sectionName).after(card);
    }
  }

  // scroll to hash target
  window.scrollToTarget();
};

run();

// convert month number to name
const monthToName = (month) =>
  new Date(0, month).toLocaleString("default", { month: "short" });
