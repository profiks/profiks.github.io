

jQuery(function(){
      /*
     var menu_top = $('#menu-top'),
	     menu_left = $('#left-block .doc-list-left');	


	 // Активная ссылка раздела
	 menu_top.find('a').filter(function(){
		 
		 var pathname = window.location.pathname.replace(/[^/]+$/g, ''),
         pathname = pathname.replace('ua/','');
		     href = $(this).attr('href').replace(/[^/]+$/g, '');
		 
		 if(pathname.indexOf('/') != -1 && pathname.length > 1)
		 return pathname == href;
        
    }).addClass('link-active');
	
	
	 // Активные ссылки страниц и разделов верхнего меню
	menu_top.find('a').filter(function(){

	    return window.location.pathname == $(this).attr('href');
        
    }).click(function(e) {
		
        e.preventDefault(); 
		
    }).addClass('link-active');

	
	// Активные ссылки левого блока
	menu_left.find('a').filter(function(){

		 return window.location.pathname == $(this).attr('href');
        
    }).addClass('link-active').click(function(e) {
		
        e.preventDefault(); 
		
    });
    */
    
    
    
    //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    
    
    
    
    
});










