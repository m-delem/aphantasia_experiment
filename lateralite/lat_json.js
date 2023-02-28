const json = {
  "title": "Questionnaire de latéralité",
  "description": "Edinburgh Handedness Inventory",
  "pages": [
    {
      "elements": [
        {
          "type": "html",
          "name": "question1",
          "html": "<p><span style=\"font-size: 14pt;\">Indiquez votre pr&eacute;f&eacute;rence manuelle pour chacune des activit&eacute;s ci-dessous.&nbsp;</span><span style=\"font-size: 14pt;\" data-bind=\"class: className\"><span tabindex=\"-1\" role=\"textbox\" contenteditable=\"true\" spellcheck=\"true\" aria-label=\"content editable\" aria-placeholder=\"Description\" data-bind=\"text: editValue, event: { focus: onFocus, blur: onBlur, input: onInput, keydown: onKeyDown, keyup: onKeyUp, mouseup: onMouseUp, compositionstart: onCompositionStart, compositionend: onCompositionEnd }, click: edit, attr: { 'aria-placeholder': placeholder, 'aria-label': this.placeholder || 'content editable', contenteditable: contentEditable }\">Vous devez r&eacute;pondre &agrave; toutes les questions pour continuer.</span></span></p>"
        },
        {
          "type": "matrix",
          "name": "lateralite",
          "titleLocation": "hidden",
          "hideNumber": true,
          "columns": [
            {
              "value": "gauche",
              "text": "Gauche"
            },
            {
              "value": "ambi",
              "text": "Ambidextre"
            },
            {
              "value": "droite",
              "text": "Droite"
            }
          ],
          "rows": [
            {
              "value": "lat_1",
              "text": "Écrire"
            },
            {
              "value": "lat_2",
              "text": "Dessiner"
            },
            {
              "value": "lat_3",
              "text": "Coudre (main tenant l'aiguille)"
            },
            {
              "value": "lat_4",
              "text": "Tenir une paire de ciseaux"
            },
            {
              "value": "lat_5",
              "text": "Se brosser les dents"
            },
            {
              "value": "lat_6",
              "text": "Tenir un couteau"
            },
            {
              "value": "lat_7",
              "text": "Tenir une cuillère"
            },
            {
              "value": "lat_8",
              "text": "Tenir un balai (main supérieure)"
            },
            {
              "value": "lat_9",
              "text": "Allumer une allumette (main tenant l'allumette)"
            },
            {
              "value": "lat_10",
              "text": "Ouvrir une boîte (main tenant le couvercle)"
            }
          ],
          "alternateRows": true,
          //"isAllRowRequired": true,
        }
      ]
    }
  ],
  "showPrevButton": false,
  "completeText": "Continuer",
  "showQuestionNumbers": "off",
}
