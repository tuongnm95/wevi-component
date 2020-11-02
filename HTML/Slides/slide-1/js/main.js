$(window).bind('load', function () {
    new WOW().init();
    var slideCarousel = $('.owl-carousel');
    slideCarousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1,
        smartSpeed: 1500,
        autoplay: false,
        autoplaySpeed: 3500,
    })
    slideCarousel.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;
        $('.slide-head').removeClass('animate__animated animate__fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.slide-head').addClass('animate__animated animate__fadeInUp  animate__delay-2s');
    });
});