console.log("test13499");

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; 

const startBtn = document.querySelector('[data-start]');
const values = document.querySelectorAll('.value');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      const currentUnixTime = new Date().getTime();
      const unixTimeDifference = selectedDates[0].getTime() - currentUnixTime;
        convertMs(unixTimeDifference);
  },
};

flatpickr("#datetime-picker", options);
startBtn.addEventListener('click', startTimer);

console.log(typeof(options.defaultDate))

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



function startTimer(event) {

}