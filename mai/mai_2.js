jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
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
                survey
                    .setValue("score_mai_reg",
                        survey
                            .getCorrectAnswerCount());
                $("#mai").hide(); // Hides completion message
                jatos.startNextComponent(
                    '{"score_mai_reg":' + survey.data["score_mai_reg"] + '}'
                );
            });
    $("#mai").Survey({ model: survey });
});