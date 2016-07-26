$(document).ready(function() {


    var postId = $('.fool-width-article').attr('data-article');
    var likedPost = $.cookie(postId);

    if(likedPost == postId){
        $('.count-holder .like').addClass('active');
    }

    var countHolder = $('.count-holder .count');
    var likeCount = countHolder.attr('data-count');
    countHolder.html(likeCount);

    $('.count-holder .like').one('click', function (e) {
        e.preventDefault();

        if(likedPost != postId){
            likeCount++;
            countHolder.html(likeCount);
            $(this).addClass('active');
            incrementLike(postId);
            $.cookie(postId,postId, { expires: 90, path: '/' });
        }else if(likedPost == postId){
            return false;
        }
    });


});




function incrementLike(postId) {
    $.ajax({
        method: 'POST',
        url: "http://see-life.biz/api/addlike/",
        data: {
            id: postId
        },
        success: function(data) {
            console.log(data);
        },
        error: function() {
            console.log('Error');
        }

    });//end ajax
}//end function