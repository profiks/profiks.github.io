$( document ).ready(function() {
    
    $('.js-h1').fitText(1.2, { minFontSize: '25px', maxFontSize: '40px' });
    $('.js-h2').fitText(1.2, { minFontSize: '22px', maxFontSize: '30px' });
    $('.js-h3').fitText(1.2, { minFontSize: '18px', maxFontSize: '25px' });
    $('.js-h4').fitText(1.2, { minFontSize: '16px', maxFontSize: '23px' });
    
    
    $("#tel").mask("(999) 999-9999");
    
    if($("#subscribeForm").length !== 0) {
         $("#subscribeForm").validate({
                rules: {					
					name: {
						required: true,
						minlength: 2,
                        maxlength: 50
					},
                    email: {
                        email: true,
                        required: true
                    }
				},
                messages: {					
					name: {
						required: "",
						minlength: "",
                        maxlength: ""
					},
					email: {
                       required: "",
                       email: ""    
                    }
				}
        });
    }//end if
    
   
    
    
    if($(".owl-carousel").length !== 0) {
		  $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:false
                }
            },
            nav: true,
            navText: ["<span class='icon-l'><</span>","<span class='icon-r'>></span>"]
        });
    }//end if
    
    
    function showButton() {


        var button  = $('.scroll-top'), //button that scrolls user to top
            view = $(window);
        
        
        $(document).on('scroll', function() {
           
                if (view.scrollTop() > 1000) {
                    button.show();
                }
                else {
                    button.hide();
                }
        });
    }
  
    if($(".scroll-top").length !== 0) { 
        
        showButton();
        
        $('.scroll-top').click(function(e){
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
        
         
        
    }
    

    
    
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
    
  
});




