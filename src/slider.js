$(document).ready(function () {
$(".carousel").slick({
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    variableWidth: true,
    asNavFor: ".review",
    centerPadding: "0px", // Забирає padding, який додає Slick.js
    responsive: [
    {
        breakpoint: 768,
        settings: {
        variableWidth: true,
        slidesToShow: 3,
        slidesScroll: 1,
        centerMode: true,
        arrows: false,
        },
    },
    {
        breakpoint: 320,
        settings: {
        variableWidth: true,
        slidesToShow: 1,
        slidesScroll: 1,
        centerMode: true,
        arrows: false,
        },
    },
    ],
});
$(".review").slick({
    asNavFor: ".carousel",
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 1,
    slidesScroll: 1,
});

// Додає клас expanded до активного елемента для згортання вниз
$(".carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
    $(".review-item").removeClass("expanded");
    $(".review-item[data-slick-index=" + nextSlide + "]").addClass(
        "expanded"
    );
    }
);
});