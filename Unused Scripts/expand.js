$(document).ready(function() {
	$('.testPic').mouseover(function() 
	{
	$(this).css("cursor","pointer");
	$(this).animate({width: "100%", height: "100%"}, 'slow');
	});
 
 	$('.testPic').mouseout(function()
   	{   
	   $(this).animate({width: "50%"}, 'slow');
	});
});
