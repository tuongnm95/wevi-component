$(document).ready(function () {
  $(".carousel").carousel();

  if ($(window).width() > 768) {
    $(window).scroll(function () {
      var height_head = $(".main-navbar").height();
      if ($(window).scrollTop() > height_head) {
        $("#mainNav").addClass("active");
      } else {
        $("#mainNav").removeClass("active");
      }
    });
  }
});
