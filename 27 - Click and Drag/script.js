var isDown;
var startX;
var scrollLeft;
var slider = document.querySelector(".items");
var setActive = function(event) {
  isDown = true;
  startX = event.pageX - slider.offsetLeft;
  slider.classList.add("active");
  scrollLeft = slider.scrollLeft;
};
var unsetActive = function() {
  isDown = false;
  slider.classList.remove("active");
};
var scrollSlider = function(event) {
  if (!isDown) return;
  event.preventDefault();
  var x = event.pageX - slider.offsetLeft;
  var walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
};
slider.addEventListener("mousedown", setActive);
slider.addEventListener("mouseup", unsetActive);
slider.addEventListener("mouseleave", unsetActive);
slider.addEventListener("mousemove", scrollSlider);
