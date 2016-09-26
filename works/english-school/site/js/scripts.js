/**
* Wait for DOM ready
*/
$(document).ready(function(){
    
    /**
    * Fixed top navigation and aside form
    * @use jquery sticky plugin : site/js/jquery.sticky.js
    */    
    if ($(window).width() >= 768) {
        $("#stickyNavigation").sticky({topSpacing:0});
        $("#stickyNavigation").removeClass('navbar-fixed-top');
    }else{
        $("#stickyNavigation").addClass('navbar-fixed-top');
    }
    
    $(window).resize(function(){
        if ($(window).width() >= 768) {
           $("#stickyNavigation").sticky({topSpacing:0});
           $("#stickyNavigation").removeClass('navbar-fixed-top');
        }else{
            $("#stickyNavigation").addClass('navbar-fixed-top');
            $("#stickyNavigation").unstick();
        }
    });
    
    
    /**
    * News feed on banner bottom
    * @use owl carousel plugin : site/js/owl.carousel.min.js
    */
    var banner = $('#bannerCourses');
    
    banner.owlCarousel({
        loop:true,
        nav:true,
        navText : ['',''],
        margin:0,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },            
            960:{
                items:2
            },
            1024:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    
    
    /**
    * Program courses carousel enabled only on mobile and thablet
    * @use owl carousel plugin : site/js/owl.carousel.min.js
    */
    
    var program = $('#programsMob');
    
    if ($(window).width() <= 767) {         
        program.owlCarousel({
            navigation : true,
            items:1
        });        
    }
    
    $(window).resize(function(){
        if (($(window).width() >= 767) && (program.hasClass('owl-carousel'))) {
            program.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            program.find('.owl-stage-outer').children().unwrap();
        }else if(($(window).width() < 767) && (!program.hasClass('owl-carousel'))){
             program.owlCarousel({
                navigation : true,
                items:1                
            });
        }
    });
    
    
    /**
    * Program courses carousel enabled only on mobile and thablet
    * @use owl carousel plugin : site/js/owl.carousel.min.js
    */
    
    var tab1 = $('#year2016');    
    var tab2 = $('#month01');    
    var active = 0;
    
    initOwl(tab1);
    
    
    $(window).resize(function(){
        if (($(window).width() <= 767) && active == 0) {
            $('#year2016').tab('show');
            initOwl(tab1);
            active = 1;
        }else if(($(window).width() >= 767) && active == 1){
            $('#year2016').tab('show');
            destroyOwl(tab1);
            destroyOwl(tab2);
            active = 0;
        }
        
    });
    

    $('#newsTab a[href="#year2016"]').on('shown.bs.tab', function () {
        initOwl(tab1);
    }).on('hide.bs.tab', function () {
        destroyOwl(tab1);
    });

    $('#newsTab a[href="#month01"]').on('shown.bs.tab', function () {
        initOwl(tab2);
    }).on('hide.bs.tab', function () {
        destroyOwl(tab2);
    });
        
    
    
    function initOwl(el){
        if ($(window).width() <= 767) {
             el.owlCarousel({
                navigation : true,
                autoHeight : true,
                items:1
            });
        }
    }
    
    function destroyOwl(el){
        el.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        el.find('.owl-stage-outer').children().unwrap();
    }
    
    
    
   /**
   * Testimonials carousel
   */
    
    $('#testimonials').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ['',''],
        items:1
    })
    
    
    
    
    /**
    * Apply hover class for News Feed items
    */
    $('#bannerCourses .feed-slider__container').hover(
           function(){ $(this).find(".feed-slider__heading").addClass('feed-slider__heading--hover') },
           function(){ $(this).find(".feed-slider__heading").removeClass('feed-slider__heading--hover') }
    );
    
    
    /**
    * Bootstrap carousel options
    * @use bootstrap site/js/bootstrap.min.js
    */
    
    $('.carousel').carousel({
      interval: 6000  // slides interval in milliseconds 6000 = 6s
    });
    
    
    /**
    * Red form when focus label like placeholder
    */
     $('.red-form__input')
        .focus(function(){
                $(this).parent().addClass('focus');
        }).blur(function(){
               $(this).parent().removeClass('focus');
        });
    
    
    
    
    /**
    * Swipe image gallery
    */
    var initPhotoSwipeFromDOM = function(gallerySelector) {

        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for(var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element

                // include only element nodes 
                if(figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element

                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };



                if(figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML; 
                }

                if(linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                } 

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if(!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if(childNodes[i].nodeType !== 1) { 
                    continue; 
                }

                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }



            if(index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe( index, clickedGallery );
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
            params = {};

            if(hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if(!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');  
                if(pair.length < 2) {
                    continue;
                }           
                params[pair[0]] = pair[1];
            }

            if(params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {

                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect(); 

                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                }

            };

            // PhotoSwipe opened from URL
            if(fromURL) {
                if(options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for(var j = 0; j < items.length; j++) {
                        if(items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if( isNaN(options.index) ) {
                return;
            }

            if(disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll( gallerySelector );

        for(var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i+1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if(hashData.pid && hashData.gid) {
            openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
        }
    };

    // execute above function
    initPhotoSwipeFromDOM('.my-gallery');
    
    

}); // END dom ready