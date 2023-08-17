import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// =================================================================

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
};

// =================================================================

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    const selectedDate = refs.input._flatpickr.selectedDates[0];
    if (selectedDate <= currentDate) {
      refs.startBtn.disabled = true;
      alert('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};
flatpickr('#datetime-picker', options);

// =================================================================
refs.startBtn.addEventListener('click', onStartBtnClick);
// =================================================================

function onStartBtnClick() {
  const currentDate = new Date();
  const selectedDate = refs.input._flatpickr.selectedDates[0];
  let timeDifference = selectedDate - currentDate;
  console.log(timeDifference);
  updateTimer(convertMs(timeDifference));

  if (selectedDate >= Date.now()) {
    refs.startBtn.disabled = true;
    let countdownInterval = setInterval(() => {
      updateTimer(convertMs(timeDifference));
      timeDifference -= 1000;
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        refs.startBtn.disabled = true;
      } else {
        const time = convertMs(timeDifference);
        updateTimer(time);
      }
    }, 1000);
  }
}

function updateTimer(time) {
  refs.timer.querySelector('[data-days]').textContent = time.days;
  refs.timer.querySelector('[data-hours]').textContent = time.hours;
  refs.timer.querySelector('[data-minutes]').textContent = time.minutes;
  refs.timer.querySelector('[data-seconds]').textContent = time.seconds;
}
// ==================================================================

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
