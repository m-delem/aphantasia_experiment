jatos.onLoad(function () { 
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function (result) {
                $("#front").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent(result.data);
            });
    $("#front").Survey({model: survey});
    jatos.addAbortButton();
});

