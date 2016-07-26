$(function() {  
	
			$('.goTo').click(function(e){
				e.preventDefault();
				var goTo = $(this).attr('href');
				$('body').scrollTo(goTo,{
					duration:'500',
					offset:-68
				});	
			});


			$('#about-us').on({'mouseenter':function(){
			        $('.about-text').fadeIn();
			    },'mouseleave':function(){
			        $('.about-text').fadeOut();
			    }
			});


			if(($('#projects').length != 0) && ($('#news').length != 0) ){
				var newsTop = $('#news').offset().top -350;
				var projectsTop = $('#projects').offset().top -350;
			}


			/*$(window).scroll(function() {
			    if ($(this).scrollTop() > newsTop) {
			       	$('#news').animate({
           			    opacity: 1
			        }, 'slow'
			    	);
			       	
			    }

			    if ($(this).scrollTop() > projectsTop) {
			       	$('#projects').animate({
           			    opacity: 1,
			        }, 'slow'
			    	);
			       	
			    }
			});*/


			if($(".ellipsis").length !== 0) {
				$(".ellipsis").ellipsis({
					row: 1
				});
			}
			
			
			$("#souvenirsGallery").PikaChoose({
						autoPlay:false
			});


			$("#projects").mCustomScrollbar({
				axis: "y",
				theme:"rounded-dots-dark",
				scrollButtons: true
			});


			$("section.lazy").lazyload({
		      effect : "fadeIn"
		    });
      



});