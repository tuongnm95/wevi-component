(function ($) {
  $.fn.weviFullWidth = function () {
    return this.each(function () {
      var elem = $(this);
      var parent = elem.parent();
      var windowWidth = $(window).width();
      // if ( windowWidth > 780 ) {
      //   elem.css({
      //       left: - ( windowWidth - parent.width() ) / 2 + 'px'
      //   });
      // }
      elem.css({
        position: "relative",
        width: windowWidth + "px",
        left: -(windowWidth - parent.width()) / 2 + "px",
      });
    });
  };
})(jQuery);

$(document).ready(function () {
  $(".wevi-component-full-width").weviFullWidth();
});
$(window).resize(function () {
  $(".wevi-component-full-width").weviFullWidth();
});
