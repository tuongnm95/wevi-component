$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1,
        animateOut: 'fadeOut',
        smartSpeed: 1500,
        navText: [' <img src="images/left-arrow.png" alt="">', ' <img src="images/left-arrow.png" alt="">'],
    })
});