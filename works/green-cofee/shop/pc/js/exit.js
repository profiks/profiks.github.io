
var areYouReallySure = false;

var str = "\n*****************************************\nWAIT!!\n\nSpecial 20% Discount Activated!\n\nVALID TODAY ONLY!\n*****************************************\n\nClick STAY ON PAGE below to receive your instant discount.\n";



function areYouSure() {	
		if (!areYouReallySure) {
			areYouReallySure = true;
			$('.sf-back-overlay').show();
			$('#couponpath').show();		
			return str;
		}//end if	
} //end areYouSure()



window.onbeforeunload = areYouSure;

$(".coupon-close").click(function(){
	$('.sf-back-overlay').hide();
	$('#couponpath').hide();
});


