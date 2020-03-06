const form = document.querySelector('form');
const input = document.getElementById('inputUsername');
const inputTwo = document.getElementById('inputEmail');
const inputThree = document.getElementById('inputPassword');
const ul = document.querySelector('ul')
const button = document.querySelector('button')

let usernamesArray = localStorage.getItem('usernames') ?
JSON.parse(localStorage.getItem('usernames')) : []

let emailsArray = localStorage.getItem('emails') ?
JSON.parse(localStorage.getItem('emails')) : []

let passwordsArray = localStorage.getItem('passwords') ?
JSON.parse(localStorage.getItem('passwords')) : []

let checkEmailsArray = localStorage.getItem('checkEmails') ?
JSON.parse(localStorage.getItem('checkEmails')) : []

let checkPasswordsArray = localStorage.getItem('checkPasswords') ?
JSON.parse(localStorage.getItem('checkPasswords')) : []

//let usernamesArray = []

localStorage.setItem('usernames', JSON.stringify(usernamesArray));
const data = JSON.parse(localStorage.getItem('usernames'))

//let emailsArray = []

localStorage.setItem('emails', JSON.stringify(emailsArray));
const dataTwo = JSON.parse(localStorage.getItem('emails'))

//let passwordsArray = []

localStorage.setItem('passwords', JSON.stringify(passwordsArray));
const dataThree = JSON.parse(localStorage.getItem('passwords'))

//let checkEmailsArray = []

localStorage.setItem('checkEmails', JSON.stringify(checkEmailsArray));
const dataFour = JSON.parse(localStorage.getItem('checkEmails'))

//let checkPasswordsArray = []

localStorage.setItem('checkPasswords', JSON.stringify(checkPasswordsArray));
const dataFive = JSON.parse(localStorage.getItem('checkPasswords'))

form.addEventListener('submit', function(e){
  e.preventDefault()

  checkEmailsArray.push(inputTwo.value)
  localStorage.setItem('checkEmails', JSON.stringify(checkEmailsArray));

  checkPasswordsArray.push(inputThree.value)
  localStorage.setItem('checkPasswords', JSON.stringify(checkPasswordsArray));

  usernamesArray.push(input.value);
  localStorage.setItem('usernames', JSON.stringify(usernamesArray));

  emailsArray.push(inputTwo.value)
  localStorage.setItem('emails', JSON.stringify(emailsArray));

  passwordsArray.push(inputThree.value)
  localStorage.setItem('passwords', JSON.stringify(passwordsArray));
});

//$("#myForm").submit(function(e) {
//  e.preventDefault();
//  if ($("#inputEmail").val() != '' && $("#inputPassword").val() != '') {
//        if ($("#inputEmail").val() == 'quis@google.com' && $("#inputPassword").val() == 'quis') {
//          window.location.href = './database.html';
//        } else {
//            alert('invalid username password');
//        }
//  } else {
//    alert('username or password cann\'t be blank');
//  }
//});
