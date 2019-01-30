const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

triggers.forEach(link => {
  link.addEventListener("mouseenter", handleEnter);
  link.addEventListener("mouseleave", handleLeave);
});

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  const { width, height, top, left } = this.querySelector(
    ".dropdown"
  ).getBoundingClientRect();
  const { top: navTop, left: navLeft } = nav.getBoundingClientRect();
  background.style.width = width + "px";
  background.style.height = height + "px";
  background.style.transform = `translate(${left - navLeft}px, ${top -
    navTop}px)`;
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}
