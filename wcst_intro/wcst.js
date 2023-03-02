jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#wcst").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#wcst").Survey({ model: survey });
});