
var areYouReallySure = false;

var str = "\n*****************************************\nWAIT! WAIT! WAIT! WAIT! WAIT! WAIT! WAIT! \n*********************************************\n\nSpecial Discount Activated!\n\nVALID TODAY ONLY!\n*****************************************\n\nClick STAY ON PAGE below to receive your instant discount.\n";



function areYouSure() {	
		if (!areYouReallySure) {
			areYouReallySure = true;
			$('.discount-confirmation').show();		
			return str;
		}//end if	
} //end areYouSure()



window.onbeforeunload = areYouSure;


