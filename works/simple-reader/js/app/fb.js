$( document ).delegate("#page-read-facebook", "pagebeforecreate", function() {
    
//initialize OAuth
    
 OAuth.initialize('yD1rVcaAZJc68KCTDLgK5_gjCoQ');
//end initialize OAuth

    
   var fbLog = $('#fb-login'),
   fbOut = $('#facebookLogOut');
 
  if(OAuth.create('facebook') != false){
        $('.facebook-log-btn').hide();
        $('.facebook-app-message').show();
        $('#facebookProfile').show();
        $('#facebookLogOut').show();
  }else if(OAuth.create('facebook') == false){
        $('.facebook-log-btn').show();
        $('.facebook-app-message').hide();
        $('#facebookProfile').hide();
        $('#facebookLogOut').hide();    
  }    
    

  
  fbLog.on('click',function(){   
     OAuth.popup('facebook', {cache: true}).done(function(result) {      
         location.reload();
     }); 
  });
    
    
    

  fbOut.one('click',function(){    
    OAuth.clearCache('facebook');
    location.reload();
  });
    
    
    
    
if(OAuth.create('facebook') != false){
        var resFB = OAuth.create('facebook');
        resFB.get('/me/likes?limit=50').done(function(feed) {
        var outputFacebook;

            if(feed){
                $.each(feed.data, function(index,value){

                    var pageTitle = value.name;
                       resFB.get('/'+value.id+'/feed?fields=attachments&limit=1').done(function(feed) {
                            $.each(feed.data, function(index,value){
                                if(value.attachments != undefined){
                               
                            outputFacebook += "<li class='ui-grid-solo'>";
                            outputFacebook += "<div class='ui-block-a'>";
                            outputFacebook += "<div class='ui-card'>";
                                    
                            outputFacebook += "<div class='ui-card-image'>";
                            
                            if (typeof value.attachments.data[0].media !== "undefined") {
                                outputFacebook += "<img src="+value.attachments.data[0].media.image.src+">";
                            }
                            outputFacebook += "</div>";
                                    
                            outputFacebook += "<div class='ui-card-content'>";
                            outputFacebook += "<span class='ui-card-title'>"+pageTitle+"</span>";
                            if ( typeof value.attachments.data[0].description !== "undefined") {
                                outputFacebook += "<p>"+value.attachments.data[0].description+"</p>";
                            }
                            outputFacebook += "</div>";
                            outputFacebook += " <div class='ui-card-action'>";
                            outputFacebook += "<a rel='external' href='http://facebook.com/"+value.id+"' class='ui-btn ui-text-right ui-btn-d ui-btn-inline btn-round'><i class='ui-icon-md-reply rotate-x'></i></a>";
                            outputFacebook += "</div>";
                            outputFacebook += "</div>";
                            outputFacebook += "</div>";
                            outputFacebook += "</li>";        
                                    
                            
                            $('#facebook-output-block .feed').html(outputFacebook);
                            
                             
                                    
                                }

                            });
                        });


                    });//end $.each
            
            }

        }).fail(function() {
            outputFacebook = " <div class='app-desc'>";
            outputFacebook += "<p> An error occurred. <br> Try check your network connection or correctness of account data.</p>";
            outputFacebook += "</div>";
            $('#facebook-output-block').html(outputFacebook);
        });
    
        

        resFB.me().done(function(me) { 
            if(me.avatar != "undefined"){
                $('.facebook-avatar').attr("src", me.avatar);
            }
            $('.facebook-user').html(me.name);
        });

    }  //end facebook



}); //end DOM ready