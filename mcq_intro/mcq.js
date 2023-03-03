jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#mcq").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#mcq").Survey({ model: survey });
});