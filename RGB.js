$(document).ready(function(){
	// An event based animation with mouseover, hover, and mouseout. 
	var colorArray = [red, blue, green];
	var red = "red";
	var blue = "blue";
	var green = "green";
	var colorChoice = "";
	$("#gamer").mouseover(function(){
		colorChoice = Math.floor(Math.random() * (2));
		colorChoice = colorArray[colorChoice];
		$(this).animate({color: colorChoice}, 200);
		console.log(colorChoice);
	});
	$("#gamer").mouseout(function(){
		colorChoice = Math.floor(Math.random() * (2));
		colorChoice = colorArray[colorChoice];
		$(this).animate({color: colorChoice}, 200);
		console.log(colorChoice);
	});
	$("#gamer").hover(function(){
		colorChoice = Math.floor(Math.random() * (2));
		colorChoice = colorArray[colorChoice];
		$(this).animate({color: colorChoice}, 200);
		console.log(colorChoice);
	});
  });

	/*
	var colorArray = [red, blue, green];
	var red = $("#gamer").css("color", "red");
	var blue = $("#gamer").css("color", "blue");
	var green = $("#gamer").css("color", "green");
	colorChoice = Math.floor(Math.random() * (2));
	$(this).animate({color: colorChoice}, 200);
	*/

	/*
	$(this).each(function(i) {
			$(this).delay(200).animate("color", "green");
			$(this).delay(400).animate("color", "blue");
			$(this).delay(600).animate("color", "red");
		 });
	*/