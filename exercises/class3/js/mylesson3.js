// init the vars
/*const displayTxt = document.querySelector('#display');
const addBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
let points = 0;


addBtn.onclick = function() {
  // points++;
  // points = points + 100;
  points += 100;
  // console.log(points);
  // displayTxt.textContent = 'total points: ' + points + ', good job';
  displayTxt.textContent = `total points: ${points}, good job`;
};

minusBtn.onclick = function() {
  // points--;
  points -= 100;
  displayTxt.textContent = `total points: ${points}, try again`;
};*/





// In-class Lesson 3
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