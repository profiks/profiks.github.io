export var formValidation = {  
    
    init : function () {   
        this.eventHandle();
    },
    
    eventHandle : function() {
        let self = this;
        
        this.contactForm = document.getElementById('contactForm');
        if(this.contactForm){
             this.contactForm.addEventListener('submit', this.validateForm, false);  
        }
       
        
    },
    
    validateForm : function(e) { 
          console.log('send');
          e.preventDefault();
    },
    
    
    submitForm : function (name, email, msg){
        
        this.xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

        this.xmlhttp.onreadystatechange = function() {
            if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200)
                console.log(this.xmlhttp.responseText); // Here is the response
        }

        this.xmlhttp.open("POST","your_url.php", true);
        this.xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        this.xmlhttp.send("name=" + name + "&email=" + email + "&msg=" + msg);
        this.xmlhttp.send();
    }
    
    
}