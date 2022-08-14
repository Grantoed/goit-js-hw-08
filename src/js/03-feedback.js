const throttle = require('lodash.throttle');

const ref = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[type="email"]'),
  message: document.querySelector('[name="message"]'),
};

const savedInputs = localStorage.getItem('feedback-form-state');
const inputValues = {};

ref.form.addEventListener('input', throttle(onInput, 500));
ref.form.addEventListener('submit', onSubmit);

if (savedInputs) {
  populateInput();
}

function onInput(evt) {
  inputValues[evt.target.getAttribute('name')] = evt.target.value;
  if (!inputValues[evt.target.getAttribute('name')]) {
    delete inputValues[evt.target.getAttribute('name')];
  }
  const inputValuesJSON = JSON.stringify(inputValues);
  localStorage.setItem('feedback-form-state', inputValuesJSON);
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log(`email: ${ref.email.value}, message: ${ref.message.value}`);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function populateInput() {
  if (JSON.parse(savedInputs).hasOwnProperty('email')) {
    ref.email.value = JSON.parse(savedInputs).email;
  }
  if (JSON.parse(savedInputs).hasOwnProperty('message')) {
    ref.message.value = JSON.parse(savedInputs).message;
  }
}
