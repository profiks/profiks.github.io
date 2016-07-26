 function pay() {
                
       $('#submitbutton').on('click', function(e) {         
            e.preventDefault();
            $.blockUI({ 
            message: '<img src="img/giphy.gif" alt="proc" width="200" height="200" />', 
             timeout: 5000
            });
        setTimeout(function() { 
            $.unblockUI({ 
                onUnblock: function(){ $("#outform").submit(); } 
            }); 
        }, 2000);
        });

		
}//end pay




$(document).ready(function() {

	/*----------------------------------------------------select----------------------------------------------------*/


 $(".the-panel").click(function(){
 		$(".selected").removeClass("selected");	
 		$(this).addClass("selected");

 		var ID 				= 	$(this).children("#info .ID").html();

 		var shipingType 	= 	$(this).children(".shipingType").html();
 		var shipingPrice    =	$(this).children(".shipingPrice").html();
 		var Price           =	$(this).children(".totalPrice").html();
 		var retailPrice     =   $(this).children(".retail").html();
 		var save 			= 	$(this).children(".save").html();

 			if(shipingPrice==0) {
                        $(".shipping-type").html("<span class='red'>FREE</span> Shipping 11-18 days")
                    }
                    else {
                        $(".shipping-type").html("Shipping 11-18 days")
                    }
 		
 		$(".shipping-price").html("$ "+shipingPrice);
 		$(".total-price").html("$ "+Price+" USD");
 		$(".retail-price").html("$ "+retailPrice);
 		$(".save-price").html("You Save: $"+save);
 });




	/*----------------------------------------------------end select-----------------------------------------------*/




/*-----------------------------------------------------------country detect -----------------------------------------*/

 if ( typeof(window.geoipData) != "undefined" && typeof(window.geoipData.country_code) != "undefined" &&  window.geoipData.country_code != '' ) {
                    $("#country").val(window.geoipData.country_code).change()
                }
                var no_shipping_countries = {
                    'AR': 'Argentina',
                    'BO': 'Bolivia',
                    'BR': 'Brazil',
                    'CL': 'Chile',
                    'CO': 'Colombia',
                    'EC': 'Ecuador',
                    'GH': 'Ghana',
                    'GY': 'Guyana',
                    'NG': 'Nigeria',
                    'PY': 'Paraguay',
                    'PE': 'Peru',
                    'SR': 'Suriname',
                    'UY': 'Uruguay',
                    'VE': 'Venezuela',
                    'FK': 'Falkland Islands (Malvinas)',
                    'GS': 'South Georgia and the South Sandwich Islands'
                };

                $.validator.addMethod("shippingcheck", function(value, element, params) {
                    if ( typeof(no_shipping_countries[value]) != 'undefined' ) {
                        return false;
                    }
                    return true;
                }, "This shipping type is not available for this location");


/*----------------------------------------------------------end country detect ---------------------------------*/





    setInterval(function() {
        $('#product_header_box').find('.active').fadeOut(500, function() {       
            $('#product_header_box').find('.rotate').toggleClass('active').promise().done(function() {
                $('#product_header_box').find('.active').fadeIn();
            });
                                
        });                            
    }, 5000); // end interval



    pay();


 });//end DOM