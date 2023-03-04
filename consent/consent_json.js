const json = {
  "locale": "fr",
  "title": {
    "fr": "Consentement éclairé de participation à l'étude"
  },
  "logo": "consent/logo.png",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "radiogroup",
          "name": "consentement",
          "titleLocation": "hidden",
          "isRequired": true,
          "choices": [
            {
              "value": "oui",
              "text": {
                "fr": "Je confirme avoir 18 ans ou plus et ne recevoir aucun traitement neurologique ou psychiatrique."
              }
            }
          ]
        },
        {
          "type": "html",
          "name": "presentation",
          "html": "<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"css: row.getRowCss()\">\n<div data-bind=\"css: question.koCss().questionWrapper, style: $data.rootStyle, event: {focusin: question.focusIn }\">\n<div id=\"sq_101\" role=\"textbox\" aria-invalid=\"false\" aria-required=\"false\" data-name=\"presentation\" data-bind=\"css: question.koRootCss(), style: { paddingLeft: question.paddingLeft, paddingRight: question.paddingRight }, attr: { id: question.id, 'data-name': question.name, role: question.ariaRole, 'aria-required': question.ariaRequired, 'aria-invalid': question.ariaInvalid, 'aria-labelledby': question.ariaLabelledBy}\">\n<div role=\"presentation\" data-bind=\"visible: !question.isCollapsed, css: question.cssContent\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<div data-bind=\"html: question.locHtml.koRenderedHtml, css: question.koCss().root\">\n<h2>Pr&eacute;sentation du projet :</h2>\n<p>Chacun de nous a un \"monde int&eacute;rieur\" tr&egrave;s diff&eacute;rent. Cette recherche tente de saisir certains aspects de nos diff&eacute;rences individuelles dans notre manipulation des images mentales visuelles ou spatiales, des pens&eacute;es \"verbales\", et dans nos m&eacute;thodes de raisonnement. Nous vous proposons ici un ensemble de questionnaires et de t&acirc;ches visant &agrave; comprendre comment chacun vit son \"monde int&eacute;rieur\", ainsi que les particularit&eacute;s cognitives li&eacute;es &agrave; nos diff&eacute;rences dans cette vie int&eacute;rieure.</p>\n<p>&nbsp;</p>\n<h4>&nbsp;&Agrave; quoi s'attendre :</h4>\n<blockquote>\n<p>- Un questionnaire d'informations g&eacute;n&eacute;rales dans lesquels vous saisirez des renseignements personnels ainsi qu'un questionnaire de lat&eacute;ralit&eacute;. Ces r&eacute;ponses ne seront utilis&eacute;es qu'&agrave; des fins d'analyse statistique et seront enti&egrave;rement anonymis&eacute;es.&nbsp;<em>Dur&eacute;e estim&eacute;e : 2 minutes</em></p>\n</blockquote>\n<p>L'exp&eacute;rience sera ensuite divis&eacute;e en parties th&eacute;matiques :</p>\n<blockquote>\n<p>- Dans la Partie I, vous &eacute;valuerez l'intensit&eacute; de vos images mentales, puis passerez plusieurs t&acirc;ches de raisonnement. <em>Dur&eacute;e estim&eacute;e : 15 minutes</em></p>\n<p>- Dans la Partie II, vous &eacute;valuerez votre fonctionnement cognitif imag&eacute;, spatial et verbal, puis passerez plusieurs t&acirc;ches de raisonnement spatial. <em>Dur&eacute;e estim&eacute;e : 25 minutes</em></p>\n<p><em>-&nbsp;</em>Dans la Partie III, vous &eacute;valuerez ce que vous pensez de votre fonctionnement cognitif, puis passerez trois t&acirc;ches de lecture, de m&eacute;moire et de raisonnement verbal. <em>Dur&eacute;e estim&eacute;e : 30 minutes.</em> Cette partie est la plus longue, mais comme dit pr&eacute;c&eacute;demment vous pourrez souvent prendre autant de pauses que n&eacute;cessaire pendant les &eacute;crans interm&eacute;diaires si vous le souhaitez.</p>\n</blockquote>\n<p>L'exp&eacute;rience a donc une dur&eacute;e estim&eacute;e &agrave; un peu plus d'une heure.</p>\n<p>&nbsp;</p>\n<h4>Votre droit de vous retirer de cette &eacute;tude &agrave; tout moment :</h4>\n<p>Votre participation &agrave; cette &eacute;tude est enti&egrave;rement volontaire. Vous pouvez vous arr&ecirc;ter ou vous retirer &agrave; tout moment. Vous pouvez demander la suppression de vos donn&eacute;es &agrave; tout moment en nous envoyant un mail &agrave; l'adresse <a href=\"mailto:experience.imagerie@gmail.com\">experience.imagerie@gmail.com</a>. Votre d&eacute;cision d'arr&ecirc;ter ou de vous retirer de cette &eacute;tude n'aura aucune incidence sur vos relations actuelles ou futures avec l'Universit&eacute; Lumi&egrave;re Lyon 2 ou l'EMC.</p>\n<p>&nbsp;</p>\n<h4>Votre droit &agrave; la confidentialit&eacute; et au respect de votre vie priv&eacute;e :</h4>\n<p>Toutes les donn&eacute;es recueillies au cours de cette &eacute;tude seront enti&egrave;rement confidentielles. Toutes les donn&eacute;es seront anonymis&eacute;es et vous ne serez identifi&eacute;.e que par un num&eacute;ro attribu&eacute; au hasard. Aucune personne impliqu&eacute;e dans cette &eacute;tude n'a le droit de divulguer des renseignements qui pourraient &ecirc;tre utilis&eacute;s pour vous identifier.&nbsp;</p>\n<p>Un code al&eacute;atoire unique et individuel vous sera attribu&eacute;. Toutes les donn&eacute;es seront conserv&eacute;es sur un serveur s&eacute;curis&eacute;, avec acc&egrave;s r&eacute;serv&eacute; aux membres du projet.&nbsp;</p>\n<p>&nbsp;</p>\n<h4>B&eacute;n&eacute;fices</h4>\n<p>L'&eacute;tude ne pr&eacute;sente pas pour vous de b&eacute;n&eacute;fice personnel. Les passations se font de fa&ccedil;on individuelle et ne donnent lieu &agrave; aucune &eacute;valuation individuelle directe des r&eacute;ponses des participants. &Agrave; terme, cette &eacute;tude permettra d'am&eacute;liorer notre compr&eacute;hension des vari&eacute;t&eacute;s individuelles dans les&nbsp; repr&eacute;sentations mentales.</p>\n<p>&nbsp;</p>\n<h4>Risques</h4>\n<p>&Agrave; notre connaissance, cette &eacute;tude ne comporte aucun risque ou danger pour vous ou votre vie quotidienne. Si vous &eacute;prouvez des difficult&eacute;s li&eacute;es &agrave; votre participation &agrave; cette &eacute;tude, vous pouvez vous retirer &agrave; tout moment. Nous vous invitons &agrave; communiquer &agrave; notre &eacute;quipe, &agrave; l'adresse <a href=\"mailto:experience.imagerie@gmail.com\">experience.imagerie@gmail.com</a>, toutes vos pr&eacute;occupations concernant votre participation &agrave; cette &eacute;tude. Toute communication restera strictement confidentielle.</p>\n<p>&nbsp;</p>\n<h4>Publication et diffusion</h4>\n<p>Les donn&eacute;es anonymis&eacute;es r&eacute;sultant de cette &eacute;tude pourront &ecirc;tre utilis&eacute;es dans les recherches futures et pourront &ecirc;tre partag&eacute;es avec d'autres chercheurs &agrave; des&nbsp; fins scientifiques. Les r&eacute;sultats de cette &eacute;tude pourront &ecirc;tre publi&eacute;s en ligne sur les sites associ&eacute;s au laboratoire et dans des revues scientifiques, ou lors de congr&egrave;s scientifiques.</p>\n<p>&nbsp;</p>\n<h4>Votre droit de poser des questions &agrave; tout moment :</h4>\n<p>Vous pouvez poser des questions relatives &agrave; cette recherche &agrave; tout moment en utilisant l'adresse mail <a href=\"mailto:experience.imagerie@gmail.com\">experience.imagerie@gmail.com</a>.</p>\n<p>&nbsp;</p>\n<h2>Formulaire officiel de consentement de participation &agrave; une exp&eacute;rience - EMC 2022/2023</h2>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>"
        },
        {
          "type": "html",
          "name": "nom_etude",
          "html": "<h3>&Eacute;tude :&nbsp;</h3>\n<p>&Eacute;tude des caract&eacute;ristiques cognitives de l'aphantasie</p>\n<h3>Investigateur(s) EMC :</h3>\n<p>Delem Ma&euml;l, Turkben Sema, Plancher Ga&euml;n, Cavalli Eddy</p>\n<p>&nbsp;</p>\n<h2>Je, soussign&eacute; :</h2>"
        },
        {
          "type": "text",
          "name": "nom",
          "title": "Nom :",
          "hideNumber": true,
          "isRequired": true,
          "placeholder": "Votre nom"
        },
        {
          "type": "text",
          "name": "prenom",
          "startWithNewLine": false,
          "title": "Prénom",
          "hideNumber": true,
          "isRequired": true,
          "placeholder": "Votre prénom"
        },
        {
          "type": "html",
          "name": "consentement_emc",
          "html": "<h2 style=\"text-align: justify;\">D&eacute;clare :&nbsp;</h2>\n<p style=\"text-align: justify;\"> <span dir=\"ltr\" role=\"presentation\">que l'Investigateur susnomm&eacute; m&rsquo;a propos&eacute; de participer &agrave; l&rsquo;&eacute;tude susnomm&eacute;e </span><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">-</span> <span dir=\"ltr\" role=\"presentation\">qu&rsquo;il m&rsquo;a expliqu&eacute; en d&eacute;tail le protocole </span><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">-</span> <span dir=\"ltr\" role=\"presentation\">qu&rsquo;il m&rsquo;a notamment fait conna&icirc;tre : </span><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">&bull;</span> <span dir=\"ltr\" role=\"presentation\">l&rsquo;objectif, la m&eacute;thode et la dur&eacute;e de l&rsquo;&eacute;tude </span><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">&bull;</span> <span dir=\"ltr\" role=\"presentation\">les contraintes et les risques potentiels encourus </span><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">&bull;</span> <span dir=\"ltr\" role=\"presentation\">mon droit de refuser de participer et, en cas de d&eacute;saccord, de retirer mon consentement &agrave; tout moment </span><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">&bull;</span> <span dir=\"ltr\" role=\"presentation\">mon droit d'interrompre ma participation &agrave; tout moment </span><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">&bull;</span> <span dir=\"ltr\" role=\"presentation\">qu'&agrave; terme du protocole, si je le souhaite, je serai inform&eacute; par l'Investigateur de ses r&eacute;sultats globaux </span><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">-</span> <span dir=\"ltr\" role=\"presentation\">que j&rsquo;ai r&eacute;pondu en toute bonne foi aux questions pos&eacute;es </span><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">-</span> <span dir=\"ltr\" role=\"presentation\">que j'ai pu poser toutes les questions que je voulais. </span><br role=\"presentation\"><br role=\"presentation\"><span dir=\"ltr\" role=\"presentation\">Les informations relatives &agrave; l&rsquo;&eacute;tude susnomm&eacute;e, recueillies par l&rsquo;Investigateur, sont trait&eacute;es confidentiellement, sous la&nbsp;</span><span dir=\"ltr\" role=\"presentation\">responsabilit&eacute; de la&nbsp;</span><span dir=\"ltr\" role=\"presentation\">Pr&eacute;sidente de l&rsquo;Universit&eacute;</span><span dir=\"ltr\" role=\"presentation\">, </span><span dir=\"ltr\" role=\"presentation\">Mme N</span><span dir=\"ltr\" role=\"presentation\">ATHALIE </span><span dir=\"ltr\" role=\"presentation\">D</span><span dir=\"ltr\" role=\"presentation\">OMPNIER</span><span dir=\"ltr\" role=\"presentation\">. J&rsquo;accepte que les donn&eacute;es enregistr&eacute;es &agrave; l&rsquo;occasion&nbsp; </span><span dir=\"ltr\" role=\"presentation\">de&nbsp;</span> <span dir=\"ltr\" role=\"presentation\">cette </span> <span dir=\"ltr\" role=\"presentation\">recherche </span> <span dir=\"ltr\" role=\"presentation\">puissent </span> <span dir=\"ltr\" role=\"presentation\">faire </span> <span dir=\"ltr\" role=\"presentation\">l&rsquo;objet </span> <span dir=\"ltr\" role=\"presentation\">d&rsquo;un </span> <span dir=\"ltr\" role=\"presentation\">traitement </span> <span dir=\"ltr\" role=\"presentation\">informatis&eacute; </span> <span dir=\"ltr\" role=\"presentation\">anonyme, </span> <span dir=\"ltr\" role=\"presentation\">avec </span> <span dir=\"ltr\" role=\"presentation\">pour </span> <span dir=\"ltr\" role=\"presentation\">finalit&eacute; </span> <span dir=\"ltr\" role=\"presentation\">une</span>&nbsp;<span dir=\"ltr\" role=\"presentation\">meilleure </span><span dir=\"ltr\" role=\"presentation\">compr&eacute;hension&nbsp;</span> <span dir=\"ltr\" role=\"presentation\">des </span> <span dir=\"ltr\" role=\"presentation\">m&eacute;canismes </span> <span dir=\"ltr\" role=\"presentation\">cognitifs </span> <span dir=\"ltr\" role=\"presentation\">impliqu&eacute;s </span> <span dir=\"ltr\" role=\"presentation\">dans </span> <span dir=\"ltr\" role=\"presentation\">les </span> <span dir=\"ltr\" role=\"presentation\">t&acirc;ches </span> <span dir=\"ltr\" role=\"presentation\">r&eacute;alis&eacute;es. </span> <span dir=\"ltr\" role=\"presentation\">Les </span> <span dir=\"ltr\" role=\"presentation\">personnes </span> <span dir=\"ltr\" role=\"presentation\">physiques/morales&nbsp;</span><span dir=\"ltr\" role=\"presentation\">destinataires de ces donn&eacute;es sont le&nbsp;</span><span dir=\"ltr\" role=\"presentation\">L</span><span dir=\"ltr\" role=\"presentation\">ABORATOIRE D</span><span dir=\"ltr\" role=\"presentation\">'&Eacute;</span><span dir=\"ltr\" role=\"presentation\">TUDE DES </span><span dir=\"ltr\" role=\"presentation\">M</span><span dir=\"ltr\" role=\"presentation\">&Eacute;CANISMES </span><span dir=\"ltr\" role=\"presentation\">C</span><span dir=\"ltr\" role=\"presentation\">OGNITIFS</span><span dir=\"ltr\" role=\"presentation\"> (UR EMC)&nbsp;</span><span dir=\"ltr\" role=\"presentation\">et leurs repr&eacute;sentants.</span> <span dir=\"ltr\" role=\"presentation\">&nbsp;J'ai bien </span><span dir=\"ltr\" role=\"presentation\">not&eacute; que, conform&eacute;ment aux dispositions de la loi CNIL et au R&egrave;glement Europ&eacute;en sur la Protection des Donn&eacute;es&nbsp;</span><span dir=\"ltr\" role=\"presentation\">Personnelles de 25 mai 2018, je dispose &agrave; tout moment d&rsquo;un droit d&rsquo;acc&egrave;s, de portabilit&eacute;, de rectification, d&rsquo;effacement, de&nbsp;</span><span dir=\"ltr\" role=\"presentation\">limitation et d&rsquo;opposition au traitement des donn&eacute;es me concernant. Ces droits s&rsquo;exercent aupr&egrave;s de l&rsquo;investigateur du&nbsp; </span><span dir=\"ltr\" role=\"presentation\">projet.</span></p>"
        },
        {
          "type": "radiogroup",
          "name": "consent",
          "titleLocation": "hidden",
          "isRequired": true,
          "choices": [
            {
              "value": "consenti",
              "text": "Après avoir discuté librement et obtenu réponse à toutes mes questions, j’accepte librement et volontairement de participer à cette étude dans les conditions précisées dans le présent formulaire de consentement."
            }
          ]
        },
        {
          "type": "html",
          "name": "refus",
          "html": "<h4><span style=\"color: rgb(186, 55, 42);\">Si vous n'acceptez pas de participer &agrave; cette &eacute;tude selon ces conditions, vous pouvez fermer cette fen&ecirc;tre.</span></h4>"
        }
      ]
    }
  ],
  "completeText": "Commencer",
  "showCompletedPage": false,
  "widthMode": "responsive"
}