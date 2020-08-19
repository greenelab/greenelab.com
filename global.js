// site-wide javascript

// give headings ids and link on click
const headings = document.querySelectorAll("h1, h2, h3, h4");
for (const heading of headings) {
  heading.id = heading.textContent;
  heading.addEventListener("click", () => (window.location.hash = heading.id));
  heading.style.cursor = "pointer";
}

// scroll to hash target
window.scrollToTarget = () => {
  const target = document.getElementById(window.location.hash.replace("#", ""));
  target.scrollIntoView();
};
