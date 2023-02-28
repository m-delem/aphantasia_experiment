jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                survey
                    .setValue("score_mai_know",
                        survey
                            .getCorrectAnswerCount());
                $("#mai").hide(); // Hides 'Thank you for ...' message
                jatos.startNextComponent(
                    '{"score_mai_know":' + survey.data["score_mai_know"] + '}'
                );
            });
    $("#mai").Survey({ model: survey });
});