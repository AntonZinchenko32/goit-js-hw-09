
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; 

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let unixTimeDifference;
let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

        const currentUnixTime = new Date().getTime();
        const selectedUnixTime = selectedDates[0].getTime();
        
        if (selectedUnixTime < currentUnixTime) {
            alert("Please choose a date in the future");
            flatpickr("#datetime-picker", options);
        }
        else {
            unixTimeDifference = selectedUnixTime - currentUnixTime;
            startBtn.removeAttribute("disabled");
            // set Values
            setValues(unixTimeDifference);
        }
  },
};

flatpickr("#datetime-picker", options);
startBtn.addEventListener('click', timer);


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


function timer() {
    startBtn.setAttribute("disabled", '');
    input.setAttribute("disabled", '');

    timerId = setInterval(() => {
        
        unixTimeDifference -= 1000;
        
        if (unixTimeDifference < 1000) clearInterval(timerId);

        setValues(unixTimeDifference);
}, 1000);
}


function setValues(unixTime) {
        
    const timeDifferenceConverted = convertMs(unixTime);
        
    const { days, hours, minutes, seconds } = timeDifferenceConverted;

    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    stringValue = value.toString();
    if (stringValue.length <= 2) return stringValue.padStart(2, "0");
    else return stringValue;
}