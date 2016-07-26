$( document ).ready(function() {


    if($("#menu-togle").length !== 0) {

        $('#menu-togle').panelslider({bodyClass: 'ps-active', clickClose: true, onOpen: null});
    }//end if

    if($("#left-menu").length !== 0) {

        var colors = ['yellow-1', 'yellow-2', 'yellow-3', 'yellow-4', 'yellow-5', 'yellow-6', 'yellow-7', 'yellow-8', 'yellow-9', 'yellow-10'];

        $('#left-menu .panel-collapse .menu-item').each(function() {
            var index = $(this).index();
            if (index < colors.length) {
                $(this).addClass(colors[index]);
            }
        });
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

});//end dom