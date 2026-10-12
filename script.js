//
//
const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});
