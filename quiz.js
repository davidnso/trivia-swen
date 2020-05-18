
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    guess(answer) {
        var quiz = new Question();
        const correct = quiz.isCorrectAnswer(answer)
        if (this.questions[this.questionIndex] === correct) {
            this.score ++;
        }
        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}






