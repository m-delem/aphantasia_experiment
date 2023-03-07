const json = {
  "title": "Questionnaire de Raisonnement Spatial",
  pages: [
    {
      "elements": [
        {
          "type": "html",
          "name": "intro_sri",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"css: row.getRowCss()\">\n<div data-bind=\"css: question.koCss().questionWrapper, style: $data.rootStyle, event: {focusin: question.focusIn }\">\n<div id=\"sq_101\" role=\"textbox\" data-bind=\"css: question.koRootCss(), style: { paddingLeft: question.paddingLeft, paddingRight: question.paddingRight }, attr: { id: question.id, 'data-name': question.name, role: question.ariaRole, 'aria-required': question.ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-labelledby': question.ariaLabelledBy}\" data-name=\"presentation\" aria-required=\"false\" aria-invalid=\"false\">\n<div role=\"presentation\" data-bind=\"visible: !question.isCollapsed, css: question.cssContent\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<h2>Focalisons nous d&eacute;sormais sur le raisonnement spatial.</h2>\n<p><span style=\"font-size: 14pt;\">Vous allez ici passer un questionnaire qui mobilisera vos capacit&eacute;s de visualisation spatiale : ce questionnaire comporte 30 questions au total, toutes &agrave; choix multiple, avec une seule r&eacute;ponse correcte.</span></p>\n<h2>Vous serez limit&eacute;.e &agrave; 30 secondes pour r&eacute;pondre &agrave; chacune d'entre elles. Essayez de r&eacute;pondre rapidement, tout en restant le plus pr&eacute;cis possible.</h2>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>"
        }
      ]
    },
  ],
  "showQuestionNumbers": "off",
  "showPrevButton": false,
  "completeText": "Commencer",
  "widthMode": "static"
}
