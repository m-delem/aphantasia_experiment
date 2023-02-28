jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#sri").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#sri").Survey({ model: survey });
});