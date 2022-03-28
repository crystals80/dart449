/**********
Exercise 4: Using Functions, Conditional Statements and AddEventListeners
Lam Ky Anh Do

Use eventListeners, functions and conditional statements to create an example that asks for information and then changes text and an HTML element based on the information received.
**********/

// (1) Trigger transition effect of next section when horizontal scroll hits the middle of webpage
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray("section");

// using matchMedia to activate scrollTrigger only when bigger than 700px
// change this to a higher value than 700 if you want a tablet view size
ScrollTrigger.matchMedia({
  "(min-width:700px)": function() {

    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
      }
    });

    sections.forEach((sct, i) => {
      ScrollTrigger.create({
        trigger: sct,
        start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: {
          targets: sct,
          className: "active"
        }
        // when the section intersects with the middle of the page
        // add the active class.
        // animation is controlled in style.css line 88
      });
    });
  }
});


// (2) Display a progress bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

function myFunction() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  console.log(`winScroll: ${winScroll}`);
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(`height: ${height}`);
  const scrolled = (winScroll / height) * 100;
  console.log(`scrolled: ${scrolled}%`);
  document.getElementById('myBar').style.width = `${scrolled}%`;
}