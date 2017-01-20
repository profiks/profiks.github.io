// !ES6
class carouselSlide {
    
    /**
     * Constructor of class
     * @param {selector} carousel - carousel id.
     */
    
    constructor(carousel){ 
		
		// detect touch or click
		this.click = ((document.ontouchstart !== null) ? 'click' : 'touchstart');
		
		//detect mobile user agent
		this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (this.isMobile) {
		  	this.mobile();
		}
		
        
        this.screens = carousel.getElementsByTagName('div'); // get content of each slide
        
        // Create bullets navigation for slides
        this.bullets = document.createElement('ul');
        this.bullets.classList.add('bullet');
        
        // Create dots for count of slides
        for(let _i = 0; _i < this.screens.length ; _i++){
          this.dot = document.createElement('li');
          this.dot.classList.add('bullet__item');
          this.dot.dataset.target = _i;
          this.bullets.appendChild(this.dot);  
        }
        
        // append all after slider container
        carousel.parentNode.insertBefore(this.bullets, carousel.nextSibling);
        
        this.dots = this.bullets.getElementsByTagName('li'); // select all dots
        
		this.init();
        
        // event listner for click on dots 
        for(let _b = 0; _b < this.dots.length; _b++){
             this.dots[_b].addEventListener(this.click, (e) => {                    
                    this.interval(e.target.dataset.target); // passing data-target number to function for showing slide
             }, false);
        }
    }
    
    /**
     * Initialize first apperance of slider
     * @param {integer} number of slides 
     */  
    
    init(){
		this.time = 5000; // 5s for change slide
        this.current = 0; // keep current position of slider 
		this.interval(0);
    }    
    
    /**
     * Show active slide and hide inactive
     * @param {number} numb - number of current slide
     */
    
    show(numb){
        
        if(
            this.screens[numb].classList.contains('carousel__item--active') && this.dots[numb].classList.contains('bullet__item--active')
        ){
            return false;
            
        }else{
            for(let _p = 0; _p < this.screens.length; _p++){
                 this.screens[_p].classList.remove('carousel__item--active');
                 this.screens[_p].classList.remove('carousel__item--prev');
                 this.screens[_p].classList.remove('carousel__item--next');
                 this.dots[_p].classList.remove('bullet__item--active');                 				
            } 

            this.screens[numb].classList.add('carousel__item--active');
            this.dots[numb].classList.add('bullet__item--active');
			this.rotator(numb, this.dots.length)
			
        }
        
        
    }
	
	/**
     * Rotator of preview and next slides
     * @param {number} numb - number of current slide
     */
	rotator(numb, slides){
		
		
		this.nextSlide = Number(numb) + 1;
		this.prevSlide = Number(numb) - 1;		
		
		if( this.nextSlide >= parseInt(slides)){
			this.nextSlide = 0;
		}
		
		if(this.prevSlide < 0){
			this.prevSlide = parseInt(slides) - 1;
		}
		
		
		// add classes for preview or next slides
		this.screens[this.prevSlide].classList.add('carousel__item--prev');
		this.screens[this.nextSlide].classList.add('carousel__item--next');
		
	}
	
	/**
     * Show next slide after 5000ms = 5s
     * @param {number} current - current active slide
     */
	
	interval(current){
        
        this.current = Number(current); // transform to number        
        this.show(this.current); // set active slide
        this.current++; // increment current slide by 1
        
        if(this.current == (this.dots.length)){
            this.current = 0;
            clearTimeout(this.t);
            this.t = setTimeout(() => { 
                this.interval(this.current);
            }, this.time);
        }else{
            clearTimeout(this.t);
            this.t = setTimeout(() => { 
                this.interval(this.current);
            }, this.time);
        }

        
    }
	
	
	mobile(){
		console.info('Mobile device detected. ' + navigator.userAgent)
	}
    
}

/**
* Cache DOM elements
*/
let carousel = document.getElementById('carousel');


if (carousel !== null) { let initCarousel = new carouselSlide(carousel); } 