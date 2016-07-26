$(document).ready(function() {

var rand_no;
/*people pourchase*/
rand_no = Math.floor((25-14)*Math.random()) + 15;
$('#peoplePurchased').html(rand_no);


/*people viewing*/
rand_no = Math.floor((50-29)*Math.random()) + 30;
 $('#peopleViewing').html(rand_no);


/*most recent pourchase*/
rand_no = Math.floor((3-0)*Math.random()) + 1;
$('#mostRecent').html(rand_no);




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



$(".select-package-btn").on('click', function(e) {         
            e.preventDefault();
            $(this).addClass("slected-btn");
            $.blockUI({
            	message: '',
             timeout: 5000
            });
        setTimeout(function() { 
            $.unblockUI({ 
                onUnblock: function(){ 
                	var url;
                	url = "final.html";
					location.replace(url);
                } 
            }); 
        }, 2000);
    });


$('.cc-number').payment('formatCardNumber');


});//end DOM