$( document ).ready(function() {
    
    
    $('.js__go-to').on('click',function(e){
        e.preventDefault();
        var goTo = $(this).attr('href');
        $('body').scrollTo(goTo,{
            duration:900,
            axis:'y',
            offset:0  
        });
    });
    
  
});




