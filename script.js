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
    calcFinalScore();
    
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
    location.reload(true); //will reload start page and clear old settings while clearing user input
    startPage.style.display = null;
    quizPage.style.display = "none";
    endPage.style.display = "none";
    scorePage.style.display = "none";
}

// clear leaderboard button
var clearLeaderButton = document.querySelector("#clear-leaderboard");
clearLeaderButton.addEventListener("click", clearLocal);

function clearLocal() {
    localStorage.clear();
}



// ===================================================================== new format attempt

//for Array leaderBoard that will serve as long-term store of scores in local
var leaderBoard = [];
var quizResult = {};
var boardScore;
var boardInit;                                                           

                                                                          //step 1: Build object array leaderBoard
                                                                            //we will push new score objects into this
                                                                            //every time quiz is attempted 
                                                                        //this will be our hiscores store in local

//function will create a new array based off local returned object and push to leaderBoard
function updateLeaderBoard() {

        quizResult.boardScore = "";
        quizResult.boardInit = "";
                                                                     
         leaderBoard.push(quizResult)                                                               
}



//will calculate display user final score in quiz end page-----send finalSCore to local
var finalScoreDisplay = document.querySelector("#final-score-display");
function calcFinalScore() {
    finalScore = userScore;
    finalScoreDisplay.textContent = "Final Score: " + finalScore;
    localStorage.setItem("finalScore", finalScore)
}


// button will send initials to local and build quizResult object
var submitResultsButton = document.querySelector("#submit-results");
submitResultsButton.addEventListener("click", buildNewScore);
var userInitials = document.querySelector("#user-initials");

//for objects to push into leaderBoard array

var retrievedInitials;
var retrievedScore;

                                                                    //step 2 take in score & initials and send to local
                                                                    //locals: finalScore & storedInitials

function buildNewScore(event) {
    event.preventDefault();
    
    //storedInitials can't be populated until user inputs value
    storedInitials = userInitials.value //value  = initials input from user
    localStorage.setItem("storedInitials", storedInitials)


}

// getFinalAndInitials()
// editQuizResult()
// quizResultToLocal()
// localToLeaderBoard() 





// Build object
var finalScore = 0; 
var storedInitials =""; 
function sendQuizResult(event){

    //will take in and user initials from end quiz page 
    event.preventDefault();
    
    console.log("User Initials: " + storedInitials);


    quizResult = [
        {
            initials: storedInitials,
            score: finalScore,
        }
    ]
    localStorage.setItem("quizResult", JSON.stringify(quizResult));
    createLeaderBoard(); // this will get returns from quizResult in local, make them variables, and populate them into hiscores page
    displayScorePage(); //will pass user to HiScores page
}


// function will retrieve final score and user initials from local and set to variables
 function getFinalAndInitials() {
     retrievedInitials = localStorage.getItem("storedInitials");
     retrievedScore = localStorage.getItem("finalScore");
     console.log("Initials from local: " + retrievedInitials);
     console.log("Final score from local: " + retrievedScore);

 }

// function will push score and initials into quizResult object
 function editQuizResult() {
    quizResult.initials = retrievedInitials;
    quizResult.score = retrievedScore;
    console.log(quizResult);
 }

// will send quizResult object to local storage
function quizResultToLocal() {
    localStorage.setItem("quizResult", JSON.stringify(quizResult));
}


//function to take local storage quizResult and create a leaderboard with the data
var quizResultInitials;
var quizResultScore;

function localToLeaderBoard() {
    quizResultInitials = JSON.parse(localStorage.getItem("quizResult")).initials;
    quizResultScore = JSON.parse(localStorage.getItem("quizResult")).score;
    console.log(quizResultInitials);
    console.log(quizResultScore);

    document.querySelector("#leaderboard-user").textContent = "User: " + quizResultInitials;
    document.querySelector("#leaderboard-score").textContent = "Score: " + quizResultScore;
    displayScorePage();
}


// might need to have functionality with oldquizResult and newQuizResult
// need to take locally stored data, place it into an array of objects
// then have code that pushes a new object into that array
// this new object should be created based off locally stored data that was taken