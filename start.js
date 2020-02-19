$(document).ready(function() {
    // Hides the text as the page loads
    $('#column1').hide();
    $('#column2').hide();
    $('#column3').hide();
    //Stagger out the animation of the fading in from top to bottom.
    $('#column1').delay(800).fadeIn();
    $('#column2').delay(1200).fadeIn();
    $('#column3').delay(1600).fadeIn();
});
