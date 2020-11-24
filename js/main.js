(function($) {
    "use strict";

    // data-background
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    // data-background-color
    $("[data-overlay]").each(function() {
        $(this).css("background-color", "url(" + $(this).attr("data-background") + ")")
    });

    // counter activation
    $('.single_counter_item .counter').counterUp({
        delay: 10,
        time: 10000
    });

       //Mean menu 
    $('#mobile_menu_nav').meanmenu({
        meanMenuContainer: '.mobile_menu',
        meanScreenWidth: "768"
    });

    // testimonial activation using slick slider
    $('.testimonial_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.author_thumb',
    });
    $('.author_thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        centerPadding: '0',
    });


})(jQuery);