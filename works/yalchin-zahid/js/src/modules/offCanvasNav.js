export var offCanvasNav = {  
    
    init : function () { 
        this.eventHandler();
    },
    
    eventHandler : function() {
        this.toggle = document.getElementById('offCanvasToggle'); 
        this.close = document.getElementById('offCanvasToggleClose');
        this.offCanvas1 = document.getElementById('colorTheme');
        
        this.click = ('ontouchstart' in window ? 'touchstart' : 'click');
        
        if (this.toggle) {
            this.toggle.addEventListener(this.click, this.offCanvas, false);
        }
        if (this.close) {
            this.close.addEventListener(this.click, this.offCanvas, false);
        }
        
        
        this.initializeOpen = localStorage.getItem('navOpen');
        
        if(!this.initializeOpen){            
            localStorage.setItem('navOpen', false);
        }
        
        window.addEventListener('scroll', () => {
            
            if(this.offCanvas1.classList.contains('canvas-menu--open') && this.initializeOpen){
                this.close.click();
            }

        });
      
    },    
    
    offCanvas : function () {
        
        this.isOpen = localStorage.getItem('navOpen');
        
        this.offCanvas = document.getElementById('colorTheme');
        this.animateMenu = document.getElementById('animatedLogoAside');
        
        
            
        if(this.offCanvas.classList.contains('canvas-menu--open') && this.isOpen){
            this.offCanvas.classList.remove('canvas-menu--open');
            localStorage.setItem('navOpen', false);
        }else{
            this.offCanvas.classList.add('canvas-menu--open');
            localStorage.setItem('navOpen', true);
        } 
        
        // ***** //
        
        if(this.animateMenu.classList.contains('animated-aside-logo--animated')){
            this.animateMenu.classList.remove('animated-aside-logo--animated');
        }else{
            this.animateMenu.classList.add('animated-aside-logo--animated');
        }
       
        
    }
    
    
}