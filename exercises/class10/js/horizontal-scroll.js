/****** PROGRESS BAR ******/

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
        // add the active class
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

/****** INTERACTIONS ******/
/* HOVER OVER TEXT TO SEE IMAGE */
$('.hover-algae').mouseover(function() {
  $('.algae').css('visibility', 'visible');
});
$('.hover-algae').mouseout(function() {
  $('.algae').css('visibility', 'hidden');
});

$('.hover-lobster').mouseover(function() {
  $('.lobster').css('visibility', 'visible');
});

$('.hover-lobster').mouseout(function() {
  $('.lobster').css('visibility', 'hidden');
});

$('.hover-crab').mouseover(function() {
  $('.crab').css('visibility', 'visible');
});

$('.hover-crab').mouseout(function() {
  $('.crab').css('visibility', 'hidden');
});

$('.hover-tunicate').mouseover(function() {
  $('.tunicate').css('visibility', 'visible');
});

$('.hover-tunicate').mouseout(function() {
  $('.tunicate').css('visibility', 'hidden');
});

$('.hover-mollusk').mouseover(function() {
  $('.mollusk').css('visibility', 'visible');
});

$('.hover-mollusk').mouseout(function() {
  $('.mollusk').css('visibility', 'hidden');
});

$('.hover-shrimp').mouseover(function() {
  $('.shrimp').css('visibility', 'visible');
});

$('.hover-shrimp').mouseout(function() {
  $('.shrimp').css('visibility', 'hidden');
});

$('.hover-fish').mouseover(function() {
  $('.fish').css('visibility', 'visible');
});

$('.hover-fish').mouseout(function() {
  $('.fish').css('visibility', 'hidden');
});

/* CONSERVATION STATUS QUESTION */
// For wrong answers...
$(".wrong").on("click", function() {
  // ...shake objects
  $(this).addClass("shake");
  // ...and display them transparently red...
  $(this).css("background-color", "#FA000080")
  // ...then reset the modifications by...
  let delay1 = setTimeout(function() {
    // ...removing the shake effect class...
    $(".shake").removeClass("shake");
    // ...and by changing the transparently red colour back to initial transparently turquoise colour...
    $(".wrong").css("background-color", "#50E6F750")
    // ...after 2 seconds
  }, 2000);
});

// For good answers...
$(".correct").on("click", function() {
  // ...make objects wobble...
  $(this).addClass("jello");
  // ...display them transparently green...
  $(this).css("background-color", "#00ff1150");
  // ...hide initial message from dialog box...
  $(".msg1").hide();
  // ...and show a new message for choosing the correct answer
  $(".msg2").show();

  // ...then reset the modifications by...
  let delay2 = setTimeout(function() {
    // ...removing the jello/wobble effect class...
    $(".jello").removeClass("jello");
    // ...by hiding the new message...
    $(".msg2").hide();
    // ...by showing the initial message...
    $(".msg1").show();
    // ...and by changing the transparently green colour back to initial transparently turquoise colour...
    $(".correct").css("background-color", "#50E6F750")
    // ...after 10 seconds to let the user read the message
  }, 10000);
});


// $(document).ready(function() {
//       setTimeout(function() {});