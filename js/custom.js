$(document).ready(function(){
    //navbar

    var nav = $('nav');

    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();

        if(scrolling>100){
            nav.addClass('navfix');
        }
        else{
            nav.removeClass('navfix');
        }
    });

    //venobox

    new VenoBox({
        selector: '.venobox'
      });

    //peralax

    $('.parallax-window').parallax({imageSrc: 'images/counter.png'});

    //counter up

    $('.counter').counterUp({
        delay: 10,
        time: 8000,
    });

    //post slider

    $('.post-slider').slick({
        prevArrow : '<i class="fas fa-arrow-right fs-25"></i>',
        nextArrow : '<i class="fas fa-arrow-left fs-25"></i>',
        autoplay : true ,
        slidesToShow : 3 ,
        arrows : true ,
        slidesToScroll : 1,
        speed : 500 ,
        centerMode : true ,
        centerPadding : 0 ,
        autoplaySpeed : 1000,
        touchMove : true ,
        infinite : true ,
        responsive : [{
            breakpoint : 576,
            settings : {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows : true,
                centerMode : true ,
                centerPadding : 0 ,
                touchMove : true ,
            }
        },
    ],
    responsive : [{
        breakpoint : 767,
        settings : {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows : true,
            centerMode : true ,
            centerPadding : 0 ,
            touchMove : true ,
        }
    },
]
    });

    //wow js

    new WOW().init();
});