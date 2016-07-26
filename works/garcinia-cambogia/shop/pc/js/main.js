$(document).ready(function() {

/*touday*/
var month = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var mydate= new Date()
                mydate.setDate(mydate.getDate());
     $(".touday").html(days[mydate.getDay()]+", "+month[mydate.getMonth()]+" "+mydate.getDate()+", "+mydate.getFullYear());



$(document).on('click', '#close_people_shopping_for', function(e) {
                    e.preventDefault();
                    $('#people_shopping_for').animate({
                        bottom: '-70px'
                    }, 500);
                });

var rand_no = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    $('.count').text(rand_no);



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










});//end DOM


