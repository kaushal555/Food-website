$('.chef').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.dish').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

$(".navigation li"). hover(function() {
    var isHovered = $(this). is(":hover");
    if (isHovered) {
    $(this). children("ul"). stop(). slideDown(300);
    } else {
    $(this). children("ul"). stop(). slideUp(300);
    }
    });

    (function(){
        $(document).click(function() {
           var $item = $(".shopping-cart");
           if ($item.hasClass("active")) {
             $item.removeClass("active");
           }
         });
         
         $('.shopping-cart').each(function() {
           var delay = $(this).index() * 50 + 'ms';
           $(this).css({
               '-webkit-transition-delay': delay,
               '-moz-transition-delay': delay,
               '-o-transition-delay': delay,
               'transition-delay': delay
           });
         });
         $('#cart').click(function(e) {
           e.stopPropagation();
           $(".shopping-cart").toggleClass("active");
         });
         
         $('#addtocart').click(function(e) {
           e.stopPropagation();
           $(".shopping-cart").toggleClass("active");
         });
       
       
         
       })();