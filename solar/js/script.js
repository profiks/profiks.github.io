$(document).ready(function(){
    
   
    var clock = $('#flipClock').FlipClock(52001942, {
		clockFace: 'Counter'
	});

	setTimeout(function() {
		setInterval(function() {
			clock.increment();
		}, 1000);
	});
    
    
    
    
   $('#flipClock').prepend("<ul class='flip  play'><li class='flip-clock-before'><a href='#'><div class='up'><div class='shadow'></div><div class='inn'>$</div></div><div class='down'><div class='shadow'></div><div class='inn'>$</div></div></a></li><li class='flip-clock-active'><a href='#'><div class='up'><div class='shadow'></div><div class='inn'>$</div></div><div class='down'><div class='shadow'></div><div class='inn'>$</div></div></a></li></ul>");
    
});//end DOM ready