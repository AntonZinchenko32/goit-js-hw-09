const form = document.querySelector('.form');


form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  
  let {
    elements: { delay, step, amount }
  } = event.currentTarget;

  delay = Number(delay.value);
  step = Number(step.value);
  amount = Number(amount.value);

  // Цикл створення промісів основуючись на введенних даних 
  let initialDelay = delay;
  for (let i = 1; i <= amount; i++) {
    
    createPromise(i, initialDelay)
  
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      
    
    initialDelay += step;
  }
}

function createPromise(position, delay) {
  
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    const promiseValue = { position, delay };
    setTimeout(() => {
    if (shouldResolve) {
      resolve(promiseValue);
  } else {
      reject(promiseValue);
  }
    }, delay);
  });
};
  

