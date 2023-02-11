
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; 

const startBtn = document.querySelector('[data-start]');

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');


let unixTimeDifference;
let timerId;
let timeDifferenceConverted;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const currentUnixTime = new Date().getTime();
        const selectedUnixTime = selectedDates[0].getTime();
        
        if (selectedUnixTime < currentUnixTime) alert("Please choose a date in the future");
        
        unixTimeDifference = selectedUnixTime - currentUnixTime;
        
        startBtn.removeAttribute("disabled");
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
    timerId = setInterval(() => {
        
        unixTimeDifference -= 1000;
        
        timeDifferenceConverted = convertMs(unixTimeDifference);
        
        if (timeDifferenceConverted.seconds === 0) clearInterval(timerId);
        
        days.textContent = timeDifferenceConverted.days.toString();
        hours.textContent = addLeadingZero(timeDifferenceConverted.hours.toString());
        minutes.textContent = addLeadingZero(timeDifferenceConverted.minutes.toString());
        seconds.textContent = addLeadingZero(timeDifferenceConverted.seconds.toString());
}, 1000);
}



function addLeadingZero(value) {
    return value.padStart(2, "0");
}
