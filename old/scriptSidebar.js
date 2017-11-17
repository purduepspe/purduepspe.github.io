$(document).ready(function() {
	var var1 =//"<div><p>Deadline to submit membership applications is Febuary 6th at 6pm! Make sure to <u>PAY membership dues seperately at HAMP 1250.</u></div></p>";
	var var2 =//"<div><p>Committee Applications are due Febuary 12th at 6pm!</p></div>"; 
	//"<div><p>The <strong><a href = 'downloads/WG_Official.pdf'>2015 Winter Gala</a></strong> will be on December 4, 2015 in the Union</p><div>";
	//"<div><p>RSVP Form can be found <strong><a href = 'http://goo.gl/forms/LlEsyM6HSw'>here</a></strong>. You must visit HAMP 1250 durring office hours to pay.</p></div>"
	$(".announce").append(var1, var2);

	var var3 = '<p></p>';

	$("#second").append(var3);
});
    
