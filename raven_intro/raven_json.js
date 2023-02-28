const json = {
  "title": "Matrices de Raven",
  pages: [
    {
      "elements": [
        {
          "type": "html",
          "name": "intro_raven",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<h2>Vous allez d&eacute;sormais passer une t&acirc;che de raisonnement, dite des \"matrices de Raven\".</h2>\n<p>Des figures vous seront pr&eacute;sent&eacute;es, dont on a enlev&eacute; un morceau en bas &agrave; droite. Votre objectif est de compl&eacute;ter le dessin en choisissant parmi 6 ou 8 choix de figures pr&eacute;sent&eacute;s en dessous. Tous les choix ont des caract&eacute;ristiques communes &agrave; la figure principale, mais un seul est le bon.</p>\n<p>Voici un exemple ci-dessous :&nbsp;</p>\n</div>"
        },
        {
          "type": "image",
          "name": "exemple",
          "imageLink": "./raven_intro/exemple.jpg",
          "imageWidth": "600px",
          "imageHeight": "600px"
        },
        {
          "type": "html",
          "name": "intro_raven2",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<p>Dans cette matrice, deux lignes descendent verticalement vers le morceau manquant, tandis que deux lignes le rejoignent horizontalement. La r&eacute;ponse doit donc pr&eacute;senter un croisement de 2x2 lignes : le morceau manquant est le 2.</p>\n<h3>18 probl&egrave;mes vous seront pr&eacute;sent&eacute;s, et vous serez limit&eacute;.e &agrave; 30 secondes pour r&eacute;pondre &agrave; chacun d'entre eux.</h3>\n<div>\n<div>\n<div>\n<p>Le premier probl&egrave;me d&eacute;butera lorsque vous appuierez sur \"Commencer\".</p>\n</div>\n</div>\n</div>\n</div>"
        },
      ]
    },
  ],
  "showQuestionNumbers": "off",
  "showPrevButton": false,
  "completeText": "Commencer",
  "widthMode": "static"
}
