// alert('hello world!');
// document.querySelector('#display').textContent = 'howdy world!';
// console.log(document.querySelector('#display'));


// init variables
/*const myText = document.querySelector('#display');
const myBtn = document.querySelector('#changer');
let myName = 'Santo';
let myNumber = 333;
console.log(myText);


console.log(myText.textContent);


myNumber = 667;
console.log(myText.textContent);

myName = 'Lazlo';
console.log(myName);

myBtn.onclick = function() {
  // myText.textContent = 'button changed this text';
  myText.textContent = myNumber + 3;
  myBtn.textContent = 'just changed';
};*/





// In-class Lesson 1
// alert('hello');
console.log('hello world');

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