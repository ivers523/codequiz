console.log("script running");

// declare page elements and variables
const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start-button");
const buttonOneEl = document.getElementById("button1");
const buttonTwoEl = document.getElementById("button2");
const buttonThreeEl = document.getElementById("button3");
const buttonFourEl = document.getElementById("button4");
const qTitle = document.getElementById("title");
const input = document

document.getElementById("question-container").style.display = "none";

// initialize quiz on the click of the "Start Quiz" button

function startQuiz() {
    document.getElementById("question-container").style.display = "block";
    document.getElementById("start-container").style.display = "none";

// render the question page
    function renderQuestion () {
        for (i = 0; i < questions.length; i++) {
          qTitle.innerHTML = (questions[i].title);
          buttonOneEl.innerHTML = (questions[i].choices[0]);
          buttonTwoEl.innerHTML = (questions[i].choices[1]);
          buttonThreeEl.innerHTML = (questions[i].choices[2]);
          buttonFourEl.innerHTML = (questions[i].choices[3]);
          const 

          }

          
            

          }

        
    
        
    }
renderQuestion();
}   

    
//randomly pull question title and choices into the html elements (h4, buttons)

