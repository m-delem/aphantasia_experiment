const json = {
  "title": "Questionnaire de Vivacité de l'Imagerie Visuelle",
  pages: [
    {
      "elements": [
        {
          "type": "html",
          "name": "intro_vviq",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"css: row.getRowCss()\">\n<div data-bind=\"css: question.koCss().questionWrapper, style: $data.rootStyle, event: {focusin: question.focusIn }\">\n<div id=\"sq_101\" role=\"textbox\" aria-invalid=\"false\" aria-required=\"false\" data-name=\"presentation\" data-bind=\"css: question.koRootCss(), style: { paddingLeft: question.paddingLeft, paddingRight: question.paddingRight }, attr: { id: question.id, 'data-name': question.name, role: question.ariaRole, 'aria-required': question.ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-labelledby': question.ariaLabelledBy}\">\n<div role=\"presentation\" data-bind=\"visible: !question.isCollapsed, css: question.cssContent\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<h2><span style=\"font-size: 18pt;\">Pour commencer, vous allez remplir un questionnaire ayant pour but d'&eacute;valuer la vivacit&eacute; de vos images mentales.</span></h2>\n<p><span style=\"font-size: 14pt;\">Pour chaque item de ce questionnaire, essayez de former une image visuelle, et consid&eacute;rez attentivement votre exp&eacute;rience. Il vous sera ensuite demand&eacute; d'&eacute;valuer la clart&eacute; et la vivacit&eacute; de celle-ci sur une &eacute;chelle &agrave; cinq niveaux, allant de \"Pas d'image du tout (vous savez seulement que vous pensez &agrave; l'objet)\" &agrave; \"Parfaitement clair et aussi vif que la vision normale\".</span></p>\n<div>\n<h4><span style=\"font-size: 14pt;\">Veuillez noter qu'il n'y a pas de bonnes ou de mauvaises r&eacute;ponses aux questions,&nbsp;</span></h4>\n<div><span style=\"font-size: 14pt;\">et qu'il n'est pas n&eacute;cessairement souhaitable de faire l'exp&eacute;rience de l'imagerie ou, si vous le faites, d'avoir une imagerie plus vive.</span></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>"
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
