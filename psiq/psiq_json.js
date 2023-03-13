const json = {
  "title": "Questionnaire d'Imagerie Sensorielle",
  "description": "Plymouth Sensory Imagery Questionnaire",
  "logoPosition": "right",
  "pages": [
    {
      "name": "psiq",
      "elements": [
        {
          "type": "panel",
          "name": "visual_img",
          "elements": [
            {
              "type": "rating",
              "name": "vis_1",
              "title": "D'un feu de camp",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "vis_2",
              "title": "D'un coucher de soleil",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "vis_3",
              "title": "D'un chat grimpant à un arbre",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            }
          ],
          "title": "Imaginez l'apparence..."
        },
        {
          "type": "panel",
          "name": "sound_img",
          "elements": [
            {
              "type": "rating",
              "name": "aud_1",
              "title": "D'un klaxon d'automobile",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "aud_2",
              "title": "D'applaudissements",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "aud_3",
              "title": "D'une sirène d'ambulance",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            }
          ],
          "title": "Imaginez le son..."
        },
        {
          "type": "panel",
          "name": "panel1",
          "elements": [
            {
              "type": "rating",
              "name": "od_1",
              "title": "De l'herbe fraîchement coupée",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "od_2",
              "title": "Du bois en train de brûler",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "od_3",
              "title": "D'une rose",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            }
          ],
          "title": "Imaginez l'odeur..."
        },
        {
          "type": "panel",
          "name": "panel2",
          "elements": [
            {
              "type": "rating",
              "name": "gout_1",
              "title": "Du poivre noir",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "gout_2",
              "title": "D'un citron",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "gout_3",
              "title": "De la moutarde",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            }
          ],
          "title": "Imaginez le goût..."
        },
        {
          "type": "panel",
          "name": "panel3",
          "elements": [
            {
              "type": "rating",
              "name": "tou_1",
              "title": "De la fourrure",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "tou_2",
              "title": "Du sable chaud",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "tou_3",
              "title": "D'une serviette chaude",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            }
          ],
          "title": "Imaginez toucher..."
        },
        {
          "type": "panel",
          "name": "panel4",
          "elements": [
            {
              "type": "rating",
              "name": "sens_1",
              "title": "De la relaxation dans un bain chaud",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "sens_2",
              "title": "D'une marche dans un froid mordant",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "sens_3",
              "title": "D'un saut dans une piscine",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            }
          ],
          "title": "Imaginez la sensation corporelle..."
        },
        {
          "type": "panel",
          "name": "panel5",
          "elements": [
            {
              "type": "rating",
              "name": "feel_1",
              "title": "De l'excitation",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "feel_2",
              "title": "Du soulagement",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            },
            {
              "type": "rating",
              "name": "feel_3",
              "title": "De la peur",
              "hideNumber": true,
              "isRequired": true,
              "rateMax": 10,
              "minRateDescription": "Pas d'image du tout",
              "maxRateDescription": "Aussi clair que la réalité"
            }
          ],
          "title": "Imaginez ressentir..."
        }
      ],
      "description": "Pour chaque item de ce questionnaire, essayez d'imaginer ou ressentir la sensation décrite, et évaluez la clarté de votre expérience sur une échelle de 1 à 10."
    }
  ]
}