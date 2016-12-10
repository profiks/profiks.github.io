/**
 * Listen to dom loading
 */
$(function() {
    
    
    /**
     * Drop down menus actions
     */
    dropMenu();
    
    /**
     * Initialize tabs
     */
    contactTabs();
    
    /**
     * Show right banner
     */
    banner();
    
    /**
     * Mask phone number input
     */
    maskPhone();
    
    /**
     * When click on map enable scroll
     */
    scrollMap();
    
    
    /**
     * Scroll to contact form
     */
    questionScroll();
    
    
    /**
     * Smooth scroll to element
     */
    scrollAcross();
    
    
    /**
     * Tabs
     */
    //orderTabs();
    
    /**
     * Buy cran popup
     */
    buyPopup();
    
    /**
     * Main page caousel
     */
    
    slickCarousel();
    
});



 


function dropMenu(){
    
    if( $('.js-side-menu').length !== 0 ) {
        
        $('.js-side-menu').on('click', function(){
            var target = $(this).data('target');
            $(this).toggleClass('hamburger--open');
            $(this).find('.hamburger').toggleClass('hamburger--open');
            $('#'+target+'').toggleClass('shown');
        });
        
    }//end check
}



function banner(){
    
    if( $('#banner').length !== 0 ) {
        
        
        var Banner = $('#banner'),
        cleaarBtn = $('#bannerClear'),
        checker = $.cookie('show_banner');


        if (checker === 'undefined' || checker === null || !checker) {
            $.cookie('show_banner', 1);
            checker = 1;
        }     

        if(checker == 1){
            setTimeout( function(){

                Banner.addClass('banner--shown');            

            }, 5000);
        }else{
            return false;
        }

        cleaarBtn.on('click', function(){
            $.cookie('show_banner', 0);
            Banner.removeClass('banner--shown');
        });

        $(window).scroll(function(){
             Banner.removeClass('banner--shown');
        });

        $(window).on('click', function(){
             Banner.removeClass('banner--shown');
        });

        
    }//end check
    
}




function contactTabs(){ 
    
    if( $('.tab-nav').length !== 0 ) {
        
        $('.tab-nav').on('click', function(e){
            
            e.preventDefault();
            $('.tab-nav').removeClass('active');
            $(this).addClass("active");
            
            var tab = $(this).attr('data-tab');
            $(".tab__content").not('#'+tab+'').css("display", "none");
            $('#'+tab+'').fadeIn(600);

            
        });
        
    }//end check    
}



function scrollMap(){
    if( $('.js-map').length !== 0 ) {
        $('.js-map')
        .click(function(){ $(this).addClass('focused') })
        .mouseleave(function(){ $(this).removeClass('focused') });
    }//end check
}


function maskPhone(){
    
    if( $('.phone-mask').length !== 0 ) {
        
        $('.phone-mask').mask('(999) 999-9999');
        
    }//end check
}


function scrollAcross(){
    
    if( $('.js-goto').length !== 0 ) {          
         
        $('.js-goto').click(function(e){
             e.preventDefault();
            var goTo = $(this).attr('href');
            $(window).scrollTo(goTo,{
                duration: 700,
                offset:-40
            });	
        });
        
    } //end check
   
}





function questionScroll(){
    if( $.cookie('scroll') == 1 ){
        $('html, body').animate({scrollTop: parseInt($('.contact-form').offset().top - 40) + "px"}, {duration: 1000});
        $(document).find('.contact-form').find('input').eq(0).focus();
        $.cookie('scroll', null,{path: '/'});
    }

    $('.js-question').on('click',function(){
        $.cookie('scroll', 1, {expires: (1000*60*60*24),path: '/'});
    });
}








function orderTabs(){ 
    if( $('.app-tab').length !== 0 ) {
        
        $('.app-tab__switch').on('click', function(e){
            e.preventDefault();

            var tab_id = $(this).attr('data-tab');

            $('.app-tab__switch').removeClass('active');
            $('.app-tab__slide').removeClass('current');

            $(this).addClass('active');
            $('#'+tab_id+'').addClass('current');
        });
        
    }//end check
}





function buyPopup(){
    
    if( $('.popup-with-zoom-anim').length !== 0 ) {
        
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: true,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
        
    }//end check
    
}



function slickCarousel(){
    
    if( $('.carousel').length !== 0 ) {
    
        $('.carousel').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 8000,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span class="icon icon--slide"></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span class="icon icon--slide"></button>',
          });
        
    } //end check
}

