jatos.onLoad(function () { 
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function (result) {
                $("#lat").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent(result.data);
            });

    $("#lat").Survey({model: survey});
    jatos.addAbortButton();
});