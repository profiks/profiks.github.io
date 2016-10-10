/**
* Class for scroll up link when offset top is 25%
*/

export default class scrollUp {
    
    /**
     * Counstructor of class
     */    
    constructor(){
        
        // create DOM element for link
        this.anchor = document.createElement('a');
        this.anchor.classList.add('scroll-up');
        this.anchor.dataset.text = 'В гору'; // text to display from CSS content
        document.getElementsByTagName('body')[0].appendChild(this.anchor); // append link on bottom
        
        this.fullHeight = document.body.scrollHeight; // get height of entire page
        this.active = false; // check flag for scroll up link
        
        window.addEventListener('scroll', this.topDistance.bind(this),false);
        this.anchor.addEventListener('click', this.scrollUp.bind(this),false);
    }
    
    
    topDistance(){
        this.topOffset = window.pageYOffset; // offset from top
        
        // calculate 10% ow window height
        this.percentFromTop = this.fullHeight * 10 / 100;
        
        // scroll time = iteraded scroll duration
        this.scrollDuration = (this.topOffset / 10) * 1.5;
        
        if(this.topOffset >= this.percentFromTop && !this.active) {
            this.anchor.classList.add('scroll-up--shown');
            this.active = true;
        }else if(this.topOffset < this.percentFromTop && this.active){
            this.anchor.classList.remove('scroll-up--shown');
            this.active = false;
        }
    }
    
    scrollUp(e){
        e.preventDefault;
        e.stopPropagation;
        
        var scrollStep = - window.scrollY / (this.scrollDuration / 15),
            scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval); 
        }, 15);
        
    }
    
    
}
