export var offCanvasNav = {  
    
    init : function () { 
        this.eventHandler();
    },
    
    eventHandler : function() {
        this.toggle = document.getElementById('offCanvasToggle'); 
        this.close = document.getElementById('offCanvasToggleClose'); 
        this.click = ('ontouchstart' in window ? 'touchstart' : 'click');
        if (this.toggle) {
            this.toggle.addEventListener(this.click, this.offCanvas, false);
        }
        if (this.close) {
            this.close.addEventListener(this.click, this.offCanvas, false);
        }
    },    
    
    offCanvas : function () {
        this.offCanvas = document.getElementById('colorTheme'); 
        
        if(this.offCanvas.classList.contains('canvas-menu--open')){
            this.offCanvas.classList.remove('canvas-menu--open');
        }else{
            this.offCanvas.classList.add('canvas-menu--open');
        } 
        
    }
    
    
}