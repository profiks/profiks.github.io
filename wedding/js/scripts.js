$( document ).ready(function() {
    
    $('h1.text-blue').fitText(1.2, { minFontSize: '25px', maxFontSize: '42px' });
    $('h2').fitText(1.2, { minFontSize: '22px', maxFontSize: '34px' });
    $('h3.header-big').fitText(1.2, { minFontSize: '22px', maxFontSize: '34px' });
    $('h2.text-med').fitText(1.2, { minFontSize: '20px', maxFontSize: '25px' });
    $('h4').fitText(1.2, { minFontSize: '18px', maxFontSize: '23px' });
    
    
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
    
  
    
    
    
    
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
    
    
});




