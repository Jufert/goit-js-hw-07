function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector(`input`);
const createButton = document.querySelector(`[data-create]`);
const destroyButton = document.querySelector(`[data-destroy]`);
const boxesDiv = document.querySelector(`#boxes`);

createButton.addEventListener(`click`, () => {
  const amouts = Number(userInput.value);
  if (amouts >= 1 && amouts <= 100) {
    createBoxes(amouts);
    userInput.value = ``;
  }

destroyButton.addEventListener(`click`, (destroyBoxes) => {
  boxesDiv.innerHTML = ``;
});

function createBoxes(amouts) {
  boxesDiv.innerHTML = ``;
  let boxSizeOne = 30;
  let boxSizeTwo = 10;
  let size = 30;
  for (let i = 0; i < amouts; i++) {
    const box = document.createElement(`div`);
    box.classList.add(`.box`);
    box.style.width = `${boxSizeOne}px`;
    box.style.height = `${boxSizeOne}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    boxSizeOne += boxSizeTwo;
  }


}
})