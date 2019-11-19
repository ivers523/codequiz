console.log("script running");

// declare page elements
const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start-button");
const buttonOneEl = document.getElementById("button1");
const buttonTwoEl = document.getElementById("button2");
const buttonThreeEl = document.getElementById("button3");
const buttonFourEl = document.getElementById("button4");

document.getElementById("question-container").style.display = "none";

function startQuiz () {
    document.getElementById("question-container").style.display = "block"; 
    document.getElementById("start-container").style.display = "none";
    console.log("start button")
    
}


// initialize quiz on the click of the "Start Quiz" button
// Render questions which consists of Question (text) and 4 buttons with responses
// create arrays for questions. each question will have an array, and then there will be a larger "master array" consisting of all of the questions
