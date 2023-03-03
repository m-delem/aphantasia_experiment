jatos.onLoad(function () {
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function () {
                var data = survey.data;
                var questions = survey.getAllQuestions();
                for (var i = 0; i < questions.length; i++) {
                    var key = questions[i].getValueName();
                    if (!data[key]) data[key] = null;
                }
                survey.data = data
                $("#mcq").hide(); // Hides completion message
                jatos.startNextComponent(survey.data);
            });
    $("#mcq").Survey({ model: survey });
});