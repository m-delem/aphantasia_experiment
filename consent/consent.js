jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                $("#consent").hide(); // Hides completion message
                jatos.startNextComponent(
                    '{"nom":"' + survey.data["nom"] +
                    '_' + survey.data["prenom"] + '"}'
                );
            });
    $("#consent").Survey({ model: survey });
});

