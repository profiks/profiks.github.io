$(document).ready(function(){
    //after button is clicked we download the data
    $('#left-menu .cat-item').click(function(e){
        e.preventDefault();

                var menu = {};
                menu.catId = $(this).attr('category');
                menu.path = window.location.pathname;

                if (menu.path.indexOf("/index.html") == 0) {
                   getPosts(menu.catId);
                }else{
                   $(location).attr('href', 'index.html?id=' + menu.catId);
                }




    });//end click


}); //end dom



function getPosts(catId) {
    //start ajax request
    $.ajax({
        method: 'POST',
        url: "/api/showcat",
        data: {
            id: catId
        },
        headers: {'X-Requested-With':'XMLHttpRequest'},
        dataType: "json",
        success: function(data) {
            console.log(data);
            var responsData = data.result;
            $.panelslider.close();
            try {
                if (responsData) {
                    console.log(responsData);
                    var output="";
                    $.each(responsData,function(index,value){

                        output+="<a href='#"+value.slug+"' class='post-small'>";
                        output+="<h4>"+value.name+"</h4>";
                        output+="<h5>"+value.created+"</h5>";
                        output+="<p class='pull-left'>";
                        output+="<span class='like'></span> "+ value.like +" ";
                        output+="<span class='comment'></span> "+ value.comment +" ";
                        output+="</p>";
                        output+="<p class='pull-right'>"+value.categoryname+"</p>";
                        output+="</a>";


                        $('#posts-result').html(output);

                    });
                }
            } catch (e) {
                // no json
            }
        },
        error: function() {
            console.log('Error loading category id=' + catId);
        }

    });//end ajax
}//end function

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};//end function