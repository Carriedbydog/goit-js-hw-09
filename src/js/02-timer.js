import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// =================================================================

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);
