/**********
Exercise 2: Using Functions, Conditional Statements and AddEventListeners
Lam Ky Anh Do

Use eventListeners, functions and conditional statements to create an example that asks for information and then changes text and an HTML element based on the information received.
**********/

// (1) Store user's name temporarily in the web browser after answering a prompt
let userData = {
  name: `stranger`
};
let data = JSON.parse(sessionStorage.getItem(`welcome-user-data`));

if (data != null) {
  userData.name = data.name;
} else {
  userData.name = prompt(`Howdy, What's your name?`);
  localStorage.setItem(`welcome-user-data`, JSON.stringify(userData));
}

// (2) Display user's name
const myDisplay = document.querySelector('#welcome');
myDisplay.textContent = `Hello and welcome ${userData.name}!`;

let message = 'first message';
console.log(message);
message = 'second message';
message = 'this is a new message';


const myBtn = document.querySelector('#changer');

// (3) Display a reply when user answers using button
const feelingGoodBtn = document.querySelector('#good');
const feelingNotGoodBtn = document.querySelector('#notGood');
let reply = document.querySelector('#reply');
console.log(reply);

feelingGoodBtn.addEventListener('click', function() {
  reply.textContent = `Nice! It's a beautiful day! Let's enjoy it!`;
});

feelingNotGoodBtn.addEventListener('click', function() {
  reply.textContent = `Oh no! ${userData.name}, don't worry, be happy! Things will get better soon!`;
});

// (4) Add a randomized answer to howAreYouBtn and display howAreYouAnswer
const submitQuestion = document.querySelector('#howAreYouBtn');
submitQuestion.addEventListener('click', howAreYou);
let answer = document.querySelector('#howAreYouAnswer');;

let messages = [
  `Why, thank you ${userData.name}! I'm having a good time!`,
  `Oh..${userData.name}, I don't feel so well but let's make it a nice one!`
];
console.log(messages);

function howAreYou() {
  let i = (Math.random() * messages.length) | 0;
  answer.innerText = messages[i];
}