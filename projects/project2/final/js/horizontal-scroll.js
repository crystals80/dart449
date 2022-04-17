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
$('.hvr-algae').mouseover(function() {
  $('.algae').css('visibility', 'visible');
});
$('.hvr-algae').mouseout(function() {
  $('.algae').css('visibility', 'hidden');
});

$('.hvr-lobster').mouseover(function() {
  $('.lobster').css('visibility', 'visible');
});

$('.hvr-lobster').mouseout(function() {
  $('.lobster').css('visibility', 'hidden');
});

$('.hvr-crab').mouseover(function() {
  $('.crab').css('visibility', 'visible');
});

$('.hvr-crab').mouseout(function() {
  $('.crab').css('visibility', 'hidden');
});

$('.hvr-tunicate').mouseover(function() {
  $('.tunicate').css('visibility', 'visible');
});

$('.hvr-tunicate').mouseout(function() {
  $('.tunicate').css('visibility', 'hidden');
});

$('.hvr-mollusk').mouseover(function() {
  $('.mollusk').css('visibility', 'visible');
});

$('.hvr-mollusk').mouseout(function() {
  $('.mollusk').css('visibility', 'hidden');
});

$('.hvr-shrimp').mouseover(function() {
  $('.shrimp').css('visibility', 'visible');
});

$('.hvr-shrimp').mouseout(function() {
  $('.shrimp').css('visibility', 'hidden');
});

$('.hvr-fish').mouseover(function() {
  $('.fish').css('visibility', 'visible');
});

$('.hvr-fish').mouseout(function() {
  $('.fish').css('visibility', 'hidden');
});

/* CURSOR CHANGES COLOUR WHEN HOVERED OVER SPECIFIC WORDS*/
const hvrCursor = document.querySelectorAll('.hvr-cursor');

hvrCursor.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

/* QUESTIONS AND ANSWERS */
// For wrong answers...
$(".wrong").on("click", function() {
  // ...shake objects
  $(this).addClass("shake");
  // ...and display them transparently red...
  $(this).css("background-color", "#FA000080");
  // ...hide initial message from dialog box...
  $(".msg1, .msg2, .msg3, .msg4").hide();
  // ...and show a new message for choosing the correct answer
  $(".alert").show();

  // ...then reset the modifications by...
  let delay1 = setTimeout(function() {
    // ...removing the shake effect class...
    $(".shake").removeClass("shake");
    // ...by hiding the new message...
    $(".alert, msg2, msg3, msg4").hide();
    // ...by showing the initial message...
    $(".msg1").show();
    // ...and by changing the transparently red colour back to initial transparently turquoise colour...
    $(".wrong").css("background-color", "#50E6F750");
    // ...after 5 seconds to let the user read the message
  }, 5000);
});

// For good answers...
$(".correct-1").on("click", function() {
  // ...make objects wobble...
  $(this).addClass("jello");
  // ...display them transparently green...
  $(this).css("background-color", "#00ff1150");
  // ...hide initial message from dialog box...
  $(".msg1, .msg3, .msg4, .alert").hide();
  // ...and show a new message for choosing the correct answer
  $(".msg2").show();

  // ...then reset the modifications by...
  let delay2 = setTimeout(function() {
    // ...removing the jello/wobble effect class...
    $(".jello").removeClass("jello");
    // ...by hiding the new message...
    $(".msg2, .msg3, .msg4, .alert").hide();
    // ...by showing the initial message...
    $(".msg1").show();
    // ...and by changing the transparently green colour back to initial transparently turquoise colour...
    $(".correct").css("background-color", "#50E6F750");
    // ...after 10 seconds to let the user read the explanation
  }, 10000);
});

// Same as correct-1 but for correct-2 button
$(".correct-2").on("click", function() {
  $(this).addClass("jello");
  $(this).css("background-color", "#00ff1150");
  $(".msg1, .msg2, .msg4, .alert").hide();
  $(".msg3").show();

  let delay3 = setTimeout(function() {
    $(".jello").removeClass("jello");
    $(".msg2, .msg3, .msg4, .alert").hide();
    $(".msg1").show();
    $(".correct").css("background-color", "#50E6F750");
  }, 10000);
});

// Same as correct-1 and correct-2 but for correct-3 button
$(".correct-3").on("click", function() {
  $(this).addClass("jello");
  $(this).css("background-color", "#00ff1150");
  $(".msg1, .msg2, .msg3, .alert").hide();
  $(".msg4").show();

  let delay4 = setTimeout(function() {
    $(".jello").removeClass("jello");
    $(".msg2, .msg3, .msg4, .alert").hide();
    $(".msg1").show();
    $(".correct").css("background-color", "#50E6F750");
  }, 10000);
});

// When initial message reappears, hide all new texts
$(".msg1").show(function() {
  $(".msg2, .msg3, msg4, .alert").hide();
});


// $(document).ready(function() {
//       setTimeout(function() {});