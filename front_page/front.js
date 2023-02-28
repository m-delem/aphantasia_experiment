jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#front").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#front").Survey({ model: survey });
});

