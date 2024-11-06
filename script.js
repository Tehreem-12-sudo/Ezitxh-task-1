$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slick-prev'),  // Link to your custom 'Previous' button
        nextArrow: $('.slick-next')   // Link to your custom 'Next' button
    });
});