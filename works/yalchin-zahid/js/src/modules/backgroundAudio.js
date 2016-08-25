export var backgroundAudio = {  
    
    init : function () { 
        this.pageLoad();
    },

    pageLoad : function() {
        let self = this;
        
        if (window.addEventListener)
        window.addEventListener("load", this.playAudion(self), false);
        else if (window.attachEvent)
        window.attachEvent("onload", this.playAudion(self));        
    },
    
    
    playAudion : function(self) {
        this.toggle = document.getElementById('bgAudion');
        this.click = ('ontouchstart' in window ? 'touchstart' : 'click');
        var audio = new Audio('./audio/background-music.mp3');
        var that = this;
        
        this.audioPlay = localStorage.getItem('audio');
        
        
        
            if(this.toggle){
                
                if(screen.width < 500 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
               
                    this.toggle.style.display = "none";
                    
                }else{
                    
                    if (this.audioPlay === undefined || this.audioPlay === null) {
                        localStorage.setItem('audio', '1');
                        this.audioPlay = localStorage.getItem('audio');
                    }
                    
                    if (this.audioPlay == '1'){
                        audio.volume = 0.10;
                        audio.loop = true;
                        self.fadeAudio(audio);
                        audio.play();

                        this.toggle.classList.add('equalizer--play');
                    }
                    

                    this.toggle.addEventListener(this.click, () => {

                        if(audio.paused){

                            audio.volume = 0.10;
                            self.fadeAudio(audio);
                            audio.play();

                            this.toggle.classList.add('equalizer--play');
                            localStorage.setItem('audio', '1');

                        } else {
                            audio.volume = 0.10;
                            audio.pause();
                            this.toggle.classList.remove('equalizer--play');
                            localStorage.setItem('audio', '0');
                        }

                    }, false); // end click
                    
                }// end else
            
                

            }// end if
                
    },
    
    fadeAudio : function (audio) {
        this.vol = 0.10;
        this.interval = 200; 

        var fadeout = setInterval( () => {
            if (this.vol < 0.60) {
                this.vol += 0.05;
                audio.volume = this.vol;
            }
            else {
                clearInterval(fadeout);
            }
        }, this.interval);
    }
    
    
}