export var videoPopup = {  
    
    init : function () { 
        this.injectYoutube();
        this.eventHandle();
    },
    
    injectYoutube : function(){
        this.tag = document.createElement('script');
        this.tag.src = "//www.youtube.com/player_api";
        this.firstScriptTag = document.getElementsByTagName('script')[0];
        this.firstScriptTag.parentNode.insertBefore(this.tag, this.firstScriptTag);
    },
    
    eventHandle : function() {
        let self = this;
        
        this.click = ('ontouchstart' in window ? 'touchstart' : 'click');
        
        this.openModal = document.getElementsByClassName('video__play');
        this.modal = document.getElementById('videoModal');        
        this.closeModal = document.getElementById('closeModal');
        
        if(this.modal){
            
             for (var i = 0; i < this.openModal.length; i++) { 
            
                    this.openModal[i].addEventListener(this.click, (e)=>{

                        e.preventDefault();
                        e.stopPropagation();

                        this.showPopup(this.modal);

                    }, false);

                    this.openModal[i].addEventListener(this.click, this.getVideo, false);
                }


                this.closeModal.addEventListener(this.click, ()=>{
                        this.hidePopup(this.modal);
                }, false);


                window.addEventListener(this.click, (e)=>{
                    if (e.target == this.modal) {
                        this.hidePopup(this.modal);
                    }
                }, false);
            
        }
       
        
    },
    
    showPopup : function(modal){
        this.audioPlay = localStorage.getItem('audio');
        
        modal.classList.remove('modal--close');
        modal.classList.add('modal--open');
        
        if (this.audioPlay == '1'){
            this.pauseAudio()
        }else{
            return;
        }
        
    },
    
    hidePopup : function(modal){
        this.audioPlay = localStorage.getItem('audio');
        
        modal.classList.add('modal--close');
        setTimeout(()=>{
         modal.classList.remove('modal--open');
        },300);
        
        this.videoPlay = document.getElementById('videoPlay');
        this.videoPlay.setAttribute('src', '');
        
        if (this.audioPlay == '0'){
            this.playAudio();
        }else{
            return;
        }
        
       
    },
    
    pauseAudio : function(){
      
        this.audioBg = document.getElementById('bgAudion');
        this.audioBg.click();
        
    },
    
    playAudio : function() {
        this.audioBg = document.getElementById('bgAudion');
        this.audioBg.click();
    },
    
     getVideo : function (e){     
        e.stopPropagation();
        e.preventDefault();
        
        this.link = this.getAttribute('href');
        this.videoPlay = document.getElementById('videoPlay');
        this.videoPlay.setAttribute('src', this.link + '&autoplay=1');
      
    },
    
    playVideo : function (){
        this.player.playVideo();       
        
    },
    
    stopVideo : function(){
        this.player.pauseVideo(); 
    }
    
    
    
}