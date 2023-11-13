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



//function to take local storage quizResult and create a leaderboard with the data
var quizResultReturn = JSON.parse(localStorage.getItem("quizResult"));
var leaderBoardReturn




//this will take both the userScore and storedInitials into an 
// object named quizResult and the object into local storage



function createLeaderBoard() {
    // will verify quizResultReturn from local storage & pass object into function
    if (quizResultReturn !== null) {
    var returnedInitials = quizResultReturn[0].initials; // returned initials from local storage
    var returnedScore = quizResultReturn[0].score; // returned password from local storage

    console.log(quizResultReturn);
    console.log(returnedInitials);
    console.log(returnedScore);
    }

    document.querySelector("#leaderboard-user").textContent = "User: " + returnedInitials; 
    document.querySelector("#leaderboard-score").textContent = "Score: " + returnedScore;
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

  
// need to figure out exact placement of creating/storing local object and retreiving them


// Need to follow build, get, push, set pattern


// Build object

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


//will calculate display user final score in quiz end page
var finalScoreDisplay = document.querySelector("#final-score-display");
function calcFinalScore() {
    finalScore = userScore;
    finalScoreDisplay.textContent = "Final Score: " + finalScore;
    localStorage.setItem("finalScore", finalScore)
}


// button will send initials to local and build quizResult object
submitResultsButton.addEventListener("click", buildNewScore);

function buildNewScore(event) {
    event.preventDefault();
    
    //storedInitials can't be populated until user inputs value
    storedInitials = userInitials.value //value  = initials input from user
    localStorage.setItem("storedInitials", storedInitials)

    var retrievedInitials;
    var retrievedScore;

    var quizResult = [
        {
         initials: retrievedInitials,
         score: retrievedScore,
        }
    ]
    getFinalAndInitials()
}

// function will retrieve final score and user initials from local and set to variables
 function getFinalAndInitials() {
     retrievedInitials = localStorage.getItem("storedInitials");
     retrievedScore = localStorage.getItem("finalScore");
     console.log("Initials from local: " + retrievedInitials);
     console.log("Final score from local: " + retrievedScore);

 }

// push into array


// set to local storage