jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#part_1").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#part_1").Survey({ model: survey });
});

