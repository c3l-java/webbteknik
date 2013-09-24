/*jslint browser:true */
/*global triv: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
triv.play = function () {
    "use strict";
    var i, answer, currentQuestion,
        points = 0;
    for (i = 0; i < 3; i = i + 1) {
        currentQuestion = triv.logic.getQuestion();
        answer = triv.logic.askQuestion(currentQuestion);
        if (triv.logic.checkAnswer(answer, currentQuestion)) {
            points = points + 1;
        }
    }
    triv.ui.showResult(points);
};