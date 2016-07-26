
var areYouReallySure = false;

var str = "Are you sure you don\'t want to take advantage of the Garcinia Cambogia offer?\n\nDon\'t forget - it will only be available for a LIMITED TIME. Since this offer is so cheap, there is no risk to you. You can also give them away if you\'d like. Or give it a shot, and get Garcinia Cambogia.\n\nIf you are wondering why this offer is so cheap, the simple answer is because the manufacturer is confident that their products will help you, and that you will continue to use their products, and refer friends and family.\n";



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





