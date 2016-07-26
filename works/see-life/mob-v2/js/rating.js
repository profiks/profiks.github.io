$(document).ready(function(){

    var articleID = $('.fool-width-article').attr('data-article');
    var userID = 43;

   /* /!*review rating*!/
    if($(".review-rating").length !== 0) {
        $('.review-rating').rating({
            filled: 'glyphicon glyphicon-heart',
            empty: 'glyphicon glyphicon-heart-empty',
            start: 0,
            stop: 5
        });


        $('.review-rating').on('change', function () {
            starsCount = $(this).val();
            console.log("Review stars = "+starsCount);
        });//end on change

    }
    //end review rating
*/


    var starsCount;
    /*rating stars*/
    if($(".check-rating").length !== 0) {

        $('.check-rating').rating({
            filled: 'glyphicon glyphicon-star yellow',
            empty: 'glyphicon glyphicon-star brun',
            start: 0,
            stop: 10,
            extendSymbol: function (rate) {
                $(this).addClass('active');
            }
        });

        $('.check-rating').on('change', function () {
            starsCount = $(this).val();
            addPandaEmotions(starsCount);
            addStars(articleID,userID,starsCount);
        });//end on change

    }//end if






    function addPandaEmotions(starsCount){
        if((starsCount == 1) || (starsCount == 2)){
            $('#pEmotion').removeClass();
            $('#pEmotion').addClass('panda-r-1');
        }else if((starsCount == 3) || (starsCount == 4)){
            $('#pEmotion').removeClass();
            $('#pEmotion').addClass('panda-r-2');
        }else if((starsCount == 5) || (starsCount == 6)){
            $('#pEmotion').removeClass();
            $('#pEmotion').addClass('panda-r-3');
        }else if((starsCount == 7) || (starsCount == 8)){
            $('#pEmotion').removeClass();
            $('#pEmotion').addClass('panda-r-4');
        }else if((starsCount == 9) || (starsCount == 10)){
            $('#pEmotion').removeClass();
            $('#pEmotion').addClass('panda-r-5');
        }
    }//end function



    var testArticleStars = localStorage.getItem(articleID);
    if(testArticleStars != null){
        $('.check-rating').rating('rate', testArticleStars);
        addPandaEmotions(testArticleStars);
    }//end check stars rating  */


    function addStars(articleID,userID,rating) {
        localStorage.setItem(articleID,rating);
        /*$.ajax({
            method: 'POST',
            url: "http://see-life.site/api/addrating/",
            data: {
                article_id : articleID,
                user_id    : userID,
                rating     : rating
            },
            success: function(data) {
                localStorage.setItem(articleID,rating);
            },
            error: function() {
                console.log('Error');
            }

        });//end ajax*/
    }//end function



});//end DOM









