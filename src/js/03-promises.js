import Notiflix from 'notiflix';
// =================================================================

const refs = {
  form: document.querySelector('.form'),
};

// =================================================================
refs.form.addEventListener('submit', onFormSubmit);
// =================================================================

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return p;
}
function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;

  for (let i = 1; i < amount.value; i++) {
    createPromise(i + 1, i * Number(step.value) + i * Number(delay.value))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  refs.form.reset();
}
