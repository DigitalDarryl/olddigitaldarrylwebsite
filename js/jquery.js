/* ----- STICKY NAV BAR (JQuery)------- */

$(window).scroll(function() {
  const sticky = $("nav");
  if ($(window).scrollTop() >= 50) {
    sticky.addClass("fixed");
  } else {
    sticky.removeClass("fixed");
  }
});

$(".post-wrapper").slick({
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: $(".post-slider .box"),
  prevArrow: $(".post-slider .box2"),

  responsive: [
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 850,
      settings: {
        swipeToSlide: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        swipeToSlide: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


/* ------ SCROLL ANIMATION ----- */



/* ----- CONTACT FORM ------- */

/* ---- ACTIVATE FORM SPREE WHEN PUBLISHING ------ 

$(document).ready(function() {
  $(".submitBtn").click(function(event) {
    event.preventDefault();
  });
});


*/
