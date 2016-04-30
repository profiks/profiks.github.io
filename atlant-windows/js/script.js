$(document).ready(function(){
    
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:17,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:true,
    navText: [ 
        "<div class='arrow-left'>  </div>",
        "<div class='arrow-right'>  </div>"
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});  
    
    $(".phone-number").mask("(999) 999-9999");
    
    
    $('.goto').click(function(e){
       e.preventDefault();
       var goTo = $(this).attr('href');
				$('body').scrollTo(goTo,{
					duration:900,
				});
  });

    
    
});//end DOM ready