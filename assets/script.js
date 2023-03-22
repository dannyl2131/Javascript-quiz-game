let startButton = document.getElementById("startButton");
let time = document.getElementById("timeLeft");
let score = document.getElementById("score");
let content = document.getElementById("content");
let question = document.getElementById("question");
let text = document.getElementById("text");
let list = document.createElement("ul");
let form = document.getElementById("form");
let finish = document.getElementById("submit");
let initials = document.getElementById("initials");
let scoreList = document.getElementById("scoreList");
let secondsLeft = 30;
let scoreNum = parseInt(score.textContent);
let lis = document.querySelectorAll("li")

startButton.addEventListener("click", function(){
    setTimer()
    printQuestion()
});

let setTimer = function(){
    let timerInterval = setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft;
        if(secondsLeft <= 0 | questions.length == 0){
        time.textContent = 0;
        clearInterval(timerInterval);
        endGame();
    }
    }, 1000)
}

let pickQuestion = function(){
    let index = Math.floor(Math.random() * questions.length);
    return questions.splice([index],1);
}

let printQuestion = function (){
    text.style.display = "none";
    startButton.style.display = "none";
    let pickedQ = pickQuestion();
    let answerList = [pickedQ[0].answer1, pickedQ[0].answer2, pickedQ[0].answer3, pickedQ[0].answer4];
    question.textContent = pickedQ[0].question;
    content.appendChild(list);
    for(let i = 0; i < answerList.length; i++){
        let makeLi = document.createElement("li");
        list.appendChild(makeLi);
        makeLi.textContent = answerList[i];
        makeLi.addEventListener("click", function(){
            if(makeLi.textContent === pickedQ[0].solution){
                scoreNum += 5
                score.textContent = scoreNum;
                list.innerHTML = ""
                printQuestion()
            } else {
                list.innerHTML = ""
                deductTime();
                printQuestion();
            }
        })
        
        } 
    }

let endGame = function(){
    let finalScore = parseInt(score.textContent);
    let scoreText = document.createElement("h2");
    form.style.display = "inline-block";
    finish.addEventListener("click", function(event){
        event.preventDefault()
        saveHighScore()
        console.log("high score saved")
    })
    content.appendChild(scoreText);
    question.textContent = "All done! Good job! Enter your initials to save your high score then refresh to play again :)"
    list.style.display = "none";
    scoreText.textContent = "Your final score is:" + finalScore;
}

let renderHighScores = function(){
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
        console.log(key + ":" + " " + value)
    }
};

scoreList.addEventListener("click", function(){
    renderHighScores();
});

let saveHighScore = function(){
        let highScore = {
          initials: initials.value,
          score: parseInt(score.textContent),
        };
        localStorage.setItem(highScore.initials, JSON.stringify(highScore.score));
}

let deductTime = function(){
    secondsLeft -= 5;
}

let questions = [
    {
        "question": "What is a CSS class selector?",
        "answer1": "#",
        "answer2": ".",
        "answer3": ":",
        "answer4": "None",
        "solution": "."
    },
    {
        "question": "How many list items can you have in a UL in HTML?",
        "answer1": "10",
        "answer2": "50",
        "answer3": "100",
        "answer4": "As many as you want",
        "solution": "As many as you want"

    },
    {
        "question": "What data type uses square brackets in Javascript?",
        "answer1": "Classes",
        "answer2": "Objects",
        "answer3": "Arrays",
        "answer4": "Booleans",
        "solution": "Arrays"

    },
    {
        "question": "What data type uses curly braces to hold data in Javascript?",
        "answer1": "Objects",
        "answer2": "Booleans",
        "answer3": "Numbers",
        "answer4": "Arrays",
        "solution": "Objects"

    },
    {
        "question": "How could you change the background color in CSS?",
        "answer1": "BG = {}",
        "answer2": "bground = {}",
        "answer3": "background-color {}",
        "answer4": "background-color = {}",
        "solution": "background-color {}"

    },
    {
        "question": "What is the DOM?",
        "answer1": "Document object Model",
        "answer2": "Data Of Manipulation",
        "answer3": "Destruction of models",
        "answer4": "Data Of models",
        "solution": "Document object Model"

    },
    {
        "question": "Which of these is not a primitive data type in Javascript?",
        "answer1": "Boolean",
        "answer2": "Number",
        "answer3": "String",
        "answer4": "Function",
        "solution": "Function"

    },
    {
        "question": "In which css selector would you put variables?",
        "answer1": "Body",
        "answer2": "Html",
        "answer3": "Root",
        "answer4": "Div",
        "solution": "Root"

    },
    {
        "question": "Which of these is not an HTML element?",
        "answer1": "Div",
        "answer2": "Span",
        "answer3": "Ul",
        "answer4": "Boolean",
        "solution": "Boolean"
    }
]