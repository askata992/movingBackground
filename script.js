$(document).ready(function() {
    var movementStrengthFront = 20;
    var frontHeight = movementStrengthFront / $(window).height();
    var frontWidth = movementStrengthFront / $(window).width();
    var movementStrengthBack = 10;
    var backHeight = movementStrengthBack / $(window).height();
    var backWidth = movementStrengthBack / $(window).width();
    var movementStrengthMountines = 6;
    var mountinesHeight = movementStrengthMountines / $(window).height();
    var mountinesWidth = movementStrengthMountines / $(window).width();
    var movementStrengthBackground = 1;
    var backgroundHeight = movementStrengthBackground / $(window).height();
    var backgroundWidth = movementStrengthBackground / $(window).width();
    $("#front-image").mousemove(function(e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueXFront = frontWidth * pageX * -1 - 25;
        var newvalueYFront = frontHeight * pageY * -1 - 50;
        $('#front-image').css("background-position", newvalueXFront + "px     " + newvalueYFront + "px");
        var newvalueXBack = backWidth * pageX * -1 - 25;
        var newvalueYBack = backHeight * pageY * -1 - 50;
        $('#back-image').css("background-position", newvalueXBack + "px     " + newvalueYBack + "px");
        var newvalueXMountines = mountinesWidth * pageX * -1 - 25;
        var newvalueYMountines = mountinesHeight * pageY * -1 - 50;
        $('#mountines-image').css("background-position", newvalueXMountines + "px     " + newvalueYMountines + "px");
        var newvalueXBackground = backgroundWidth * pageX * -1 - 25;
        var newvalueYBackground = backgroundHeight * pageY * -1 - 50;
        $('#background-image').css("background-position", newvalueXBackground + "px     " + newvalueYBackground + "px");
    });
});