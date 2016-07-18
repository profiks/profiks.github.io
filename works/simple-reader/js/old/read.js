$(document).ready(function() {


    if(OAuth.create('twitter') != false){
        var resTW = OAuth.create('twitter');
        resTW.get('https://api.twitter.com/1.1/statuses/home_timeline.json?count=50').done(function(timeline) {
        var outputTwitter;
        if(timeline){
            $.each(timeline, function(index,value){
                outputTwitter += "<div class='ui-corner-all custom-corners half'>";
                outputTwitter += "<div class='ui-bar ui-bar-twitter'>";
                outputTwitter += "<h3> "+value.user.name+"</h3>";
                outputTwitter += "</div>";
                outputTwitter += "<div class='ui-body ui-body-a'>";
                outputTwitter += "<p>"+value.text+"</p>";
                if ( typeof value.extended_entities !== "undefined") {
                      outputTwitter += "<p> <img src='"+value.extended_entities.media[0].media_url+"'></p>"; 
                }
                outputTwitter +="<p><a href='https://twitter.com/statuses/"+value.id_str+"'>Read more</a></p>";      
                outputTwitter += "</div>";
                outputTwitter += "</div>";
                $('#twitter-output-block').html(outputTwitter);
                //$('.iscroll-wrap-tw').iscrollview("refresh");
            });
            }
        }).fail(function() {
            outputTwitter = " <div class='app-desc'>";
            outputTwitter += "<p> An error occurred. <br> Try check your network connection or correctness of account data.</p>";
            outputTwitter += "</div>";
            $('#twitter-output-block').html(outputTwitter);
        });

        resTW.me().done(function(me) {
        $('.twitter-user').html(me.name);
        });

    }  //end twitter

    


    if(OAuth.create('instagram') != false){
        var resIM = OAuth.create('instagram');
        resIM.get('https://api.instagram.com/v1/users/self/feed?count=40').done(function(feed) {
        var outputInstagram;
       if(feed){ $.each(feed.data, function(index,value){               
                outputInstagram += "<div class='ui-corner-all custom-corners half'>";
                outputInstagram += "<div class='ui-bar ui-bar-instagram'>";
                outputInstagram += "<h3>"+value.user.username+"</h3>";
                outputInstagram += "</div>";
                outputInstagram += "<div class='ui-body ui-body-a'>";                
                if ( typeof value.images !== "undefined") {
                      outputInstagram += "<p><img src='"+value.images.standard_resolution.url+"'></p>";
                } 
                outputInstagram += "<p><a href='"+value.link+"'>Read more</a></p>"; 
                outputInstagram += "</div>";
                outputInstagram += "</div>";
                $('#instagram-output-block').html(outputInstagram);
                
            });
            }        
        }).fail(function() {
            outputInstagram = " <div class='app-desc'>";
            outputInstagram += "<p> An error occurred. <br> Try check your network connection or correctness of account data.</p>";
            outputInstagram += "</div>";
            $('#instagram-output-block').html(outputInstagram);
        });

        resIM.me().done(function(me) {
        $('.instagram-user').html(me.alias);
        });
    }  //end instagram


    





    if(OAuth.create('facebook') != false){
        var resFB = OAuth.create('facebook');
        resFB.get('/me/likes?limit=99').done(function(feed) {
        var outputFacebook;

            if(feed){
                $.each(feed.data, function(index,value){

                    var pageTitle = value.name;
                       resFB.get('/'+value.id+'/feed?fields=attachments&limit=1').done(function(feed) {
                            $.each(feed.data, function(index,value){
                                if(value.attachments != undefined){

                                outputFacebook += "<div class='ui-corner-all custom-corners half'>";
                                outputFacebook += "<div class='ui-bar ui-bar-facebook'>";
                                outputFacebook += "<h3>"+pageTitle+"</h3>";
                                outputFacebook += "</div>";
                                outputFacebook += "<div class='ui-body ui-body-a'>";
                                if ( typeof value.attachments.data[0].description !== "undefined") {
                                      outputFacebook += "<p>"+value.attachments.data[0].description+"</p>";
                                }else if ( typeof value.attachments.data[0].media !== "undefined") {
                                      outputFacebook += "<p><img src="+value.attachments.data[0].media.image.src+"></p>";
                                }
                                outputFacebook += "<p> <a href='http://facebook.com/"+value.id+"'> Read more </a></p>";
                                outputFacebook += "</div>";
                                outputFacebook += "</div>";
                                $('#facebook-output-block').html(outputFacebook);
                                 }

                            });
                        });


                    });


            }

        }).fail(function() {
            outputFacebook = " <div class='app-desc'>";
            outputFacebook += "<p> An error occurred. <br> Try check your network connection or correctness of account data.</p>";
            outputFacebook += "</div>";
            $('#facebook-output-block').html(outputFacebook);
        });

        resFB.me().done(function(me) {
        $('.facebook-user').html(me.name);
        });

    }  //end facebook




});//end dom