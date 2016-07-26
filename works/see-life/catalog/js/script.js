$(function() {

    $('#play-button').click(function(){
        player.playVideo();
        $(this).fadeOut();
    });

});//end ready

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('included-video');
}
