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
var greenOff = function(){
	greenButton.css("background-color", "green");
}

var redLight = function(){
	redButton.css("background-color", "#ff170f");
}
var redOff = function(){
	redButton.css("background-color", "#a8000b");
}

var yellowLight = function(){
	yellowButton.css("background-color", "yellow");
}
var yellowOff = function(){
	yellowButton.css("background-color", "#d6c100");
}

var blueLight = function(){
	blueButton.css("background-color", "#1c45fd");
}
var blueOff = function(){
	blueButton.css("background-color", "#2034b6");
}


var targetSequence = [];
var inputSequence = [];

var inPlay = true;

var compare = function(){
	// if (targetSequence.length !== inputSequence.length) return false;
	for (var i = 0; i < targetSequence.length; i++){	

		if (targetSequence[i] !== inputSequence[i]) {
		console.log("incorrect.");
		return inPlay = false;
		} else {
		console.log("correct!");
		return inPlay = true;
//		getNextColor();
		play();
	}
	}
}


var flashColor = function(){

	for(var i=0; i<targetSequence.length; i++){
		if (targetSequence[i] == 1){
		// console.log("one was chosen");
		greenLight();
		setTimeout(greenOff, 500);
		// setTimeout(greenLight(), 3000);
	} else if (targetSequence[i] == 2){
		// console.log("two was chosen");
		redLight();
		setTimeout(redOff, 500);
	} else if (targetSequence[i] == 3){
		// console.log("three was chosen");
		yellowLight();
		setTimeout(yellowOff, 500);
	} else if (targetSequence[i] == 4){
		// console.log("four was chosen");
		blueLight();
		setTimeout(blueOff, 500);
	}

}
};

var getNextColor = function(){
	targetSequence.push(Math.floor((Math.random() * 4 +1)));
	flashColor();	
}

// var play = function(){
// 	for (var i = 0; i < 1; i++){
// 	console.log("next is ")
// 	getNextColor();
// 	console.log(targetSequence);
// 	if (targetSequence[i] == 1){
// 		console.log("one was chosen");
// 		greenLight();
// 		greenOff();
// 		// setTimeout(greenLight(), 3000);
// 	} else if (targetSequence[i] == 2){
// 		console.log("two was chosen");
// 		redLight();
// 	} else if (targetSequence[i] == 3){
// 		console.log("three was chosen");
// 		yellowLight();
// 	} else if (targetSequence[i] == 4){
// 		console.log("four was chosen");
// 		blueLight();
// 	}
// 	}

// }




var getUserChoice = function(){


	var selectGreen = function(){
	console.log("clicked on green");
	inputSequence.push(1);
	if (targetSequence.length === inputSequence.length){
		compare();
	}
}

	var selectRed = function(){
	console.log("clicked on red");
	inputSequence.push(2);
	if (targetSequence.length === inputSequence.length){
		compare();
	}
}

	var selectYellow = function(){
	console.log("clicked on yellow");
	inputSequence.push(3)
	if (targetSequence.length === inputSequence.length){
		compare();
	}
}

	var selectBlue = function(){
	console.log("clicked on blue");
	inputSequence.push(4);
	if (targetSequence.length === inputSequence.length){
		compare();
	}
}



	//compare();

	greenButton.on("click", selectGreen);
	redButton.on("click", selectRed);
	yellowButton.on("click", selectYellow);
	blueButton.on("click", selectBlue);

	// return choice;
	// compare(choice, targetSequence);

}

	



var play = function(){
	getNextColor();
	console.log("target is " + targetSequence);

	
	getUserChoice();


}


startButton.on("click", play);



