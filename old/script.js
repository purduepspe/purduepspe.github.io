$(document).ready(function() {
	$('.featured img:gt(0)').hide();

    setInterval(function(){
      $('.featured :first-child').hide()
         .next('img').fadeIn(500)
         .end().appendTo('.featured');} , 
      3000);

    
});
