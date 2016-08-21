export var colorTheme = {  
    
    init : function () { 
        this.pageLoad();
        this.eventHandler();
    },

    pageLoad : function() {
        if (window.addEventListener)
        window.addEventListener("load", this.getColor, false);
        else if (window.attachEvent)
        window.attachEvent("onload", this.getColor);        
    },
    
    eventHandler : function() {
        this.toggle = document.getElementById('colorSwitch'); 
        this.click = ('ontouchstart' in window ? 'touchstart' : 'click');
        if (this.toggle) {
            this.toggle.addEventListener(this.click, this.changeColor, false);
        }
    },
    
    
    changeColor : function(e) {
        this.colorNumb = this.dataset.color;
        this.colorBody = document.getElementById('colorTheme');
        
        switch(this.colorNumb) {
            case '1':
                this.dataset.color = 2;
                this.colorBody.classList.remove('color-theme--1', 'color-theme--3');
                this.colorBody.classList.add('color-theme--2');
                localStorage.setItem('colorCode', '2');
                break;
            case '2':
                this.dataset.color = 3;
                this.colorBody.classList.remove('color-theme--1', 'color-theme--2');
                this.colorBody.classList.add('color-theme--3');
                localStorage.setItem('colorCode', '3');
                break;
            case '3':
                this.dataset.color = 1;
                this.colorBody.classList.remove('color-theme--2', 'color-theme--3');
                this.colorBody.classList.add('color-theme--1');
                localStorage.setItem('colorCode', '1');
                break;
        }
        
    },    
    
    getColor : function () {
        this.colorCode = localStorage.getItem('colorCode');
        this.colorBody = document.getElementById('colorTheme');
        this.colorNumb = document.getElementById('colorSwitch');  
        
        this.colorBody.classList.remove('color-theme--1', 'color-theme--2', 'color-theme--3');
        this.colorBody.classList.add('color-theme--' + this.colorCode);
        if(this.colorNumb){
            this.colorNumb.dataset.color = this.colorCode; 
        }
        
        
        if (this.colorCode === undefined || this.colorCode === null) {
            this.colorBody.classList.remove('color-theme--1', 'color-theme--2', 'color-theme--3');
            this.colorBody.classList.add('color-theme--1');
            if(this.colorNumb){
               this.colorNumb.dataset.color = 1; 
            }            
        }
        
    }
    
    
}