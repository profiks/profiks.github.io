(function($){
    
    $('.js__scroll').niceScroll({horizrailenabled:false});
    
    $('.js__parallax').parallax({
      calibrateX: false,
      calibrateY: true,
      invertX: false,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 8,
      scalarY: 8,
      frictionX: 0.8,
      frictionY: 0.8,
      originX: 2.0,
      originY: 1.0
    });
    
    $('.js__go-to').on('click',function(e){
        e.preventDefault();
        var goTo = $(this).attr('href');
        $('body').scrollTo(goTo,{
            duration: 1000
        });
    });
    
    
   $('.js__mansory').isotope({
      itemSelector: '.work__item',
      percentPosition: true,
      masonry: {
        columnWidth: '.work__item'
      }
    });
    
    
    
    
})(window.jQuery);