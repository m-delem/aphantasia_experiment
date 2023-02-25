jatos.onLoad(function () { 
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function (result) {
                $("#corsi").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent(result.data);
            });
    $("#corsi").Survey({model: survey});
    jatos.addAbortButton();
});