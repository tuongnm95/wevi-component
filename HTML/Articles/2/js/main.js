$(document).ready(function () {
  $(".wevi-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      992: { items: 3 },
      1266: { items: 4 },
    },
  });
  if ($(".wevi-component-wrapper").hasClass("style-1")) {
    $(".owl-dots").addClass("d-none");
  }
});
