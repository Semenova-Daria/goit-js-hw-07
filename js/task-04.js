// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const [decrement, span, increment] = document.querySelector('#counter').children;
// console.log(decrevent, span, increment);

// decrement.addEventListener('click', () => {
//     span.textContent -= 1;
// });
// increment.addEventListener('click', () => {
//     span.textContent = +span.textContent+1;
// })

decrement.onclick = () => span.textContent -= 1;
increment.onclick = () => span.textContent = +span.textContent + 1;

console.dir(increment)