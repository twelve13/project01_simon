var greenButton = $("#green");
var redButton = $("#red");
var yellowButton = $("#yellow");
var blueButton = $("#blue");

var form = $("form");
var startButton = $("#start");

var success = $(".success");
var fail = $(".fail");

var targetSequence = [];
var currentMove = 0;
var level = 13;
var levelForWin = 13;
var offset = 900;

success.hide();
fail.hide();

var greenLight = function() {
    greenButton.css("background-color", "limegreen");
    var greenOff = function() {
        greenButton.css("background-color", "green");
    }
    setTimeout(greenOff, 350);
    //currentTime=0 allows you to cut the playing time of the note
    document.getElementById("e-note").currentTime = 0;
    document.getElementById("e-note").play();
};


var redLight = function() {
    redButton.css("background-color", "#ff170f");
    var redOff = function() {
        redButton.css("background-color", "#a8000b");
    }
    setTimeout(redOff, 350);
    document.getElementById("a-note").currentTime = 0;
    document.getElementById("a-note").play();
};


var yellowLight = function() {
    yellowButton.css("background-color", "yellow");
    var yellowOff = function() {
        yellowButton.css("background-color", "#d6c100");
    }
    setTimeout(yellowOff, 350);
    document.getElementById("c-sharp-note").currentTime = 0;
    document.getElementById("c-sharp-note").play();
};


var blueLight = function() {
    blueButton.css("background-color", "#1c58fd");
    var blueOff = function() {
        blueButton.css("background-color", "#2c42af");
    }
    setTimeout(blueOff, 350);
    document.getElementById("a-low-note").currentTime = 0;
    document.getElementById("a-low-note").play();
};

//need to so (i+1) * offset or the first one will directly overlap with the user click
var flashTargetColor = function() {
    for (let i = 0; i < targetSequence.length; i++) {
        if (targetSequence[i] == 1) {
            setTimeout(greenLight, (i + 1) * offset);
        } else if (targetSequence[i] == 2) {
            setTimeout(redLight, (i + 1) * offset);
        } else if (targetSequence[i] == 3) {
            setTimeout(yellowLight, (i + 1) * offset);
        } else if (targetSequence[i] == 4) {
            setTimeout(blueLight, (i + 1) * offset);
        }
    }
};

//levelForWin will get subtracted from 21 to determine how many more moves are needed to win.
//with each increasing difficulty level, make the target lights flash faster in succession by shortening the offset.

form.submit(function(event) {
    event.preventDefault();
    level = $("#select").val();
    console.log(level);
    $("#score").text(level);
    if (level == 13) {
        levelForWin = 13;
        offset = 900;
    } else if (level == 7) {
        levelForWin = 7;
        offset = 700;
    } else if (level == 1) {
        levelForWin = 1;
        offset = 550;
    }
});


var compare = function(e) {
    e.preventDefault();
    let choice = $(this).attr("id");
    if (choice == "green" || e.which == 54) {
        choiceVal = 1;
        greenLight();
    } else if (choice == "red" || e.which == 89) {
        choiceVal = 2;
        redLight();
    } else if (choice == "yellow" || e.which == 72) {
        choiceVal = 3;
        yellowLight();
    } else if (choice == "blue" || e.which == 78) {
        choiceVal = 4;
        blueLight();
    }
    console.log("user guess is " + choiceVal);
    console.log("number at first position of target is " + targetSequence[currentMove]);e
//if the user's choice matches the target sequence at the current move, increase the current move count.
//then if the current move count matches the length of the target sequence (the sequence given so far), see if you've hit the number of moves needed to win the level
    if (choiceVal == targetSequence[currentMove]) {
        console.log("correcto");
        currentMove++;

        if (currentMove == targetSequence.length) {
            $(".position:nth-child(" + level + ")").addClass("active");
            $(".position:nth-child(" + (level - 1) + ")").removeClass("active");
            
            if (currentMove == (21 - levelForWin)) {
                document.getElementById("win").play();
                success.show();
                targetSequence = [];
                currentMove = 0;
                level = 13;
                $(".position").removeClass("active");
            } else {
                getNextColor();
                level++;
            };
        }
    } else {
        console.log("wrongo");
        document.getElementById("game-over").play();
        fail.show();
        targetSequence = [];
        currentMove = 0;
        level = 13;
        $(".position").removeClass("active");
    }
}

greenButton.on("click", compare);
redButton.on("click", compare);
yellowButton.on("click", compare);
blueButton.on("click", compare);

document.addEventListener("keydown", compare);


var getNextColor = function() {
    success.hide();
    fail.hide();
    currentMove = 0;
    targetSequence.push(Math.floor((Math.random() * 4 + 1)));
    flashTargetColor();
};


startButton.on("click", getNextColor);





