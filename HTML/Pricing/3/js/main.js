$(document).ready(function () {
  $(".pricing-carousel").owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
