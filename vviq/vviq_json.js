const json = {
  "title": "Questionnaire de Vivacité de l'Imagerie Visuelle",
  pages: [
    {
      "description": "Pour chaque item de ce questionnaire, essayez de former une image visuelle, et considérez attentivement votre expérience. Veuillez noter qu'il n'y a pas de bonnes ou de mauvaises réponses aux questions, et qu'il n'est pas nécessairement souhaitable de faire l'expérience de l'imagerie ou, si vous le faites, d'avoir une imagerie plus vive.",
      "elements": [
        {
          "type": "matrix",
          "title": "Pensez à un parent ou à un ami que vous voyez souvent<br> (mais qui n'est pas avec vous en ce moment), et considérez attentivement l'image qui vous vient à l'esprit. Évaluez ensuite les éléments suivants :",
          //"titleLocation": "hidden",
          "name": "vviq",
          "columns": [{
            "value": 1,
            "text": "Pas d'image du tout (vous savez seulement que vous pensez à l'objet)"
          }, {
            "value": 2,
            "text": "Vague, et faible"
          }, {
            "value": 3,
            "text": "Modérément clair et vif"
          }, {
            "value": 4,
            "text": "Clair et plutôt vif"
          }, {
            "value": 5,
            "text": "Parfaitement clair et aussi vif que la vision normale"
          }],
          "rows": [
            {
              "value": "vviq_1",
              "text": "Le contour exact du visage, de la tête, des épaules et du corps."
            },
            {
              "value": "vviq_2",
              "text": "Des poses caractéristiques de la tête, attitudes du corps, etc."
            },
            {
              "value": "vviq_3",
              "text": "Le port précis, la longueur du pas, etc., dans la marche."
            },
            {
              "value": "vviq_4",
              "text": "Les différentes couleurs portées par certains vêtements familiers."
            },
          ],
          "alternateRows": true,
          //"isAllRowRequired": true,
        },
      ],
    },
    {
      "description": "Pour chaque item de ce questionnaire, essayez de former une image visuelle, et considérez attentivement votre expérience. Veuillez noter qu'il n'y a pas de bonnes ou de mauvaises réponses aux questions, et qu'il n'est pas nécessairement souhaitable de faire l'expérience de l'imagerie ou, si vous le faites, d'avoir une imagerie plus vive.",
      "elements": [
        {
          "type": "matrix",
          "title": "Visualisez un soleil levant. Examinez attentivement l'image qui se présente à votre esprit. Puis évaluez les éléments suivants :",
          "name": "vviq",
          "columns": [{
            "value": 1,
            "text": "Pas d'image du tout (vous savez seulement que vous pensez à l'objet)"
          }, {
            "value": 2,
            "text": "Vague, et faible"
          }, {
            "value": 3,
            "text": "Modérément clair et vif"
          }, {
            "value": 4,
            "text": "Clair et plutôt vif"
          }, {
            "value": 5,
            "text": "Parfaitement clair et aussi vif que la vision normale"
          }],
          "rows": [
            {
              "value": "vviq_5",
              "text": "Le soleil se lève au-dessus de l'horizon dans un ciel brumeux."
            },
            {
              "value": "vviq_6",
              "text": "Le ciel se dégage et entoure le soleil de bleu."
            },
            {
              "value": "vviq_7",
              "text": "Des nuages. Un orage éclate, avec des éclairs."
            },
            {
              "value": "vviq_8",
              "text": "Un arc-en-ciel apparaît."
            },
          ],
          "alternateRows": true,
          //"isAllRowRequired": true,
        },
      ],
    },
    {
      "description": "Pour chaque item de ce questionnaire, essayez de former une image visuelle, et considérez attentivement votre expérience. Veuillez noter qu'il n'y a pas de bonnes ou de mauvaises réponses aux questions, et qu'il n'est pas nécessairement souhaitable de faire l'expérience de l'imagerie ou, si vous le faites, d'avoir une imagerie plus vive.",
      "elements": [
        {
          "type": "matrix",
          "title": "Pensez à la devanture d'un magasin où vous allez souvent. Considérez l'image qui vous vient à l'esprit. Puis notez les éléments suivants :",
          "name": "vviq",
          "columns": [{
            "value": 1,
            "text": "Pas d'image du tout (vous savez seulement que vous pensez à l'objet)"
          }, {
            "value": 2,
            "text": "Vague, et faible"
          }, {
            "value": 3,
            "text": "Modérément clair et vif"
          }, {
            "value": 4,
            "text": "Clair et plutôt vif"
          }, {
            "value": 5,
            "text": "Parfaitement clair et aussi vif que la vision normale"
          }],
          "rows": [
            {
              "value": "vviq_9",
              "text": "L'aspect général du magasin vu de l'autre côté de la route."
            },
            {
              "value": "vviq_10",
              "text": "Une vitrine comprenant les couleurs, les formes et les détails des différents articles en vente."
            },
            {
              "value": "vviq_11",
              "text": "Vous êtes près de l'entrée. La couleur, la forme et les détails de la porte."
            },
            {
              "value": "vviq_12",
              "text": "Vous entrez dans le magasin et allez au comptoir. Le guichetier vous sert. L'argent change de mains."
            },
          ],
          "alternateRows": true,
          //"isAllRowRequired": true,
        },
      ],
    },
    {
      "description": "Pour chaque item de ce questionnaire, essayez de former une image visuelle, et considérez attentivement votre expérience. Veuillez noter qu'il n'y a pas de bonnes ou de mauvaises réponses aux questions, et qu'il n'est pas nécessairement souhaitable de faire l'expérience de l'imagerie ou, si vous le faites, d'avoir une imagerie plus vive.",
      "elements": [
        {
          "type": "matrix",
          "title": "Enfin, pensez à une scène de campagne qui implique des arbres, des montagnes et un lac. Considérez l'image qui vous vient à l'esprit. Puis notez les éléments suivants :",
          "name": "vviq",
          "columns": [{
            "value": 1,
            "text": "Pas d'image du tout (vous savez seulement que vous pensez à l'objet)"
          }, {
            "value": 2,
            "text": "Vague, et faible"
          }, {
            "value": 3,
            "text": "Modérément clair et vif"
          }, {
            "value": 4,
            "text": "Clair et plutôt vif"
          }, {
            "value": 5,
            "text": "Parfaitement clair et aussi vif que la vision normale"
          }],
          "rows": [
            {
              "value": "vviq_13",
              "text": "Les contours du paysage."
            },
            {
              "value": "vviq_14",
              "text": "La couleur et la forme des arbres."
            },
            {
              "value": "vviq_15",
              "text": "La couleur et la forme du lac."
            },
            {
              "value": "vviq_16",
              "text": "Un vent fort souffle sur les arbres et sur le lac, provoquant des vagues."
            },
          ],
          "alternateRows": true,
          //"isAllRowRequired": true,
        },
      ],
    },
  ],
  "showQuestionNumbers": "off",
  "showPrevButton": false,
  "completeText": "Continuer",
  //"widthMode": "static"
}
