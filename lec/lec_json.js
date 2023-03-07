const json = {
  "title": "Compréhension écrite de textes",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "html",
          "name": "page_lec1",
          "html": "<h2 style=\"text-align: center;\"><span style=\"color: rgb(0, 119, 83);\">Article 1</span></h2>\n<h2 style=\"text-align: center;\"><span style=\"font-size: 14pt;\">La grande barri&egrave;re de corail mise en p&eacute;ril par le charbon<br></span></h2>\n<p style=\"text-align: center;\"><span style=\"font-size: 10pt; color: rgb(126, 140, 141);\">LE MONDE&nbsp;|&nbsp;16.07.2012&nbsp; Par&nbsp;Morgane Le Mo&euml;l ((Gladstone) </span></p>"
        },
        {
          "type": "image",
          "name": "art_lec1",
          "imageLink": "lec/art_1.jpg"
        }
      ]
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "checkbox",
          "name": "question_1",
          "title": "Où se situe Gladstone ?",
          "hideNumber": true,
          "choices": [
            {
              "value": "tempere_oceanique",
              "text": "Entre une zone tempérée et une zone océanique"
            },
            {
              "value": "sud_australie",
              "text": "Dans le sud de l'Australie"
            },
            {
              "value": "queensland",
              "text": "Dans le Queensland, en Australie"
            },
            {
              "value": "tempere_tropicale",
              "text": "Entre une zone tempérée et une zone tropicale"
            },
            {
              "value": "pres_australie",
              "text": "Près de l'Australie"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "question_2",
          "title": "Quels symptômes présentaient les poissons malades ?",
          "hideNumber": true,
          "choices": [
            {
              "value": "yeux_rouges",
              "text": "Yeux rouges"
            },
            {
              "value": "ulceres",
              "text": "Ulcères"
            },
            {
              "value": "yeux_enfles",
              "text": "Yeux enflés"
            },
            {
              "value": "taches_ecailles",
              "text": "Tâches sur les écailles"
            },
            {
              "value": "ouies_blanches",
              "text": "Ouïes blanches"
            }
          ]
        },
        {
          "type": "text",
          "name": "question_3",
          "title": "Quelles personnes s'inquiètent pour la grande barrière de corail ?",
          "hideNumber": true
        },
        {
          "type": "text",
          "name": "question_4",
          "title": "Quelles sont les raisons invoquées pour justifier la pollution de l'eau ?",
          "hideNumber": true
        },
        {
          "type": "checkbox",
          "name": "question_5",
          "title": "Quelles professions ont disparu à Gladstone ?",
          "hideNumber": true,
          "choices": [
            {
              "value": "pecheurs",
              "text": "Les pêcheurs"
            },
            {
              "value": "chercheurs",
              "text": "Les chercheurs"
            },
            {
              "value": "mineurs",
              "text": "Les mineurs"
            },
            {
              "value": "agents",
              "text": "Les agents de voyages"
            },
            {
              "value": "hoteliers",
              "text": "Les hôteliers"
            }
          ]
        },
        {
          "type": "text",
          "name": "question_6",
          "title": "Quels professionnels ont de bons revenus à Gladstone ?",
          "hideNumber": true
        },
        {
          "type": "checkbox",
          "name": "question_7",
          "title": "Pourquoi n'y-a-t-il pas de touristes à Gladstone ?",
          "hideNumber": true,
          "choices": [
            {
              "value": "mines",
              "text": "Il y a des mines de charbon"
            },
            {
              "value": "eau_polluee",
              "text": "L'eau est polluée"
            },
            {
              "value": "pas_hotels",
              "text": "Il n'y a pas d'hôtels de luxe"
            },
            {
              "value": "gbc_loin",
              "text": "C'est loin de la grande barrière de corail"
            },
            {
              "value": "pas_touristique",
              "text": "Cette ville n'appartient pas à une région touristique"
            }
          ]
        }
      ],
      "description": "Répondez aux questions suivantes avec précision : certaines peuvent nécessiter plusieurs réponses."
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "html",
          "name": "question1",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"css: row.getRowCss()\">\n<div data-bind=\"css: question.koCss().questionWrapper, style: $data.rootStyle, event: {focusin: question.focusIn }\">\n<div id=\"sq_101\" role=\"textbox\" data-bind=\"css: question.koRootCss(), style: { paddingLeft: question.paddingLeft, paddingRight: question.paddingRight }, attr: { id: question.id, 'data-name': question.name, role: question.ariaRole, 'aria-required': question.ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-labelledby': question.ariaLabelledBy}\" data-name=\"presentation\" aria-required=\"false\" aria-invalid=\"false\">\n<div role=\"presentation\" data-bind=\"visible: !question.isCollapsed, css: question.cssContent\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<h2><span style=\"color: rgb(0, 119, 83); font-size: 18pt;\">Premier texte termin&eacute; !</span></h2>\n<span style=\"font-size: 14pt;\">Cliquez sur le bouton ci-dessous pour passer au deuxi&egrave;me. Prenez une courte pause si vous en ressentez le besoin.</span></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>"
        }
      ]
    },
    {
      "name": "page4",
      "elements": [
        {
          "type": "html",
          "name": "page_lec2",
          "html": "<h2 style=\"text-align: center;\"><span style=\"color: rgb(0, 119, 83);\">Article 2<br></span></h2>\n<h2 style=\"text-align: center;\">La grande barri&egrave;re de corail a perdu la moiti&eacute; de ses coraux depuis 1985<span style=\"font-size: 14pt;\">&nbsp;</span></h2>\n<p style=\"text-align: center;\"><span style=\"font-size: 10pt; color: rgb(126, 140, 141);\">Le Monde.fr avec AFP | 02.10.2012</span></p>"
        },
        {
          "type": "image",
          "name": "art_lec2",
          "imageLink": "lec/art_2.jpg"
        }
      ]
    },
    {
      "name": "page5",
      "elements": [
        {
          "type": "comment",
          "name": "question_8",
          "title": "Par quoi est alimentée la prolifération de l'étoile de mer ?",
          "hideNumber": true
        },
        {
          "type": "checkbox",
          "name": "question_9",
          "title": "Quels efforts doivent être envisagés pour lutter contre la dégradation de la grande barrière de corail ?",
          "hideNumber": true,
          "choices": [
            {
              "value": "protecc_algues",
              "text": "Protection des algues"
            },
            {
              "value": "tempetes",
              "text": "Action sur les tempêtes"
            },
            {
              "value": "protecc_especes_marines",
              "text": "Protection des espèces marines"
            },
            {
              "value": "rechauff_climatique",
              "text": "Contrôle du réchauffement climatique"
            },
            {
              "value": "acanthaster",
              "text": "Lutte contre l'acanthaster"
            }
          ]
        },
        {
          "type": "comment",
          "name": "question_10",
          "title": "Qu'est-ce qui nous montre que les chercheurs sont très inquiets ?",
          "hideNumber": true
        },
        {
          "type": "checkbox",
          "name": "question_11",
          "title": "Qu'est-ce que l'acanthaster ?",
          "hideNumber": true,
          "choices": [
            {
              "value": "predateur_corail",
              "text": "Un prédateur du corail"
            },
            {
              "value": "algue",
              "text": "Une algue"
            },
            {
              "value": "etoile_mer",
              "text": "Une étoile de mer"
            },
            {
              "value": "eendangered_species",
              "text": "Une espèce en danger"
            },
            {
              "value": "plante_epines",
              "text": "Une plante avec des épines"
            }
          ]
        },
        {
          "type": "comment",
          "name": "question_12",
          "title": "Quelles portions du récif corallien ont-été affectées par le blanchiment ?",
          "hideNumber": true
        },
        {
          "type": "comment",
          "name": "question_13",
          "title": "Pourquoi ont-ils compilé 2258 études ?",
          "hideNumber": true
        }
      ],
      "description": "Répondez aux questions suivantes avec précision : certaines peuvent nécessiter plusieurs réponses."
    },
    {
      "name": "page6",
      "elements": [
        {
          "type": "html",
          "name": "question2",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"css: row.getRowCss()\">\n<div data-bind=\"css: question.koCss().questionWrapper, style: $data.rootStyle, event: {focusin: question.focusIn }\">\n<div id=\"sq_101\" role=\"textbox\" data-bind=\"css: question.koRootCss(), style: { paddingLeft: question.paddingLeft, paddingRight: question.paddingRight }, attr: { id: question.id, 'data-name': question.name, role: question.ariaRole, 'aria-required': question.ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-labelledby': question.ariaLabelledBy}\" data-name=\"presentation\" aria-required=\"false\" aria-invalid=\"false\">\n<div role=\"presentation\" data-bind=\"visible: !question.isCollapsed, css: question.cssContent\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<h2><span style=\"color: rgb(0, 119, 83); font-size: 18pt;\">Deuxi&egrave;me texte termin&eacute; !</span></h2>\n<span style=\"font-size: 14pt;\">Cliquez sur le bouton ci-dessous pour passer au dernier texte. Prenez une courte pause si vous en ressentez le besoin.</span></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>"
        }
      ]
    },
    {
      "name": "page7",
      "elements": [
        {
          "type": "html",
          "name": "page_lec3",
          "html": "<h2 style=\"text-align: center;\"><span style=\"color: rgb(0, 119, 83);\">Article 3<br></span></h2>\n<h2 style=\"text-align: center;\">Pourquoi la surp&ecirc;che des requins menace les coraux</h2>\n<p style=\"text-align: center;\"><span style=\"font-size: 10pt; color: rgb(126, 140, 141);\">Le Monde.fr avec AFP | 24.09.2013 par Audrey Garric<br></span></p>"
        },
        {
          "type": "image",
          "name": "art_lec3",
          "imageLink": "lec/art_3.jpg"
        }
      ]
    },
    {
      "name": "page8",
      "elements": [
        {
          "type": "comment",
          "name": "question_14",
          "title": "Pourquoi est-il étrange que les endroits où il y ait moins de requins soient également ceux où il y a le moins de coraux ?",
          "hideNumber": true
        },
        {
          "type": "comment",
          "name": "question_15",
          "title": "En quoi consiste l'effet boule de neige sur la grande barrière de corail ?",
          "hideNumber": true
        },
        {
          "type": "checkbox",
          "name": "question_16",
          "title": "Pourquoi l'Institut Océanographique australien a-t-il choisi de comparer l'état des coraux dans deux atolls inhabités ?",
          "hideNumber": true,
          "choices": [
            {
              "value": "consequence_peche",
              "text": "Pour comparer les conséquences de la pêche des requins"
            },
            {
              "value": "influence_pollution",
              "text": "Pour que l'influence humaine en termes de pollution soit imperceptible"
            },
            {
              "value": "influence_habitants",
              "text": "Pour ne pas être influencés par les habitants"
            },
            {
              "value": "pas_pecheurs",
              "text": "Pour qu'il n'y ait pas de pêcheurs"
            },
            {
              "value": "neutralite",
              "text": "Pour comparer des écosystèmes en toute neutralité"
            }
          ]
        },
        {
          "type": "text",
          "name": "question_17",
          "title": "Quels sont les prédateurs cités dans le texte ?",
          "hideNumber": true
        },
        {
          "type": "text",
          "name": "question_18",
          "title": "Qui mange les algues envahissantes ?",
          "hideNumber": true
        },
        {
          "type": "checkbox",
          "name": "question_19",
          "title": "Où peut-on pêcher les requins en Australie ? ",
          "hideNumber": true,
          "choices": [
            {
              "value": "partout",
              "text": "Partout"
            },
            {
              "value": "reserves_marines",
              "text": "Dans les réserves marines"
            },
            {
              "value": "recifs_scott",
              "text": "Dans les récifs de Scott"
            },
            {
              "value": "n_e_australie",
              "text": "Dans le nord-est de l'Australie"
            },
            {
              "value": "zones_non_protecc",
              "text": "Dans les zones où ils ne sont pas protégés"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "question_20",
          "title": "Pourquoi créer des sanctuaires pour les requins ?",
          "hideNumber": true,
          "choices": [
            {
              "value": "empecher_declin",
              "text": "Pour empêcher le déclin des requins"
            },
            {
              "value": "proteger_vivano",
              "text": "Pour protéger les vivaneaux"
            },
            {
              "value": "preserv_algues",
              "text": "Pour préserver les algues"
            },
            {
              "value": "survie_mangeurs_alg",
              "text": "Pour permettre la survie d'espèces mangeuses d'algues"
            }
          ]
        }
      ],
      "description": "Répondez aux questions suivantes avec précision : certaines peuvent nécessiter plusieurs réponses."
    },
    {
      "name": "page9",
      "elements": [
        {
          "type": "html",
          "name": "question3",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"css: row.getRowCss()\">\n<div data-bind=\"css: question.koCss().questionWrapper, style: $data.rootStyle, event: {focusin: question.focusIn }\">\n<div id=\"sq_101\" role=\"textbox\" data-bind=\"css: question.koRootCss(), style: { paddingLeft: question.paddingLeft, paddingRight: question.paddingRight }, attr: { id: question.id, 'data-name': question.name, role: question.ariaRole, 'aria-required': question.ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-labelledby': question.ariaLabelledBy}\" data-name=\"presentation\" aria-required=\"false\" aria-invalid=\"false\">\n<div role=\"presentation\" data-bind=\"visible: !question.isCollapsed, css: question.cssContent\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<h2><span style=\"color: rgb(0, 119, 83); font-size: 18pt;\">T&acirc;che de compr&eacute;hension termin&eacute;e !</span></h2>\n</div>\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\"><span style=\"font-size: 14pt;\">L'ultime &eacute;tape de cette &eacute;tude sera une t&acirc;che de m&eacute;morisation proche des \"blocs de Corsi\" pass&eacute;s plus t&ocirc;t.&nbsp;Prenez une pause si vous en ressentez le besoin. </span></div>\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">&nbsp;</div>\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\"><span style=\"font-size: 14pt;\">Vous pouver cliquer sur le bouton ci-dessous pour passer &agrave; la&nbsp;derni&egrave;re t&acirc;che !<br></span></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>"
        }
      ]
    }
  ],
  "showPrevButton": false,
  "showQuestionNumbers": "off",
  "pageNextText": "Suivant",
  "completeText": "Continuer"
}
