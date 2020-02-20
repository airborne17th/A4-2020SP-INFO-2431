$(document).ready(function() {
	var iconWidth = $("#icon").width();
	// var iconLength = $("#icon").length();
		$("#icon").mouseover(function(){
			$(this).animate({
				width: "400"
			});
		}).mouseout(function(){
			$(this).animate({
				width: iconWidth
			});
		});
    });