const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval(showTime, 500);

function showTime() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minute = time.getMinutes();
  const hours = time.getHours();

  secondHand.style.transform = `rotate(${(seconds / 60) * 360 + 90}deg)`;
  minHand.style.transform = `rotate(${(minute / 60) * 360 + 90}deg)`;
  hourHand.style.transform = `rotate(${(hours / 12) * 360 + 90}deg)`;
}

showTime();
