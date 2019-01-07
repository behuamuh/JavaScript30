const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  resetActive(this);
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

function resetActive(elem) {
  panels.forEach(panel => {
    if (panel === elem) return;
    panel.classList.remove("open");
  });
}
