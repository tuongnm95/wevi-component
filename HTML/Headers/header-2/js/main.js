$(document).ready(function () {
    $('.toggle').click(function () {
        $(this).addClass('active');
        $('.nav-menus, .overlay').addClass('active');
    });

    $('.nav-menus .closed, .overlay').click(function () {

        $('.nav-menus, .toggle, .overlay').removeClass('active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#wevi-header').addClass('sticky');
        } else {
            $('#wevi-header').removeClass('sticky');
        }
    });
});