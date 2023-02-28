jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#osviqi").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#osviqi").Survey({ model: survey });
});