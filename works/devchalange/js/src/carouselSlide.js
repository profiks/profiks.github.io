/**
 * Class for carousel functionality
 */

export default class carouselSlide {
    
    /**
     * Constructor of class
     * @param {selector} carousel - carousel id.
     */
    
    constructor(carousel){  
        
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
        
        this.init(this.screens, this.dots); // set first slide active
        
        
        // event listner for click on dots 
        for(let _b = 0; _b < this.dots.length; _b++){
             this.dots[_b].addEventListener('click', (e) => {                    
                    this.show(e.target.dataset.target); // passing data-target number to function for showing slide
             }, false);
        }
    }
    
    /**
     * Initialize first apperance of slider 
     * @param {object} slides - object of slides from DOM
     * @param {object} bullets - object of created navigation list
     */  
    
    init(slides, bullets){
        slides[0].classList.add('carousel__item--active');
        bullets[0].classList.add('bullet__item--active');
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
                 this.dots[_p].classList.remove('bullet__item--active');
            } 

            this.screens[numb].classList.add('carousel__item--active');
            this.dots[numb].classList.add('bullet__item--active');
        }
        
        
    }
   
    
}