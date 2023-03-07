jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#part_3").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#part_3").Survey({ model: survey });
});

