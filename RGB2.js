setInterval(function(){
    $("#gamer").mouseover(function(){
        setInterval(function(){
            $("#gamer").animate({'color':'red'},1000)
            $("#gamer").animate({'color':'blue'},1000)
            $("#gamer").animate({'color':'green'},1000)
            },5000); 
            });
            /*
    $("#gamer").mouseout(function(){
            $("#gamer").css ({'color': 'black'});
        }); */
});