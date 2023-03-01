jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#digit").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#digit").Survey({ model: survey });
});