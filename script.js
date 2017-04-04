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
	var greenOff = function(){
		greenButton.css("background-color", "green");
	}
	setTimeout(greenOff, 500);
};


var redLight = function(){
	redButton.css("background-color", "#ff170f");
	var redOff = function(){
		redButton.css("background-color", "#a8000b");
	}
	setTimeout(redOff, 500);
};


var yellowLight = function(){
	yellowButton.css("background-color", "yellow");
	var yellowOff = function(){
		yellowButton.css("background-color", "#d6c100");
	}
	setTimeout(yellowOff, 500);
};


var blueLight = function(){
	blueButton.css("background-color", "#1c58fd");
	var blueOff = function(){
		blueButton.css("background-color", "#2c42af");
	}
	setTimeout(blueOff, 500);
};



var targetSequence = [];
var inputSequence = [];

var inPlay = true;

var compare = function(){
	if (targetSequence.length !== inputSequence.length) return false;
	for (let i = 0; i < targetSequence.length; i++){	

		if (targetSequence[i] !== inputSequence[i]) {
		console.log("incorrect.");
		inPlay = false;
		} else {
		console.log("correct!");
		inPlay = true;
		inputSequence = [];
		getNextColor();
		}
	}
};


var flashTargetColor = function(){
	let offset = 1000
	for(let i=0; i<targetSequence.length; i++){
		if (targetSequence[i] == 1){
		// console.log("one was chosen");
		setTimeout(greenLight, i * offset);
		} else if (targetSequence[i] == 2){
		// console.log("two was chosen");
		setTimeout(redLight, i * offset);
		} else if (targetSequence[i] == 3){
		// console.log("three was chosen");
		setTimeout(yellowLight, i * offset);
		} else if (targetSequence[i] == 4){
		// console.log("four was chosen");
		setTimeout(blueLight, i * offset);
		}
	}
};




var getUserChoice = function(){


	var selectGreen = function(){
	console.log("clicked on green");
	greenLight();
	inputSequence.push(1);
	if (targetSequence.length === inputSequence.length){
		compare();
	}
	}

	var selectRed = function(){
	console.log("clicked on red");
	redLight();
	inputSequence.push(2);
	if (targetSequence.length === inputSequence.length){
		compare();
	}
	}

	var selectYellow = function(){
	console.log("clicked on yellow");
	yellowLight();
	inputSequence.push(3)
	if (targetSequence.length === inputSequence.length){
		compare();
	}
	}

	var selectBlue = function(){
	console.log("clicked on blue");
	blueLight();
	inputSequence.push(4);
	if (targetSequence.length === inputSequence.length){
		compare();
	}
	}


	greenButton.on("click", selectGreen);
	redButton.on("click", selectRed);
	yellowButton.on("click", selectYellow);
	blueButton.on("click", selectBlue);

};

	
var getNextColor = function(){
	// inputSequence = [];
	targetSequence.push(Math.floor((Math.random() * 4 +1)));
	flashTargetColor();
	getUserChoice();	
};

var play = function(){
// for (var i = 0; i < 3; i++){
	// inputSequence = [];
	getNextColor();
	console.log("target is " + targetSequence);

	
	// getUserChoice();


//}
};

startButton.on("click", play);



