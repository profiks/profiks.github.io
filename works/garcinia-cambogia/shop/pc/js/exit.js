
var areYouReallySure = false;

var str = "\nLIMITED TIME SPECIAL OFFER!\n\nFor a Limited Time - Get FREE SHIPPING! We will cover 100% of the shipping cost so you can see what this little pill can do for you!\n\nClick *Cancel* or *Stay* below to activate coupon.\n\n";


function areYouSure() {	
		if (!areYouReallySure) {
			areYouReallySure = true;
			$('#overlay2').show();
			$('#couponpath').show();		
			return str;
		}//end if	
} //end areYouSure()



window.onbeforeunload = areYouSure;

$(".coupon-close").click(function(){
	$('#overlay2').hide();
	$('#couponpath').hide();
});

