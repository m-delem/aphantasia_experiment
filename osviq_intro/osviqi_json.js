const json = {
  "title": "Questionnaire sur l'Imagerie Objet, Spatiale et Verbale",
  pages: [
    {
      "elements": [
        {
          "type": "html",
          "name": "intro_osviq",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"css: row.getRowCss()\">\n<div data-bind=\"css: question.koCss().questionWrapper, style: $data.rootStyle, event: {focusin: question.focusIn }\">\n<div id=\"sq_101\" role=\"textbox\" data-bind=\"css: question.koRootCss(), style: { paddingLeft: question.paddingLeft, paddingRight: question.paddingRight }, attr: { id: question.id, 'data-name': question.name, role: question.ariaRole, 'aria-required': question.ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-labelledby': question.ariaLabelledBy}\" data-name=\"presentation\" aria-required=\"false\" aria-invalid=\"false\">\n<div role=\"presentation\" data-bind=\"visible: !question.isCollapsed, css: question.cssContent\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<h2><span style=\"font-size: 18pt;\">Commen&ccedil;ons donc avec un questionnaire sur votre fa&ccedil;on de penser, qui touchera &agrave; ses aspects spatiaux, imag&eacute;s et verbaux.</span></h2>\n<p style=\"text-align: justify;\"><span style=\"font-size: 14pt;\">Veuillez lire les affirmations qui vous seront pr&eacute;sent&eacute;es et &eacute;valuer chacune d'entre elles sur une &eacute;chelle allant de 'Totalement en d&eacute;saccord' &agrave; 'Absolument d'accord'. Cochez la case centrale si vous n'&ecirc;tes pas s&ucirc;r.e, mais essayez de faire un choix. Vous devez r&eacute;pondre &agrave; toutes les questions du questionnaire.&nbsp;</span></p>\n<div>\n<h4><span style=\"font-size: 14pt;\">Veuillez noter qu'il n'y a pas de bonnes ou de mauvaises r&eacute;ponses aux questions.</span></h4>\n<div><span style=\"font-size: 14pt;\">Soyez le plus honn&ecirc;te possible dans vos r&eacute;ponses, elles n'ont pour but que de refl&eacute;ter le fonctionnement de votre \"monde int&eacute;rieur\".&nbsp;</span></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>"
        }
      ]
    },
  ],
  "showQuestionNumbers": "off",
  "showPrevButton": false,
  "startSurveyText": "Commencer",
  "completeText": "Commencer",
  "widthMode": "static"
}
