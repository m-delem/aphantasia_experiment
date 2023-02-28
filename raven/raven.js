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

