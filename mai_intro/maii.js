jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#maii").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#maii").Survey({ model: survey });
});