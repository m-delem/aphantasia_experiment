jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#osviq").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent(survey.data);
            });
    $("#osviq").Survey({ model: survey });
});