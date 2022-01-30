// init vars
/*const openBtn = document.querySelector('#openMenu');
const closeBtn = document.querySelector('#closeMenu');
const navOverlay = document.querySelector('#myNav');
const aLink = document.querySelector('a');
const dayImg = document.querySelector('#day');

// dayImg.style.opacity = '.5';

openBtn.onclick = function() {
  navOverlay.style.height = '30vh';
};

closeBtn.onclick = function() {
  navOverlay.style.height = '0';
};

aLink.onclick = function() {
  navOverlay.style.height = '0';
};

dayImg.onclick = function() {
  // this.style.opacity = '1';
  // this.style.display = 'none';
  // this.style.transform = 'rotate(-5deg)';
  // this.style.transform = 'skew(-10deg)';
  // this.style.transform = 'scale(.5) rotate(-5deg) translateY(300px) skew(-10deg)';
  // this.style.top = '300px';
  // this.classList.add('change');
  this.classList.toggle('change');
};

dayImg.onmouseover = function() {
  this.style.opacity = '1';
};

dayImg.onmouseout = function() {
  this.style.opacity = '.5';
};

window.onresize = function() {
  alert('the window was resized!');
};*/





// In-class Lesson 2
// Declare variable
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