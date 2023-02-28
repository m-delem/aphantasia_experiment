jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#vviq").hide(); // Hides completion message
                jatos.startNextComponent(survey.data);
            });
    $("#vviq").Survey({ model: survey });
});