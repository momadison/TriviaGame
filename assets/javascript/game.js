//===================QUESTION CREATION=================================
//Variables to hold questions
var familyQuestions = []; //array for family question objects
var mathQuestions = []; //array for math question objects
var scienceQuestions = [];  //array for science question objects
var physicQuestions = [];  //array for physic question objects
var codingQuestions = [];  //array for coding question objects

//JQuery Variables
var headlines = $(".display-4");

//Score Variables
var score = 0;
var lives = 3;

//sound variables
var clapAudio = new Audio('assets/audio/clap.wav');
var clickAudio = new Audio('assets/audio/click.wav');
var wrongAudio = new Audio('assets/audio/wrong.wav');
var gameOverAudio = new Audio('assets/audio/gameOver.wav');

//function to create new object
function newQuestion(array, question, cA, wA1, wA2, wA3) {
    var obj = {};
    obj.question = question;
    obj.correctAnswer = cA;
    obj.wrongAnswer1 = wA1;
    obj.wrongAnswer2 = wA2;
    obj.wrongAnswer3 = wA3;
    array.push(obj);
    return obj;
}
function shuffle(array) {
    array.sort(function () {
        return 0.5 - Math.random();
    });
}
//==================FAMILY QUESTIONS==================================
//favorite color 
newQuestion(familyQuestions, "What's Zoe's favorite color?", "yellow", "blue", "green", "red");
newQuestion(familyQuestions, "What's Daddy's favorite color?", "blue", "yellow", "black", "red");
newQuestion(familyQuestions, "What's Mommy's favorite color?", "blue", "yellow", "green", "red");
newQuestion(familyQuestions, "What's Xavier's favorite color?", "black", "blue", "green", "red");
newQuestion(familyQuestions, "What's Liam's favorite color?", "black", "yellow", "green", "red");
newQuestion(familyQuestions, "What's Xander's favorite color?", "black", "blue", "green", "red");
newQuestion(familyQuestions, "What's Caydee's favorite color?", "blue", "yellow", "green", "red");
newQuestion(familyQuestions, "What's CaCa's favorite color?", "red", "black", "green", "blue");
//biggest Pet Peeve
var wrongPeeves = ["the word moist", "noisy eaters", "slow computer", "whining", "rude drivers", "lights left on", "noisy eating", "close talkers", "messy house", "smells"];
shuffle(wrongPeeves);
newQuestion(familyQuestions, "What's Zoe's biggest pet peeve?", "when I fill a bowl of cereal and there is no milk", wrongPeeves[0], wrongPeeves[1], wrongPeeves[2]);
shuffle(wrongPeeves);
newQuestion(familyQuestions, "What's Daddy's biggest pet peeve?", "too many different sounds", wrongPeeves[0], wrongPeeves[1], wrongPeeves[2]);
shuffle(wrongPeeves);
newQuestion(familyQuestions, "What's Mommy's biggest pet peeve?", "ignorance", wrongPeeves[0], wrongPeeves[1], wrongPeeves[2]);
shuffle(wrongPeeves);
newQuestion(familyQuestions, "What's Xavier's biggest pet peeve?", "twins", wrongPeeves[0], wrongPeeves[1], wrongPeeves[2]);
shuffle(wrongPeeves);
newQuestion(familyQuestions, "What's Liam's biggest pet peeve?", "getting bit", wrongPeeves[0], wrongPeeves[1], wrongPeeves[2]);
shuffle(wrongPeeves);
newQuestion(familyQuestions, "What's Xander's biggest pet peeve?", "getting bit", wrongPeeves[0], wrongPeeves[1], wrongPeeves[2]);
shuffle(wrongPeeves);
newQuestion(familyQuestions, "What's Caydee's biggest pet peeve?", "fat babies", wrongPeeves[0], wrongPeeves[1], wrongPeeves[2]);
shuffle(wrongPeeves);
newQuestion(familyQuestions, "What's Caca's biggest pet peeve?", "closed minded people", wrongPeeves[0], wrongPeeves[1], wrongPeeves[2]);

//=========================MATH QUESTIONS==================================
//Addition
newQuestion(mathQuestions, "What is 24 + 36?", 60,40,58,62);
newQuestion(mathQuestions, "What is 12 + 19?", 31,32,28,19);
newQuestion(mathQuestions, "What is 64 + 11?", 75,72,85,76);
newQuestion(mathQuestions, "What is 111 + 21?", 132,129,141,131);
//Misc
newQuestion(mathQuestions, "What is pi?", 3.14159, 3.15432, 3.14157, "like cake but with fruit");

//=========================SCIENCE QUESTIONS================================
newQuestion(scienceQuestions, "What animal can see behind themselves without turning their heads?", "rabbits", "owls", "dogs", "hawk");
newQuestion(scienceQuestions, "What is most of the dust in your home made of?", "dead skin", "leftover food", "dirt from outside", "trash");
newQuestion(scienceQuestions, "How big was a Stegosaurus brain?", "a walnut", "a car engine", "a rubix cube", "an apple");
newQuestion(scienceQuestions, "Where are butterflies taste buds at?", "feet", "nose", "tongue", "wings");
newQuestion(scienceQuestions, "How far does an average person walk in their lifetime", "110,000 miles", "1,000,000 miles", "50,000 miles", "10,000 miles");

//========================PHYSICS QUESTIONS===================================
newQuestion(physicQuestions, "What branch of Einstein's relativity deals with gravity", "general relativity", "spacial relativity", "hair relativity", "special relativity");
newQuestion(physicQuestions, "How fast does light travel", "2.998x10^8", "2.998x10^7", "2.998x10^9", "2.998x10^6");
newQuestion(physicQuestions, "When exposed to lower air pressure, the boiling point of water ________", "increases", "decreases", "stays the same", "goes away");
newQuestion(physicQuestions, "Why do spaceships need heat shields to re-enter Earth's atmosphere?", "the air in front of the craft is compressed so much that it heats up", "friction caused by the air molecules", "the farts of the astronauts compress on the return", "alien conspiracies");
newQuestion(physicQuestions, "What is dark matter?", "no one really knows", "the space between the earth and the sun", "a chemical inside the earth's crust", "a bacteria commonly found in the toilet");

//=======================CODING QUESTIONS=======================================
newQuestion(codingQuestions, "What do you use the <img> tag for in HTML?", "insert an image", "attach an image to another tag", "play a movie", "enter a headline");
newQuestion(codingQuestions, "How do you close an <a> tag in HTML?", "</a>", "</img>", "<a/>", "<close:a>");
newQuestion(codingQuestions, "What does an <a> tag do in HTML?", "links to another page", "bold", "inserts an image", "add the sum");
newQuestion(codingQuestions, "How would you add a header tag in HTML", "<h1>", "<head>", "<tag>", "<elem>");
newQuestion(codingQuestions, "How do you add a new paragraph in HTML", "<p>", "<para>", "<newLine>", "<enter>");


//========================SETUP GAMEBOARD========================================
var category = ["Mathematics", "Science", "Physics", "Coding", "Family"];
var grid = [];
    for (var h = 0; h < 25; h++) {
        grid.push(false);
    }

function gridBoard(appendReference, column, row) {
if ((lives >= 0) && (grid.indexOf(false) !== -1)) {
    var points = 600;
    $(".badge-light").text(lives);
    var dataBox = 0;
//Add Div for Row
    for (var i = 0; i < row; i++)
    {
        points -= 100;
        var rowDiv = $("<div>");
        //Classify as row and add or subtract any padding
        rowDiv.addClass("row pb-3");
        $(appendReference).append(rowDiv);
        //Add Div for Column
        for (var j = 0; j < column; j++) {
            var colDiv = $("<div>");
            var colSize = 12/column; //for bootstrap row class
            //Classify as column and add or subtract any padding
            colDiv.addClass("col-"+colSize+" box pr-3");
            //Place in column content
            if (grid[dataBox] === false) {
                colDiv.html("<div class='buttonChoice' data-box='"+dataBox+"' data-category='"+category[j]+"' data-points='"+points+"'>"+category[j]+"<br><h1>$"+points+"</h1></div>");
            }
            else if (grid[dataBox] === true) {
                var buttonChosen = $("<div>");
                buttonChosen.addClass("buttonChosen");
                colDiv.append(buttonChosen);
            }
            dataBox++;
            rowDiv.append(colDiv); 
        }
    }
}
else {
    gameOverAudio.play();
    $("#stage").remove();
    headlines.text("Game Over");
    addRowCol(12,"finalScore", $('.wrapper'), "$"+score);
}
}

gridBoard("#stage",5,5);

//===================MOVE FROM BOARD TO QUESTION========================
//function to add new row and column
function addRowCol(size, classy, append, coltext) {
    var rowDiv = $("<div>");
    var colDiv = $("<div>");
    rowDiv.addClass("row");
    colDiv.addClass("col-"+size+" "+classy);
    colDiv.text(coltext);
    append.append(rowDiv);
    rowDiv.append(colDiv);
}

//function to setup new board and execute whether the correct choice is picked
function riddleMe(points, category) {
    //===================FUNCTION FOR WRONG GUESS===================
function wrongGuess() {
    //=======WRONG GUESS============
    clearInterval(intervalID);
    $(".timer").remove();
    wrongAudio.play();
    lives -= 1;
    var answerWrapper = $(".answerWrapper");
    headlines.text("Wrong");
    answerWrapper.remove();
    var answerWrapper = $("<div>");
    answerWrapper.addClass("answerWrapper");
    stageDiv.append(answerWrapper);
    addRowCol(12,"correctTitle", answerWrapper, "The correct answer is:");
    addRowCol(12,"finalAnswer", answerWrapper, correctAnswer);
    var delayReset = setTimeout(function() {
        $("#stage").remove();
        //add back the stage 
        var stageDiv = $("<div>");
        stageDiv.addClass("container");
        stageDiv.attr("id", "stage");
        $(".wrapper").append(stageDiv);
        headlines.text("Choose Your Category");
        gridBoard("#stage",5,5);
        $(".buttonChoice").click(function () {
            clickAudio.play();
            var points = $(this).data('points');
            var category = $(this).data('category');
            var box = $(this).data('box');
            grid[box] = true;
            riddleMe(points, category);
        }) 
    }, 3000)
}

    var questObject = {};
    //remove stage
    $("#stage").remove();

    //update the headlines
    headlines.html(category+" for $"+points);
    
    
    //start the clock
    var countClock = 10;
    var newTimerDiv = $("<div>");
    newTimerDiv.text("You have " + countClock + " seconds");
    newTimerDiv.addClass("timer");
    $(".jumbotron").prepend(newTimerDiv);

    var intervalID; //hold the set interval
    intervalID = setInterval(countDown, 1000);

    //function countdown to subtract count and re display
    function countDown() {
        if (countClock > 0) {
            countClock--;
            $(".timer").text("You have " + countClock + " seconds");
        }
        else {
            wrongGuess();
        }
    }

    
    //add back the stage 
    var stageDiv = $("<div>");
    stageDiv.addClass("container");
    stageDiv.attr("id", "stage");
    $(".wrapper").append(stageDiv);

    //pick a random question object based on the category the user picked
    if (category === "Family") {
        questObject = familyQuestions[Math.floor(Math.random() * familyQuestions.length)];
    }
    else if (category === "Mathematics") {
        questObject = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
    } 
    else if (category === "Science") {
        questObject = scienceQuestions[Math.floor(Math.random() * scienceQuestions.length)];
    } 
    else if (category === "Physics") {
        questObject = physicQuestions[Math.floor(Math.random() * physicQuestions.length)];
    } 
    else if (category === "Coding") {
        questObject = codingQuestions[Math.floor(Math.random() * codingQuestions.length)];
    }     

    //add in first row and column with the question
    var newHr = $("<hr>");
    var rowDiv = $("<div>");
    rowDiv.addClass("row");
    var colDiv = $("<div>");
    colDiv.addClass("col-12 question");
    colDiv.text(questObject.question);
    stageDiv.append(rowDiv);
    rowDiv.append(colDiv);
    colDiv.append(newHr);

    //set a variable for the correct answer
    var correctAnswer = questObject.correctAnswer;
    //create an array for all of the answers
    var answerArray = [questObject.correctAnswer, questObject.wrongAnswer1, questObject.wrongAnswer2, questObject.wrongAnswer3];
    //Shuffle array
    shuffle(answerArray);

    //add div tags and text
    var answerWrapper = $("<div>");
    answerWrapper.addClass("answerWrapper");
    stageDiv.append(answerWrapper);
    for (var i=0; i<answerArray.length; i++) {
        var rowDiv = $("<div>");
        rowDiv.addClass("row");
        var colDiv = $("<div>");
        colDiv.addClass("col-12 answer pt-4 pb-4");
        colDiv.attr("data-answer", answerArray[i]);
        colDiv.text(answerArray[i]);
        answerWrapper.append(rowDiv);
        rowDiv.append(colDiv);    
    }

    //on click function for the answer clicked and check if its right or wrong
    $(".answer").click(function () {
        clickAudio.play();
        var correctCheck = $(this).data("answer");
        if (correctCheck === correctAnswer) {
            //======CORRECT GUESS================
            clearInterval(intervalID);
            $(".timer").remove();
            score += points;
            headlines.text("Correct");
            $(".score").text("$"+score);
            $("#stage").remove();
            clapAudio.play();

            var delayReset = setTimeout(function() {
                //add back the stage 
                var stageDiv = $("<div>");
                stageDiv.addClass("container");
                stageDiv.attr("id", "stage");
                $(".wrapper").append(stageDiv);
                
                //change headlines and add grid board back
                headlines.text("Choose Your Category");
                gridBoard("#stage",5,5);

                //on click Grid board
                $(".buttonChoice").click(function () {
                clickAudio.play();
                var points = $(this).data('points');
                var category = $(this).data('category');
                var box = $(this).data('box');
                grid[box] = true;
                riddleMe(points, category);
                }) 

            }, 1000)

        }
        else {
           wrongGuess();
        }
    })
    
}

$(".buttonChoice").click(function () {
    clickAudio.play()
    var points = $(this).data('points');
    var category = $(this).data('category');
    var box = $(this).data('box');
    grid[box] = true;
    riddleMe(points, category);
})





