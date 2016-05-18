$(document).ready(function(){
    
    var header = $("#mainNav");
    
    
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
      
        if (scroll > 10) {
            header.addClass("navbar-default");
        } else {
            header.removeClass("navbar-default");
        }
        
        
    });
    
    $(".txt-h1").fitText(1.2,{ minFontSize: '30px', maxFontSize: '72px' }); 
    $(".txt-h3").fitText(1.2,{ minFontSize: '26px', maxFontSize: '48px' }); 
    $(".txt-h4").fitText(1.2,{ minFontSize: '22px', maxFontSize: '36px' }); 
    
    $('.goto').click(function(e){
       e.preventDefault();
       $(this).children('span').addClass('animated');    
       var goTo = $(this).attr('href');
        
          setTimeout(function(){ 
              $('body').scrollTo(goTo,{
				duration:900,
                axis:'y',
                offset:-20  
              });
              $('.goto span').removeClass('animated'); 
          }, 1000);
              
  });
    
    
    
    
     $('#videBg').vide({
     'mp4': 'video/ocean',
     'webm': 'video/ocean',
     'ogv': 'video/ocean',
     'poster': 'video/ocean'
    }, {
      volume: 0,
      playbackRate: 1,
      muted: true,
      loop: true,
      autoplay: true,
      position: '50% 50%', 
      posterType: 'detect', 
      resizing: true, 
      bgColor: 'transparent', 
      className: ''    
    });

    
    
});//end DOM ready