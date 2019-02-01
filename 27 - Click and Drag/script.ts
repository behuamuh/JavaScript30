let isDown: boolean;
let startX: number;
let scrollLeft: number;

const slider = document.querySelector(".items");

const setActive = (event): void => {
  isDown = true;
  startX = event.pageX - slider.offsetLeft;
  slider.classList.add("active");
  scrollLeft = slider.scrollLeft;
};

const unsetActive = (): void => {
  isDown = false;
  slider.classList.remove("active");
};

const scrollSlider = (event): void => {
  if (!isDown) return;
  event.preventDefault();
  const x: number = event.pageX - slider.offsetLeft;
  const walk: number = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
};

slider.addEventListener("mousedown", setActive);
slider.addEventListener("mouseup", unsetActive);
slider.addEventListener("mouseleave", unsetActive);
slider.addEventListener("mousemove", scrollSlider);
