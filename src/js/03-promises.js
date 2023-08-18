import Notiflix from 'notiflix';
// =================================================================

const refs = {
  form: document.querySelector('.form'),
};

// =================================================================
refs.form.addEventListener('submit', function (e) {
  e.preventDefault();
});
// =================================================================

function createPromise(position, delay, step) {
  const shouldResolve = Math.random() > 0.3;
  for (let i = 0; i < position; i++) {
    setTimeout(() => {
      new Promise((resolve, reject) => {
        if (shouldResolve) {
          resolve();
        } else {
          // Reject
        }
      });
    });
  }
}

console.log(formData);

function createPromise(position, delay) {
  const time = setTimeout(() => {
    for (let i = 0; i < amount; i++) {
      const shouldResolve = Math.random() > 0.3;
      const p = new Promise((resolve, reject) => {
        if (shouldResolve) {
          resolve({ position: position, delay });
        } else {
          reject({ position: position, delay });
        }
      });
    }
  }, delay);
}
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
