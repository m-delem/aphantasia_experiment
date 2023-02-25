jatos.onLoad(function () { 
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function (result) {
                $("#sri").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent(result.data);
            });
    $("#sri").Survey({model: survey});
    jatos.addAbortButton();
});