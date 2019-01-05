const inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => {
  input.addEventListener("change", updateValues);
  input.addEventListener("mousemove", updateValues);
});

function updateValues() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
