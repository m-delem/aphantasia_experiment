jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function (result) {
                var data = survey.data;
                var questions = survey.getAllQuestions();
                for (var i = 0; i < questions.length; i++) {
                    var key = questions[i].getValueName();
                    if (!data[key]) data[key] = null;
                }
                survey.data = data
                $("#demo").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent(result.data);
            });
    $("#demo").Survey({ model: survey });
    // jatos.addAbortButton();
});

