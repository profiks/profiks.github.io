export var preventCopy = {  
    
    init : function () {   
        this.pageLoad();
    },
    
    pageLoad : function() {
          document.addEventListener('contextmenu', function(e){
            //e.preventDefault();
        }, false); 
    }
    
    
}