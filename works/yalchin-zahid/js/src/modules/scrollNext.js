export var scrollNext = {  
    
    init : function () {   
        this.eventHandler();
    },
    
    eventHandler : function() {
        this.toggle = document.getElementById('scrollTo'); 
        this.click = ('ontouchstart' in window ? 'touchstart' : 'click');
        if (this.toggle) {
            this.toggle.addEventListener(this.click, this.goTo, false);
        }
    }, 
    
    goTo : function(e) { 
        this.block = this.dataset.block;        
        this.target = document.getElementById(this.block);
        this.fromTop = this.target.offsetTop;
        
        var offset = window.pageYOffset,
        delta  = this.fromTop - window.pageYOffset,
        duration = 1000,   
        start = Date.now(),          
        factor = 0,
        timer;
        
        if( timer ) {
          clearInterval(timer); 
        }
        
        
        function step() {
          var y;
          factor = (Date.now() - start) / duration; 
          if( factor >= 1 ) {
            clearInterval(timer); 
            factor = 1;     
          } 
          y = factor * delta + offset;
          window.scrollBy(0, y - window.pageYOffset);
        }
        
        timer = setInterval(step, 10);
        
        
    }
    
    
}