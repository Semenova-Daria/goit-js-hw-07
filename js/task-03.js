// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryList = document.querySelector('#gallery');

// const addGalleryListEl = images.map(element => {
//   const addGalleryListElImg = `<li class="gallery__item">
//   <img src="${element.url}"
//   alt="${element.alt}" width=320 height=150>
//   </li>`;
//   return addGalleryListElImg;
// });
// galleryList.insertAdjacentHTML("beforeend", addGalleryListEl.join(' '));
// galleryList.setAttribute("style", "list-style:none; display: block")

const galleryListRef = document.querySelector('#gallery');
const galleryListItems = images.reduce(callback,'');

function callback(acc, {url, alt}) {
   return acc + `
        <li>
        <img src=${url} alt=${alt} width="300">
        </li>
  `
};
// console.log(galleryListItems);
galleryListRef.insertAdjacentHTML('afterbegin', galleryListItems);

console.log(galleryListItems);

galleryListRef.style.listStyle = "none";