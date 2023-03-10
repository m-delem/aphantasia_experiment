jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#mcq").hide(); // Hides completion message
                jatos.startNextComponent(survey.data);
            });
    $("#mcq").Survey({ model: survey });
});