const loginForm = document.querySelector(`.login-form`);
loginForm.addEventListener(`submit`, sumbitEvent);

function sumbitEvent(event) {
event.preventDefault();
const form = event.target;
const email = form.elements.email.value;
const password = form.elements.password.value;
if (email === `` || password === ``) {
return alert(`All form fields must be filled in`);
}
const trimValue = {
email: email.trim(),
password: password.trim(),
};
console.log(trimValue);
}

