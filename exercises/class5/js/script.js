// (1) Display a reply when user answers using button (with a background)
const yesBtn = document.querySelector('#yes');
const noBtn = document.querySelector('#no');
const alertMsg = document.getElementById('welcomeMsg');
const waitBtn = document.querySelector('#wait');
let reply = document.querySelector('#reply');

// If "yes" button is clicked...
yesBtn.addEventListener('click', function() {
  // Display "happy" background image
  document.body.style.background = "#ffffff url('img/hockey-arena.jpg') fixed center center no-repeat";
  // Change welcome message's colour
  alertMsg.style.fontSize = "1.25em";
  alertMsg.style.color = "blue";
  alertMsg.style.marginBottom = "0";
  alertMsg.innerHTML = `<h1>Welcome to the Bell Center!</h1>`;
  // Reply to user's answer
  reply.style.color = "black";
  reply.innerHTML = `<h2>Nice! Please choose your team!</h2>`;
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
  reply.style.color = "red";
  reply.textContent = `Hello, James? Yes, please call the security team to escort this person out of here. You were right. This is the intruder`;

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
    reply.style.color = "black";
    reply.style.textAlign = "center";
    // reply.style.margin = "0";
    reply.innerHTML = `<p style="margin-top:1.5em; margin-bottom: 0.5em">Oh? Hold on, James. You would like to purchase a ticket?</p><p>Aw, you should have said so! All right James, false alert and remain in position!</p>`;
  });
});

// (2) Display text in an element