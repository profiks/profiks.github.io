$(document).ready(function(){
    
    var header = $(".main-navigation");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        if ($(window).width() > 1020) {
             if (scroll > 600) {
            header.addClass("navbar-default");
            } else {
                header.removeClass("navbar-default");
            }
        }else if ($(window).width() > 600) {
             if (scroll > 450) {
            header.addClass("navbar-default");
            } else {
                header.removeClass("navbar-default");
            }
        }else if ($(window).width() > 460) {
             if (scroll > 375) {
            header.addClass("navbar-default");
            } else {
                header.removeClass("navbar-default");
            }
        }else if ($(window).width() < 459) {
             if (scroll > 375) {
            header.addClass("navbar-default");
            } else {
                header.removeClass("navbar-default");
            }
        }
        
    });
    
   
  
    
    $('.goto').click(function(e){
       e.preventDefault();
       $(this).children('span').addClass('animated');    
       var goTo = $(this).attr('href');
        
          setTimeout(function(){ 
              $('body').scrollTo(goTo,{
				duration:900,
                axis:'y'
              });
              $('.goto span').removeClass('animated'); 
          }, 1000);
              
  });
    
    

    
    
});//end DOM ready