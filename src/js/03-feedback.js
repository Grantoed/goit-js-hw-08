const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[type="email"]');
const messageRef = document.querySelector('[name="message"]');
const savedInputs = localStorage.getItem('feedback-form-state');
const formValues = {};

if (savedInputs) {
  fillInputValue();
}

formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', throttle(onFormSubmit, 500));

function onFormInput(evt) {
  formValues[evt.target.getAttribute('name')] = evt.target.value;

  const formValuesJSON = JSON.stringify(formValues);

  localStorage.setItem('feedback-form-state', formValuesJSON);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(`email: ${emailRef.value}, message: ${messageRef.value}`);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function fillInputValue() {
  if (JSON.parse(savedInputs).hasOwnProperty('email')) {
    emailRef.value = JSON.parse(savedInputs).email;
  }
  if (JSON.parse(savedInputs).hasOwnProperty('message')) {
    messageRef.value = JSON.parse(savedInputs).message;
  }
}
