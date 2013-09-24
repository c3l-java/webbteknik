/*jslint browser:true */
/*global triv: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
triv.ui = {};
triv.ui.askQuestion = function (question) {
    "use strict";
    return prompt(question.q);
};
triv.ui.showWrong = function (question) {
    "use strict";
    alert("WRONG - the correct answer was " + question.a);
};
triv.ui.showCorrect = function () {
    "use strict";
    alert("Correct");
};
triv.ui.showResult = function (points) {
    "use strict";
    alert("You scored " + points + " points");
};