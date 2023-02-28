jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#simi").hide(); // Hides completion message
                jatos.startNextComponent(survey.data);
            });
    $("#simi").Survey({ model: survey });
});