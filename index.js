const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let prosent = 0;
let int = setInterval(blurring, 30);

function blurring() {
    prosent++;

  if (prosent > 99) {
    clearInterval(int);
  }
  
  loadText.innerText = `${prosent}%`;
  loadText.style.opacity = scale(prosent, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(prosent, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};