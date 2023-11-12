// JavaScript sheet

// Spot for global variables





// Clicking start button = timer start and presentation of questions**********************
// 1) need to establish a start button variable w/ html start button assigned
// 2) need a way to populate a countdown timer into the placeholder html
// 3) need to assign start button to trigger initiation of timer
// 4) need to assign start button to trigger switch to question part of the quiz


// Toggle system for the various "pages" of this quiz***************************************
// 1) need variables set to each page "node". Start, each question/answer phase, quiz end, hiscores
// 2) need a way to set one node to active so the user can see contents of active node
// 3) need clear trigger response for navigating in/through each node

// Answering a question presents a new question ********************************************
// 1) as noted above, need clear node locations(variables set from HTML id's maybe) for each question "page"
// 2) need a local target functionality to will apply one click action when clicking on any of the answers 
// 3) while this action triggers a change to next question, it should also display the selected answers wrong/correct status
// 4) need to set id/classes in html for answers for wrong/correct indentification
// 5) need a way to delay the switch to the next question to user to see the wrong/correct alert
// 6) need as way to display this wrong/correct alert upon clicking

// Incorrect answers take time away from the clock (do this one at the end ^.^)**************
// 1)as noted above, need ID's or classes to identify incorrect/correct answers
// 2)need function that will descrease time when inccorect answer is choosen
// 3)****need way to initiate timer
// 4)need a way to identify active timer and put it into a variable for manipulation

// Questions finished/Timer run-out = end of quiz********************************************
// 1) final question page click event needs to also transfer user to end quiz "page"
// 2) need a way to recognize the timer hitting 0, and set that event to a variable/if statement
// 3) this timer-zero variable/if statement needs to also bring user to end quiz "page"

// When game is over, user initials and score can be saved (Mod4Act8 might help)
// need a way to set current user-score points to a variable
// need a receive user-inputed initials and store it to a variable
// need a button that, upon clicking, will submit both these variables into local storage
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

// for timer **************
var quizTimer = document.querySelector(".time")
var timeRemaining = 60;
console.log(quizTimer)
console.log(timeRemaining)

function cdTimer() {
    var tInterval = setInterval(function(){
        timeRemaining--;
        quizTimer.textContent = timeRemaining;

        if(timeRemaining === 0) {
            clearInterval(tInterval);
            // function that will take user to end quiz page
        }


    },1000) //this will set in miliseconds the timer interval
}
cdTimer();