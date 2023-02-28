jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#corsi").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#corsi").Survey({ model: survey });
});