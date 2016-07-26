$(function() {
   
      
    //$('.js__scroll').niceScroll({horizrailenabled:false});
    
    $('.js__parallax').parallax({
      calibrateX: true,
      calibrateY: true,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 8,
      scalarY: 8,
      frictionX: 0.8,
      frictionY: 0.8,
      originX: 0.9,
      originY: 0.5
    });
    
    $('.js__go-to').on('click',function(e){
        e.preventDefault();
        var goTo = $(this).attr('href');
        $('body').scrollTo(goTo,{
            duration:900,
            axis:'y',
            offset:0  
        });
    });
    
   
    
    
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: true
    });
    
    wow.init();
    
    
    
    
    
    // *********************************** dots navigation ***********************
   var contentSections = $('.js-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
    
    
    
    $(".js-siteUrl").each(function(){
        var el = $(this);
        el.click(function() {
            $("#workIframe").attr("src", el.data('url'));
        })
    })
  
    
    $(document).on('closed', '.remodal', function (e) {
      $("#workIframe").attr("src", "");
    });
    
    
    
    // ************************ scrollorama
     var scrollorama1 = $.scrollorama({ blocks:'.js-scrollorama1', enablePin:false });
     var scrollorama = $.scrollorama({ blocks:'.js-scrollorama', enablePin:false });
    
    
    scrollorama1.animate('.intro__map-img',{
        delay:-10, duration:400, property:'zoom', start: 0.7, end: 1.5
    });
    
    scrollorama.animate('.device__item--desktop',{
        delay:-150, duration:200, property:'left', end:-860
    });
    
    scrollorama.animate('.device__item--notebook',{
        delay:-100, duration:400, property:'right', end:-800
    });
    
    scrollorama.animate('.device__item--tablet',{
        delay:-150, duration:250, property:'top', end:-1060
    });
    
    scrollorama.animate('.device__item--phone',{
        delay:-50, duration:500, property:'left', end:-960
    });
    
    
    
    
    
    
}); // end DOM ready