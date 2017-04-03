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
var inputSequence = [];


var compare = function(){
	if (targetSequence.length !== inputSequence.length) return false;
	for (var i = 0; i < targetSequence.length; i++){	

		if (targetSequence[i] !== inputSequence[i]) {
		console.log("incorrect.")
		return false;
		} else {
		console.log("correct!")
		return true;
	}
	}
}


var flashColor = function(){

	for(var i=0; i<targetSequence.length; i++){
		if (targetSequence[i] == 1){
		// console.log("one was chosen");
		greenLight();
		greenOff();
		// setTimeout(greenLight(), 3000);
	} else if (targetSequence[i] == 2){
		// console.log("two was chosen");
		redLight();
	} else if (targetSequence[i] == 3){
		// console.log("three was chosen");
		yellowLight();
	} else if (targetSequence[i] == 4){
		// console.log("four was chosen");
		blueLight();
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

	compare();
}

	var selectRed = function(){
	console.log("clicked on red");
	inputSequence.push(2);

	compare();
}

	var selectYellow = function(){
	console.log("clicked on yellow");
	inputSequence.push(3)

	compare();
}

	var selectBlue = function(){
	console.log("clicked on blue");
	inputSequence.push(4);

	compare();
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



