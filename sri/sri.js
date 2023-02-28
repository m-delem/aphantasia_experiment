jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onCurrentPageChanging
        .add(
            function () {
                survey.setValue(
                    "rt_sri_" + survey.pages.indexOf(survey.currentPage),
                    survey.currentPage.timeSpent
                );
            });
    survey
        .onComplete
        .add(
            function () {
                survey.setValue(
                    "rt_sri_" + survey.pages.indexOf(survey.currentPage), survey.currentPage.timeSpent);
                survey
                    .setValue("score_sri",
                        survey
                            .getCorrectAnswerCount());
                $("#sri").hide(); // Hides completion message
                jatos.startNextComponent(survey.data);
            });
    $("#sri").Survey({ model: survey });
    survey.startTimer();
});