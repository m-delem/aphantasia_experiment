jatos.onLoad(function () { 
    const survey = new Survey.Model(json);
    survey.locale = "fr";
    survey
        .onComplete
        .add(
            function (result) {
                $("#vviqi").hide(); // Hides the 'Thank you for completing ...' message
                jatos.startNextComponent(result.data);
            });
    // Instantiate Showdown
    const converter = new showdown.Converter();
    survey.onTextMarkdown.add(function (survey, options) {
    // Convert Markdown to HTML
    let str = converter.makeHtml(options.text);
    // Remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    // Set HTML markup to render
    options.html = str;
    });
    $("#vviqi").Survey({model: survey});
    jatos.addAbortButton();
});