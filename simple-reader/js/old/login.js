$(document).ready(function() {

//initialize OAuth
    
 OAuth.initialize('yD1rVcaAZJc68KCTDLgK5_gjCoQ');
   
//end initialize OAuth

    var fbLog = $('#fb-login'),
        twLog = $('#tw-login'),
        inLog = $('#in-login');

    var twOut = $('#twitterLogOut'),
        inOut = $('#instagramLogOut'),
        fbOut = $('#facebookLogOut');


  /*main page buttons*/

  if(OAuth.create('facebook') != false){
        fbLog.html("Raed Facebook");
  }else{
       fbLog.html("Log in Facebook");
  }


  if(OAuth.create('twitter') != false){
        twLog.html("Raed Twitter");
  }else{
       twLog.html("Log in Twitter");
  }


   if(OAuth.create('instagram') != false){
        inLog.html("Raed Instagram");
  }else{
       inLog.html("Log in Instagram");
  }





  /*twitter*/
  twLog.on('click',function(){
    if(OAuth.create('twitter') != false){
        $.mobile.changePage("#page-read-twitter", { transition: "slidedown" });
    }else{
     OAuth.popup('twitter', {cache: true}).done(function(result) {
      
      $.mobile.changePage("#page-read-twitter", { transition: "slidedown" });
      location.reload();
         twLog.html("Raed Twitter");
     });
    }

  });

  twOut.one('click',function(){
    
    OAuth.clearCache('twitter');
      twLog.html("Log in Twitter");      
     $.mobile.changePage("#page-index", { transition: "slideup" });
  });





  /*facebook*/
  fbLog.on('click',function(){
    if(OAuth.create('facebook') != false){
      
        $.mobile.changePage("#page-read-facebook", { transition: "slidedown" });
    }else{
     OAuth.popup('facebook', {cache: true}).done(function(result) {
      
         $.mobile.changePage("#page-read-facebook", { transition: "slidedown" });
         location.reload();
         fbLog.html("Read Facebook");
     });     
    }

  });

  fbOut.one('click',function(){
    
    OAuth.clearCache('facebook');
      fbLog.html("Log in Facebook");
      $.mobile.changePage("#page-index", { transition: "slideup" });
  });





  /*instagram*/
  inLog.on('click',function(){
    if(OAuth.create('instagram') != false){
      
        $.mobile.changePage("#page-read-instagram", { transition: "slidedown" });
    }else if(OAuth.create('instagram') == false){
      
        OAuth.popup('instagram', {cache: true}).done(function(result) {
            $.mobile.changePage("#page-read-instagram", { transition: "slidedown" });
            location.reload();
            inLog.html("Raed Instagram");
        });
    }
  });

  inOut.one('click',function(){
    
    OAuth.clearCache('instagram');
      inLog.html("Log in Instagram");
      $.mobile.changePage("#page-index", { transition: "slideup" });
  });



});//end dom