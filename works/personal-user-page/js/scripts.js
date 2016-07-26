$( document ).ready(function() {


   $('#couponCarousel').carousel({
   	  interval: false,
   	  pause: "hover",
   });



   $('.read-more').click(function(){
   		var link = $(this).attr("href");
   		   		
		$('#couponCarousel').on('slid.bs.carousel', function () {
		  $.scrollTo(link,{ duration: 300 });

		})

   	});  


});

