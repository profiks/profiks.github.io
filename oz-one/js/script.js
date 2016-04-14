$(document).ready(function(){
    
    $('#ozoneCarousel').carousel();
    
    $("#ozoneCarousel").swiperight(function(){
        $(this).carousel("prev")
    });

    $("#ozoneCarousel").swipeleft(function(){
        $(this).carousel("next")
    });
    
    
    // Instantiate a slider
     var mySlider = $("input.slider").slider();

    
     $('.goTo').on('click',function(e){
                e.preventDefault();
                var goTo = $(this).attr('href');
                $('body').scrollTo(goTo,{
                    duration: 1000
                });
    });
    
    
});//end DOM ready