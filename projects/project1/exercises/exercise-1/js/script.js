// (1) Have an HTML element that is being manipulated with JS (i.e.menu)

// Declare the variables
const open = document.querySelector('#openMenu');
const close = document.querySelector('#closeMenu');
const nav = document.querySelector('#myNav');
const pDay = document.querySelector('#day');
const pNight = document.querySelector('#night');

// Add event once clicked
open.onclick = function() {
  nav.style.height = '100vh';
};

close.onclick = function() {
  nav.style.height = '0';
};

// pDay.onclick = function() {
//   this.classList.add('change'); // Fixed change
// }
//
// pNight.onclick = function() {
//   this.classList.toggle('change'); // Undoable change
// }


// (2) Display text in an element

const myDisplay = document.querySelector('#display');
const myResult = document.querySelector('#result');

let counter = '0';
let message = new Array("How many times did you eat today?", "How many times did you drink water today?", "How many times did you sigh today?", "How many times were you distracted today?", "How many times did you talk to people?", "How many times did you pet your pet?", "All right! Now let's take a look at your result!");
console.log(message);

// Add event to buttons
myBtn.onclick = function() {
  myDisplay.textContent = message[counter++];
};


// Not working and I don't know why...
// const myBtn = document.querySelector('#prompt');
// const myResultBtn = document.querySelector('#trigger');
// let result = 'Who am I to judge? Live and enjoy!';
// console.log(result);
// myResultBtn.onclick = function() {
//   myResult.textcontent = result;
// };

// (3) Add a point counter when elements are pressed

const myPtsDisplay = document.querySelector('#point');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');

let points = 0;

plusBtn.onclick = function() {
  points++;
  myPtsDisplay.textContent = `total points: ${points}, (¬‿¬)`;
};

minusBtn.onclick = function() {
  points--;
  myPtsDisplay.textContent = `total points: ${points}, (ಠ_ಠ)`;
};