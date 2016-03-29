$(document).ready(function () {
  "use strict";
     var form = $("#orderForm");
     form.steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slide",
            enablePagination: false,
            titleTemplate: '<span class="number">#index#.</span> #title#',
            loadingTemplate: '<span class="spinner"></span> #text#',
            labels: {
                current: ""
            },
            onStepChanging: function (){                
                  form.validate().settings.ignore = ":disabled,:hidden";
                  return form.valid();                

            },
            onFinishing: function () {
                form.validate().settings.ignore = ":disabled,:hidden";
                return form.valid();
            },
            onFinished: function (){
                form.submit();
                form.steps("reset");   
            }
    });
    
    
    $('[data-step="next"]').on('click',function(){
        form.steps("next");
    });
    
    $('[data-step="previous"]').on('click',function(){
        form.steps("previous");
    });
    
    $('[data-step="finish"]').on('click',function(){
        form.steps("finish");
    });
    
    $('[data-step="reset"]').on('click', function(){
        form.steps("reset");        
    });
    

});//end DOM ready