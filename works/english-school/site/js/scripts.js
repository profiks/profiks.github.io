/**
* Wait for DOM ready
*/
$(document).ready(function(){
    
    /**
    * Fixed top navigation and aside form
    * @use jquery sticky plugin : site/js/jquery.sticky.js
    */    
    if ($(window).width() >= 768) {
        $("#stickyNavigation").sticky({topSpacing:0});
        $("#stickyNavigation").removeClass('navbar-fixed-top');
    }else{
        $("#stickyNavigation").addClass('navbar-fixed-top');
    }
    
    $(window).resize(function(){
        if ($(window).width() >= 768) {
           $("#stickyNavigation").sticky({topSpacing:0});
           $("#stickyNavigation").removeClass('navbar-fixed-top');
        }else{
            $("#stickyNavigation").addClass('navbar-fixed-top');
            $("#stickyNavigation").unstick();
        }
    });
    
    
    /**
    * News feed on banner bottom
    * @use owl carousel plugin : site/js/owl.carousel.min.js
    */
    var banner = $('#bannerCourses');
    
    banner.owlCarousel({
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
                items:2
            },
            1200:{
                items:4
            }
        }
    });
    
    
    /**
    * Program courses carousel enabled only on mobile and thablet
    * @use owl carousel plugin : site/js/owl.carousel.min.js
    */
    
    var program = $('#programsMob');
    
    if ($(window).width() <= 767) {         
        program.owlCarousel({
            navigation : true,
            items:1
        });        
    }
    
    $(window).resize(function(){
        if (($(window).width() >= 767) && (program.hasClass('owl-carousel'))) {
            program.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            program.find('.owl-stage-outer').children().unwrap();
        }else if(($(window).width() < 767) && (!program.hasClass('owl-carousel'))){
             program.owlCarousel({
                navigation : true,
                items:1                
            });
        }
    });
    
    
    /**
    * Program courses carousel enabled only on mobile and thablet
    * @use owl carousel plugin : site/js/owl.carousel.min.js
    */
    
    var tab1 = $('#year2016');    
    var tab2 = $('#month01');    
    var active = 0;
    
    initOwl(tab1);
    
    
    $(window).resize(function(){
        if (($(window).width() <= 767) && active == 0) {
            $('#year2016').tab('show');
            initOwl(tab1);
            active = 1;
        }else if(($(window).width() >= 767) && active == 1){
            $('#year2016').tab('show');
            destroyOwl(tab1);
            destroyOwl(tab2);
            active = 0;
        }
        
    });
    

    $('#newsTab a[href="#year2016"]').on('shown.bs.tab', function () {
        initOwl(tab1);
    }).on('hide.bs.tab', function () {
        destroyOwl(tab1);
    });

    $('#newsTab a[href="#month01"]').on('shown.bs.tab', function () {
        initOwl(tab2);
    }).on('hide.bs.tab', function () {
        destroyOwl(tab2);
    });
        
    
    
    function initOwl(el){
        if ($(window).width() <= 767) {
             el.owlCarousel({
                navigation : true,
                autoHeight : true,
                items:1
            });
        }
    }
    
    function destroyOwl(el){
        el.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        el.find('.owl-stage-outer').children().unwrap();
    }
    
    
    
  
    
    
    
    
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
      interval: 6000  // slides interval in milliseconds 6000 = 6s
    });
    
    
    /**
    * Red form when focus label like placeholder
    */
     $('.red-form__input')
        .focus(function(){
                $(this).parent().addClass('focus');
        }).blur(function(){
               $(this).parent().removeClass('focus');
        });
    
    
    

}); // END dom ready