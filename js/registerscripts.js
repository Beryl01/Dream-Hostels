const form = document.querySelector('form');
const input = document.getElementById('inputUsername');
const inputTwo = document.getElementById('inputEmail');
const inputThree = document.getElementById('inputPassword');
const ul = document.querySelector('ul')
const button = document.querySelector('button')

//let items;
//
//if(localStorage.getItem('items')) {
//  items = JSON.parse(localStorage.getItem('items'));
//}else{
//  items = [];
//}
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : []

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}


localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'))

form.addEventListener('submit', function(e){
  e.preventDefault()

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));

  liMaker(input.value);
  input.value = '';
});

data.forEach(item => {
    liMaker(item);
});

button.addEventListener('click', function(){
  localStorage.clear();
  while (ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
})
