jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#raven").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#raven").Survey({ model: survey });
});