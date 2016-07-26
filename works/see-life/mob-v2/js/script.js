$( document ).ready(function() {



    $('#left-menu').on('psClose', function() {
        $(this).find(".panel-collapse.in").collapse('hide');
    });
    if($("#menu-togle").length !== 0) {
        $('#menu-togle').panelslider({bodyClass: 'ps-active', clickClose: true, onOpen: null});
    }//end if





    //date paginator
    if($("#paginator").length !== 0) {
        $('#paginator').datepaginator({
            itemWidth : 40,
            navItemWidth: 40,
            selectedItemWidth :120,
            showCalendar : false,
            showOffDays : false
        });
    }//end datepaginator




    if($("#food-filter").length !== 0) {

        $('#food-filter .filter-btn').click(function (e) {
            e.preventDefault();
            $( this ).toggleClass( "active" );
            foodCat = $( this ).attr('data-category');
            console.log(foodCat);
        });//end on change
    }//end if

});//end dom