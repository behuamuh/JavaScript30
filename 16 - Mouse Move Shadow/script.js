const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 300;

hero.addEventListener("mousemove", shadow);

function shadow(event) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;
  if (event.target !== this) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / width) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)`;
}
