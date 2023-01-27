$(window).scroll(function(){
    if ($(window).scrollTop() >= 400) {
        $('.banner-section-fixed').addClass('fixed');
    }
    else {
        $('.banner-section-fixed').removeClass('fixed');
    }
});

$('document').ready(function(){    
    $('.menu-toggler').on('click', function() {
        if ($('.menu-block').hasClass("show")) {
            $('.menu-block').removeClass('show');
            $('.menu-toggler').removeClass('active');
            $('body').removeClass('menu-active');
        } else {
            $('.menu-block').addClass('show');
            $('.menu-toggler').addClass('active');
            $('body').addClass('menu-active');
        }
    });
});

// $(window).scroll(function () {
//     if ($(window).scrollTop() >= $(window).height()) {
//         $(".banner-section-fixed").css("opacity", 0.25;
//     } else {
//         $(".banner-section-fixed").css("opacity", 1 - $(window).scrollTop() / 1200);
//     }
// });