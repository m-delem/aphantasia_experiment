jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#part_2").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#part_2").Survey({ model: survey });
});

