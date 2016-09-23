/**
* Wait for DOM ready
*/
$(document).ready(function(){
    
    /**
    * Fixed top navigation
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
    * Scrollable news feed
    * @use jquery mouseweel : site/js/jquery.mousewheel.min.js
    */
        
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
    
}); // END dom ready