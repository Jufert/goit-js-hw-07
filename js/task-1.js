const catList = document.querySelector(`#categories`);
const catItems = catList.children;

console.log(`Number of categories: ${catItems.length}`);

Array.from(catItems).forEach(catItem => {

    const catName = catItem.querySelector(`h2`).textContent;
    const catElem = catItem.querySelectorAll(`li`).length;
    console.log(`Category: ${catName}`);
    console.log(`Element: ${catElem}`);
});
