const form = document.querySelector('form')
const input = document.getElementById('item')
const ul = document.querySelector('ul')
const button = document.querySelector('button')

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}
