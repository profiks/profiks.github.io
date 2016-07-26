$(document).ready(function() {


	
/*touday*/
var month = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var mydate= new Date()
                mydate.setDate(mydate.getDate());
     $(".touday").html(days[mydate.getDay()]+", "+month[mydate.getMonth()]+" "+mydate.getDate()+", "+mydate.getFullYear());



$('[data-toggle=collapse]').click(function(){
	//alert(1);
	var link = $(this).attr('href');
	//$.scrollTo(link);
	$(link).on("shown.bs.collapse", function(){
		$.scrollTo(link,{ duration: 500 });
	});
});




});//end DOM