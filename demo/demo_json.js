const json = {
  "locale": "fr",
  "title": {
    "fr": "À propos de vous"
  },
  "description": {
    "fr": "Les questions marquées d'une astérisque doivent être complétées pour continuer."
  },
  "logoPosition": "right",
  "pages": [
    {
      "name": "demographics",
      "elements": [
        {
          "type": "radiogroup",
          "name": "langue",
          "title": {
            "fr": "Quelle est votre langue maternelle ?"
          },
          //"isRequired": true,
          "choices": [
            {
              "value": "fr",
              "text": {
                "fr": "Français"
              }
            },
            {
              "value": "en",
              "text": {
                "fr": "Anglais"
              }
            }
          ],
          "showOtherItem": true,
          "otherPlaceholder": {
            "fr": "Portugais"
          }
        },
        {
          "type": "text",
          "name": "age",
          "title": {
            "fr": "Quel est votre âge (en années) ?"
          },
          //"isRequired": true,
          "inputType": "number",
          "min": 18,
          "max": 100
        },
        {
          "type": "text",
          "name": "metier",
          "title": {
            "fr": "Quel est votre métier ?"
          },
          "placeholder": {
            "fr": "Chercheur"
          }
        },
        {
          "type": "radiogroup",
          "name": "sexe",
          "title": {
            "fr": "Quel est votre sexe/genre ?"
          },
          //"isRequired": true,
          "choices": [
            {
              "value": "f",
              "text": {
                "fr": "Femme"
              }
            },
            {
              "value": "m",
              "text": {
                "fr": "Homme"
              }
            }
          ],
          "showOtherItem": true
        },
        {
          "type": "radiogroup",
          "name": "education",
          "title": {
            "fr": "Quel est votre diplôme le plus élevé ?"
          },
          //"isRequired": true,
          "choices": [
            {
              "value": "ecole",
              "text": {
                "fr": "École primaire"
              }
            },
            {
              "value": "brevet",
              "text": {
                "fr": "Brevet des collèges"
              }
            },
            {
              "value": "bac",
              "text": {
                "fr": "Baccalauréat"
              }
            },
            {
              "value": "cap",
              "text": {
                "default": "Baccalauréat1",
                "fr": "Apprentissage/CAP"
              }
            },
            {
              "value": "licence",
              "text": {
                "fr": "Licence/BTS"
              }
            },
            {
              "value": "master",
              "text": {
                "fr": "Master"
              }
            },
            {
              "value": "doctorat",
              "text": {
                "fr": "Doctorat"
              }
            }
          ],
          "showOtherItem": true,
          "otherPlaceholder": {
            "fr": "Diplôme de..."
          }
        },
        {
          "type": "text",
          "name": "domaine",
          "title": {
            "fr": "Quelle était la discipline ou la filière associée à ce diplôme ?"
          },
          "placeholder": {
            "fr": "Informatique, Biologie, Humanités..."
          }
        },
        {
          "type": "radiogroup",
          "name": "vision",
          "title": {
            "fr": "Évaluez votre vision (corrigée le cas échéant) sur l'échelle suivante"
          },
          //"isRequired": true,
          "choices": [
            {
              "value": "excellente",
              "text": {
                "fr": "Excellente"
              }
            },
            {
              "value": "correcte",
              "text": {
                "fr": "Correcte"
              }
            },
            {
              "value": "moyenne",
              "text": {
                "fr": "Moyenne"
              }
            },
            {
              "value": "faible",
              "text": {
                "default": "Moyenne1",
                "fr": "Faible"
              }
            },
            {
              "value": "tres_faible",
              "text": {
                "default": "Moyenne2",
                "fr": "Très faible"
              }
            }
          ]
        }
      ]
    }
  ],
  "triggers": [
    {
      "type": "complete"
    }
  ],
  "showQuestionNumbers": "off",
  "completeText": {
    "fr": "Continuer"
  },
  "widthMode": "responsive"
}