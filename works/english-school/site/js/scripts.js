/**
* Wait for DOM ready
*/
$(document).ready(function(){
    
    /**
    * Fixed top navigation and aside form
    * @use jquery sticky plugin : site/js/jquery.sticky.js
    */
    $("#stickyNavigation").sticky({topSpacing:0});
    
    
    /**
    * News feed on banner bottom
    * @use owl carousel plugin : site/js/owl.carousel.min.js
    */
    var owl = $('#bannerCourses');
    
    owl.owlCarousel({
        loop:true,
        nav:true,
        navText : ['',''],
        margin:0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },            
            960:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    
    /**
    * Apply hover class for News Feed items
    */
    $('#bannerCourses .feed-slider__container').hover(
           function(){ $(this).find(".feed-slider__heading").addClass('feed-slider__heading--hover') },
           function(){ $(this).find(".feed-slider__heading").removeClass('feed-slider__heading--hover') }
    );
    
    
    /**
    * Bootstrap carousel options
    * @use bootstrap site/js/bootstrap.min.js
    */
    
    $('.carousel').carousel({
      interval: 6000
    });
    
    

}); // END dom ready