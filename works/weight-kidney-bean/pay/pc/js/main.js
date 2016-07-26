$(document).ready(function() {


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

pay();

$(".buy-panel").hover(
  function() {
    $(this).addClass("product-hover");
  }, function() {
    $( this ).removeClass("product-hover");
  }
);

 $(".buy-panel").click(function(){
        $(".product-selected").removeClass("product-selected"); 
        $(this).addClass("product-selected");

        var ID              =   $(this).children("#info .ID").html();
                                                    
        var packageType     =   $(this).children(".pkgType").html();                                           
        var shipingType     =   $(this).children(".shipingType").html();
        var shipingPrice    =   $(this).children(".shipingPrice").html();
        var Price           =   $(this).children(".totalPrice").html();
        var retailPrice     =   $(this).children(".retail").html();
        var save            =   $(this).children(".save").html();

            if(shipingPrice==0) {
                        $(".shipping-type").html("<b>FREE</b> Shipping 11-18 days")
                    }
                    else {
                        $(".shipping-type").html("Shipping 11-18 days")
                    }

        $(".package-type").html(packageType);        
        $(".shipping-price").html(shipingPrice);
        $(".total-price").html(Price);
        $(".retail-price").html(retailPrice);
        $(".save-price").html("You Save: "+save);
 });




    /*----------------------------------------------------end select-----------------------------------------------*/



setInterval(function() {
        $('#product_header_box').find('.active').fadeOut(500, function() {       
            $('#product_header_box').find('.rotate').toggleClass('active').promise().done(function() {
                $('#product_header_box').find('.active').fadeIn();
            });
                                
        });                            
    }, 5000); // end interval
  
            
                jQuery(document).on('click', '#close_people_shopping_for', function(e) {
                    e.preventDefault();
                    jQuery('#people_shopping_for').animate({
                        bottom: '-70px'
                    }, 500);
                });

        // Count order
            setTimeout(function() {
                $('.count_order').animate({
                    bottom: '1px'
                }, 500);
            }, 1500);

            $(document).on('click', '.count_order .close', function(e) {
                e.preventDefault();
                $('.count_order').animate({
                    bottom: '-82px'
                }, 500);
            });

            var rand_no = Math.floor((200-99)*Math.random()) + 100;
            $('.count').text(rand_no);






});//end DOM

