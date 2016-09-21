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

                this.path.style.strokeDasharray = this.totalLenght;
                this.path.style.strokeDashoffset = this.totalLenght;
                this.path.classList.add('skyline__path--animated');
                
                
                setTimeout(function () {
                   window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
                }, 15000); //will call the function after 2 secs.
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