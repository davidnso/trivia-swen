function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is know as the sunshine vitamin? ", ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'], "D"),
    new Question("Which of the following is not a grain? ", ['Bread', 'Milk', 'Pasta', 'Rice'], "B"),
    new Question("Which of the following is a dairy product? ", ['Milk', 'Celery', 'Chicken', 'juice'], "A"),
    new Question("Which of the following is a vegetable? ", ['Pineapple', 'Orange', 'Grape', 'Cabbage'], "D"),
    new Question("Steak, Chicken, and Pork are examples of what food group? ", ['Meats', 'Whole Grains', 'Dairy', 'Veggies'], "A")
];

// create quiz
var quiz = new Quiz(questions);
populate();