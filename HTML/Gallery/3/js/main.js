$(document).ready(function () {
  $(".style-1 .gallery-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
  });

  if ($("#gallery").hasClass("style-2")) {
    $(".gallery-carousel").owlCarousel({
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  } else {
    $(".gallery-carousel").owlCarousel({
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
});
