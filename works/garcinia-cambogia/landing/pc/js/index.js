$(document).ready(function() {

	/*touday*/
var month = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var mydate= new Date()
                mydate.setDate(mydate.getDate());
     $(".touday").html(days[mydate.getDay()]+", "+month[mydate.getMonth()]+" "+mydate.getDate()+", "+mydate.getFullYear());





$('#show-my-results').click(
	function() { $('#my-results').slideDown( "slow" );}
);

$('#close-my-results').click(
	function() { $('#my-results').slideUp( "slow" );}
);




$('#show-womens-healt').click(
	function() { $('#womens-healt').slideDown( "slow" );}
);

$('#close-womens-healt').click(
	function() { $('#womens-healt').slideUp( "slow" );}
);



});//end DOM