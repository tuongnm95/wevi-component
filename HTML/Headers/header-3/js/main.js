$(document).ready(function () {
    $('.menus-mobile .sub-menu').slideUp()
    $('.menus-mobile .fa-plus').click(function () {
        $('.menus-mobile .sub-menu').slideToggle();
    });
    $('.toggle').click(function () {
        $('.menus-mobile, .overlay, body').addClass('active');
    });
    $('.closed img, .overlay').click(function () {
        $('.menus-mobile, .overlay, body').removeClass('active');
    });
});