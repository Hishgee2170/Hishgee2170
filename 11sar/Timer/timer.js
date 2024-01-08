const startButton = document.getElementsByClassName("mybutton")[0];
const pause = document.getElementsByClassName("mybutton")[1];
const second = document.getElementsByTagName("h1")[0];
const reset = document.getElementsByClassName("mybutton")[2];

let i = 0;

function start() {
  i++;
  second.innerText = `${i}`;
}

startButton.addEventListener("click", () => {
  d = setInterval(start, 1000);
});
pause.addEventListener("click", () => {
  clearInterval(d);
});
reset.addEventListener("click", () => {
  clearInterval(d);
  i = 0;
  second.innerText = `${i}`;
});
