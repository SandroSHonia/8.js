import {InvalidPasswordError,OutOfRangeError} from './error.js'





function validatePassword(password) {

  if (password.length < 8) {

    throw new InvalidPasswordError('პაროლი უნდა შედგებოდეს მინიმუმ 8 ასოსაგან');


  }
}



function validateAge(age) {

  if (age < 0 || age > 130) {

    throw new OutOfRangeError('ასაკი აღემატება 130 წელს');

  }

}const form = document.querySelector('form');

const errorMessages = document.querySelector('#error-messages');



form.addEventListener('submit', (event) => {
  event.preventDefault();



  errorMessages.innerHTML = '';

  const name = form.elements.name.value.trim();
  
  const password = form.elements.password.value;
  
  const age = parseInt(form.elements.age.value, 10);


  
  try {
    validatePassword(password);
  
  
    validateAge(age);


    
    form.reset();
  } 
  catch (error) {
  
    const field = form.elements[error.name === 'InvalidPasswordError' ? 'password' : 'age'];
  
    const message = error.message;


  
    const errorMessage = document.createElement('p');
  
    errorMessage.className = 'error';
  
    errorMessage.textContent = message;
  
    field.insertAdjacentElement('afterend', errorMessage);



    
    field.focus();
  }

})
;



