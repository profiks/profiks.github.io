export var animationSvg = {  
    
    init : function () {   
        this.pageLoad();
    },
    
    pageLoad : function() {
        if (window.addEventListener){ 
            window.addEventListener("load", this.animateLogo, false);
            window.addEventListener("load", this.animateLine, false);
        }
        else if (window.attachEvent) { 
            window.attachEvent("onload", this.animateLogo);
            window.attachEvent("onload", this.animateLine);
        }
        
    },
    
    animateLine : function() { 
       setTimeout(function(){
            this.path = document.getElementById('skylinePath');
            if(this.path){
                this.totalLenght = this.path.getTotalLength();

                this.path.style.opacity='1';
                this.path.style.strokeDasharray = this.totalLenght;
                this.path.style.strokeDashoffset = this.totalLenght * 2;
                this.path.classList.add('skyline__path--animated');



            }
       }, 3000);
    },
    
    animateLogo : function() {
        this.logo = document.getElementById('animatedLogoIntro');
        
        if(this.logo){
            this.logo.classList.add('animated-intro-logo--animated');
        }
    }
    
    
}