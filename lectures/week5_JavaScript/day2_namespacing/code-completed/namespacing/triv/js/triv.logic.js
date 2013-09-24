/*jslint browser:true */
/*global  triv: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
triv.logic = (function () {
    "use strict";
    var questions = _.shuffle(triv.questions);
    return {
        askQuestion: function (question) {
            var answer;
            do {
                answer = Number(triv.ui.askQuestion(question));
            } while (isNaN(answer) || answer > 3 || answer < 1);
            return answer;
        },
        checkAnswer: function (answer, question) {
            if (answer === question.a) {
                triv.ui.showCorrect();
            } else {
                triv.ui.showWrong(question);
            }
            return (answer === question.a);
        },
        getQuestion: function () {
            return questions.pop();
        }
    };
}());