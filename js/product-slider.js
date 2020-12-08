$(document).ready(function(){
    $('.product-slider-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1670,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 991,
            settings: 
            {
                slidesToShow: 3
            }
        }, 
        {
            breakpoint: 768,
            settings: 
            {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 520,
            settings: 
            {
                slidesToShow: 1
            }
        }, ]
    });
});

