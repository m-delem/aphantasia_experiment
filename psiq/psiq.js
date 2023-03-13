jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#psiq").hide(); // Hides completion message
                jatos.startNextComponent(survey.data);
            });
    $("#psiq").Survey({ model: survey });
});