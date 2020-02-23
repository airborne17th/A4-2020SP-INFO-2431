$(document).ready(function(){
    // Cues up the animation and set intervals after user hovers over
    $("#gamer").mouseover(function(){
        setInterval(function(){
            $("#gamer").css({'color':'red'});
            $("#gamer").animate({'margin-left':'50px'},1000);
            $("#gamer").animate({'margin-left':'-50px'},1000);
            },5000); 
            }); 
    // User hovers cursor off of the tile and causes the animation to reverse and queue up a different color. Not full RGB but changes Blue and Red. 
    $("#gamer").mouseout(function(){   
        setInterval(function(){
            $("#gamer").css({'color':'blue'});
            $("#gamer").animate({'margin-right':'50px'},1000);
            $("#gamer").animate({'margin-right':'-50px'},1000);
            },5000); 
            }); 
    });
