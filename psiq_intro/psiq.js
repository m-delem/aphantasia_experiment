jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#psiq").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#psiq").Survey({ model: survey });
});