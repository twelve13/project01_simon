var targetSequence = [];

var getNextColor = function(){
	targetSequence.push(Math.floor((Math.random() * 4 +1)));
	console.log(targetSequence);
}