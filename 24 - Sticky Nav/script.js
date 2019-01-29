const navbar = document.querySelector("#main");
const topOfNav = navbar.offsetTop;

window.addEventListener("scroll", fixNavbar);

function fixNavbar() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = navbar.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}
