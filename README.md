# EMC Lab. Aphantasia Study : Experiment Code

All the code used for the 2023 EMC Lab. internet-based questionnaires and experiment about visual imagery and aphantasia.

Tasks have been programmed entirely using HTML, JavaScript and CSS, mainly using two libraries : [SurveyJS](https://surveyjs.io/), for the forms and questionnaires, and [JSPsych](https://www.jspsych.org/7.3/) for the cognitive tasks (Spatial Span aka Corsi Blocs, and Digit Span). The WCST is also programmed in the aforementioned languages, but was built with the Integrated Development Environment [OpenSesame](https://osdoc.cogsci.nl/), specifically designed to facilitate psychology experiment creation. The JSPsych experiments were based on delightfully well-organised JS templates from [The Experiement Factory](https://expfactory.github.io/).

These files are the front-end of the study, which was supported by a [JATOS](https://www.jatos.org/) server on the back-end, to which results were sent in a JSON text string file. We treated and analysed these afterwards using [R](https://www.r-project.org/) Code, which you can find [here](https://github.com/m-delem/aphantasia_project).
