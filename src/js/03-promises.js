const form = document.querySelector('.form');


form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  
  // Забираємо дані з інпутів і перетворюємо їх на числа
  let inputValues = { delay: "", step: "", amount: "" };
  for (const key in inputValues) {
    inputValues[key] = Number(event.currentTarget.elements[key].value);
  }

  // Цикл створення промісів основуючись на введенних даних 
  let totalDelay = inputValues.delay;
  for (let i = 1; i <= inputValues.amount; i++) {
    
    createPromise(i, totalDelay)
  
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      
    
    totalDelay += inputValues.step;
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
  

