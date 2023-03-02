jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onCurrentPageChanging
        .add(
            function () {
                survey.setValue(
                    "rt_raven_" + survey.pages.indexOf(survey.currentPage),
                    survey.currentPage.timeSpent
                );
            });
    survey
        .onComplete
        .add(
            function () {
                var data = survey.data;
                var questions = survey.getAllQuestions();
                for (var i = 0; i < questions.length; i++) {
                    var key = questions[i].getValueName();
                    if (!data[key]) data[key] = null;
                }
                survey.data = data
                survey.setValue(
                    "rt_raven_" + survey.pages.indexOf(survey.currentPage), survey.currentPage.timeSpent);
                survey
                    .setValue("score_raven",
                        survey
                            .getCorrectAnswerCount())
                $("#raven_matrices").hide(); // Hides completion message
                jatos.startNextComponent(survey.data);
            });
    $("#raven_matrices").Survey({ model: survey });
    survey.startTimer();
});

