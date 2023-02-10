
const body = document.querySelector("body");
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

const disableBtn = (btn) => btn.setAttribute("disabled", '');
const enableBtn = (btn) => btn.removeAttribute("disabled");

let timerId = null;

startBtn.addEventListener("click", () => {
    disableBtn(startBtn);
    body.style.backgroundColor = getRandomHexColor();
  
    timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    enableBtn(stopBtn);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    disableBtn(stopBtn);
    enableBtn(startBtn);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

