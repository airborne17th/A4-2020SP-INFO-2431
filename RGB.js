$(document).ready(function(){
	// An event based animation with mouseover, hover, and mouseout. 
	$("#gamer").mouseover(function(){
		$(this).animate("color", "red");
	});
	$("#gamer").mouseout(function(){
		$(this).animate("color", "blue");
	});
	$("#gamer").hover(function(){
		$(this).each(function(i) {
			$(this).delay(200).animate("color", "green");
			$(this).delay(400).animate("color", "blue");
			$(this).delay(600).animate("color", "red");
		 });

	});
  });

	/*
	var red = $("#gamer").css("color", "red");
	var blue = $("#gamer").css("color", "blue");
	var green = $("#gamer").css("color", "green");
	var colorArray = [red, blue, green];
	colorChoice = Math.floor(Math.random() * (2));
	$("#gamer").css(colorArray[colorChoice]);
	*/