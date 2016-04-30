$(document).ready(function(){
    
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:17,
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
            items:3
        },
        1000:{
            items:4
        }
    }
});  
    
    $(".phone-number").mask("(999) 999-9999");
    
    
});//end DOM ready