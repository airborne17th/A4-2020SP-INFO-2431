$(document).ready(function(){
    $("#list").hide();
    $("#flipDown").click(function(){
        $("#list").slideDown(300);
      });
      
    $("#flipUp").click(function(){
        $("#list").slideUp(300);
      });     
});

/*
var nextList = $("#list li:first-child");
var nextSlideSource;
		
    setInterval( function () {   
       	$("#list").fadeIn(1000,
       		function () {
       	     	if (nextList.next().length == 0) {
					nextList = $("#slides img:first-child");
				}
				else {
					nextList = nextList.next();
				}
				nextListSource = nextSlide.attr("li");
			}
		);    // end callback
	},
  3000);
  */