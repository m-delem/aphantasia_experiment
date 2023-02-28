jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#lec").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#lec").Survey({ model: survey });
});