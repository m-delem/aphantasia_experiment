jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#simi").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent();
            });
    $("#simi").Survey({ model: survey });
});