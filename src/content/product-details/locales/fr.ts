import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "Émulateur GBA pour iPhone et iPad",
    "label": "GBA",
    "image": "material",
    "summary": "Apportez vos propres fichiers .gba dans Retropa. Commencez par un jeu qui fonctionne, puis choisissez un skin de console, associez une manette et trouvez le rendu d'écran qui vous convient.",
    "imageAlt": "Visuel produit Retropa présentant des dispositions de commandes en portrait et en paysage",
    "sections": [
      {
        "title": "Commencez par un fichier de jeu .gba",
        "body": "Retropa exécute les jeux GBA pris en charge sur iPhone et iPad avec iOS 18 ou version ultérieure. L'app est gratuite, mais elle n'inclut ni jeux ni fichiers BIOS. Utilisez un fichier de jeu que vous avez le droit d'employer et conservez l'original en dehors de l'app comme sauvegarde.",
        "points": [
          "Un jeu GBA utilise normalement l'extension .gba.",
          "Un fichier .gb ou .gbc appartient à GB ou GBC, pas à GBA.",
          "Changer l'extension d'un fichier ne convertit pas un jeu vers un autre système."
        ]
      },
      {
        "title": "Importez depuis l'app Fichiers",
        "body": "Vérifiez que le fichier est bien disponible localement dans Fichiers, et pas seulement sous forme d'espace réservé dans le cloud. Ouvrez l'entrée d'import dans la bibliothèque de Retropa et sélectionnez le jeu. Une fois qu'il apparaît dans la bibliothèque, ouvrez-le et confirmez que l'image, le son et les commandes par défaut fonctionnent avant de personnaliser la disposition."
      },
      {
        "title": "Choisissez la bonne disposition de console",
        "body": "Une disposition GBA a besoin de place pour la croix directionnelle, A et B, les gâchettes ainsi que Start et Select. Testez autant les boutons que l'aspect visuel. Retropa prend en charge l'import .deltaskin, mais un skin DS ne remplace pas une disposition GBA. Vérifiez que le paquet prend en charge l'orientation de votre appareil.",
        "points": [
          "Gardez l'écran de jeu dégagé dans les deux orientations que vous utilisez.",
          "Associez les manettes physiques compatibles à iOS, puis vérifiez leur mappage dans Retropa.",
          "Les skins premium et les filtres avancés nécessitent Plus ; importer un fichier ne débloque pas les fonctions payantes."
        ]
      },
      {
        "title": "Caractère LCD ou pixels nets ?",
        "body": "Partez de l'image d'origine. Un traitement LCD léger peut rappeler l'écran d'une console portable, tandis qu'un traitement CRT produit un rendu différent. Les filtres avancés de Retropa tiennent compte de la zone de sortie réelle sans exiger une mise à l'échelle entière. Les filtres modifient l'image, pas la résolution du jeu ni la compatibilité des fichiers."
      },
      {
        "title": "Quand un import ou une sauvegarde ne fonctionne pas",
        "body": "Vérifiez d'abord l'extension du fichier, le système sélectionné et l'erreur exacte. Si Fichiers ne parvient pas à ouvrir ni à télécharger l'original, terminez cette étape avant de réimporter. Pour les erreurs de BIOS, suivez l'exigence du cœur sélectionné ; un neogeo.zip d'arcade n'est pas un BIOS GBA. La sauvegarde interne d'un jeu et un état de sauvegarde de l'émulateur sont deux artefacts différents : ne renommez pas l'un pour en faire l'autre, et conservez des sauvegardes avant de passer d'un cœur ou d'une app à l'autre.",
        "points": [
          "Essayez le skin par défaut et un filtre simple pour isoler un problème de commande ou d'affichage.",
          "Notez la version de l'app, le système, le cœur et l'erreur pour le support.",
          "Ne joignez pas de ROM commerciales ni de fichiers BIOS à une demande d'assistance."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Voir les fichiers pris en charge et les cœurs GBA"
  },
  "ds-emulator": {
    "title": "Émulateur DS pour iPhone et iPad",
    "label": "DS",
    "image": "library",
    "summary": "Importez vos jeux .nds dans Retropa et faites de la place pour les deux écrans. Vérifiez la saisie tactile, les commandes et les exigences de fichier avant de choisir une nouvelle disposition ou un filtre.",
    "imageAlt": "Visuel produit Retropa montrant la bibliothèque et les réglages sur iPhone",
    "sections": [
      {
        "title": "Préparez un jeu .nds",
        "body": "DS et GBA sont deux systèmes différents. Retropa prend en charge les fichiers .nds pour la DS sur iPhone et iPad avec iOS 18 ou version ultérieure. Utilisez des fichiers que vous avez le droit d'employer et conservez une sauvegarde distincte. L'app ne fournit pas de téléchargement de ROM ni de BIOS, et un fichier .gba ne devient pas un jeu DS parce qu'on le renomme."
      },
      {
        "title": "Importez et vérifiez les deux écrans",
        "body": "Téléchargez le fichier de jeu localement dans Fichiers, puis sélectionnez-le depuis l'entrée d'import de la bibliothèque dans Retropa. Ouvrez le jeu importé avec la disposition par défaut. Vérifiez les deux zones d'affichage et testez la saisie tactile dans une partie du jeu qui l'utilise. Un écran de titre seul ne suffit pas à vérifier que chaque saisie nécessaire est accessible.",
        "points": [
          "Commencez par le système détecté ou sélectionné pour le fichier .nds.",
          "Respectez toute exigence de BIOS ou de firmware signalée par le cœur installé.",
          "Gardez une copie du fichier d'origine pendant que vous diagnostiquez les erreurs."
        ]
      },
      {
        "title": "Laissez assez de place à l'écran tactile",
        "body": "Deux écrans demandent une disposition différente de celle d'une console à écran unique. Choisissez un skin DS qui expose les deux écrans et les commandes nécessaires. Le portrait peut donner aux écrans un empilement naturel ; la prise en charge du paysage dépend du skin choisi. Vérifiez les petites zones tactiles à la taille à laquelle vous jouez réellement, en particulier sur un iPhone plus petit."
      },
      {
        "title": "Les manettes ne remplacent pas toutes les actions tactiles",
        "body": "Retropa prend en charge les manettes externes compatibles et le mappage des boutons. Associez la manette à iOS et confirmez ses affectations dans l'app. Une croix directionnelle physique et des boutons d'action ne remplacent pas automatiquement les interactions tactiles d'un jeu. Vérifiez ces interactions avant de retenir une configuration uniquement à la manette."
      },
      {
        "title": "Gardez la première session simple",
        "body": "Confirmez la compatibilité du jeu et des saisies avant d'appliquer une chaîne de shaders complexe. Si l'image ou la régularité des images change après avoir choisi un filtre, revenez à un préréglage simple et comparez. L'appareil, le cœur et la taille de sortie influent tous sur les performances ; la prise en charge de la DS ne promet pas de résultats identiques pour tous les jeux et tous les téléphones.",
        "points": [
          "Les skins premium et les filtres avancés nécessitent Retropa Plus.",
          "Conservez des copies de vos sauvegardes d'origine et de vos états de sauvegarde ; ce ne sont pas des formats interchangeables.",
          "Pour le support, indiquez la version de l'app, le cœur sélectionné et l'erreur exacte, pas les fichiers de jeu ou de BIOS."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Voir les fichiers pris en charge et les cœurs DS"
  },
  "arcade": {
    "title": "Émulateur arcade pour iPhone et iPad",
    "label": "Arcade",
    "image": "library",
    "summary": "Lancez les fichiers arcade CPS, Neo Geo, PGM et M92 pris en charge dans Retropa, avec commandes tactiles, manettes externes et filtres CRT. Le jeu arcade nécessite Plus ; les jeux et fichiers BIOS ne sont pas inclus.",
    "imageAlt": "Visuel produit Retropa montrant la bibliothèque et les réglages",
    "sections": [
      {
        "title": "CPS, Neo Geo et la carte arcade",
        "body": "Retropa prend en charge les familles arcade, notamment CPS I, CPS II, CPS III, Neo Geo, PGM et M92. Faites correspondre votre jeu à la carte arcade et au jeu de ROM attendus par le cœur installé. La prise en charge d'une famille ne garantit pas que toutes les archives s'exécutent.",
        "points": [
          "Confirmez le système dans l'app avant de choisir un fichier.",
          "L'exécution de jeux arcade nécessite Retropa Plus.",
          "Retropa n'inclut ni ROM commerciales ni fichiers BIOS."
        ]
      },
      {
        "title": "Neo Geo arcade n'est pas Neo Geo Pocket",
        "body": "Les jeux arcade Neo Geo et les jeux portables Neo Geo Pocket utilisent des systèmes et des fichiers différents. Pour un jeu arcade qui signale un BIOS Neo Geo manquant, ouvrez Arcade BIOS dans Retropa et importez le paquet neogeo.zip requis, puis relancez le jeu. Une ROM Pocket ou un ZIP renommé ne remplace rien.",
        "points": [
          "Utilisez des fichiers BIOS que vous avez le droit d'employer ; Retropa ne fournit pas de téléchargement.",
          "Un paquet BIOS ne remplace pas les données de ROM manquantes du jeu, du parent ou du clone.",
          "Vérifiez l'erreur exacte et conservez l'archive d'origine avant toute modification."
        ]
      },
      {
        "title": "Pourquoi un ZIP arcade est différent",
        "body": "Une ROM de console portable est souvent une image de jeu unique. Un ensemble arcade peut contenir plusieurs puces ROM et dépendre d'un ensemble parent ou d'un BIOS. Renommer une archive sans rapport en .zip ne la rend pas compatible. Laissez l'archive fournie intacte, sauf si le processus d'import demande explicitement de l'extraire."
      },
      {
        "title": "Quand un jeu ne démarre pas",
        "body": "Vérifiez d'abord la carte sélectionnée et l'erreur affichée par Retropa. Vérifiez ensuite si votre ensemble est complet et si les fichiers BIOS ou parent requis sont disponibles. Une archive de clone seule peut ne pas contenir tous les fichiers dont un cœur a besoin. Changer de filtre ou acheter un autre skin ne peut pas corriger des données de ROM manquantes.",
        "points": [
          "Conservez vos fichiers d'origine pendant que vous diagnostiquez un import.",
          "Notez la version de l'app, le système et l'erreur affichée lorsque vous contactez le support.",
          "N'envoyez pas de fichiers ROM commerciaux ou BIOS avec une demande d'assistance."
        ]
      },
      {
        "title": "Préparez la première session",
        "body": "Une fois le jeu lancé, repérez les commandes de pièce, de départ et d'action. Avec une manette externe, vérifiez le mappage ainsi que les libellés à l'écran. Commencez par un préréglage d'affichage simple ; choisissez un traitement CRT après avoir confirmé que le jeu et les commandes fonctionnent correctement."
      }
    ],
    "link": "/cores/",
    "linkLabel": "Consulter le catalogue des systèmes et des cœurs"
  },
  "delta-skins": {
    "title": "Importer des skins Delta sur iPhone et iPad",
    "label": "Habillages",
    "image": "material",
    "summary": "Changez les commandes autour de votre jeu, pas seulement l'arrière-plan. Retropa importe les paquets .deltaskin et propose sa propre collection de skins pour iPhone et iPad.",
    "imageAlt": "Visuel produit Retropa montrant des skins de commandes en portrait et paysage dans différents matériaux",
    "sections": [
      {
        "title": "Un skin est une disposition de commandes",
        "body": "L'écran de jeu, la croix directionnelle, les boutons d'action et les commandes de menu ont tous besoin de place. Un skin définit où se placent ces éléments. Choisissez-en un pour le système auquel vous jouez et l'orientation que vous utilisez, plutôt que de décider sur la seule couleur.",
        "points": [
          "Vérifiez le système prévu avant d'importer un paquet.",
          "La prise en charge du portrait et du paysage dépend des dispositions fournies par le skin.",
          "Un format de paquet pris en charge ne garantit pas que chaque disposition tierce convienne à chaque appareil."
        ]
      },
      {
        "title": "Importez un paquet .deltaskin",
        "body": "Conservez le fichier d'origine du skin, ouvrez l'entrée d'import de skins de Retropa et sélectionnez le paquet depuis Fichiers. Après l'import, sélectionnez-le pour le système correspondant. Lancez un jeu et vérifiez la zone d'écran, les commandes directionnelles et chaque bouton d'action avant d'en faire votre disposition habituelle.",
        "points": [
          "Utilisez le paquet .deltaskin complet, pas une capture d'écran d'un skin.",
          "Si le paquet échoue, vérifiez son format et le système prévu avant d'essayer une autre disposition.",
          "Revenez à un skin fonctionnel si des commandes essentielles sont masquées."
        ]
      },
      {
        "title": "Commandes tactiles et manettes physiques",
        "body": "Retropa prend aussi en charge les manettes externes compatibles et un mappage des boutons configurable. Associez d'abord la manette à iOS, puis vérifiez son mappage dans Retropa. Un skin visuel et un profil de manette ont des rôles différents : modifier l'apparence ne dispense pas de vérifier l'affectation de vos boutons physiques."
      },
      {
        "title": "Paquets et limites d'achat",
        "body": "PackHub est l'endroit où parcourir les paquets de skins Retropa. Les skins premium nécessitent Plus ; les paquets importés ne contournent pas les vérifications de droits. Consultez l'offre actuelle et les prérequis du paquet dans l'app avant d'acheter. La compatibilité Delta désigne un format de fichier, pas une affiliation au projet Delta."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "Parcourir les skins sur PackHub"
  },
  "crt-filters": {
    "title": "Filtres CRT pour les émulateurs iPhone et iPad",
    "label": "Filtres",
    "image": "filter",
    "summary": "Les filtres CRT et LCD avancés de Retropa s'adaptent à votre zone d'affichage réelle sans exiger une mise à l'échelle entière. Préservez le caractère d'un écran rétro sur toutes les tailles d'iPhone, dispositions d'iPad et orientations.",
    "imageAlt": "Visuel produit Retropa montrant la sélection de filtres et les traitements d'écran CRT",
    "sections": [
      {
        "title": "Choisissez l'écran, puis l'intensité",
        "body": "Le rendu au pixel le plus proche garde les limites d'origine des pixels nettes. Les traitements CRT utilisent des lignes de balayage, des masques et un ombrage des bords ; les traitements LCD ajoutent une structure de pixels ou de sous-pixels. Ces choix modifient le rendu, pas la résolution sous-jacente du jeu.",
        "points": [
          "Partez de l'image sans filtre comme référence.",
          "Vérifiez les petits textes, les bords lumineux et les zones sombres, pas seulement l'écran de titre.",
          "Jugez le résultat à la taille et dans l'orientation auxquelles vous jouez réellement."
        ]
      },
      {
        "title": "Aucune exigence de mise à l'échelle entière",
        "body": "La mise à l'échelle entière associe chaque pixel du jeu à un nombre entier de pixels d'affichage. Elle peut être utile pour une sortie nette au pixel le plus proche, mais elle laisse parfois de l'espace inutilisé. Les filtres avancés de Retropa tiennent compte de la zone de sortie réelle, si bien que leur structure d'affichage n'est pas limitée à un multiple de 2, de 3 ou à un autre multiple entier. Vous pouvez conserver le rapport d'aspect du jeu tout en utilisant une zone d'affichage adaptée à votre téléphone ou à votre skin.",
        "points": [
          "CRT V4 reconstruit la couverture du faisceau et filtre analytiquement la structure du phosphore à partir de l'empreinte des pixels de sortie.",
          "Trinitron utilise des faisceaux à lignes de balayage intégrées et des harmoniques de grille d'ouverture à bande limitée.",
          "DMG intègre la couverture des cellules à cristaux liquides au lieu d'échantillonner simplement une grille point par point."
        ]
      },
      {
        "title": "Plus qu'une simple couche de lignes de balayage",
        "body": "Les préréglages simples CRT Lite, LCD Grid et Scanline offrent des traitements d'affichage plus légers. Les préréglages avancés modélisent davantage l'écran lui-même : largeur du faisceau, transmission du phosphore ou matériau réflecteur à cristaux liquides. Les grilles échantillonnées directement peuvent devenir irrégulières à des échelles fractionnaires ; une intégration tenant compte de la sortie aide les détails non résolus à se fondre naturellement. Cela n'affirme pas que tout filtre classique ait besoin d'une mise à l'échelle entière, ni que chaque appareil et chaque préréglage soient exempts d'artefacts."
      },
      {
        "title": "Ce que montre la comparaison dans le navigateur",
        "body": "L'aperçu TV présente les filtres de base ainsi que CRT V4, Trinitron V1 et DMG d'après les formules natives. Les modes avancés adaptent des formules natives choisies, dont l'intégration de l'empreinte des pixels, avec une courbe de rendu commune. Le moteur web omet la rémanence temporelle, la chaîne complète de bloom en plusieurs passes et la gestion native des couleurs. Il illustre des caractéristiques d'affichage, pas une sortie Metal identique pixel par pixel ni des images de jeu réelles."
      },
      {
        "title": "Importez des préréglages de shaders RetroArch",
        "body": "Un préréglage .slangp peut référencer plusieurs passes de shader, des textures et des valeurs de paramètres. Gardez ces dépendances ensemble lors de l'import. Un fichier de préréglage seul peut être incomplet ; un fichier .slang décrit un shader et non une collection entière.",
        "points": [
          "Utilisez des paquets destinés au flux de travail de shaders pris en charge.",
          "Si un préréglage ne se charge pas, vérifiez les fichiers référencés et la compatibilité avant de modifier le jeu.",
          "Essayez un préréglage plus léger si une chaîne complexe nuit à la régularité des images ou à l'autonomie."
        ]
      },
      {
        "title": "La qualité d'image a un coût en performances",
        "body": "Un filtre à plusieurs passes peut demander plus de travail GPU qu'une sortie au pixel le plus proche. Les performances dépendent de l'appareil, du cœur de l'émulateur, de la résolution de sortie et du préréglage. Retropa ne promet pas que chaque shader importé fonctionne aussi bien sur chaque iPhone. Les filtres avancés nécessitent Plus ; consultez les choix disponibles dans l'app."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "Parcourir les filtres sur PackHub"
  }
}
