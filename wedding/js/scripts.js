$( document ).ready(function() {
    
    $('h1').fitText(1.2, { minFontSize: '25px', maxFontSize: '42px' });
    $('h2').fitText(1.2, { minFontSize: '22px', maxFontSize: '34px' });
    $('h4').fitText(1.2, { minFontSize: '18px', maxFontSize: '23px' });
    
    
    $("#tel").mask("(999) 999-9999");
    
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
    
    
    
    
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    
    
});




