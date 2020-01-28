var hourDegrees = 0;
var minuteDegrees = 0;
var secondsDegrees = 0;

var hours = document.getElementById("hour");
var minutes = document.getElementById("minute");
var seconds = document.getElementById("second");

var hourRotation = 360 / (60 * 60 * 12);
var minuteRotation = 360 / (60 * 60);
var secondsRotation = 360 / 60;


setInterval(function() {
    hours.style.transform = "rotate(" + (hourDegrees += hourRotation) + "deg)";
    minutes.style.transform = "rotate(" + (minuteDegrees += MinuteDegrees) + "deg)";
    seconds.style.transform = "rotate(" + (secondsDegrees += secondsRotation) + "deg)";
}, 1000);