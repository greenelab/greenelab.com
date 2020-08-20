// site-wide javascript

// scroll to hash target
window.scrollToTarget = () => {
  const target = document.getElementById(window.location.hash.replace("#", ""));
  target.scrollIntoView();
};
