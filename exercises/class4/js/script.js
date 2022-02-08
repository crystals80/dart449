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

// (3) Display a reply when user answers using button
const feelingGoodBtn = document.querySelector('#good');
const feelingNotGoodBtn = document.querySelector('#notGood');
let reply = document.querySelector('#reply');

// (3.5) Set happy/sad/gradient background using colour
const happyBg = document.querySelector('body');
let bright = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'; // Yellow-orange
const sadBg = document.querySelector('body');
let dark = 'linear-gradient(to top, #7879FF 0%, #4428bc 100%)'; // Purple-blue
const gradientBg = document.querySelector('body');
let multicolour = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';

feelingGoodBtn.addEventListener('click', function() {
  happyBg.addEventListener('click', function() {
    document.body.style.background = bright;
  })
  reply.textContent = `Nice! It's a beautiful day! Let's enjoy it!`;
});

feelingNotGoodBtn.addEventListener('click', function() {
  sadBg.addEventListener('click', function() {
    document.body.style.background = dark;
  })
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

  gradientBg.addEventListener('click', function() {
    document.body.style.background = multicolour;
    gradientBg.classList.toggle('changeColour');
  })

  initiatePrompt();
}

// (5) Show an fortune-telling prompt after a delay of 3 seconds
const fortuneTopic = document.querySelector('#fortuneTopic');
// document.getElementById('fortuneBtn').style.display = 'none'; // Don't need since there is a visibility control with #fortuneTopic

function initiatePrompt() {
  setTimeout(() => {
    nextPrompt()
  }, 3000);
}

function nextPrompt() {
  document.getElementById('fortuneTopic').style.visibility = 'visible';
  // document.getElementById('fortuneBtn').style.display = 'inline'; // Don't need since there is a visibility control with #fortuneTopic
  generateFortune();
}

// (6) Add answers for fortune-telling prompts
const fortune = document.querySelector('#fortune');
let number;
const tellFortune = document.querySelector('#tellFortune');

tellFortune.addEventListener('click', generateFortune);

function generateFortune() {
  number = document.querySelector('#enterNumber').value;
  console.log(number);

  if (number === '1') {
    fortune.innerText = 'Watch for new projects and new beginnings';
  } else if (number === '2') {
    fortune.innerText = `Something new comes your way; go for it`;
  } else if (number == '3') {
    fortune.innerText = `A mysterious woman arrives`;
  } else if (number === '4') {
    fortune.innerText = `Beware a tendency toward addiction`;
  } else if (number == '5') {
    fortune.innerText = `Someone knows more than he or she will reveal`;
  } else if (number === '6') {
    fortune.innerText = `An opportunity to be involved in luxurious sexuality is coming`;
  } else if (number == '7') {
    fortune.innerText = `Expect discipline or correction in the near future`;
  } else if (number === '8') {
    fortune.innerText = `Pray for forgiveness and confess wrongdoings`;
  } else if (number == '9') {
    fortune.innerText = `A new personal or professional relationship blossoms`;
  } else if (number == '10') {
    fortune.innerText = `Beware the jealousy of others`;
  } else {
    fortune.innerText = `Your fortune will be revealed soon...`;
  }
}