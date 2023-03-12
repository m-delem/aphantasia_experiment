const json = {
  "locale": "fr",
  "title": "Questionnaire de métacognition",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "html",
          "name": "question2",
          "html": "<p style=\"text-align: justify;\"><span id=\"page628R_mcid3\" style=\"font-size: 14pt;\"><span dir=\"ltr\" role=\"presentation\">Nous sommes int&eacute;ress&eacute;s par les croyances que les gens ont concernant leurs pens&eacute;es. Vous&nbsp;</span><span dir=\"ltr\" role=\"presentation\">trouverez ci-dessous un certain nombre de croyances ; veuillez lire chacune de ces croyances et&nbsp;</span><span dir=\"ltr\" role=\"presentation\">indiquer dans quelle mesure vous &ecirc;tes</span> <span dir=\"ltr\" role=\"presentation\">en g&eacute;n&eacute;ral d&rsquo;accord, en cochant la r&eacute;ponse appropri&eacute;e.</span></span></p>\n<h4 style=\"text-align: justify;\"><span style=\"font-size: 14pt;\"><span id=\"page628R_mcid4\"><span dir=\"ltr\" role=\"presentation\">Veuillez r&eacute;pondre &agrave; toutes les phrases - encore une fois, il n&rsquo;y a pas de bonnes ou de mauvaises r&eacute;ponses.</span></span>&nbsp;</span></h4>"
        },
        {
          "type": "matrix",
          "name": "mcq",
          "titleLocation": "hidden",
          "hideNumber": true,
          "columns": [
            {
              "value": "1",
              "text": "Pas d'accord"
            },
            {
              "value": "2",
              "text": "Légèrement d'accord"
            },
            {
              "value": "3",
              "text": "Assez d'accord"
            },
            {
              "value": "4",
              "text": "Tout à fait d'accord"
            }
          ],
          "rows": [
            {
              "value": "mcq_pos_1",
              "text": {
                "fr": "Le fait de m’inquiéter m’aide à éviter des problèmes qui pourraient survenir."
              }
            },
            {
              "value": "mcq_dan_1 ",
              "text": {
                "fr": "Le fait de m’inquiéter est dangereux pour moi."
              }
            },
            {
              "value": "mcq_self_1",
              "text": {
                "default": "Le fait de m’inquiéter est dangereux pour moi.1",
                "fr": "Je réfléchis beaucoup sur mes pensées."
              }
            },
            {
              "value": "mcq_dan_2 ",
              "text": {
                "default": "Je réfléchis beaucoup sur mes pensées.1",
                "fr": "Le fait de m’inquiéter pourrait me rendre malade."
              }
            },
            {
              "value": "mcq_self_2 ",
              "text": {
                "default": "Le fait de m’inquiéter pourrait me rendre malade.1",
                "fr": "Je suis conscient.e de la façon dont mon esprit fonctionne quand j’examine un problème en détail."
              }
            },
            {
              "value": "mcq_sup_1 ",
              "text": {
                "default": "Je suis conscient.e de la façon dont mon esprit fonctionne quand j’examine un problème en détail.1",
                "fr": "Si je ne contrôlais pas une pensée inquiétante et puis qu’elle arrivait, je considérerais que c’est de ma faute."
              }
            },
            {
              "value": "mcq_pos_2",
              "text": {
                "default": "Si je ne contrôlais pas une pensée inquiétante et puis qu’elle arrivait, je considérerais que c’est de ma faute.1",
                "fr": "J’ai besoin de me tracasser pour rester organisé.e."
              }
            },
            {
              "value": "mcq_conf_1",
              "text": {
                "default": "J’ai besoin de me tracasser pour rester organisé.e.1",
                "fr": "J’ai peu confiance en ma mémoire pour les mots et pour les noms."
              }
            },
            {
              "value": "mcq_dan_3 ",
              "text": {
                "default": "J’ai peu confiance en ma mémoire pour les mots et pour les noms.1",
                "fr": "Mes inquiétudes persistent, malgré mes tentatives de les arrêter."
              }
            },
            {
              "value": "mcq_pos_3 ",
              "text": {
                "default": "Mes inquiétudes persistent, malgré mes tentatives de les arrêter.1",
                "fr": "L’inquiétude m’aide à mettre de l’ordre dans ma tête."
              }
            },
            {
              "value": "mcq_dan_4",
              "text": {
                "default": "L’inquiétude m’aide à mettre de l’ordre dans ma tête.1",
                "fr": "Je ne peux pas ignorer mes inquiétudes."
              }
            },
            {
              "value": "mcq_self_3",
              "text": {
                "default": "Je ne peux pas ignorer mes inquiétudes.1",
                "fr": "Je surveille mes pensées."
              }
            },
            {
              "value": "mcq_sup_2 ",
              "text": {
                "default": "Je surveille mes pensées.1",
                "fr": "Je devrais garder en permanence le contrôle sur mes pensées"
              }
            },
            {
              "value": "mcq_conf_2 ",
              "text": {
                "default": "Je devrais garder en permanence le contrôle sur mes pensées1",
                "fr": "Ma mémoire peut parfois m’induire en erreur."
              }
            },
            {
              "value": "mcq_dan_5 ",
              "text": {
                "default": "Ma mémoire peut parfois m’induire en erreur.1",
                "fr": "Mon inquiétude pourrait me rendre fou (folle)."
              }
            },
            {
              "value": "mcq_self_4 ",
              "text": {
                "default": "Mon inquiétude pourrait me rendre fou (folle).1",
                "fr": "Je suis en permanence conscient.e de mes pensées. "
              }
            },
            {
              "value": "mcq_conf_3 ",
              "text": {
                "default": "Je suis en permanence conscient.e de mes pensées. 1",
                "fr": "J’ai une mauvaise mémoire. "
              }
            },
            {
              "value": "mcq_self_5",
              "text": {
                "default": "J’ai une mauvaise mémoire. 1",
                "fr": "Je prête beaucoup d’attention à la façon dont mon esprit fonctionne."
              }
            },
            {
              "value": "mcq_pos_4",
              "text": {
                "default": "Je prête beaucoup d’attention à la façon dont mon esprit fonctionne.1",
                "fr": "L’inquiétude m’aide à m’adapter aux choses."
              }
            },
            {
              "value": "mcq_sup_3 ",
              "text": {
                "default": "L’inquiétude m’aide à m’adapter aux choses.1",
                "fr": "Le fait de ne pas pouvoir contrôler mes pensées est un signe de faiblesse."
              }
            },
            {
              "value": "mcq_sup_4 ",
              "text": {
                "default": "Le fait de ne pas pouvoir contrôler mes pensées est un signe de faiblesse.1",
                "fr": "Si je ne contrôlais pas mes pensées, je ne serais pas capable de fonctionner."
              }
            },
            {
              "value": "mcq_dan_6 ",
              "text": {
                "default": "Si je ne contrôlais pas mes pensées, je ne serais pas capable de fonctionner.1",
                "fr": "Quand je commence à me tracasser, je ne peux pas m’arrêter."
              }
            },
            {
              "value": "mcq_sup_5 ",
              "text": {
                "default": "Quand je commence à me tracasser, je ne peux pas m’arrêter.1",
                "fr": "Je serai puni.e pour ne pas avoir contrôlé certaines pensées."
              }
            },
            {
              "value": "mcq_pos_5 ",
              "text": {
                "default": "Je serai puni.e pour ne pas avoir contrôlé certaines pensées.1",
                "fr": "Le fait de m’inquiéter m’aide à résoudre les problèmes."
              }
            },
            {
              "value": "mcq_conf_4",
              "text": {
                "default": "Le fait de m’inquiéter m’aide à résoudre les problèmes.1",
                "fr": "J’ai peu confiance en ma mémoire pour les lieux."
              }
            },
            {
              "value": "mcq_sup_6",
              "text": {
                "default": "J’ai peu confiance en ma mémoire pour les lieux.1",
                "fr": "Ce n’est pas bien d’avoir certaines pensées. "
              }
            },
            {
              "value": "mcq_conf_5 ",
              "text": {
                "default": "Ce n’est pas bien d’avoir certaines pensées. 1",
                "fr": "Je n’ai pas confiance en ma mémoire."
              }
            },
            {
              "value": "mcq_pos_6 ",
              "text": {
                "default": "Je n’ai pas confiance en ma mémoire.1",
                "fr": "Pour bien travailler, j’ai besoin de m’inquiéter."
              }
            },
            {
              "value": "mcq_conf_6 ",
              "text": {
                "default": "Je n’ai pas confiance en ma mémoire.2",
                "fr": "J’ai peu confiance en ma mémoire pour les actions. "
              }
            },
            {
              "value": "mcq_self_6 ",
              "text": {
                "default": "J’ai peu confiance en ma mémoire pour les actions. 1",
                "fr": "J’examine constamment mes pensées."
              }
            }
          ],
          "alternateRows": true,
          //"isAllRowRequired: true"
        }
      ]
    }
  ],
  "showPrevButton": false,
  "pageNextText": {
    "fr": "Suivant"
  },
  "completeText": {
    "default": "Suivant",
    "fr": "Continuer"
  }
}