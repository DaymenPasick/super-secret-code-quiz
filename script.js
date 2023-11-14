// JavaScript sheet

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

//will ensure start page is active when program initializes
function init() {
    displayStart();
    
}
init();

// functions to toggle display of each "page"-- displayQuiz contains timer start & pass to question1 ---------------------------
var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", displayQuiz);
startButton.addEventListener("click", cdTimer);


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
     //will trigger timer to start
    displayQOne()//will toggle question 1 page
}

function displayQuizEnd(){
    startPage.style.display = "none";
    quizPage.style.display = "none";
    endPage.style.display = null;
    scorePage.style.display = "none";
    sendFinalScore();
    
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


// function and variables for countdown timer--- will send user to end quiz page when timer runs out -----------------------------------
var quizTimer = document.querySelector(".time")
var timeRemaining = 60;
// var tInterval;

function cdTimer() {
    var tInterval = setInterval(function(){
        timeRemaining--;
        quizTimer.textContent = "Time Remaining: " + timeRemaining;
        
        if(timeRemaining <= 0) {
            clearInterval(tInterval);
            displayQuizEnd(); // will pass user to end quiz page
        }

    




    },1000) //this will set in miliseconds the timer interval
}



// functions to handle question answers from quiz pages--- answer 4 contains pass to end quiz page----------------------------
//functions will add to user score or -10 seconds from timer based on user answer
var q1CorrectAnswer = document.querySelector("#q1-correct")
var q2CorrectAnswer = document.querySelector("#q2-correct")
var q3CorrectAnswer = document.querySelector("#q3-correct")
var q4CorrectAnswer = document.querySelector("#q4-wrong") //this is different intentionally
var userScore = 0;

// question answer 1
var q1Event = document.querySelector("#choice-one");
q1Event.addEventListener("click", userAnswer);
var question1AnswerStatus;


function userAnswer(event) {
    event.preventDefault();
    var answer = event.target; //for checking what click event is targetting
    console.log(answer);

    var answerResult = event.target.id;

    if (answerResult === q1CorrectAnswer.id) { 
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
var question2AnswerStatus;

function userAnswer2(event) {
    event.preventDefault();
    var answer = event.target; //for checking what click event is targetting
    console.log(answer);

    var answerResult = event.target.id;

    if (answerResult === q2CorrectAnswer.id) { 
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
var question3AnswerStatus;

function userAnswer3(event) {
    event.preventDefault();
    var answer = event.target; //for checking what click event is targetting
    console.log(answer);

    var answerResult = event.target.id;

    if (answerResult === q3CorrectAnswer.id) { 
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
var question4AnswerStatus;

function userAnswer4(event) {
    event.preventDefault();
    var answer = event.target; //for checking what click event is targetting
    console.log(answer);

    var answerResult = event.target.id;

    if (answerResult === q4CorrectAnswer.id) { 
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



//try again button in HiScores page. Clears user input and refreshes to start page
var tryAgainButton = document.querySelector("#try-again");
tryAgainButton.addEventListener("click", tryAgain);

function tryAgain(event) {
    event.preventDefault;
    userScore = 0;
    timeRemaining = 60;
    displayQuiz();
}

// (commented out because might be useful in the future)clear leaderboard button 
// var clearLeaderButton = document.querySelector("#clear-leaderboard");
// clearLeaderButton.addEventListener("click", clearLocal);

// function clearLocal() {
//     localStorage.clear();

// }


//===============================functions will take in initials input/quiz score and store in local =======================

//will calculate display user final score in quiz end page----- will also send finalScore to local
var finalScoreDisplay = document.querySelector("#final-score-display");
var finalScore = 0; 

function sendFinalScore() {
    finalScore = userScore;
    finalScoreDisplay.textContent = "Final Score: " + finalScore;
    localStorage.setItem("finalScore", finalScore)
}


// button will send storedInitials to local
var submitResultsButton = document.querySelector("#submit-results");
submitResultsButton.addEventListener("click", sendNewScore);
var userInitials = document.querySelector("#user-initials");
var storedInitials =""; 


function sendNewScore(event) {
    event.preventDefault();  
    storedInitials = userInitials.value //value  = initials input from user
    localStorage.setItem("storedInitials", storedInitials);
    localGetFinalAndInitials();
    editQuizResult();               
    updateLeaderBoard();
    leaderBoardToLocal();           //function group for local storage score and leaderboard flow
    localPrintToHiScorePage();
    findingLeaderBoardValues()
    printToDropDown ();
    

}
//===============================functions will take in initial score and inputs and store in local =======================





//==============================function will build/manage leaderBoard Array ==================================================

//for Array leaderBoard that will serve as long-term store of scores in local
var leaderBoard = [];
var quizResult = {};
var boardScore;
var boardInit;                                                           

//function will create a new object based off local storage scores and push to leaderBoard array
function updateLeaderBoard() {

         leaderBoard.push(quizResult);                                                               
}
//================================function will build/manage leaderBoard Array ==================================================





//================================functions will manage data going into leaderBoard Array =============================================

// function will retrieve final score and user initials from local and set to variables
var initialsFromLocal;
var scoreFromLocal;

 function localGetFinalAndInitials() {
     initialsFromLocal = localStorage.getItem("storedInitials");
     scoreFromLocal = localStorage.getItem("finalScore");
     console.log("Initials from local: " + initialsFromLocal);
     console.log("Final score from local: " + scoreFromLocal);
                                                                
 }


 // function will push score and initials into quizResult object 
function editQuizResult() {
    quizResult.initials = initialsFromLocal;
    quizResult.score = scoreFromLocal;
    console.log(quizResult)
 }

//================================functions will manage data going into leaderBoard Object =============================================





//===================functions will manage data coming out of leaderBoard Object =======================================================

// will send leaderBoard array to local storage (still need to test)
function leaderBoardToLocal() {
    localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
}



//function to take local storage quizResult and create a leaderboard with the data (need to edit to take from LeaderBoard)
var quizResultInitials;
var quizResultScore;

function localPrintToHiScorePage() {
    var renderBoardInitials;
    var renderBoardScore;

    renderBoardInitials = JSON.parse(localStorage.getItem("leaderBoard"))[0].initials;
    renderBoardScore = JSON.parse(localStorage.getItem("leaderBoard"))[0].score;

    quizResultInitials = renderBoardInitials;
    quizResultScore = renderBoardScore; 
    console.log(renderBoardInitials);
    console.log(renderBoardScore);

    document.querySelector("#leaderboard-user").textContent = "User: " + quizResultInitials;
    document.querySelector("#leaderboard-score").textContent = "Score: " + quizResultScore;
    displayScorePage();
    console.log(leaderBoard);
}
//===================functions will manage data coming out of leaderBoard Object =======================================================





//===================functions for HiScore dropdown =======================================================

//will toggle Hiscore button css propert .show
function dropdownFunction() {
    document.getElementById("dropdown-content-id").classList.toggle("show");
    
}

//will grab Hiscore info and populate it into dropdown


function printToDropDown () {
        var newDropDownItem = document.getElementById("dropdown-content-id")
        .appendChild(document.createElement("a"));

        newDropDownItem.textContent = userNumber + ": User: " + quizResultInitials + " Score: " + quizResultScore;
}

// will create user number for dropdown using an iteration loop
var userNumber = 0;
function findingLeaderBoardValues() {
    userNumber = 0;
    for (i = 0; i < leaderBoard.length; i++ ) {
        userNumber = i + 1;
        console.log (userNumber);
    }
}


function dropdownFunctionStartPage() {
    document.getElementById("start-dropdown-content-id").classList.toggle("show");
}

//===================functions for HiScore dropdown =======================================================

