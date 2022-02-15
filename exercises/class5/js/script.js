/**********
Exercise 3: Using Arrays and Loops
Lam Ky Anh Do

Use arrays and loops to create a set of buttons that have the same class while giving them all the ability to increase/decrease points and to disappear when clicked. Also, to display a message in a (winning) text element when the points reach 100.
**********/

// (1) Display a reply when user answers using button (with a background)

// Declare global variables (and other global variables will be declared in groups with its functions)
const yesBtn = document.querySelector('#yes');
const noBtn = document.querySelector('#no');
const alertMsg = document.getElementById('welcomeMsg');
const waitBtn = document.querySelector('#wait');
const reply = document.querySelector('#reply');
const team = document.querySelector('#team');

// If "yes" button is clicked...
yesBtn.addEventListener('click', function() {
  // Display "happy" background image
  document.body.style.background = "#ffffff url('img/hockey-arena.jpg') fixed center center no-repeat";
  // Change welcome message's colour
  alertMsg.style.fontSize = "1.25em";
  alertMsg.style.color = "blue";
  alertMsg.style.marginBottom = "0";
  alertMsg.innerHTML = `<h1>Welcome to the Skyscraper Bell Center!</h1>`;
  // Reply to user's answer
  // document.getElementById('reply').style.visibility = 'visible';
  reply.style.color = "black";
  reply.textContent = `Nice! Please choose your team!`;
  // Display next section of web page
  document.getElementById('team').style.visibility = 'visible';
});

// If "no" button is clicked...
noBtn.addEventListener('click', function() {
  // Display "danger" background image
  document.body.style.background = "#ffffff url('img/security.jpg') fixed center center no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  // Change welcome message
  alertMsg.style.fontSize = "1.25em";
  alertMsg.style.color = "red";
  alertMsg.style.marginBottom = "0";
  alertMsg.innerHTML = `<h1>SECURITY BREACH</h1>`;
  // Reply to user's answer
  // document.getElementById('reply').style.visibility = 'visible';
  reply.style.color = "red";
  reply.style.textAlign = "center"
  reply.textContent = `Hello, James? Yes, please call the security team to escort this person out of here. You were right. This is the intruder`;
  // Hide new content
  document.getElementById('team').style.visibility = 'hidden';
  // noSetTimeout();

  // Trigger a second change button
  waitBtn.style.display = "flex";
  noBtn.style.marginRight = "10em";
  waitBtn.addEventListener('click', function() {
    // Display "happy" background image
    document.body.style.background = "#ffffff url('img/hockey-arena.jpg') fixed center center no-repeat";
    // Change welcome message's colour
    alertMsg.style.fontSize = "1.25em";
    alertMsg.style.color = "blue";
    alertMsg.style.marginBottom = "0";
    alertMsg.innerHTML = `<h1>Welcome to the Bell Center!</h1>`;
    // Reply to user's answer
    document.getElementById('reply').style.visibility = 'visible';
    reply.style.color = "black";
    // reply.style.margin = "0";
    reply.innerHTML = `<p style="margin-top:1.5em; margin-bottom: 0.5em">Oh? Hold on, James.</p><p style="margin-bottom:0.5em">You would like to purchase a ticket? Aw, you should have said so!</p><p>All right James, false alert and remain in position!</p>`;
    // Display next section of web page
    document.getElementById('team').style.visibility = 'visible';
  });
});

// (2) Display a set of buttons that has the same class

// Display hockey teams in a list
const hockeyTeams = [];
const displayHockeyTeams = document.querySelector('#displayHockeyTeams');
displayHockeyTeams.textContent = hockeyTeams.join(', ');

const addTeam = document.querySelectorAll('.hockeyTeam');

addTeam.forEach((btn) => {
  btn.addEventListener('click', function() {
    const vote = this.textContent;
    console.log(vote);
    hockeyTeams.push(vote);
    displayHockeyTeams.textContent = hockeyTeams.join(', ');
  });
});

// (3) Display a set of buttons that can increase/decrease points and to disappear when clicked
let points = 0;
const showPoints = document.querySelector('#pointsDisplay');
const addPts = document.querySelector('.addPts');
const substractPts = document.querySelector('.substractPts');

const numAddPts = addPts.length;
const numSubstractPts = substractPts.length;

addPts.addEventListener('click', function() {
  points += Math.floor(Math.random() * 10) + 1;
  showPoints.textContent = `Total points: ${points}`;
  if (points >= 100) {
    win.style.color = 'green';
    win.textContent = `${result} has been qualified for the quarter-final!`;
    substractPts.style.display = 'none';
  }
});

substractPts.addEventListener('click', function() {
  points -= Math.floor(Math.random() * 10) + 1;
  showPoints.textContent = `Total points: ${points}`;
  if (points <= -100) {
    win.style.color = 'red';
    win.textContent = `${result} lost...Today...is bad luck!`;
    addPts.style.display = 'none';
  }
});

// Display a congratulating message when points reach +100 or -100
const teamNames = ['Boston Bruins', 'Buffalo Sabres', 'Detroit Red Wings', 'Florida Panthers', 'Montreal Canadiens', 'Ottawa Senators', 'Tampa Bay Lightning', 'Toronto Maple Leaf'];
const win = document.querySelector('#win');
const result = winningMsg(teamNames);

function winningMsg(arr) {
  let randomNames = Math.floor(Math.random() * arr.length)
  let chosen = arr[randomNames];
  return chosen;
}