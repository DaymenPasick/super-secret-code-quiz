// JavaScript sheet

// Household variables
var submitResultsButton = document.querySelector("#submit-results");
var userInitials = document.querySelector("#user-initials");
var userScore = 0;
var storedInitials =""; //will be eddited based off end quiz page user input
var finalScore = 0; //what will display in score screen at end quiz page

//for start, quiz, quiz-end, and HiScore pages
var startPage = document.querySelector(".startPage");
var quizPage = document.querySelector(".quizPage");
var endPage = document.querySelector(".endPage");
var scorePage = document.querySelector(".scorePage");

//used to toggle between individual question phases on quiz page
var questionOne = document.querySelector("#question-one");
var questionTwo = document.querySelector("#question-two");
var questionThree = document.querySelector("#question-three");
var questionFour = document.querySelector("#question-four");

//will be given a value in quiz page, when user answers the corrosponding question
var question1AnswerStatus;
var question2AnswerStatus;
var question3AnswerStatus;
var question4AnswerStatus;




// functions to toggle display of each "page"-- displayQuiz contains timer start & pass to question1 ---------------------------
var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", displayQuiz);

function displayStart(){
    startPage.style.display = null;
    quizPage.style.display = "none";
    endPage.style.display = "none";
    scorePage.style.display = "none";
}

function displayQuiz(){
    startPage.style.display = "none";
    quizPage.style.display = null;
    endPage.style.display = "none";
    scorePage.style.display = "none";
    cdTimer(); //will trigger timer to start
    displayQOne()//will toggle question 1 page
}

function displayQuizEnd(){
    startPage.style.display = "none";
    quizPage.style.display = "none";
    endPage.style.display = null;
    scorePage.style.display = "none";
    calcFinalScore(); //will calc final score and display on screen
}


function displayScorePage(){
    startPage.style.display = "none";
    quizPage.style.display = "none";
    endPage.style.display = "none";
    scorePage.style.display = null;
}



// functions to toggle through each quiz question -----------------------------------------------------------
function displayQOne() {
    questionOne.style.display = null;
    questionTwo.style.display = "none";
    questionThree.style.display = "none";
    questionFour.style.display = "none";
}

function displayQTwo() {
    questionOne.style.display = "none";
    questionTwo.style.display = null;
    questionThree.style.display = "none";
    questionFour.style.display = "none";

}

function displayQThree() {
    questionOne.style.display = "none";
    questionTwo.style.display = "none";
    questionThree.style.display = null;
    questionFour.style.display = "none";
}

function displayQFour() {
    questionOne.style.display = "none";
    questionTwo.style.display = "none";
    questionThree.style.display = "none";
    questionFour.style.display = null;
}



// functions to handle question answers from quiz pages--- answer 4 contains pass to end quiz page----------------------------
//functions will add to user score or -10 seconds from timer based on user answer
var q1CorrectAnswer = document.querySelector("#q1-correct")
var q2CorrectAnswer = document.querySelector("#q2-correct")
var q3CorrectAnswer = document.querySelector("#q3-correct")
var q4CorrectAnswer = document.querySelector("#q4-wrong") //this is different intentionally

// question answer 1
var q1Event = document.querySelector("#choice-one");
q1Event.addEventListener("click", userAnswer);

function userAnswer(event) {
    event.preventDefault();
    var answer = event.target; //for checking what click event is targetting
    console.log(answer);

    var answerResult = event.target.id;

    if (answerResult === q1CorrectAnswer.id) { //will change gloabl var question1AnswerStatus 
        question1AnswerStatus = "Correct";
        console.log(question1AnswerStatus);
        userScore = userScore + 15; // will add +15 to userScore
    } else{                                                 
        question1AnswerStatus = "Wrong";
        console.log(question1AnswerStatus);
        timeRemaining = timeRemaining - 10; //wrong = -10 seconds from timer

    }

    console.log("Current Score: " + userScore);
    displayQTwo();//will pass user to second question
}

// question answer 2
var q2Event = document.querySelector("#choice-two");
q2Event.addEventListener("click", userAnswer2);

function userAnswer2(event) {
    event.preventDefault();
    var answer = event.target; //for checking what click event is targetting
    console.log(answer);

    var answerResult = event.target.id;

    if (answerResult === q2CorrectAnswer.id) { //will change gloabl var question2AnswerStatus 
        question2AnswerStatus = "Correct";
        console.log(question2AnswerStatus);
        userScore = userScore + 15; // will add +15 to userScore
    } else{                                                 
        question2AnswerStatus = "Wrong";
        console.log(question2AnswerStatus);
        timeRemaining = timeRemaining - 10; //wrong = -10 seconds from timer
    }

    console.log("Current Score: " + userScore);
    displayQThree();//will pass user to third question
}

// question answer 3
var q3Event = document.querySelector("#choice-three");
q3Event.addEventListener("click", userAnswer3);

function userAnswer3(event) {
    event.preventDefault();
    var answer = event.target; //for checking what click event is targetting
    console.log(answer);

    var answerResult = event.target.id;

    if (answerResult === q3CorrectAnswer.id) { //will change gloabl var question3AnswerStatus 
        question3AnswerStatus = "Correct";
        console.log(question3AnswerStatus);
        userScore = userScore + 15; // will add +15 to userScore
    } else{                                                 
        question3AnswerStatus = "Wrong";
        console.log(question3AnswerStatus);
        timeRemaining = timeRemaining - 10; //wrong = -10 seconds from timer
    }

    console.log("Current Score: " + userScore);
    displayQFour();//will pass user to fourth question
}


// question answer 4
var q4Event = document.querySelector("#choice-four");
q4Event.addEventListener("click", userAnswer4);

function userAnswer4(event) {
    event.preventDefault();
    var answer = event.target; //for checking what click event is targetting
    console.log(answer);

    var answerResult = event.target.id;

    if (answerResult === q4CorrectAnswer.id) { //will change gloabl var question1AnswerStatus 
        question4AnswerStatus = "Wrong";
        console.log(question4AnswerStatus);
        timeRemaining = timeRemaining - 10; //wrong = -10 seconds from timer
    } else{                                                 
        question4AnswerStatus = "Correct";
        console.log(question4AnswerStatus);
        userScore = userScore + 15; // will add +15 to userScore
    }

    console.log("Current Score: " + userScore);
    displayQuizEnd() //will pass user to end quiz page
}

//will calculate display user final score in quiz end page
var finalScoreDisplay = document.querySelector("#final-score-display");
function calcFinalScore() {

    finalScore = userScore;
    finalScoreDisplay.textContent = "Final Score: " + finalScore;


}

// this will take in user initials from quiz end page and store it into storedInitials-----------------------------------


//this will take both the userScore and storedInitials into an 
// object named quizResult and the object into local storage
submitResultsButton.addEventListener("click", sendQuizResult);
function sendQuizResult(event){

    event.preventDefault();
    storedInitials = userInitials.value
    console.log("User Initials: " + storedInitials);


    quizResult = [
        {
            initials: storedInitials,
            score: finalScore,
        }
    ]
    localStorage.setItem("quizResult", JSON.stringify(quizResult));
    console.log(quizResult);
}






// function and variables for countdown timer--- will send user to end quiz page when timer runs out -----------------------------------
var quizTimer = document.querySelector(".time")
var timeRemaining = 60;

function cdTimer() {
    var tInterval = setInterval(function(){
        timeRemaining--;
        quizTimer.textContent = "Time Remaining: " + timeRemaining;
        
        if(timeRemaining === 0) {
            clearInterval(tInterval);
            displayQuizEnd(); // will pass user to end quiz page
        }


    },1000) //this will set in miliseconds the timer interval
}



function init() {
    displayStart();
}

init();


// Need to way to display answer Corrent/Incorrect answers 
// 3) while this action triggers a change to next question, it should also display the selected answers wrong/correct status
// 5) need a way to delay the switch to the next question to user to see the wrong/correct alert
// 6) need as way to display this wrong/correct alert upon clicking


// When game is over, user initials and score can be saved (Mod4Act8 might help) *************
// need a way to take these locally stored values and put them into an Ordered List for leaderboards
// need to way to sort this list, from highest to greatest
// need a way to populate these into the highscore/detail tab in the top left of the nav bar   

// ++++++++++++Theoretical Solve Playground++++++++++++++

// will take a value into variable leaderBoardReturn, and pass it into hiscores *********
// possible functionality to create text/data/variable based on user input. May
// be able to use it to populate hiscore back into an ordered list?

// var leaderBoardReturn = locallyStoredScoresReturned;
// document.body.children[0].children[0].append(leaderBoardReturn)

// var leaderBoardReturn = "sucess!";
// document.body.children[0].children[0].append(leaderBoardReturn);
// console.log(document.body.children[0].children[0]);
// this syntax could also accomplish this for an ordered list
// var orderedList = document.createEelement("ol")
// var li1 = document.createElement("li")
// orderedList.appendChild(li1)
//l1.textContent = "leaderBoardStatsFromLocalStorage"
