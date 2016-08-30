export var animatedLogo = {  
    
    init : function () {   
        this.pageLoad();
    },
    
    pageLoad : function() {
        if (window.addEventListener)
        window.addEventListener("load", this.animateLogoLines);
        else if (window.attachEvent)
        window.attachEvent("onload", this.animateLogoLines);
        
    },
    
    animateLogoLines : function() { 
        this.animLogo = document.getElementById('animatedLogo');
        if(this.animLogo){
            this.animLogo.classList.add('animated-logo--shown');  
        }
    }
    
    
}