$( document ).ready(function() {

	console.info('page loaded');


	/* $('a[href="#logout"]').click(function(){
		 window.location.href = 'login.html';
	 });

	$('#formSignin').submit(function(e){
		e.preventDefault();
		window.location.href = 'description.html';
	});*/

	//showAlert(msgType,msgText);

});


var msgType = 'success'; // danger, success, info, warning
var msgText = 'test alert: page loaded';

function showAlert(msgType,msgText){
	var tmpl;
	tmpl = '<div class="alert alert-dismissible alert-'+msgType+'">';
	tmpl +='<button type="button" class="close" data-dismiss="alert">x</button>';
	tmpl +='<h4>'+msgText+'</h4>';
	tmpl +='</div>';
	$('#msgHolder').html(tmpl);

	setTimeout(function(){
		$('#msgHolder').html('');
	}, 3000);
}//end show alert function



function getDescriptions(){
	$.ajax({
		method: 'POST',
		url: "http://cv.cv.ua/adminAPI/showTitleDescription",
		data: {
			pageName: 'index.php'
		},
		headers: {'X-Requested-With':'XMLHttpRequest'},
		dataType: "json",
		success: function(data) {
			console.log(data);
		},
		error: function() {
			console.warn('Error loading');
		}

	});//end ajax
}






