$(document).ready(function(){
    $("#list").hide();
    $("#flipDown").click(function(){
        $("#list").slideDown(300);
      });
      
    $("#flipUp").click(function(){
        $("#list").slideUp(300);
      });     
});
