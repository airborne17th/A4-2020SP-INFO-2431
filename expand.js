$(document).ready(function() {
	$('#zoomimg').mouseenter(function() 
	{
	$(this).css("cursor","pointer");
	$(this).animate({width: "200%", height: "200%"}, 'slow');
	});
 
 	$('#zoomimg').mouseleave(function()
   	{   
	   $(this).animate({width: "28%"}, 'slow');
	});
});
