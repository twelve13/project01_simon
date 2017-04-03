//green = 1
//red = 2
//yellow = 3
//blue = 4

var greenButton = $("#green");
var redButton = $("#red");
var yellowButton = $("#yellow");
var blueButton = $("#blue");
var startButton = $("#start");

var choice;

var greenLight = function() {
	greenButton.css("background-color", "limegreen");
}
var greenOff = function(){
	setTimeout(greenLight(), 3000)}

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
	targetSequence.push(Math.floor((Math.random() * 4 +1)));	
}

var play = function(){
	for (var i = 0; i < 1; i++){
	console.log("next is ")
	getNextColor();
	console.log(targetSequence);
	if (targetSequence[i] == 1){
		console.log("one was chosen");
		greenLight();
		greenOff();
		// setTimeout(greenLight(), 3000);
	} else if (targetSequence[i] == 2){
		console.log("two was chosen");
		redLight();
	} else if (targetSequence[i] == 3){
		console.log("three was chosen");
		yellowLight();
	} else if (targetSequence[i] == 4){
		console.log("four was chosen");
		blueLight();
	}
	}

}

var selectGreen = function(){
	console.log("clicked on green");
	return choice = 1;
}

var selectRed = function(){
	console.log("clicked on red");
	return choice = 2;
}

var selectYellow = function(){
	console.log("clicked on yellow");
	return choice = 3;
}

var selectBlue = function(){
	console.log("clicked on blue");
	return choice = 4;
}

startButton.on("click", play);

greenButton.on("click", selectGreen);
redButton.on("click", selectRed);
yellowButton.on("click", selectYellow);
blueButton.on("click", selectBlue);