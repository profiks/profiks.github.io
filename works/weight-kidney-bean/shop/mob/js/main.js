$(document).ready(function() {

	/*touday*/
var month = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var mydate= new Date()
                mydate.setDate(mydate.getDate());
     $(".touday").html(days[mydate.getDay()]+", "+month[mydate.getMonth()]+" "+mydate.getDate()+", "+mydate.getFullYear());



  $('#submit-outform').on('click', function(e) {         
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
});//end DOM