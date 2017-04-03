//green = 1
//red = 2
//yellow = 3
//blue = 4

var greenButton = $("#green");
var redButton = $("#red");
var yellowButton = $("#yellow");
var blueButton = $("#blue");
var startButton = $("#start");

var greenLight = function() {
	greenButton.css("background-color", "limegreen");
}

var redLight = function(){
	redButton.css("background-color", "#ff170f");
}

var yellowLight = function(){
	yellowButton.css("background-color", "yellow");
}

var blueLight = function(){
	blueButton.css("background-color", "#1c45fd");
}


var targetSequence = [];

var getNextColor = function(){
	console.log("next is ")
	targetSequence.push(Math.floor((Math.random() * 4 +1)));
	console.log(targetSequence);
}

var play = function(){
	for (var i = 0; i < 8; i++){
	getNextColor();
	}
}


startButton.on("click", play);