$(document).ready(function(){



    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#toTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });



    //touday events
    var timeout;
    $("#events-list .event-owerlay").hover(function () {
            var self = this; 
            timeout = setTimeout(function(){
                $(self).find('.post-panel').removeClass('post-hidden');
                $('#events-list').height('412px');
            },400);
        }, function () { 
             clearTimeout(timeout);           
              $(this).find('.post-panel').addClass('post-hidden');
              $('#events-list').height('100px');            
        });

   


   
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        e.preventDefault();
    });



    //form validation
    $('#register-form').validate({
        rules:{
            username:{
                required:true,
                minlength: 2 
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength: 5 
            },
            nickname:{
                required:true,
                minlength: 5 
            }

        },
        messages:{
            username:{
                required:"",
                minlength: "" 
            },
            email:{
                required:"",
                email:""
            },
            password:{
                required:"",
                minlength: "" 
            },
            nickname:{
                required:"",
                minlength: "" 
            }

        }
    });



    
    $('#login-form').validate({
        rules:{
            username:"required",            
            password:"required"
        },
        messages:{
            username:"",
            password:""
        }
    });


    $('#restore-ppassword-form').validate({
        rules:{
            username:"required"
        },
        messages:{
            username:"",
        }
    });


    //check if gallerea exist

    if($("#galleria").length !== 0) {
        // Load the classic theme
        Galleria.loadTheme('js/galleria/galleria.classic.min.js');
        // Initialize Galleria
        Galleria.run('#galleria');
    }




    //date paginator
    if($("#paginator").length !== 0) {
        $('#paginator').datepaginator();
    }


    if($("#dp-calendar").length !== 0) {
        $('#dp-calendar').datepicker(
            {language: 'ru'}
        );
    }

    if($(".ellipsis").length !== 0) {
    $(".ellipsis").ellipsis();
    }


    if($("#food-filter").length !== 0) {

        var childCats = [
            {id:38,name:'Pubs'},
            {id:40,name:'Cafe'},
            {id:41,name:'bar'},
            {id:42,name:'Restaurant'},
            {id:43,name:'fast-food'}
        ];
        if(typeof(childCats) != "undefined" && childCats !== null) {
            var filterFood;
            $.each( childCats, function( indx,val ) {
                filterFood = '<a href="#" data-category="'+val.id+'" class="btn filter-btn">'+val.name+'</a>';
                $('#food-filter').append(filterFood);
            });
        }

        $('#food-filter .filter-btn').click(function (e) {
                e.preventDefault();
                $( this ).toggleClass( "active" );
                foodCat = $( this ).attr('data-category');
                console.log(foodCat);
            });//end on change
    }//end if





});//end dom ready