const nameInput = document.querySelector("#name-input");
const nameOutPut = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    const trimm = event.currentTarget.value.trim();
    nameOutPut.textContent = trimm === "" ? "Anonymous" : trimm;
}) ;

