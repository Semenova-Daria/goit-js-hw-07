const listItemEl = document.querySelectorAll(".item");
console.log(`В списке ${listItemEl.length} категории.`);


listItemEl.forEach((category) => {
    console.log("Категория:",category.querySelector("h2").textContent);
    console.log("Количество элементов:", category.querySelectorAll("li").length);
})
