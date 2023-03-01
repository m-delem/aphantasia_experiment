jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#lec").hide(); // Hides completion message
                jatos.startNextComponent(survey.data);
            });
    $("#lec").Survey({ model: survey });
});