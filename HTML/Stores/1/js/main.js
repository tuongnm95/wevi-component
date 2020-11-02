$(document).ready(function () {
  $(".slide").owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
