const json = {
  "locale": "fr",
  "title": "Questionnaire de métacognition",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page2",
      "elements": [
        {
          "type": "html",
          "name": "page_wason",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<h2>Voici une courte t&acirc;che de raisonnement.</h2>\n<p><span style=\"font-size: 14pt;\">Quatre cartes comportant un chiffre sur une face et une couleur sur l'autre sont dispos&eacute;es &agrave; plat sur une table. Une seule face de chaque carte est visible. Les faces visibles sont les suivantes : 9, 8, bleue, et orange.</span></p>\n</div>"
        },
        {
          "type": "image",
          "name": "img_wason",
          "titleLocation": "hidden",
          "imageLink": "wason/wason.png",
          "imageHeight": 300,
          "imageWidth": 900
        },
        {
          "type": "checkbox",
          "name": "wason",
          "title": "Quelle(s) carte(s) devez-vous retourner pour déterminer la véracité de la règle suivante : \"Si une carte a un 9 sur une face, alors son autre face est bleue\" ? Il ne faut pas retourner de carte inutilement, ni oublier d'en retourner une. ",
          "titleLocation": "top",
          "hideNumber": true,
          "correctAnswer": [
            "neuf",
            "orange"
          ],
          "choices": [
            {
              "value": "neuf",
              "text": "La carte 9"
            },
            {
              "value": "huit",
              "text": "La carte 8"
            },
            {
              "value": "blue",
              "text": "La carte bleue"
            },
            {
              "value": "orange",
              "text": "La carte orange"
            },
            {
              "value": "all",
              "text": "Toutes les cartes"
            },
            {
              "value": "none",
              "text": "Aucune des cartes"
            }
          ]
        }
      ]
    }
  ],
  "showPrevButton": false,
  "showTitle": false,
  "pageNextText": {
    "fr": "Suivant"
  },
  "completeText": {
    "default": "Suivant",
    "fr": "Continuer"
  },
  "widthMode": "responsive"
}