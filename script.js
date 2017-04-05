var greenButton = $("#green");
var redButton = $("#red");
var yellowButton = $("#yellow");
var blueButton = $("#blue");
var startButton = $("#start");


var targetSequence = [];
var currentMove = 0;


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


var flashTargetColor = function(){
	let offset = 900;
	for (let i = 0; i < targetSequence.length; i++){
		if (targetSequence[i] == 1){
		// console.log("one was chosen");
		setTimeout(greenLight, (i+1) * offset);
		} else if (targetSequence[i] == 2){
		// console.log("two was chosen");
		setTimeout(redLight, (i+1) * offset);
		} else if (targetSequence[i] == 3){
		// console.log("three was chosen");
		setTimeout(yellowLight, (i+1) * offset);
		} else if (targetSequence[i] == 4){
		// console.log("four was chosen");
		setTimeout(blueLight, (i+1) * offset);
		}
	}
};


// figure out later how to incorporate this
// let randomKey = [1, 2, 3, 4];
// let [green, red, yellow, blue] = randomKey;

var compare = function(){

	let choice = $(this).attr("id");
	if (choice == "green"){
		choiceA = 1;
		greenLight();
	} else if (choice == "red"){
		choiceA = 2;
		redLight();
	} else if (choice == "yellow"){
		choiceA = 3;
		yellowLight();
	} else if (choice == "blue"){
		choiceA = 4;
		blueLight();
	}
	console.log("user guess is " + choiceA);
	console.log("number at first position of target is " + targetSequence[currentMove]);
	if (choiceA == targetSequence[currentMove]){
		console.log("correcto");
		currentMove++;
		if(currentMove == targetSequence.length) {
		getNextColor();
	}
	} else {
		console.log("wrongo");
		targetSequence = [];
	}

}

	greenButton.on("click", compare);
	redButton.on("click", compare);
	yellowButton.on("click", compare);
	blueButton.on("click", compare);


var getNextColor = function(){
	currentMove = 0;
	targetSequence.push(Math.floor((Math.random() * 4 +1)));
	flashTargetColor();
};

startButton.on("click", getNextColor);


// make generic function that applies to all the buttons
// this will tell you which color was clicked based on element id 
// set what equals what using arrays
// every time you click
// compare against target sequence at the current move index
//increment current , then just wait for them to click on the next button
//after check if colors match, make sure you're not at the last position, can't advance past what's there
//also check is this the last color in the seqeunce, then trigger get Next color



