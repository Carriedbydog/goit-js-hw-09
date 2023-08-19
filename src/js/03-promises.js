// import Notiflix from 'notiflix';
// // =================================================================

// const refs = {
//   form: document.querySelector('.form'),
// };

// // =================================================================
// refs.form.addEventListener('submit', function (e) {
//   e.preventDefault();
// });
// // =================================================================

// function createPromise(position, delay) {
//   const time = setTimeout(() => {
//     for (let i = 0; i < amount; i++) {
//       const shouldResolve = Math.random() > 0.3;
//       const p = new Promise((resolve, reject) => {
//         if (shouldResolve) {
//           resolve({ position: position, delay });
//         } else {
//           reject({ position: position, delay });
//         }
//       });
//     }
//   }, delay);
// }
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', function (e) {
  e.preventDefault();

  createPromise(2, 1500)
    .then(results => {
      results.forEach(({ position, delay, status }) => {
        if (status === 'fulfilled') {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      });
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
});

function createPromise(position, delay) {
  const amount = 5; // Change this to the desired amount
  const promises = [];

  for (let i = 0; i < amount; i++) {
    const shouldResolve = Math.random() > 0.3;

    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay, status: 'fulfilled' });
        } else {
          reject({ position, delay, status: 'rejected' });
        }
      }, i * delay);
    });

    promises.push(p);
  }

  return Promise.all(promises);
}
