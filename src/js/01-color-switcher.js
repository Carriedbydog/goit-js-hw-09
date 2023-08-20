const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.body,
};
// =====================================================================
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
// =====================================================================
refs.startBtn.disabled = false;
refs.stopBtn.disabled = true;
function onStartBtnClick() {
  if (onStartBtnClick) {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    const colorInterval = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.dataset.intervalId = colorInterval;
  }
}

function onStopBtnClick() {
  if (onStopBtnClick) {
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
  }
  const intervalId = refs.startBtn.dataset.intervalId;
  clearInterval(intervalId);
}

// =====================================================================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
