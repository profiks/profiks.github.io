/**
 * Listen to dom loading
 */
$(function() {
    
     /**
      * Initialize header tab menu
      */
     tabs();
    
     /**
      * Initialize footer tabs
      */
     footerTabs();
    
     /**
      * Initialize carousel slider
      */
     slider();
    
     /**
      * Get fixed header on scroll
      */
     sticky();
    
     /**
      * Initialize cascade slider for videos
      */
     cascadeSlider();
    
     /**
      * When hover on "Узнать больше" tile, get them overlay
      */
     tileOverlay();
    
     /**
      * Our works full screen gallery
      */
     popupGallery();
    
     /**
      * Masck phone number input
      */
     mascPhoneNumber();
    
      
     /**
      * Initialize scroll top button
      */
     scrollTop();
    
     /**
      * Call to action animated button
      */
     callMePopup();
    
    
     /**
      * Initialize animation on window scroll
      */
     wowAnimation();
    
    
    /**
     * Mobile menu drop down
     */
    dropMenu();
    
    
    /**
     * Scroll over google map if no focus
     */
    scrollMap();
    
    /**
     * Scroll To element
     */
    scrollAcross();
    
});





function tabs(){ 
    
    if( $('.tab__link').length !== 0 ) {
        
        $('.tab__link').on('click', function(e){
            e.preventDefault();

            console.log(e);

            var tab_id = $(this).attr('data-tab');

            $('.tab__link').removeClass('active');
            $('.tab__content').removeClass('current');

            $(this).addClass('active');
            $(`#${tab_id}`).addClass('current');
        });
        
    }//end check    
}






function footerTabs(){ 
    if( $('.bottom-tab__link').length !== 0 ) {
        
        $('.bottom-tab__link').on('click', function(e){
            e.preventDefault();


            var tab_id = $(this).attr('data-tab');

            $('.bottom-tab__link').removeClass('active');
            $('.bottom-tab__block').removeClass('current');

            $(this).addClass('active');
            $(`#${tab_id}`).addClass('current');
        });
        
    }//end check
}





function sticky(){
    
     if( $('#sticker').length !== 0 ) {
         
         $('#sticker').sticky({
             topSpacing:0
         });
         
     }//end check   
    
}





function slider(){
    
    if( $('.rotator').length !== 0 ) {
        
        $('.rotator').slick({
            dots: true
            //adaptiveHeight: true
        });
        
    }//end check    
}





function cascadeSlider(){
    
    if( $('#cascade-slider').length !== 0 ) {
    
         $('#cascade-slider').cascadeSlider({

         });
        
        $("#cascade-slider").swiperight(function(e) {
            e.stopPropagation();
            $('.cascade-slider_arrow-right').click();
        });
        
        $("#cascade-slider").swipeleft(function(e) {
            e.stopPropagation();
            $('.cascade-slider_arrow-left').click();
        });
        
    }//end check
}






function tileOverlay(){
    
    if( $('.offer__tile').length !== 0 ) {
        
        $('.offer__tile').hover(
           function(){ $(this).addClass('hovered') },
           function(){ $(this).removeClass('hovered') }
        );
        
    }//end check
}





function translateMagnificPopup(){
    $.extend(true, $.magnificPopup.defaults, {
      tClose: 'Закрыть', 
      tLoading: 'Загрузка...',
      gallery: {
        tPrev: 'Предыдущая',
        tNext: 'Следующая', 
        tCounter: '%curr% из %total%'
      },
      image: {
        tError: '<a href="%url%">Изображение</a> не возможно загрузить.' 
      },
      ajax: {
        tError: '<a href="%url%">Контент</a> не возможно загрузит.'
      }
    });
}





function popupGallery(){
    
    if( $('.gallery').length !== 0 ) {
       
        $('.gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Загрузка ...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                tError: '<a href="%url%"> картинка не найдена',
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            }
        });

        translateMagnificPopup();
        
    }//end check

}





function mascPhoneNumber(){
    
    if( $('.contact-form__phone').length !== 0 ) {
        
        $('.contact-form__phone').mask('(999) 999-9999');
        
    }//end check
    
}





function scrollTop(){
    
    if( $('.go-up').length !== 0 ) {
        
        if($(window).scrollTop() > 400){
            $('.go-up').fadeIn();
        }

        $(window).scroll(function(){
            if ($(this).scrollTop() > 400) {
                $('.go-up').fadeIn();
            } else {
                $('.go-up').fadeOut();
            }
        });



        $('.go-up').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
        
    }//end check

}






function callMePopup(){
    
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







function wowAnimation() {
    var wow = new WOW({         
        mobile : false,
        offset : 100
    });
    
    wow.init();
}



function scrollMap(){
    if( $('.js-map').length !== 0 ) {
        $('.js-map')
        .click(function(){ $(this).addClass('focused') })
        .mouseleave(function(){ $(this).removeClass('focused') });
    }//end check
}




function dropMenu(){
    
    if( $('.drop-menu').length !== 0 ) {  
    
        $('.drop-menu').on('click', function(e){
            e.preventDefault();
            var target = $(this).data('target');
            $(this).toggleClass('active');
            $(`#${target}`).toggleClass('shown');
        });
        
    }//end check
    
}




function scrollAcross(){
    
    if( $('.js-goto').length !== 0 ) {          
         
        $('.js-goto').click(function(e){
             e.preventDefault();
            var goTo = $(this).attr('href');
            $(window).scrollTo(goTo,{
                duration: 700,
                offset:-70
            });	
        });
        
    } //end check
   
}



