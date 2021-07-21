const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(option => {
  const ingredientLi = document.createElement('li');
  ingredientLi.innerHTML = `<p>${option}</p>`;

  console.log(ingredientLi);
  return ingredientLi;
});

ingredientsEl.append(...ingredientEl)


// const ingList = document.querySelector('#ingredients');
// const ingLi = ingredients.map(option => {
//   const ingEl = document.createElement('li');
//   ingEl.textContent = option;
//   console.log(ingEl);
//   return ingEl;
// })
// ingList.append(...ingLi)
