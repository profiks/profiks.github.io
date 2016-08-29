export var videoInner = {  
    
    init : function () { 
        this.pageLoad();
    },

    pageLoad : function() {
        let self = this;
        window.addEventListener("scroll", this.playVideoBg);      
    },
    
    
    playVideoBg : function() {        
        
        this.video = document.getElementById('videoInner');
        
        if(this.video){
            
                this.audioBg = document.getElementById('bgAudion');
                this.audioPlay = localStorage.getItem('audio');

                this.scrollTop = $(window).scrollTop();
                this.elementOffset = $('#videoInner').offset().top;
                this.distance  = (this.elementOffset - this.scrollTop);


                if( this.distance < 100 ){

                   this.video.play(); 

                   if (this.audioPlay == '1'){ 

                        localStorage.setItem('audioAfterVideoBg', '1');
                        this.audioBg.click();  

                    }else if( this.audioPlay == '0' && localStorage.getItem('audioAfterVideoBg') == '1' ){

                        return;

                    }else{ 

                        localStorage.setItem('audioAfterVideoBg', '0');
                        return;
                    } 


                }else if ( (this.distance > 100 && localStorage.getItem('audioAfterVideoBg') == '1')  || (this.distance > 100 && localStorage.getItem('audioAfterVideoBg') == '0'))  {

                    this.video.pause();

                    this.audioAfterVideoBg = localStorage.getItem('audioAfterVideoBg');

                    if (this.audioAfterVideoBg == '1'){
                        this.audioBg.click();
                        localStorage.setItem('audioAfterVideoBg', '0');
                    }else{
                        return;
                    }

                }
            
            
        }//end if
        
        
              
    }
    
    
}