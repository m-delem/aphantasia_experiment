jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function (result) {
                $("#demo").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent(result.data);
            });
    $("#demo").Survey({ model: survey });
    // jatos.addAbortButton();
});

