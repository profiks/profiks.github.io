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





/*touday*/
var month = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var mydate= new Date()
                mydate.setDate(mydate.getDate());
     $(".touday").html(days[mydate.getDay()]+", "+month[mydate.getMonth()]+" "+mydate.getDate()+", "+mydate.getFullYear());





/*scroll to top*/

    $(".rush-my-order").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
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
                    bottom: '-800px'
                }, 500);
            });

            var rand_no = Math.floor((200-99)*Math.random()) + 100;
            $('.count').text(rand_no);

 pay();

});//end DOM