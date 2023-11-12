// JavaScript sheet

// Spot for global variables
var submitInitialsButton = document.querySelector("#submit-initials");
var userInitials = document.querySelector("#user-initials");
var storedInitials ="";
var userScore = 7; //will eventually take in user quiz result

//for start,quiz,end, and score pages
var startPage = document.querySelector(".startPage");
var quizPage = document.querySelector(".quizPage");
var endPage = document.querySelector(".endPage");
var scorePage = document.querySelector(".scorePage");

//used to toggle between individual question phases
var questionOne = document.querySelector("#question-one");
var questionTwo = document.querySelector("#question-two");
var questionThree = document.querySelector("#question-three");
var questionFour = document.querySelector("#question-four");

//will be updated based on answer to questions and used for score and timer functions
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

var q1CorrectAnswer = document.querySelector("#q1-correct")
var q2CorrectAnswer = document.querySelector("#q2-correct")
var q3CorrectAnswer = document.querySelector("#q2-correct")
var q4CorrectAnswer = document.querySelector("#q4-wrong") //this is different intentionally


// question answer 1
var q1Event = document.querySelector("#choice-one");
q1Event.addEventListener("click", userAnswer);

function userAnswer(event) {
    event.preventDefault();
    var answer = event.target;
    console.log(answer);

    var answerResult = event.target.id;

    if (answerResult === q1CorrectAnswer.id) { //will change gloabl var question1AnswerStatus 
        console.log("correct");
        question1AnswerStatus = "Correct";
    } else{                                                 
        question1AnswerStatus = "Wrong";
        console.log("wrong");
    }



    displayQTwo();//will pass user to second question
}

// question answer 2
var q2Event = document.querySelector("#choice-two");
q2Event.addEventListener("click", userAnswer2);

function userAnswer2(event) {
    event.preventDefault();
    var answer = event.target.textContent;
    console.log(answer);


    displayQThree();//will pass user to third question
}

// question answer 3
var q3Event = document.querySelector("#choice-three");
q3Event.addEventListener("click", userAnswer3);

function userAnswer3(event) {
    event.preventDefault();
    var answer = event.target.textContent;
    console.log(answer);


    displayQFour();//will pass user to fourth question
}


// question answer 4
var q4Event = document.querySelector("#choice-four");
q4Event.addEventListener("click", userAnswer4);

function userAnswer4(event) {
    event.preventDefault();
    var answer = event.target.textContent;
    console.log(answer);


    displayQuizEnd() //will pass user to end quiz page
}




// this will take in user initials from quiz end page and store it into storedInitials-----------------------------------
function storeUserInitials(event) {
    event.preventDefault();
    storedInitials = userInitials.value
    console.log("User Initials: " + storedInitials);
    sendQuizResult();
    // functionality needed to store into local memory
}
submitInitialsButton.addEventListener("click", storeUserInitials);

//this will take both the userScore and storedInitials create a variable object (eventually as a key pair in local storage)
function sendQuizResult(){
    // need to set these values as an object with key:value pairs 
    quizResult = [
        {
            initials: storedInitials,
            score: userScore,
        }
    ]
    console.log(quizResult);
}

// Need to way to display answer Corrent/Incorrect answers 
// 3) while this action triggers a change to next question, it should also display the selected answers wrong/correct status
// 4) need to set id/classes in html for answers for wrong/correct indentification
// 5) need a way to delay the switch to the next question to user to see the wrong/correct alert
// 6) need as way to display this wrong/correct alert upon clicking


// Incorrect answers take time away from the clock (do this one at the end ^.^)**************
// 1)as noted above, need ID's or classes to identify incorrect/correct answers
// 2)need function that will descrease time when inccorect answer is choosen


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

// function and variables for countdown timer--- cdTimer will send user to end quiz page when timer runs out -----------------------------------
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
