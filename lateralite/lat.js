jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#lat").hide(); // Hides completion message
                jatos.startNextComponent(survey.data);
            });
    $("#lat").Survey({ model: survey });
});