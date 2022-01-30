// (1) Have an HTML element that is being manipulated with JS (i.e.menu)

const open = document.querySelector('#openMenu');
const close = document.querySelector('#closeMenu');
const nav = document.querySelector('#myNav');
const pDay = document.querySelector('#day');
const pNight = document.querySelector('#night');

openBtn.onclick = function() {
  nav.style.height = '30vh';
};

closeBtn.onclick = function() {
  nav.style.height = '0';
};

aLink.onclick = function() {
  nav.style.height = '0';
};

pDay.onclick = function() {
  this.classList.add('change'); // Fixed change
}

pNight.onclick = function() {
  this.classList.toggle('change'); // Undoable change
}


// (2) Display text in an element

// Declare the variable
const myDisplay = document.querySelector('#display');
myDisplay.textContent = 'Hello World!';

let message = 'first message';
console.log(message);
message = 'second message';
message = 'this is a new message';


const myBtn = document.querySelector('#changer');

// Add event to myBtn
myBtn.onclick = function() {
  myDisplay.textContent = message;
};

// (3) Add a point counter when elements are pressed

const myDisplay = document.querySelector('#display');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');

let points = 0;

plusBtn.onclick = function() {
  points++;
  // console.log(points);
  // points = points + 100;
  // points += 100;
  // myDisplay.textContent = points;
  // myDisplay.textContent = 'total points: ' + points + ', good job';
  myDisplay.textContent = `total points: ${points}, good job`;
};

minusBtn.onclick = function() {
  points--;
  // points -= 100;
  myDisplay.textContent = `total points: ${points}, try again`;
};