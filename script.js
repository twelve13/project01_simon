var greenButton = $("#green");
var redButton = $("#red");
var yellowButton = $("#yellow");
var blueButton = $("#blue");
var startButton = $("#start");
var form = $("form");

var targetSequence = [];
var currentMove = 0;
var level = 8;
var offset = 900;

var greenLight = function() {
	greenButton.css("background-color", "limegreen");
	var greenOff = function(){
		greenButton.css("background-color", "green");
	}
	setTimeout(greenOff, 500);
	document.getElementById("e-note").play();
};


var redLight = function(){
	redButton.css("background-color", "#ff170f");
	var redOff = function(){
		redButton.css("background-color", "#a8000b");
	}
	setTimeout(redOff, 500);
	document.getElementById("a-note").play();
};


var yellowLight = function(){
	yellowButton.css("background-color", "yellow");
	var yellowOff = function(){
		yellowButton.css("background-color", "#d6c100");
	}
	setTimeout(yellowOff, 500);
	document.getElementById("c-sharp-note").play();
};


var blueLight = function(){
	blueButton.css("background-color", "#1c58fd");
	var blueOff = function(){
		blueButton.css("background-color", "#2c42af");
	}
	setTimeout(blueOff, 500);
	document.getElementById("a-low-note").play();
};


var flashTargetColor = function(){
	offset = 900;
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

form.submit(function(event){
	event.preventDefault();
	level = $("#select").val();
	console.log(level);
	$("#score").text(level);

});




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
			if(currentMove == level){
				$("#score").text("ARR")
				targetSequence = [];
			} else {
			$("#score").text(level - currentMove);
			getNextColor();
			};
			
		}
	} else {
		console.log("wrongo");
		$("#destination").text("NO PASSENGER")
		$("#score").text("---");
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

var play = function(){	
	$("#score").text(level);
	getNextColor();
};

startButton.on("click", play);


// make generic function that applies to all the buttons
// this will tell you which color was clicked based on element id 
// set what equals what using arrays
// every time you click
// compare against target sequence at the current move index
//increment current , then just wait for them to click on the next button
//after check if colors match, make sure you're not at the last position, can't advance past what's there
//also check is this the last color in the seqeunce, then trigger get Next color


//have multiple levels of difficulty
	//number of moves
	//speed

//have time restrictions for choices?

//add sounds

//maybe change layout

//be able to choose using keyboard?



