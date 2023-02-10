console.log("test122");

const body = document.querySelector("body");
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

changeBtnState(stopBtn);

startBtn.addEventListener("click", () => {
    changeBtnState(startBtn);
    
    body.style.backgroundColor = getRandomHexColor();
  
    timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
  }, 1000);
    changeBtnState(stopBtn);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    changeBtnState(stopBtn);
    changeBtnState(startBtn);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBtnState(btn) {
    if (btn.hasAttribute("disabled")) btn.removeAttribute("disabled")
    else btn.setAttribute("disabled", '');
}