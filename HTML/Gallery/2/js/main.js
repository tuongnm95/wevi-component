$(function () {
  $(".gallery-image").isotope({
    itemSelector: ".image",
    layoutMode: "fitRows",
  });

  $(".gallery-nav a").click(function () {
    $(".gallery-nav a").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-class");
    $(".gallery-image").isotope({
      filter: selector,
    });
    return false;
  });
});
