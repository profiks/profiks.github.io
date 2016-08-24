export var fullPageSlide = {  
    
    init : function () {   
        this.eventHandle();
    },
    
    eventHandle : function() {
        if (window.addEventListener)
        window.addEventListener("load", this.carousel, false);
        else if (window.attachEvent)
        window.attachEvent("onload", this.carousel); 
    },  
    
    carousel : function() {
        let self = this;
        this.slideIndex = 0;
        this.slideTime = 5000;
    
        this.slideHolder = document.getElementById('slideImg');
        if(this.slideHolder){
            this.arrayData = this.slideHolder.getAttribute('data-image');
            this.arrayData = this.arrayData.split(','); 
        }
        
        
        this.loadSlide = ()=> {
            
            if (this.slideIndex == this.arrayData.length) {
                this.slideIndex = 0;
            }
            
            this.slideHolder.style.backgroundImage = 'url(' + this.arrayData[this.slideIndex] + ')';
            
            this.slideIndex++;
            setTimeout(self.loadSlide, this.slideTime ); 
        }
        
        if(this.slideHolder){
            this.loadSlide();
        }
        
    }

    
     
    
    
}