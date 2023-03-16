let startButton = document.getElementById("startButton");
let time = document.getElementById("timeLeft");
let firstContent = document.getElementById("content")
let question = document.getElementById("question")
let text = document.getElementById("text");
let list = document.createElement("ul");
let makeLi = document.createElement("li");

let pickQuestion = function(){
    let num = Math.floor(Math.random() * questions.length);
    return(questions[num]);
}

let printQuestion = function (){
    let pickedQ = pickQuestion();
    let keys = Object.keys(pickedQ);
    let q = Object.entries(pickedQ)
    question.textContent = pickedQ.question;
    text.style.display = "none";
    startButton.style.display = "none";
    firstContent.appendChild(list);
    for(let i = 1; i <= 4; i++){
        list.appendChild(makeLi);
        makeLi.textContent = q[i][1];
    }
}

let setTimer = function(){
    time.textContent = "30";
    let secondsLeft = 30;
    let timerInterval = setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft;
        if(secondsLeft === 0){
        clearInterval(timerInterval);
    }
    }, 1000)
}

startButton.addEventListener("click", function(){
    setTimer()
    pickQuestion()
    printQuestion()
});

let questions = [
    {
        "question": "what are you talking about?",
        "answer1": "sample",
        "answer2": "sample",
        "answer3": "sample",
        "answer4": "sample",
    },
    {
        "question": "what are you talking about?",
        "answer1": "sample",
        "answer2": "sample",
        "answer3": "sample",
        "answer4": "sample",
    },
    {
        "question": "what are you talking about?",
        "answer1": "sample",
        "answer2": "sample",
        "answer3": "sample",
        "answer4": "sample",
    },
    {
        "question": "what are you talking about?",
        "answer1": "sample",
        "answer2": "sample",
        "answer3": "sample",
        "answer4": "sample",
    },
    {
        "question": "what are you talking about?",
        "answer1": "sample",
        "answer2": "sample",
        "answer3": "sample",
        "answer4": "sample",
    },
    {
        "question": "what are you talking about?",
        "answer1": "sample",
        "answer2": "sample",
        "answer3": "sample",
        "answer4": "sample",
    },
    {
        "question": "what are you talking about?",
        "answer1": "sample",
        "answer2": "sample",
        "answer3": "sample",
        "answer4": "sample",
    },
    {
        "question": "what are you talking about?",
        "answer1": "sample",
        "answer2": "sample",
        "answer3": "sample",
        "answer4": "sample",
    },
    {
        "question": "what are you talking about?",
        "answer1": "sample",
        "answer2": "sample",
        "answer3": "sample",
        "answer4": "sample",
    }
]