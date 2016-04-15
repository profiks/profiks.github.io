$(document).ready(function(){
    
    $('#ozoneCarousel').carousel({
        //interval: false
    });
    
    $("#ozoneCarousel").swiperight(function(){
        $(this).carousel("prev")
    });

    $("#ozoneCarousel").swipeleft(function(){
        $(this).carousel("next")
    });
    
    
    // Instantiate a slider
     var mySlider = $("input.slider").slider();
    
    $("input.slider").each(function () {
        var days = $(this).data("slider-days");
        var open = $(this).data("slider-open");
        var close = $(this).data("slider-close");
        $(this).prev(".slider").find(".slider-selection").append("<span class='ozone-start-hour'>"+open+"</span><p class='ozone-work-day'>"+days+"</p><span class='ozone-end-hour'>"+close+"</span>");
    });
    
    var days = $("input.slider").data("slider-days");
    var open = $("input.slider").data("slider-open");
    var close = $("input.slider").data("slider-close");
    
     $('.goTo').on('click',function(e){
                e.preventDefault();
                var goTo = $(this).attr('href');
                $('body').scrollTo(goTo,{
                    duration: 1000
                });
    });
    
    
    
    $("#leftNavScrollbar").mCustomScrollbar({
				axis: "y"
   });
    
    
    $('.parallax-scene').parallax({      
    
    });
    
    
});//end DOM ready