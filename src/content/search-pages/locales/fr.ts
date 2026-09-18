import type { SearchPageContent } from "@/content/search-pages/types"

/**
 * Search landing page content for this locale.
 * Pages absent from this file are not published in this language, and are
 * therefore not registered as language alternates.
 */
export const pages: Record<string, SearchPageContent> = {
  "gb-emulator": {
    "kind": "system",
    "slug": "gb-emulator",
    "label": "GB",
    "title": "Émulateur Game Boy pour iPhone et iPad | Retropa",
    "description": "Lancez vos propres fichiers .gb sur iPhone et iPad avec Retropa. Quel cœur prend en charge la GB, comment importer un jeu, comment régler l'écran et les commandes, et que vérifier lorsqu'un fichier refuse de s'ouvrir.",
    "summary": "Retropa fait tourner les jeux Game Boy à partir de vos propres fichiers .gb sur iPhone et iPad, avec trois cœurs interchangeables, des skins de console portable, des traitements LCD et CRT, et la configuration des manettes.",
    "sections": [
      {
        "title": "Commencez par un fichier .gb",
        "body": "Retropa lit les jeux Game Boy à partir de fichiers que vous possédez déjà. L'app est gratuite au téléchargement et n'inclut ni jeu ni fichier BIOS : préparez donc votre fichier de jeu avant de commencer et conservez une copie intacte en dehors de l'app, par précaution.",
        "points": [
          ".gb correspond à un jeu Game Boy ; .gbc appartient à la Game Boy Color.",
          "Renommer une extension de fichier ne convertit pas un jeu vers un autre système.",
          "Conservez l'archive d'origine jusqu'à ce que le jeu fonctionne correctement."
        ]
      },
      {
        "title": "Quel cœur fait tourner les jeux Game Boy",
        "body": "Retropa embarque plusieurs cœurs capables de faire tourner des jeux Game Boy, et vous pouvez passer de l'un à l'autre jeu par jeu. mGBA et SkyEmu couvrent tous deux la GB, la GBC et la GBA, tandis que SameBoy vise spécifiquement la GB et la GBC. Si un cœur montre un problème sur un titre précis, essayez-en un autre avant de conclure que le fichier est corrompu.",
        "points": [
          "mGBA est un bon premier choix pour jouer au quotidien.",
          "SameBoy met l'accent sur la précision GB et GBC.",
          "Le cœur sélectionné est mémorisé pour chaque jeu."
        ]
      },
      {
        "title": "Importez le jeu depuis Fichiers",
        "body": "Vérifiez que le fichier est bien téléchargé en local, et non simplement affiché comme un espace réservé dans le cloud au sein de l'app Fichiers. Ouvrez l'entrée d'import de la bibliothèque Retropa et sélectionnez le jeu. Une fois qu'il apparaît, lancez-le et confirmez que l'image, le son et les commandes tactiles par défaut fonctionnent avant de personnaliser quoi que ce soit."
      },
      {
        "title": "Choisissez une disposition adaptée à l'écran d'origine",
        "body": "Une disposition Game Boy a besoin d'une croix directionnelle, des boutons A et B, ainsi que de Start et Select. Le mode portrait place l'écran au-dessus des commandes, ce qui convient au jeu à une main ; le mode paysage laisse plus de place aux boutons. Vérifiez que la zone de jeu n'est pas masquée par le skin dans l'une ou l'autre orientation, et que les six entrées restent accessibles.",
        "points": [
          "Testez chaque bouton, pas seulement l'habillage.",
          "Les paquets .deltaskin de Delta peuvent être importés, mais un skin DS ou GBA ne constitue pas une disposition GB.",
          "Les skins premium et les filtres avancés nécessitent Retropa Plus."
        ]
      },
      {
        "title": "Écran vert, grille LCD ou pixels nets",
        "body": "Partez de l'image d'origine pour disposer d'une référence. Un préréglage DMG rappelle l'écran LCD réfléchissant à quatre tons de la console d'origine, un LCD Grid ajoute une structure de sous-pixels, et un traitement CRT donne un rendu totalement différent. Les filtres avancés de Retropa s'adaptent à la zone de sortie réelle au lieu d'exiger un facteur d'échelle entier, si bien que l'image conserve ses proportions quelles que soient les tailles d'iPhone et d'iPad.",
        "points": [
          "Les filtres changent la présentation, pas la résolution du jeu.",
          "Un filtre ne corrigera pas un problème de compatibilité de fichier.",
          "Comparez avec l'image d'origine avant de conserver un préréglage."
        ]
      },
      {
        "title": "Quand un import ou une sauvegarde Game Boy échoue",
        "body": "Vérifiez d'abord l'extension du fichier, le système sélectionné et le message d'erreur exact. Si Fichiers n'a pas terminé de télécharger l'original, achevez cette étape avant de relancer l'import. La sauvegarde interne d'un jeu et un état de sauvegarde d'émulateur sont deux choses différentes ; ne renommez pas l'une en l'autre et conservez une copie de secours avant de déplacer une sauvegarde entre cœurs ou entre apps.",
        "points": [
          "Notez la version de l'app, le système, le cœur et l'erreur pour le support.",
          "Ne joignez pas de fichiers ROM ou BIOS commerciaux à une demande d'assistance.",
          "Revenez au skin par défaut et à un filtre simple pour isoler un problème."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Retropa inclut-il des jeux Game Boy ?",
        "answer": "Non. Retropa est un émulateur et ne fournit ni jeu ni fichier BIOS. Vous importez les fichiers que vous avez le droit d'utiliser, et uniquement ceux-là."
      },
      {
        "id": "bios-needed",
        "question": "L'émulation Game Boy nécessite-t-elle un fichier BIOS ?",
        "answer": "Les titres GB et GBC fonctionnent généralement sans fichier BIOS dans les cœurs fournis par Retropa. Si un cœur signale qu'un BIOS est requis, suivez l'invite affichée pour ce cœur plutôt que d'importer un fichier sans rapport."
      },
      {
        "id": "gb-vs-gbc",
        "question": "Retropa peut-il ouvrir un fichier .gbc comme un jeu Game Boy ?",
        "answer": "Un fichier .gbc appartient à la Game Boy Color. Retropa le lance sur le système correspondant, et renommer l'extension ne change pas la nature du fichier."
      }
    ],
    "related": [
      "gbc-emulator",
      "nes-emulator",
      "gba-emulator",
      "delta-alternative"
    ]
  },
  "gbc-emulator": {
    "kind": "system",
    "slug": "gbc-emulator",
    "label": "GBC",
    "title": "Émulateur Game Boy Color pour iPhone et iPad | Retropa",
    "description": "Jouez à vos propres jeux .gbc sur iPhone et iPad. Palettes de couleurs, titres exclusifs à la GBC, choix du cœur, étapes d'import et vérifications à effectuer quand un jeu Game Boy Color refuse de démarrer.",
    "summary": "Retropa lit les jeux Game Boy Color à partir de vos propres fichiers .gbc, avec la gestion des palettes, la sélection du cœur jeu par jeu et des traitements d'affichage adaptés à l'écran réfléchissant d'origine.",
    "sections": [
      {
        "title": "Préparez un fichier .gbc",
        "body": "Les jeux Game Boy Color utilisent l'extension .gbc. Retropa n'inclut ni jeu ni fichier BIOS : préparez donc le fichier vous-même, conservez une copie de secours distincte et n'importez que du contenu que vous êtes en droit d'utiliser.",
        "points": [
          ".gbc correspond à un jeu Game Boy Color.",
          "Les jeux Game Boy d'origine utilisent .gb et fonctionnent aussi sur Retropa.",
          "Ne renommez pas un fichier .gb en .gbc pour forcer la couleur."
        ]
      },
      {
        "title": "Le choix du cœur pour la Game Boy Color",
        "body": "SameBoy est le cœur dédié à la GB et à la GBC, et mGBA comme SkyEmu prennent également en charge la Game Boy Color. Si un titre affiche des couleurs ou un rythme incorrects, changer de cœur est un premier test légitime, car chaque cœur gère le matériel d'origine avec de légères différences.",
        "points": [
          "SameBoy est un premier choix naturel pour les titres GBC.",
          "mGBA couvre GB, GBC et GBA avec un seul cœur.",
          "Le choix du cœur est enregistré jeu par jeu."
        ]
      },
      {
        "title": "Import et premier lancement",
        "body": "Téléchargez le fichier dans le stockage local pour que l'app Fichiers ne serve pas un simple espace réservé, puis sélectionnez-le depuis l'entrée d'import de la bibliothèque Retropa. Lancez le jeu et vérifiez les couleurs, le son et la disposition tactile par défaut avant d'appliquer des skins ou des filtres, afin de pouvoir attribuer facilement tout problème ultérieur.",
        "points": [
          "Testez une scène qui exploite la couleur, pas seulement l'écran-titre.",
          "Vérifiez le canal audio autant que l'image.",
          "Laissez le fichier d'origine intact pendant le diagnostic."
        ]
      },
      {
        "title": "Image et disposition pour une portable couleur",
        "body": "L'écran de la Game Boy Color est petit et réfléchissant. Un préréglage LCD Grid ajoute une structure de sous-pixels qui lui convient, tandis qu'un préréglage DMG rappelle délibérément la dalle monochrome plus ancienne. Les filtres avancés de Retropa travaillent à partir de la zone de sortie réelle et non d'un multiple entier fixe, de sorte que les proportions sont préservées sur toutes les tailles d'appareil.",
        "points": [
          "Comparez chaque préréglage avec l'image d'origine.",
          "Les filtres avancés nécessitent Retropa Plus.",
          "Vérifiez que le skin ne masque pas la zone de jeu."
        ]
      },
      {
        "title": "Commandes et orientation",
        "body": "Une disposition Game Boy Color a besoin d'une croix directionnelle, des boutons A et B, ainsi que de Start et Select. Le portrait convient aux courtes sessions ; le paysage laisse plus d'espace aux boutons et peut être plus confortable sur un iPhone de grande taille. Assurez-vous que chaque entrée reste accessible dans l'orientation que vous utilisez réellement."
      },
      {
        "title": "Quand un jeu Game Boy Color refuse de démarrer",
        "body": "Vérifiez d'abord l'extension et le système sélectionné, puis lisez l'erreur exacte. Si la région ou la palette semble incorrecte, comparez les cœurs avant de modifier des réglages. Les sauvegardes créées dans un cœur peuvent ne pas être lues par un autre : faites une copie avant de changer.",
        "points": [
          "Notez la version de l'app, le système, le cœur et l'erreur.",
          "N'envoyez pas de fichiers ROM ou BIOS commerciaux au support.",
          "Revenez au skin par défaut et à un filtre simple pour isoler les problèmes."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Les jeux Game Boy Color sont-ils inclus ?",
        "answer": "Non. Retropa est un émulateur et ne fournit ni jeu ni fichier BIOS. N'importez que les fichiers que vous avez le droit d'utiliser."
      },
      {
        "id": "gb-on-gbc",
        "question": "Puis-je aussi jouer aux jeux Game Boy d'origine ?",
        "answer": "Oui. Les fichiers .gb de la Game Boy d'origine fonctionnent aussi sur Retropa, avec les mêmes cœurs que ceux qui gèrent la Game Boy Color."
      },
      {
        "id": "force-colour",
        "question": "Renommer un fichier .gb en .gbc ajoute-t-il la couleur ?",
        "answer": "Non. L'extension ne change pas le contenu du fichier : la renommer n'active donc pas les fonctions de la Game Boy Color."
      }
    ],
    "related": [
      "gb-emulator",
      "gba-emulator",
      "wonderswan-emulator"
    ]
  },
  "nes-emulator": {
    "kind": "system",
    "slug": "nes-emulator",
    "label": "NES",
    "title": "Émulateur NES pour iPhone et iPad | Retropa",
    "description": "Lancez vos propres jeux NES sur iPhone et iPad. Formats de fichiers pris en charge, dont .nes, .fds et .nsf, choix du cœur, étapes d'import, configuration des manettes et dépannage.",
    "summary": "Retropa fait tourner les jeux NES à partir de vos propres fichiers, avec la prise en charge des formats .nes, .fds et audio NSF sur deux cœurs dédiés, ainsi que la configuration des manettes et des traitements CRT.",
    "sections": [
      {
        "title": "Les formats de fichiers NES acceptés par Retropa",
        "body": "La prise en charge de la NES dans Retropa ne se limite pas à une seule extension. Outre l'image de cartouche .nes la plus courante, les cœurs acceptent les images Famicom Disk System et les fichiers sonores NSF, ainsi que les variantes de conteneur iNES simple et unifiée.",
        "points": [
          ".nes est l'image de cartouche NES standard.",
          ".fds correspond au contenu Famicom Disk System.",
          ".nsf et .nsfe sont des fichiers sonores, et non des jeux jouables.",
          "Les conteneurs ZIP et RetroPack peuvent être importés et ouverts directement."
        ]
      },
      {
        "title": "Deux cœurs pour un même système",
        "body": "Retropa embarque RusticoNES et TetaNES pour les titres NES, et JGenesis couvre également ce système. Essayer un second cœur est le moyen le plus rapide de distinguer une ROM capricieuse d'une véritable différence d'émulation, et le choix est mémorisé jeu par jeu.",
        "points": [
          "RusticoNES est un choix par défaut fiable pour les jeux sur cartouche.",
          "TetaNES est l'alternative à tester lorsqu'un jeu se comporte mal.",
          "Les fichiers audio NSF se comportent différemment des jeux, quel que soit le cœur."
        ]
      },
      {
        "title": "Importez un jeu NES",
        "body": "Téléchargez d'abord le fichier en local pour que Fichiers ne renvoie pas un espace réservé, puis ouvrez l'entrée d'import de la bibliothèque Retropa. Lancez le jeu avec la disposition par défaut et vérifiez l'image, le son et les boutons par défaut avant de changer de skin ou de filtre."
      },
      {
        "title": "Utiliser une manette à deux boutons",
        "body": "La manette NES est volontairement minimaliste : une croix directionnelle, A, B, Start et Select. Sur un écran tactile, la tentation est de rapprocher les boutons ; vérifiez donc que les diagonales sont toujours prises en compte et que Start et Select ne sont pas touchés par erreur en cours de jeu. Une manette physique appairée règle la plupart de ces soucis.",
        "points": [
          "Appairez d'abord la manette dans iOS, puis vérifiez l'affectation de ses boutons dans Retropa.",
          "Vérifiez les diagonales, pas seulement les quatre directions cardinales.",
          "Testez le portrait et le paysage si vous jouez dans les deux."
        ]
      },
      {
        "title": "Régler l'image correctement",
        "body": "La sortie NES est conçue pour un téléviseur à définition standard : un traitement CRT paraît donc souvent plus proche de l'expérience d'origine qu'une grille de pixels nette. Des préréglages Scanline et masque à fentes sont disponibles, et les filtres avancés de Retropa s'adaptent à la zone de sortie réelle plutôt qu'à un multiple entier fixe.",
        "points": [
          "Partez de l'image d'origine comme référence.",
          "Les incrustations de lignes de balayage classiques peuvent scintiller à des échelles fractionnaires.",
          "Les filtres avancés nécessitent Retropa Plus."
        ]
      },
      {
        "title": "Quand un jeu NES ne se charge pas",
        "body": "Lisez l'erreur exacte avant de modifier quoi que ce soit. Un dump défectueux, un mapper non pris en charge, une image sans en-tête ou un jeu sur disquette auquel il manque son BIOS sont des problèmes différents. Vérifiez l'extension et le système sélectionné, puis essayez l'autre cœur NES.",
        "points": [
          "Notez la version de l'app, le cœur et le texte complet de l'erreur pour le support.",
          "Laissez le fichier d'origine intact pendant le diagnostic.",
          "Ne joignez pas de fichiers ROM ou BIOS commerciaux à une demande d'assistance."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Quels formats NES Retropa ouvre-t-il ?",
        "answer": "Retropa accepte les fichiers .nes, .fds, .nsf, .nsfe, .unf et .unif, et peut aussi ouvrir directement les conteneurs ZIP et RetroPack."
      },
      {
        "id": "nsf",
        "question": "Puis-je jouer à un fichier .nsf comme à un jeu ?",
        "answer": "Non. Les fichiers NSF contiennent des données sonores : ils diffusent de l'audio et non un jeu. Utilisez un fichier .nes ou .fds pour jouer à un titre."
      },
      {
        "id": "gamepad",
        "question": "Une manette physique fonctionne-t-elle avec les jeux NES ?",
        "answer": "Oui. Les manettes compatibles peuvent être appairées à iOS et configurées dans Retropa. Vérifiez l'affectation des boutons après l'appairage, car leur ordre n'est pas toujours celui attendu."
      }
    ],
    "related": [
      "snes-emulator",
      "gb-emulator",
      "arcade"
    ]
  },
  "snes-emulator": {
    "kind": "system",
    "slug": "snes-emulator",
    "label": "SNES",
    "title": "Émulateur SNES pour iPhone et iPad | Retropa",
    "description": "Jouez à vos propres jeux SNES sur iPhone et iPad. Formats .sfc et .smc pris en charge, cœur LakeSnes, configuration d'une manette à six boutons et étapes de dépannage.",
    "summary": "Retropa fait tourner les jeux SNES à partir de vos propres fichiers .sfc et .smc sur le cœur LakeSnes, avec la configuration d'une manette à six boutons, les états de sauvegarde et des traitements d'affichage CRT.",
    "sections": [
      {
        "title": "Les formats de fichiers SNES",
        "body": "Les images Super Nintendo sont généralement diffusées au format .sfc ou .smc, et Retropa accepte aussi plusieurs formats de conteneur et de copieur associés. Si un fichier échoue, l'extension est la première chose à vérifier, car un en-tête inadapté est une cause fréquente de jeu qui refuse de démarrer.",
        "points": [
          ".sfc et .smc sont les images SNES standard.",
          "Retropa référence aussi les formats .fig, .swc, .bs et .st.",
          "Les conteneurs ZIP et RetroPack peuvent être ouverts directement."
        ]
      },
      {
        "title": "Le cœur LakeSnes",
        "body": "Retropa fait tourner les titres SNES sur LakeSnes, et JGenesis référence également ce système. Si un jeu précis présente un problème de rythme ou d'affichage, vérifiez que le fichier est une image propre avant d'incriminer le cœur, et comparez la version actuelle de l'app avec les notes de version.",
        "points": [
          "LakeSnes est le cœur dédié à la SNES.",
          "Certains titres dépendent de coprocesseurs de cartouche spécifiques.",
          "Le choix du cœur est mémorisé jeu par jeu."
        ]
      },
      {
        "title": "Import et premier lancement",
        "body": "Gardez le fichier dans le stockage local plutôt que dans un espace réservé du cloud, puis sélectionnez-le depuis l'entrée d'import de la bibliothèque Retropa. Lancez le jeu et vérifiez l'image, le son et les commandes tactiles par défaut avant de modifier le moindre réglage d'affichage, afin que les problèmes ultérieurs aient une cause claire."
      },
      {
        "title": "Six boutons ont besoin de place",
        "body": "La manette SNES ajoute X, Y, L et R à la croix directionnelle, aux boutons A, B, Start et Select, et de nombreux jeux attendent des appuis simultanés. Sur un écran tactile, répartir la disposition en paysage et tester chaque combinaison vaut la peine. Une manette physique appairée reste l'option la plus fiable pour les jeux d'action.",
        "points": [
          "Vérifiez L et R, que l'on oublie facilement lors de la configuration.",
          "Testez une diagonale et une gâchette en même temps.",
          "Vérifiez que le skin laisse la zone de jeu dégagée."
        ]
      },
      {
        "title": "Choisir un traitement d'affichage",
        "body": "Les graphismes SNES ont été conçus pour un écran CRT : les préréglages de lignes de balayage et de masque à fentes paraissent donc généralement plus proches de l'original qu'une grille de pixels brute. Les filtres avancés de Retropa tiennent compte de la zone de sortie réelle au lieu d'exiger un multiple entier, ce qui compte sur un téléphone, où la hauteur disponible se divise rarement de façon exacte.",
        "points": [
          "Utilisez l'image d'origine comme référence.",
          "Les incrustations de lignes de balayage simples peuvent scintiller à des échelles fractionnaires.",
          "Les filtres avancés nécessitent Retropa Plus."
        ]
      },
      {
        "title": "Quand un jeu SNES refuse de démarrer",
        "body": "Vérifiez l'extension, le système sélectionné et le texte exact de l'erreur. Les titres qui reposent sur une puce de cartouche particulière sont les suspects habituels lorsqu'un jeu échoue alors que les autres fonctionnent. Laissez le fichier d'origine intact pendant les tests et essayez de passer au cœur alternatif.",
        "points": [
          "Notez la version de l'app, le cœur et l'erreur pour le support.",
          "Changer de filtre ne corrigera pas un problème de puce de cartouche.",
          "N'envoyez pas de fichiers ROM ou BIOS commerciaux au support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": "Y a-t-il une différence entre .sfc et .smc ?",
        "answer": "Les deux sont des images SNES standard et Retropa accepte l'une comme l'autre. L'extension en elle-même ne change pas le jeu."
      },
      {
        "id": "chip-games",
        "question": "Pourquoi un jeu échoue-t-il alors que d'autres fonctionnent ?",
        "answer": "Certains titres dépendent d'un matériel de cartouche supplémentaire. Si le fichier est une image propre et que d'autres jeux fonctionnent, cette dépendance est la cause probable, et changer de cœur constitue le test suivant."
      },
      {
        "id": "saves",
        "question": "Les états de sauvegarde sont-ils transférables entre cœurs ?",
        "answer": "Pas de manière fiable. Les sauvegardes internes et les états de sauvegarde sont deux choses différentes, et un état écrit par un cœur peut ne pas se charger dans un autre : conservez une copie avant de changer."
      }
    ],
    "related": [
      "nes-emulator",
      "sega-genesis-emulator",
      "arcade",
      "retropa-vs-delta"
    ]
  },
  "sega-genesis-emulator": {
    "kind": "system",
    "slug": "sega-genesis-emulator",
    "label": "Genesis",
    "title": "Émulateur Sega Genesis et Mega Drive pour iPhone | Retropa",
    "description": "Jouez à vos propres jeux Sega Genesis et Mega Drive sur iPhone et iPad. Formats .md, .smd et .gen, cœur JGenesis, configuration d'une manette six boutons et dépannage.",
    "summary": "Retropa fait tourner les jeux Sega Genesis et Mega Drive à partir de vos propres fichiers sur le cœur JGenesis, avec la prise en charge d'une manette à six boutons, les états de sauvegarde et des traitements d'affichage CRT.",
    "sections": [
      {
        "title": "Genesis et Mega Drive désignent la même console",
        "body": "Cette console est sortie sous le nom Mega Drive en Europe, au Japon et dans la majeure partie de l'Asie, et sous le nom Genesis en Amérique du Nord. Le matériel est identique, si bien qu'un fichier de jeu fonctionne dans les deux cas ; seul le nom sur la boîte change. Retropa référence les deux appellations, ce qui explique que les extensions de fichiers diffèrent légèrement selon les régions.",
        "points": [
          ".md et .smd sont les images Mega Drive habituelles.",
          ".gen est l'extension nord-américaine courante.",
          "L'extension ne change pas le matériel attendu par le jeu."
        ]
      },
      {
        "title": "Le cœur JGenesis",
        "body": "Retropa fait tourner les titres Genesis et Mega Drive sur JGenesis, qui couvre aussi la Master System, la Game Gear et plusieurs systèmes portables. Comme un même cœur sert plusieurs plateformes, le système sélectionné pour chaque jeu est déterminant : importer un titre Master System alors que le système est réglé sur Genesis est une source fréquente de confusion.",
        "points": [
          "JGenesis couvre MD, GEN, SMS et GG.",
          "Confirmez le système détecté avant de signaler un problème.",
          "Le choix du cœur et du système est mémorisé jeu par jeu."
        ]
      },
      {
        "title": "Importez un jeu Mega Drive",
        "body": "Stockez le fichier en local plutôt que de le laisser comme espace réservé dans le cloud, puis sélectionnez-le depuis l'entrée d'import de la bibliothèque Retropa. Lancez le jeu et confirmez l'image, le son et la disposition tactile par défaut avant d'appliquer un skin ou un filtre."
      },
      {
        "title": "Configurer une manette à six boutons",
        "body": "Les manettes Genesis existaient en version trois boutons et six boutons, et certains jeux se comportent différemment selon celle qui est détectée. Sur une disposition tactile, vérifiez que A, B, C et, lorsqu'ils sont proposés, X, Y, Z et Mode sont tous accessibles, puis testez une combinaison réellement utilisée par un jeu.",
        "points": [
          "Vérifiez les affectations en version trois boutons comme en version six boutons.",
          "Contrôlez Start, qui sert aussi de bouton pause dans de nombreux titres.",
          "Une manette physique appairée évite la plupart des appuis erronés."
        ]
      },
      {
        "title": "Traitement d'affichage pour une console 16 bits",
        "body": "La sortie Mega Drive vise un écran CRT : un préréglage de lignes de balayage ou de masque à fentes paraît donc généralement plus proche de l'original qu'une grille de pixels brute, en particulier pour le tramage que le téléviseur aurait fondu. Les filtres avancés de Retropa travaillent à partir de la zone de sortie réelle plutôt que d'un multiple entier fixe.",
        "points": [
          "Partez de l'image d'origine, puis comparez.",
          "Les motifs de tramage constituent un bon test pour un préréglage de filtre.",
          "Les filtres avancés nécessitent Retropa Plus."
        ]
      },
      {
        "title": "Quand un jeu Genesis refuse de démarrer",
        "body": "Vérifiez l'extension, la sélection du système et l'erreur exacte. Les incompatibilités de région et de système sont plus fréquentes ici que sur les systèmes à plateforme unique, car un même cœur sert plusieurs consoles. Laissez le fichier d'origine intact et confirmez le système détecté avant d'aller plus loin.",
        "points": [
          "Notez la version de l'app, le système détecté, le cœur et l'erreur.",
          "N'envoyez pas de fichiers ROM ou BIOS commerciaux au support.",
          "Conservez une copie de secours distincte avant de déplacer des sauvegardes entre cœurs."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Mega Drive et Genesis, est-ce la même chose ?",
        "answer": "Oui. Il s'agit d'une seule console portant deux noms régionaux : un fichier de jeu fonctionne donc sous l'un comme sous l'autre."
      },
      {
        "id": "six-button",
        "question": "Retropa prend-il en charge les manettes à six boutons ?",
        "answer": "La disposition tactile et la configuration des manettes externes couvrent les boutons supplémentaires, et certains jeux changent de comportement selon la variante de manette qu'ils détectent."
      },
      {
        "id": "system-detect",
        "question": "Pourquoi mon jeu est-il traité comme un autre système ?",
        "answer": "Un même cœur sert plusieurs plateformes Sega : vérifiez donc le système détecté pour ce jeu et corrigez-le avant de signaler un problème de compatibilité."
      }
    ],
    "related": [
      "master-system-emulator",
      "game-gear-emulator",
      "snes-emulator"
    ]
  },
  "game-gear-emulator": {
    "kind": "system",
    "slug": "game-gear-emulator",
    "label": "Game Gear",
    "title": "Émulateur Game Gear pour iPhone et iPad | Retropa",
    "description": "Jouez à vos propres jeux Game Gear .gg sur iPhone et iPad. Quel cœur les fait tourner, comment importer un fichier, comment régler l'écran et que vérifier lorsqu'un jeu échoue.",
    "summary": "Retropa fait tourner les jeux Game Gear à partir de vos propres fichiers .gg grâce au cœur JGenesis, avec un rendu d'écran rétroéclairé, des skins de console portable et une configuration complète des commandes.",
    "sections": [
      {
        "title": "Préparez un fichier .gg",
        "body": "Les jeux Game Gear utilisent l'extension .gg. Retropa n'inclut ni jeu ni fichier BIOS : ayez donc le fichier prêt et conservez une copie en dehors de l'app avant de l'importer.",
        "points": [
          ".gg est l'extension Game Gear.",
          "Un fichier .sms appartient à la Master System, pas à la Game Gear.",
          "Renommer ne convertit pas l'un en l'autre."
        ]
      },
      {
        "title": "Quel cœur gère la Game Gear",
        "body": "JGenesis couvre la Game Gear aux côtés de la Mega Drive, de la Genesis et de la Master System. Comme un même cœur sert plusieurs plateformes Sega, vérifiez que le jeu est bien détecté comme Game Gear avant d'enquêter sur un problème de compatibilité."
      },
      {
        "title": "Import et premier lancement",
        "body": "Téléchargez le fichier en local, puis sélectionnez-le depuis l'entrée d'import de la bibliothèque Retropa. Confirmez l'image, le son et les commandes par défaut avant d'appliquer un skin, afin que tout problème ultérieur ait une cause évidente."
      },
      {
        "title": "Un petit écran rétroéclairé",
        "body": "La dalle de la Game Gear était rétroéclairée et de petite taille : un traitement LCD Grid a donc tendance à lui convenir, tandis qu'un préréglage CRT plus marqué paraîtra nettement plus lourd que le matériel d'origine. Les filtres avancés de Retropa s'adaptent à la zone de sortie réelle au lieu d'exiger un multiple entier.",
        "points": [
          "Comparez chaque préréglage avec l'image d'origine.",
          "Les filtres avancés nécessitent Retropa Plus.",
          "Vérifiez que la zone de jeu n'est pas recouverte par le skin."
        ]
      },
      {
        "title": "Commandes et orientation",
        "body": "Le matériel Game Gear proposait une croix directionnelle, deux boutons d'action et Start. Ce petit nombre de boutons rend une disposition en portrait confortable, mais vérifiez que Start reste accessible sans changer votre prise en main, et testez les diagonales."
      },
      {
        "title": "Quand un jeu Game Gear refuse de se lancer",
        "body": "Confirmez l'extension, le système détecté et le texte exact de l'erreur. Un fichier Master System importé comme Game Gear, ou l'inverse, en est une cause fréquente. Laissez le fichier d'origine intact pendant les tests.",
        "points": [
          "Notez la version de l'app, le système détecté, le cœur et l'erreur.",
          "N'envoyez pas de fichiers ROM ou BIOS commerciaux au support.",
          "Conservez une copie de secours avant de déplacer des sauvegardes entre cœurs."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "La Game Gear est-elle identique à la Master System ?",
        "answer": "Elles sont étroitement liées, mais ce sont deux systèmes distincts avec des extensions de fichiers différentes. Un même cœur fait tourner les deux : vérifiez donc le système sous lequel un fichier est détecté."
      },
      {
        "id": "bios",
        "question": "La Game Gear a-t-elle besoin d'un fichier BIOS ?",
        "answer": "Pas dans les cœurs fournis par Retropa. Si un cœur signale une exigence, suivez l'invite de ce cœur plutôt que d'importer un fichier sans rapport."
      }
    ],
    "related": [
      "master-system-emulator",
      "sega-genesis-emulator",
      "gb-emulator"
    ]
  },
  "master-system-emulator": {
    "kind": "system",
    "slug": "master-system-emulator",
    "label": "Master System",
    "title": "Émulateur Master System pour iPhone et iPad | Retropa",
    "description": "Lancez vos propres jeux Sega Master System .sms sur iPhone et iPad. Couverture des cœurs, étapes d'import, disposition des commandes et vérifications à faire quand un titre refuse de démarrer.",
    "summary": "Retropa fait tourner les jeux Sega Master System à partir de vos propres fichiers .sms sur le cœur JGenesis, avec des skins de console portable, des traitements d'affichage et la configuration des manettes.",
    "sections": [
      {
        "title": "Préparez un fichier .sms",
        "body": "Les jeux Master System utilisent l'extension .sms. Retropa ne fournit ni jeu ni fichier BIOS : préparez donc le fichier et conservez une copie de secours en dehors de l'app.",
        "points": [
          ".sms est l'extension Master System.",
          ".gg appartient à la Game Gear et correspond à un autre système.",
          "Les conteneurs ZIP et RetroPack peuvent être ouverts directement."
        ]
      },
      {
        "title": "Couverture des cœurs",
        "body": "JGenesis gère la Master System en même temps que la Mega Drive, la Genesis et la Game Gear. Comme un même cœur sert plusieurs plateformes, confirmer le système détecté constitue la première étape de diagnostic lorsqu'un fichier se comporte de façon inattendue."
      },
      {
        "title": "Import et vérification",
        "body": "Gardez le fichier dans le stockage local, puis sélectionnez-le depuis l'entrée d'import de la bibliothèque Retropa. Vérifiez l'image, le son et la disposition par défaut avant d'appliquer un skin ou un préréglage d'affichage."
      },
      {
        "title": "Deux boutons, une croix directionnelle",
        "body": "Les manettes Master System proposaient une croix directionnelle, deux boutons d'action et, sur certains modèles, un bouton pause situé sur la console elle-même. Sur une disposition tactile, il est utile de vérifier que la pause est bien affectée à un endroit accessible, car on l'oublie facilement."
      },
      {
        "title": "Traitement de l'image",
        "body": "Les titres Master System visent un écran CRT. Les préréglages de lignes de balayage et de masque à fentes paraissent généralement plus proches de l'original qu'une grille de pixels brute, et les filtres avancés de Retropa s'adaptent à la zone de sortie réelle plutôt qu'à un multiple entier fixe.",
        "points": [
          "Comparez les préréglages avec l'image d'origine.",
          "Les filtres avancés nécessitent Retropa Plus."
        ]
      },
      {
        "title": "Quand un jeu Master System refuse de démarrer",
        "body": "Vérifiez l'extension, le système détecté et l'erreur précise. Les différences de région et les confusions entre Master System et Game Gear en sont les causes habituelles. Laissez le fichier d'origine intact pendant le diagnostic.",
        "points": [
          "Notez la version de l'app, le système détecté, le cœur et l'erreur.",
          "Ne joignez pas de fichiers ROM ou BIOS commerciaux à une demande d'assistance."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "Comment savoir si un fichier est Master System ou Game Gear ?",
        "answer": "Regardez l'extension : .sms correspond à la Master System et .gg à la Game Gear. Retropa affiche le système détecté pour le jeu importé."
      },
      {
        "id": "pause",
        "question": "Où se trouve le bouton pause ?",
        "answer": "Sur le matériel d'origine, il se trouvait sur la console et non sur la manette. Dans Retropa, il fait partie de la disposition à l'écran : vérifiez donc qu'il est affecté à une touche accessible."
      }
    ],
    "related": [
      "game-gear-emulator",
      "sega-genesis-emulator",
      "nes-emulator"
    ]
  },
  "wonderswan-emulator": {
    "kind": "system",
    "slug": "wonderswan-emulator",
    "label": "WonderSwan",
    "title": "Émulateur WonderSwan pour iPhone et iPad | Retropa",
    "description": "Jouez à vos propres jeux WonderSwan .ws sur iPhone et iPad. Cœur Ares, orientation verticale, étapes d'import et dépannage pour une console portable peu répandue.",
    "summary": "Retropa fait tourner les jeux WonderSwan à partir de vos propres fichiers .ws sur le cœur Ares, y compris dans l'orientation verticale pour laquelle le matériel a été conçu.",
    "sections": [
      {
        "title": "Préparez un fichier .ws",
        "body": "Les jeux WonderSwan utilisent l'extension .ws, tandis que la WonderSwan Color utilise .wsc. Retropa n'inclut ni jeu ni fichier BIOS ; préparez donc le fichier et conservez une copie de secours.",
        "points": [
          ".ws correspond à la WonderSwan ; .wsc à la WonderSwan Color.",
          "Les deux sont des systèmes différents aux capacités différentes.",
          "Renommer ne fait pas passer un jeu au modèle couleur."
        ]
      },
      {
        "title": "Le cœur Ares",
        "body": "Ares gère la WonderSwan et la WonderSwan Color dans Retropa, aux côtés d'autres systèmes portables. Si un titre refuse de démarrer, vérifiez que le fichier est une image propre et que le système détecté correspond à l'extension du fichier avant de modifier des réglages."
      },
      {
        "title": "Import et premier lancement",
        "body": "Stockez le fichier en local, puis sélectionnez-le depuis l'entrée d'import de la bibliothèque Retropa. Vérifiez l'image, le son et les commandes par défaut avant d'appliquer un skin ou un préréglage d'affichage."
      },
      {
        "title": "Une portable pensée pour être tenue verticalement",
        "body": "La WonderSwan a été conçue pour fonctionner dans les deux orientations, et de nombreux titres ont été pensés pour le jeu vertical. Retropa prend en charge les dispositions en portrait : vérifiez donc si le jeu auquel vous jouez attend un écran pivoté avant de conclure que l'image est incorrecte.",
        "points": [
          "Essayez le portrait autant que le paysage.",
          "Tous les titres n'utilisent pas la même orientation.",
          "Vérifiez que toutes les entrées sont accessibles dans l'orientation choisie."
        ]
      },
      {
        "title": "Traitement d'affichage",
        "body": "La WonderSwan utilisait une dalle monochrome réfléchissante à la structure de pixels bien particulière. Un préréglage LCD Grid a tendance à lui correspondre, tandis qu'un préréglage CRT paraîtra plus lourd que le matériel d'origine. Les filtres avancés s'adaptent à la zone de sortie réelle.",
        "points": [
          "Utilisez l'image d'origine comme référence.",
          "Les filtres avancés nécessitent Retropa Plus."
        ]
      },
      {
        "title": "Quand un jeu WonderSwan refuse de démarrer",
        "body": "Vérifiez l'extension, le système détecté et l'erreur exacte. Installer un fichier .wsc comme WonderSwan, ou l'inverse, est une confusion courante. Laissez le fichier d'origine intact pendant les tests.",
        "points": [
          "Notez la version de l'app, le système détecté, le cœur et l'erreur.",
          "N'envoyez pas de fichiers ROM ou BIOS commerciaux au support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "Le modèle couleur change-t-il le fichier ?",
        "answer": "Oui. La WonderSwan et la WonderSwan Color utilisent des extensions différentes, et un titre couleur peut ne pas se comporter correctement sur le système monochrome."
      },
      {
        "id": "orientation",
        "question": "Pourquoi l'écran semble-t-il pivoté ?",
        "answer": "De nombreux titres WonderSwan ont été conçus pour le jeu vertical. Essayez la disposition en portrait avant de supposer que l'image est incorrecte."
      }
    ],
    "related": [
      "gb-emulator",
      "gbc-emulator",
      "neogeo-pocket-emulator"
    ]
  },
  "neogeo-pocket-emulator": {
    "kind": "system",
    "slug": "neogeo-pocket-emulator",
    "label": "Neo Geo Pocket",
    "title": "Émulateur Neo Geo Pocket pour iPhone et iPad | Retropa",
    "description": "Lancez vos propres jeux Neo Geo Pocket .ngp et .ngpc sur iPhone et iPad. Couverture des cœurs, commandes de type joystick et différences avec l'arcade Neo Geo.",
    "summary": "Retropa fait tourner les jeux Neo Geo Pocket et Neo Geo Pocket Color à partir de vos propres fichiers sur le cœur Ares, indépendamment de l'émulation arcade Neo Geo.",
    "sections": [
      {
        "title": "La Neo Geo Pocket n'est pas de l'arcade Neo Geo",
        "body": "La Neo Geo Pocket et la Neo Geo Pocket Color sont des consoles portables. Elles partagent une marque avec le matériel arcade Neo Geo MVS et AES, mais ce sont des systèmes entièrement différents, avec des fichiers et des cœurs distincts. La prise en charge de l'arcade dans Retropa nécessite Plus ; l'émulation Pocket, non.",
        "points": [
          ".ngp correspond à la Neo Geo Pocket ; .ngpc et .ngc au modèle couleur.",
          "Un neogeo.zip d'arcade n'est pas un jeu Pocket.",
          "Les bibliothèques arcade et Pocket sont distinctes."
        ]
      },
      {
        "title": "Préparez le bon fichier",
        "body": "Vérifiez l'extension avant d'importer. Un jeu Pocket est une image portable unique, alors qu'un ensemble arcade Neo Geo se compose généralement de plusieurs fichiers de puces, plus un BIOS facultatif. Confondre les deux est l'erreur la plus fréquente avec ce système."
      },
      {
        "title": "Le cœur Ares",
        "body": "Ares gère la Neo Geo Pocket et la Neo Geo Pocket Color aux côtés d'autres plateformes portables dans Retropa. Si un jeu ne démarre pas, vérifiez l'extension et le système détecté, puis demandez-vous si le fichier est bien une image propre."
      },
      {
        "title": "Un stick à microcommutateurs, pas une croix directionnelle",
        "body": "La Neo Geo Pocket utilisait un stick cliquable à microcommutateurs plutôt qu'une croix directionnelle classique. En pratique, les diagonales précises comptent donc plus que d'habitude : lorsque vous testez une disposition tactile, vérifiez que les entrées en diagonale sont bien prises en compte, et pas seulement les quatre directions cardinales.",
        "points": [
          "Testez explicitement les diagonales.",
          "Vérifiez que les deux boutons d'action restent confortables lors de longues sessions.",
          "Une manette physique appairée est utile pour les jeux de combat."
        ]
      },
      {
        "title": "Traitement d'affichage",
        "body": "La dalle couleur de la Pocket est petite et de faible résolution : un traitement LCD léger lui convient donc généralement mieux qu'un préréglage CRT marqué. Les filtres avancés de Retropa travaillent à partir de la zone de sortie réelle plutôt que d'exiger un multiple entier.",
        "points": [
          "Comparez avec l'image d'origine.",
          "Les filtres avancés nécessitent Retropa Plus."
        ]
      },
      {
        "title": "Quand un jeu Pocket refuse de démarrer",
        "body": "Confirmez l'extension, le système détecté et l'erreur exacte. Si vous avez des fichiers arcade dans la bibliothèque, vérifiez que vous n'en avez pas sélectionné un. Laissez le fichier d'origine intact pendant le diagnostic.",
        "points": [
          "Notez la version de l'app, le système détecté, le cœur et l'erreur.",
          "N'envoyez pas de fichiers ROM ou BIOS commerciaux au support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "Puis-je jouer à des jeux d'arcade Neo Geo ici ?",
        "answer": "C'est un système distinct, avec ses propres cœurs et fichiers. Retropa prend en charge les familles arcade, qui nécessitent Retropa Plus ; l'émulation Neo Geo Pocket est séparée."
      },
      {
        "id": "neogeo-zip",
        "question": "Ai-je besoin d'un neogeo.zip pour les jeux Pocket ?",
        "answer": "Non. Ce fichier concerne le matériel arcade Neo Geo. Les jeux Pocket ne l'utilisent pas."
      }
    ],
    "related": [
      "neogeo-emulator",
      "wonderswan-emulator",
      "gbc-emulator"
    ]
  },
  "neogeo-emulator": {
    "kind": "system",
    "slug": "neogeo-emulator",
    "label": "Neo Geo",
    "title": "Émulateur Neo Geo pour iPhone et iPad | Retropa",
    "description": "Jouez aux fichiers arcade Neo Geo MVS pris en charge sur iPhone et iPad avec Retropa. Structure des ensembles, BIOS requis, ensembles parent et clone, et vérifications quand un jeu refuse de démarrer.",
    "summary": "Retropa fait tourner les ensembles arcade Neo Geo pris en charge sur iPhone et iPad, avec des commandes tactiles et externes et des filtres CRT. Le jeu arcade nécessite Retropa Plus ; les jeux et fichiers BIOS ne sont pas inclus.",
    "sections": [
      {
        "title": "L'arcade Neo Geo nécessite Plus",
        "body": "L'émulation arcade Neo Geo fait partie de la famille arcade de Retropa, et les cœurs arcade nécessitent Retropa Plus. Cette partie est distincte de la Neo Geo Pocket, un système portable couvert par la prise en charge Pocket standard.",
        "points": [
          "Les familles arcade nécessitent Retropa Plus.",
          "La Neo Geo Pocket est un système portable différent.",
          "Dans tous les cas, les jeux et fichiers BIOS ne sont pas inclus."
        ]
      },
      {
        "title": "Un ensemble arcade n'est pas un seul fichier",
        "body": "L'émulation de console signifie généralement un fichier par jeu. Le matériel arcade fonctionne autrement : un jeu est un ensemble de fichiers de puces, souvent regroupés dans un ZIP, et de nombreux jeux dépendent d'un ensemble parent ou d'un BIOS. C'est pourquoi un ZIP arcade se comporte différemment d'une ROM de console portable.",
        "points": [
          "Gardez le ZIP intact, sauf si le flux d'import vous demande de le décompresser.",
          "Une archive BIOS distincte peut être nécessaire.",
          "Un ensemble clone peut ne pas contenir tous les fichiers dont le cœur a besoin."
        ]
      },
      {
        "title": "Import et premier lancement",
        "body": "Sélectionnez l'ensemble depuis l'entrée d'import de la bibliothèque Retropa, puis lancez-le avec la disposition par défaut. Si le cœur signale un fichier ou un BIOS manquant, lisez ce message avec précision : un ensemble parent manquant et un BIOS manquant demandent des corrections différentes.",
        "points": [
          "Lisez l'erreur exacte avant de modifier quoi que ce soit.",
          "Conservez l'archive d'origine pendant le diagnostic.",
          "Vérifiez que les entrées de pièce et de départ sont accessibles."
        ]
      },
      {
        "title": "Les fichiers Neo Geo Pocket ne fonctionneront pas ici",
        "body": "Si vous avez des fichiers .ngp ou .ngpc, ceux-ci appartiennent aux systèmes Pocket et non à la famille arcade. Une ROM Pocket ou un ZIP renommé ne peut pas remplacer un ensemble arcade, et l'inverse est vrai aussi.",
        "points": [
          ".ngp et .ngpc sont des fichiers Pocket portables.",
          "Les ensembles arcade comportent plusieurs fichiers et peuvent nécessiter un BIOS.",
          "Vérifiez le système détecté avant de signaler un problème."
        ]
      },
      {
        "title": "Commandes et affichage arcade",
        "body": "Le matériel arcade attend un joystick et plusieurs boutons d'action, et de nombreux titres reposent sur des appuis simultanés. Retropa prend en charge les commandes à l'écran et les manettes externes compatibles, et propose des traitements CRT adaptés à la sortie arcade. Les filtres avancés nécessitent Plus.",
        "points": [
          "Appairez la manette dans iOS avant de la configurer.",
          "Testez une diagonale et un bouton en même temps.",
          "Les préréglages CRT conviennent généralement mieux à la sortie arcade qu'une grille brute."
        ]
      },
      {
        "title": "Quand un jeu Neo Geo refuse de démarrer",
        "body": "Vérifiez la carte sélectionnée, le contenu de l'ensemble et toute exigence de BIOS signalée par le cœur. Un ensemble clone isolé, sans son parent, ou un ensemble auquel il manque un fichier requis ne démarrera pas, quel que soit le filtre ou le skin appliqué.",
        "points": [
          "Notez la version de l'app, la carte sélectionnée, le cœur et l'erreur exacte.",
          "Changer de filtre ou de skin ne peut pas corriger des données ROM manquantes.",
          "Ne joignez pas de fichiers ROM ou BIOS commerciaux à une demande d'assistance."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "Pourquoi les cœurs arcade nécessitent-ils Plus ?",
        "answer": "Les familles arcade font partie des fonctionnalités payantes, aux côtés des skins premium et des filtres avancés. Les systèmes Pocket et à cartouche ne l'exigent pas."
      },
      {
        "id": "bios",
        "question": "Ai-je besoin d'un BIOS Neo Geo ?",
        "answer": "De nombreux ensembles arcade en attendent un, et le cœur vous indiquera s'il est absent. Utilisez un BIOS que vous êtes en droit d'utiliser ; Retropa ne fournit aucun téléchargement."
      },
      {
        "id": "pocket-confusion",
        "question": "La Neo Geo Pocket, est-ce la même chose ?",
        "answer": "Non. La Pocket est une console portable avec ses propres fichiers. Un ensemble arcade et un jeu Pocket ne sont pas interchangeables."
      }
    ],
    "related": [
      "neogeo-pocket-emulator",
      "arcade",
      "snes-emulator"
    ]
  },
  "mgba-core": {
    "kind": "core",
    "slug": "mgba-core",
    "label": "mGBA",
    "title": "Cœur mGBA sur iPhone et iPad | Retropa",
    "description": "Utilisez mGBA dans Retropa pour la Game Boy, la Game Boy Color et la Game Boy Advance. Formats du catalogue, vérifications au premier lancement, précautions de sauvegarde et changement de cœur avec Plus.",
    "summary": "mGBA couvre la famille Game Boy dans Retropa. Commencez avec la disposition par défaut et l'image d'origine, puis vérifiez une véritable scène de jeu avant de modifier les réglages de présentation.",
    "sections": [
      {
        "title": "Systèmes et formats du catalogue",
        "body": "Projet amont mGBA : https://github.com/mgba-emu/mgba. La couverture ci-dessous provient du catalogue de Retropa, et non de la liste complète des fonctionnalités du projet amont. Une extension référencée ne garantit pas la compatibilité avec chaque titre. Retropa ne fournit ni jeu ni fichier BIOS ; n'importez que les fichiers que vous êtes en droit d'utiliser.",
        "points": [
          "Game Boy : .gb",
          "Game Boy Color : .gbc",
          "Game Boy Advance : .gba"
        ]
      },
      {
        "title": "Premier lancement à travers les générations de portables",
        "body": "Téléchargez votre fichier en local dans Fichiers, importez-le depuis la bibliothèque Retropa et confirmez le système détecté. Un titre Game Boy Color a besoin de son chemin matériel couleur ; changer le nom du fichier n'est pas un moyen d'ajouter ou de retirer des fonctions couleur. Pour la Game Boy Advance, testez L et R ainsi que les boutons d'action, car une disposition conçue pour les portables plus anciennes peut les omettre.",
        "points": [
          "Vérifiez le son et les entrées après l'écran-titre.",
          "Testez le skin par défaut avant d'importer une disposition personnalisée.",
          "Conservez le fichier d'origine en dehors de l'app."
        ]
      },
      {
        "title": "Séparer l'émulation des effets d'affichage",
        "body": "Si une scène paraît incorrecte, comparez-la d'abord avec les filtres désactivés. Un traitement à écran vert modifie délibérément les couleurs et une grille LCD modifie délibérément l'aspect des pixels. Ces effets ne permettent pas d'établir si mGBA affiche le jeu de façon incorrecte. Pour un problème de son ou de rythme, notez une scène reproductible et la version de l'app plutôt que de juger uniquement le logo d'ouverture."
      },
      {
        "title": "Changement de cœur et conservation de la progression",
        "body": "Changer le cœur d'émulation nécessite Retropa Plus, même lorsque le système portable lui-même est disponible sans achat. Ne comparez que des cœurs qui couvrent à la fois le système et le format de fichier. La sélection est mémorisée jeu par jeu ; sauvegardez la sauvegarde interne du jeu et les états de sauvegarde du cœur d'origine avant de tester la même scène pour comparer le son, l'image et les entrées.",
        "points": [
          "Les états de sauvegarde enregistrent l'état interne d'un cœur précis ; n'attendez pas de compatibilité entre cœurs.",
          "Sauvegardez et vérifiez aussi les sauvegardes internes ; la migration automatique n'est pas garantie.",
          "Changer de cœur ne convertit pas le fichier de jeu et ne fournit pas un BIOS manquant."
        ]
      },
      {
        "title": "Les limites du périmètre portable",
        "body": "mGBA n'est pas la voie Nintendo DS dans Retropa. Un fichier DS a besoin du cœur DS du catalogue, et non d'une image Game Boy Advance renommée. De même, un état de sauvegarde issu d'un autre émulateur n'est pas un fichier de jeu et ne doit pas être importé comme tel. Suivez l'invite BIOS du système sélectionné si elle apparaît ; Retropa ne fournit pas de firmware."
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "Puis-je changer de cœur pour un seul jeu ?",
        "answer": "Oui, avec Retropa Plus. La sélection est enregistrée jeu par jeu, mais sauvegardez vos données avant de la modifier et n'attendez pas que les états fonctionnent d'un cœur à l'autre."
      },
      {
        "id": "display",
        "question": "Un autre filtre réglera-t-il un problème de compatibilité ?",
        "answer": "Non. Testez d'abord avec l'image d'origine. Un filtre change la présentation, pas le matériel émulé ni le contenu du fichier de jeu."
      }
    ],
    "related": [
      "skyemu-core",
      "sameboy-core",
      "gb-emulator",
      "plus"
    ]
  },
  "skyemu-core": {
    "kind": "core",
    "slug": "skyemu-core",
    "label": "SkyEmu",
    "title": "Cœur SkyEmu sur iPhone et iPad | Retropa",
    "description": "SkyEmu couvre la famille Game Boy et la voie bêta Nintendo DS dans Retropa. Vérifiez les formats, les commandes tactiles à deux écrans, les limites et le changement de cœur avec Plus.",
    "summary": "SkyEmu gère la voie bêta Nintendo DS ainsi que les portables Game Boy dans Retropa. La couverture DS est en bêta : elle ne promet pas que chaque titre ou chaque interaction tactile fonctionne correctement.",
    "sections": [
      {
        "title": "Systèmes et formats du catalogue",
        "body": "Projet amont SkyEmu : https://github.com/skylersaleh/SkyEmu. La couverture ci-dessous provient du catalogue de Retropa, et non de la liste complète des fonctionnalités du projet amont. Une extension référencée ne garantit pas la compatibilité avec chaque titre. Retropa ne fournit ni jeu ni fichier BIOS ; n'importez que les fichiers que vous êtes en droit d'utiliser.",
        "points": [
          "Game Boy : .gb",
          "Game Boy Color : .gbc",
          "Game Boy Advance : .gba",
          "Nintendo DS : .nds"
        ]
      },
      {
        "title": "La Nintendo DS est une voie bêta",
        "body": "Considérez la compatibilité DS comme propre à chaque titre. Importez un fichier téléchargé en local, confirmez que la Nintendo DS a été détectée, puis testez au-delà de l'écran d'ouverture. Vérifiez une scène avec entrée tactile et une scène avec du son avant de vous engager dans une longue session. Notez la version de l'app et l'échec exact si un titre se fige ; changer de skin ne peut pas réparer un problème de compatibilité du cœur.",
        "points": [
          "Le catalogue ne référence que SkyEmu pour la Nintendo DS.",
          "Le changement de cœur avec Plus ne crée pas un cœur DS alternatif.",
          "Conservez des sauvegardes indépendantes pendant l'évaluation du comportement bêta."
        ]
      },
      {
        "title": "Deux écrans et des entrées tactiles",
        "body": "Choisissez une disposition qui laisse les deux écrans visibles. Le portrait peut les empiler verticalement ; le paysage dépend du skin. Testez les petites cibles tactiles à la taille à laquelle vous jouez réellement et vérifiez quel écran reçoit les entrées tactiles. Une manette physique peut gérer les boutons configurés, mais ne peut pas remplacer chaque interaction tactile.",
        "points": [
          "Testez les deux écrans, pas seulement la vue de jeu principale.",
          "Laissez les commandes tactiles accessibles même avec une manette externe.",
          "Un skin de portable à un seul écran ne constitue pas une disposition DS."
        ]
      },
      {
        "title": "Utiliser SkyEmu pour les portables plus anciennes",
        "body": "La famille Game Boy utilise des dispositions à un seul écran. Confirmez le système détecté et utilisez un skin approprié avant d'enquêter sur des problèmes de couleur ou de boutons manquants. ZIP et RetroPack sont des conteneurs d'import, et non des systèmes émulés supplémentaires ; le fichier qu'ils contiennent doit tout de même correspondre au catalogue. Renommer un fichier Game Boy Advance n'en fait pas un jeu DS."
      },
      {
        "title": "Changement de cœur et conservation de la progression",
        "body": "Changer le cœur d'émulation nécessite Retropa Plus, même lorsque le système portable lui-même est disponible sans achat. Ne comparez que des cœurs qui couvrent à la fois le système et le format de fichier. La sélection est mémorisée jeu par jeu ; sauvegardez la sauvegarde interne du jeu et les états de sauvegarde du cœur d'origine avant de tester la même scène pour comparer le son, l'image et les entrées.",
        "points": [
          "Les états de sauvegarde enregistrent l'état interne d'un cœur précis ; n'attendez pas de compatibilité entre cœurs.",
          "Sauvegardez et vérifiez aussi les sauvegardes internes ; la migration automatique n'est pas garantie.",
          "Changer de cœur ne convertit pas le fichier de jeu et ne fournit pas un BIOS manquant."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "Quel cœur fait tourner les jeux Nintendo DS ?",
        "answer": "SkyEmu est la voie bêta Nintendo DS référencée au catalogue de Retropa. La compatibilité dépend de chaque titre et le catalogue ne liste aucun autre cœur DS."
      },
      {
        "id": "touch",
        "question": "Les jeux DS ont-ils encore besoin du tactile avec une manette ?",
        "answer": "Oui. Gardez l'écran tactile accessible pour les jeux qui l'utilisent ; une manette ne remplace pas toutes les actions tactiles."
      }
    ],
    "related": [
      "mgba-core",
      "ds-emulator",
      "game-wont-load",
      "plus"
    ]
  },
  "sameboy-core": {
    "kind": "core",
    "slug": "sameboy-core",
    "label": "SameBoy",
    "title": "Cœur SameBoy sur iPhone et iPad | Retropa",
    "description": "SameBoy se concentre sur la Game Boy et la Game Boy Color dans Retropa. Vérifiez le comportement des couleurs, le périmètre des fichiers, les limites des états de sauvegarde et l'exigence de Plus pour changer de cœur.",
    "summary": "SameBoy se concentre sur le matériel Game Boy monochrome et couleur d'origine. Son périmètre plus étroit en fait un point de comparaison utile, sans garantir pour autant que les autres cœurs soient moins précis.",
    "sections": [
      {
        "title": "Systèmes et formats du catalogue",
        "body": "Projet amont SameBoy : https://github.com/LIJI32/SameBoy. La couverture ci-dessous provient du catalogue de Retropa, et non de la liste complète des fonctionnalités du projet amont. Une extension référencée ne garantit pas la compatibilité avec chaque titre. Retropa ne fournit ni jeu ni fichier BIOS ; n'importez que les fichiers que vous êtes en droit d'utiliser.",
        "points": [
          "Game Boy : .gb",
          "Game Boy Color : .gbc"
        ]
      },
      {
        "title": "Vérifiez les couleurs sans filtre",
        "body": "Importez votre fichier stocké en local et vérifiez si Retropa l'identifie comme Game Boy ou Game Boy Color. Partez de l'image d'origine : un traitement DMG peut délibérément donner un aspect monochrome à un titre couleur. Utilisez une scène aux changements de couleurs connus et comparez la même scène, plutôt que deux moments différents du jeu."
      },
      {
        "title": "Tester le rythme et les entrées",
        "body": "Utilisez le skin par défaut pour vérifier la croix directionnelle, A, B, Start et Select. Si le rythme ou le son semble incorrect, notez précisément quand cela se produit et si le problème persiste avec les effets d'affichage désactivés. Avec Retropa Plus, une comparaison avec un autre cœur compatible peut aider à isoler l'implémentation, mais une différence visible ne prouve pas à elle seule quel cœur correspond au matériel."
      },
      {
        "title": "Changement de cœur et conservation de la progression",
        "body": "Changer le cœur d'émulation nécessite Retropa Plus, même lorsque le système portable lui-même est disponible sans achat. Ne comparez que des cœurs qui couvrent à la fois le système et le format de fichier. La sélection est mémorisée jeu par jeu ; sauvegardez la sauvegarde interne du jeu et les états de sauvegarde du cœur d'origine avant de tester la même scène pour comparer le son, l'image et les entrées.",
        "points": [
          "Les états de sauvegarde enregistrent l'état interne d'un cœur précis ; n'attendez pas de compatibilité entre cœurs.",
          "Sauvegardez et vérifiez aussi les sauvegardes internes ; la migration automatique n'est pas garantie.",
          "Changer de cœur ne convertit pas le fichier de jeu et ne fournit pas un BIOS manquant."
        ]
      },
      {
        "title": "Ce n'est pas un cœur Game Boy Advance",
        "body": "SameBoy ne couvre pas la Game Boy Advance dans Retropa. Utilisez un cœur du catalogue compatible GBA pour une image GBA ; changer son extension n'en fait pas un jeu Game Boy. De même, passer à SameBoy ne rendra pas transférable un état de sauvegarde produit par un autre cœur. Conservez l'ancien état et testez séparément une sauvegarde interne du jeu."
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "SameBoy peut-il faire tourner des jeux Game Boy Advance ?",
        "answer": "Non. L'entrée SameBoy du catalogue de Retropa couvre la Game Boy et la Game Boy Color, pas la Game Boy Advance."
      },
      {
        "id": "why",
        "question": "Quand comparer SameBoy avec un autre cœur ?",
        "answer": "Avec Retropa Plus, comparez un problème reproductible de rythme, de couleur ou de son après avoir vérifié le fichier et désactivé les filtres. Sauvegardez vos données au préalable."
      }
    ],
    "related": [
      "mgba-core",
      "gb-emulator",
      "gbc-emulator",
      "plus"
    ]
  },
  "rusticones-core": {
    "kind": "core",
    "slug": "rusticones-core",
    "label": "RusticoNES",
    "title": "Cœur RusticoNES pour la NES sur iPhone et iPad | Retropa",
    "description": "RusticoNES dans Retropa : formats cartouche et disquette NES et Famicom, vérification des mappers, premier lancement, précautions de sauvegarde et changement de cœur avec Plus.",
    "summary": "RusticoNES est la voie d'exécution NES par défaut de Retropa. Utilisez-la pour les formats NES et Famicom référencés au catalogue, en vérifiant les métadonnées de cartouche et les exigences de disquette avant de prendre un échec de démarrage pour un problème d'affichage.",
    "sections": [
      {
        "title": "Systèmes et formats du catalogue",
        "body": "Projet amont RusticoNES : https://github.com/zeta0134/rustico. La couverture ci-dessous provient du catalogue de Retropa, et non de la liste complète des fonctionnalités du projet amont. Une extension référencée ne garantit pas la compatibilité avec chaque titre. Retropa ne fournit ni jeu ni fichier BIOS ; n'importez que les fichiers que vous êtes en droit d'utiliser.",
        "points": [
          "NES / Famicom : .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "Cartouches, UNIF et images de disquette",
        "body": "Une image de cartouche NES / Famicom et une image Famicom Disk System sont deux entrées différentes. UNIF est un format de conteneur de cartouche, et non un autre nom pour un en-tête iNES. Préservez l'en-tête et l'extension d'origine lors de l'import ; renommer le fichier ou en retirer des octets pour lui donner l'apparence d'un autre format peut supprimer des informations servant à identifier sa carte.",
        "points": [
          "Conservez une copie distincte de l'image d'origine.",
          "Lisez toute invite de BIOS liée au système à disquette ; Retropa ne fournit pas le BIOS.",
          "Les formats audio NSF ne sont pas référencés pour RusticoNES ; vérifiez plutôt du côté de TetaNES."
        ]
      },
      {
        "title": "Premier lancement et vérification des commandes",
        "body": "Téléchargez l'image en local dans Fichiers, importez-la via la bibliothèque Retropa et confirmez que la NES a été détectée. Commencez avec le skin par défaut et sans effet d'affichage. Testez la croix directionnelle, A, B, Start et Select, y compris les diagonales et les appuis simultanés. Une entrée absente dans une disposition personnalisée ne prouve pas que le mapper est défectueux."
      },
      {
        "title": "Quand une cartouche échoue alors que d'autres fonctionnent",
        "body": "Les cartouches NES peuvent embarquer différents matériels de mapper. Une extension reconnue ne prouve pas que la carte utilisée par un jeu précis soit implémentée. Notez l'erreur exacte et, si les métadonnées de votre propre dump le permettent, le mapper et la région. Ne modifiez pas les en-têtes au hasard et ne partez pas du principe qu'un BIOS corrigera un problème de carte de cartouche. Pour les jeux sur disquette, distinguez un BIOS manquant de données de disquette manquantes."
      },
      {
        "title": "Changement de cœur et conservation de la progression",
        "body": "Changer le cœur d'émulation nécessite Retropa Plus, même lorsque le système portable lui-même est disponible sans achat. Ne comparez que des cœurs qui couvrent à la fois le système et le format de fichier. La sélection est mémorisée jeu par jeu ; sauvegardez la sauvegarde interne du jeu et les états de sauvegarde du cœur d'origine avant de tester la même scène pour comparer le son, l'image et les entrées.",
        "points": [
          "Les états de sauvegarde enregistrent l'état interne d'un cœur précis ; n'attendez pas de compatibilité entre cœurs.",
          "Sauvegardez et vérifiez aussi les sauvegardes internes ; la migration automatique n'est pas garantie.",
          "Changer de cœur ne convertit pas le fichier de jeu et ne fournit pas un BIOS manquant."
        ]
      },
      {
        "title": "Ne comparez que les formats qui se recoupent",
        "body": "La page du système NES liste l'union des formats pris en charge par ses cœurs, et non la promesse que chaque cœur les accepte tous. Avant d'utiliser Plus pour comparer RusticoNES avec TetaNES ou JGenesis, vérifiez les deux entrées du catalogue pour le format du fichier d'origine. Gardez la même scène et les réglages d'affichage par défaut, pour qu'un skin ou un filtre modifié ne masque pas le résultat."
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "RusticoNES est-il le cœur référencé pour l'audio NSF ?",
        "answer": "Non. Le catalogue de Retropa référence NSF et NSFE sous TetaNES, pas sous RusticoNES. Les fichiers audio ne sont pas des jeux sur cartouche jouables."
      },
      {
        "id": "mapper",
        "question": "Une extension prise en charge garantit-elle qu'un jeu démarrera ?",
        "answer": "Non. Le mapper de la cartouche, l'intégrité du fichier et les éventuelles exigences liées au système à disquette comptent toujours. Notez l'erreur exacte avant de modifier le fichier."
      }
    ],
    "related": [
      "nes-emulator",
      "tetanes-core",
      "jgenesis-core",
      "plus"
    ]
  },
  "tetanes-core": {
    "kind": "core",
    "slug": "tetanes-core",
    "label": "TetaNES",
    "title": "Cœur TetaNES pour la NES sur iPhone et iPad | Retropa",
    "description": "TetaNES dans Retropa : jeux NES / Famicom, images de disquette et audio NSF, vérifications selon le format, configuration des commandes et exigence de Plus pour changer de cœur.",
    "summary": "TetaNES est un cœur NES alternatif dans Retropa, avec une couverture catalogue des cartouches, des disquettes et des fichiers musicaux. Vérifiez le type de fichier importé avant d'attendre un écran de jeu classique.",
    "sections": [
      {
        "title": "Systèmes et formats du catalogue",
        "body": "Projet amont TetaNES : https://github.com/lukexor/tetanes. La couverture ci-dessous provient du catalogue de Retropa, et non de la liste complète des fonctionnalités du projet amont. Une extension référencée ne garantit pas la compatibilité avec chaque titre. Retropa ne fournit ni jeu ni fichier BIOS ; n'importez que les fichiers que vous êtes en droit d'utiliser.",
        "points": [
          "NES / Famicom : .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "Les fichiers musicaux ne sont pas des jeux sur cartouche",
        "body": "NSF et NSFE contiennent des données musicales NES. Si vous en avez importé un, l'absence d'un niveau de jeu classique n'est pas en soi un échec. Vérifiez la sortie audio et les commandes que l'app expose réellement ; ne partez pas du principe qu'une interface de lecteur musical issue du projet amont sur ordinateur est présente dans Retropa. Pour jouer, commencez par une cartouche ou une image de disquette que vous êtes en droit d'utiliser.",
        "points": [
          "Vérifiez le volume de l'appareil et la sortie audio lors du test d'un fichier musical.",
          "Renommer un fichier audio ne peut pas le transformer en image de cartouche.",
          "Les extensions UNIF relèvent de l'entrée catalogue de RusticoNES, pas de celle de TetaNES."
        ]
      },
      {
        "title": "Importez une cartouche ou une image de disquette",
        "body": "Téléchargez le fichier sur l'appareil avant d'utiliser l'entrée d'import de la bibliothèque. Confirmez la détection NES et laissez l'image d'origine inchangée. Famicom est le nom japonais du système ; le Famicom Disk System ajoute des exigences propres aux disquettes. Si le cœur sélectionné signale un problème de BIOS ou de données de disquette, répondez à cette exigence précise au lieu de remplacer le fichier par une image de cartouche sans rapport."
      },
      {
        "title": "Testez les entrées et une scène reproductible",
        "body": "Utilisez une disposition NES / Famicom avec la croix directionnelle, deux boutons d'action, Start et Select. Confirmez les diagonales avec le skin par défaut, puis testez une scène qui illustre le problème. Comparez avec l'image d'origine avant d'appliquer un effet CRT : les lignes de balayage peuvent modifier le détail perçu sans changer ce que le cœur émule."
      },
      {
        "title": "Changement de cœur et conservation de la progression",
        "body": "Changer le cœur d'émulation nécessite Retropa Plus, même lorsque le système portable lui-même est disponible sans achat. Ne comparez que des cœurs qui couvrent à la fois le système et le format de fichier. La sélection est mémorisée jeu par jeu ; sauvegardez la sauvegarde interne du jeu et les états de sauvegarde du cœur d'origine avant de tester la même scène pour comparer le son, l'image et les entrées.",
        "points": [
          "Les états de sauvegarde enregistrent l'état interne d'un cœur précis ; n'attendez pas de compatibilité entre cœurs.",
          "Sauvegardez et vérifiez aussi les sauvegardes internes ; la migration automatique n'est pas garantie.",
          "Changer de cœur ne convertit pas le fichier de jeu et ne fournit pas un BIOS manquant."
        ]
      },
      {
        "title": "Une alternative n'est pas une réparation universelle",
        "body": "TetaNES et RusticoNES ont des listes de formats et des implémentations différentes. Un changement de cœur peut aider à isoler un problème de rythme ou de mapper uniquement lorsque le fichier est valide pour les deux ; il ne peut pas garantir la prise en charge d'une carte particulière. Les états de sauvegarde du cœur précédent doivent rester sauvegardés avec ce cœur plutôt que d'être traités comme des fichiers interchangeables."
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "Pourquoi mon fichier NSF n'affiche-t-il pas de jeu jouable ?",
        "answer": "NSF contient des données musicales. Testez l'audio au lieu d'attendre un niveau de jeu classique ; utilisez une cartouche ou une image de disquette pour jouer."
      },
      {
        "id": "switch",
        "question": "Puis-je basculer un jeu NES vers TetaNES gratuitement ?",
        "answer": "Changer de cœur d'émulation nécessite Retropa Plus. Vérifiez la couverture des formats du cœur cible et sauvegardez votre progression au préalable."
      }
    ],
    "related": [
      "nes-emulator",
      "rusticones-core",
      "game-wont-load",
      "plus"
    ]
  },
  "lakesnes-core": {
    "kind": "core",
    "slug": "lakesnes-core",
    "label": "LakeSnes",
    "title": "Cœur LakeSnes pour la SNES sur iPhone et iPad | Retropa",
    "description": "LakeSnes dans Retropa : formats SNES / Super Famicom, limites liées aux puces de cartouche, commandes à six boutons, sauvegardes et changement de cœur avec Plus.",
    "summary": "LakeSnes est le cœur de Retropa dédié à la SNES. Son catalogue inclut plusieurs formats d'image et de copieur, mais la reconnaissance d'un fichier et la prise en charge du matériel de cartouche d'un jeu sont deux questions distinctes.",
    "sections": [
      {
        "title": "Systèmes et formats du catalogue",
        "body": "Projet amont LakeSnes : https://github.com/dinkc64/LakeSnes. La couverture ci-dessous provient du catalogue de Retropa, et non de la liste complète des fonctionnalités du projet amont. Une extension référencée ne garantit pas la compatibilité avec chaque titre. Retropa ne fournit ni jeu ni fichier BIOS ; n'importez que les fichiers que vous êtes en droit d'utiliser.",
        "points": [
          "SNES / Super Famicom : .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Préservez l'image et son en-tête",
        "body": "La SNES est connue sous le nom Super Famicom au Japon. Les images de cartouche courantes utilisent les extensions SFC ou SMC ; le catalogue référence aussi d'autres formats de copieur et formats associés. L'extension seule ne prouve pas si un fichier possède un en-tête de copieur ou nécessite un matériel de cartouche particulier. Importez l'image d'origine stockée en local et conservez une sauvegarde, plutôt que de retirer un en-tête comme première étape de dépannage."
      },
      {
        "title": "Vérifiez toute la manette",
        "body": "Après l'import dans la bibliothèque, vérifiez le système détecté et commencez avec la disposition par défaut. La SNES ajoute X, Y, L et R au schéma à deux boutons des portables. Testez les gâchettes, les diagonales et un appui simultané utilisé par le jeu ; un skin séduisant qui omet L ou R peut donner l'impression qu'un jeu fonctionnel est bloqué.",
        "points": [
          "Testez Start et Select ainsi que les six boutons de jeu.",
          "Configurez une manette appairée avant de juger les limites de la disposition tactile.",
          "Utilisez l'image d'origine pour distinguer les problèmes d'entrée des problèmes d'affichage."
        ]
      },
      {
        "title": "Puces de cartouche et formats particuliers",
        "body": "Certains titres SNES dépendent de processeurs de cartouche supplémentaires ou d'un autre matériel. La liste d'extensions du catalogue n'est pas une liste de compatibilité puce par puce, et un fichier BS ou ST reconnu n'établit pas que tous les flux de travail liés aux accessoires soient exposés dans Retropa. Si un seul titre échoue, notez ses exigences matérielles lorsqu'elles sont connues, ainsi que l'erreur exacte. Ne prétendez pas qu'un filtre ou une extension renommée puisse apporter la prise en charge matérielle manquante."
      },
      {
        "title": "Changement de cœur et conservation de la progression",
        "body": "Changer le cœur d'émulation nécessite Retropa Plus, même lorsque le système portable lui-même est disponible sans achat. Ne comparez que des cœurs qui couvrent à la fois le système et le format de fichier. La sélection est mémorisée jeu par jeu ; sauvegardez la sauvegarde interne du jeu et les états de sauvegarde du cœur d'origine avant de tester la même scène pour comparer le son, l'image et les entrées.",
        "points": [
          "Les états de sauvegarde enregistrent l'état interne d'un cœur précis ; n'attendez pas de compatibilité entre cœurs.",
          "Sauvegardez et vérifiez aussi les sauvegardes internes ; la migration automatique n'est pas garantie.",
          "Changer de cœur ne convertit pas le fichier de jeu et ne fournit pas un BIOS manquant."
        ]
      },
      {
        "title": "Comparer LakeSnes avec JGenesis",
        "body": "JGenesis référence aussi la SNES, mais sa couverture des extensions SNES est plus étroite que celle de LakeSnes. Avec Plus, ne comparez qu'un format de fichier listé par les deux entrées. Revenez à la même scène, avec les mêmes commandes et sans filtre, et gardez les états de chaque cœur séparés. Une comparaison réussie sur une cartouche n'établit pas la compatibilité de tous les titres à puce spéciale."
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "Tous les formats de LakeSnes fonctionnent-ils aussi sur JGenesis ?",
        "answer": "Ne le supposez pas. Consultez l'entrée catalogue de chaque cœur ; les formats indiqués au niveau du système cumulent la couverture de plusieurs cœurs."
      },
      {
        "id": "chips",
        "question": "La liste des formats garantit-elle la compatibilité avec les puces spéciales ?",
        "answer": "Non. La reconnaissance du fichier et l'émulation du matériel de cartouche sont deux choses distinctes. Vérifiez l'erreur exacte et le cœur sélectionné avant de modifier l'image."
      }
    ],
    "related": [
      "snes-emulator",
      "jgenesis-core",
      "save-states-and-rewind",
      "plus"
    ]
  },
  "jgenesis-core": {
    "kind": "core",
    "slug": "jgenesis-core",
    "label": "JGenesis",
    "title": "Cœur JGenesis sur iPhone et iPad | Retropa",
    "description": "JGenesis dans Retropa : systèmes Sega et Nintendo référencés au catalogue, appellations Genesis / Mega Drive, limites de formats, détection du système et changement de cœur avec Plus.",
    "summary": "JGenesis dessert plusieurs systèmes via une même famille de cœurs dans Retropa. Le système détecté détermine toujours le matériel, les commandes et le contexte de sauvegarde ; partager un cœur ne rend pas les fichiers interchangeables.",
    "sections": [
      {
        "title": "Systèmes et formats du catalogue",
        "body": "Projet amont JGenesis : https://github.com/jsgroth/jgenesis. La couverture ci-dessous provient du catalogue de Retropa, et non de la liste complète des fonctionnalités du projet amont. Une extension référencée ne garantit pas la compatibilité avec chaque titre. Retropa ne fournit ni jeu ni fichier BIOS ; n'importez que les fichiers que vous êtes en droit d'utiliser.",
        "points": [
          "Game Boy : .gb",
          "Game Boy Color : .gbc",
          "Game Boy Advance : .gba",
          "NES / Famicom : .nes",
          "SNES / Super Famicom : .sfc, .smc",
          "Sega Master System : .sms",
          "Game Gear : .gg",
          "Mega Drive : .md, .smd",
          "Genesis : .gen"
        ]
      },
      {
        "title": "Les appellations Genesis et Mega Drive",
        "body": "Genesis est le nom nord-américain de la console connue sous le nom Mega Drive au Japon et en Europe. Le catalogue de Retropa comporte des entrées sous les deux noms. Les extensions de fichiers sont des indices de format d'image, pas des identifiants de région fiables : un nom de fichier seul ne vous dit rien des exigences de rythme ou de région d'un jeu. Préservez le fichier d'origine et confirmez le système détecté, plutôt que de le renommer pour choisir un marché."
      },
      {
        "title": "Importez pour le bon matériel",
        "body": "Téléchargez votre image en local dans Fichiers et importez-la via la bibliothèque. Avant de démarrer, distinguez la Master System de la Game Gear, et la NES / Famicom de la SNES / Super Famicom. Un cœur multi-systèmes a tout de même besoin du chemin matériel approprié. Si le système détecté est inattendu, vérifiez l'identité du fichier avant de modifier les réglages d'affichage ou de commandes.",
        "points": [
          "La Master System et la Game Gear sont des systèmes apparentés, pas identiques.",
          "Une liste de formats au niveau d'un système peut inclure des formats venant d'autres cœurs.",
          "Le catalogue de Retropa définit le périmètre ici, et non l'ensemble des fonctionnalités du projet JGenesis amont."
        ]
      },
      {
        "title": "Les commandes varient selon le système sélectionné",
        "body": "Pour la Genesis, testez A, B, C et les éventuelles entrées supplémentaires à six boutons proposées par la disposition. Pour la Game Gear, vérifiez Start ; pour la Master System, contrôlez l'entrée de pause. Les dispositions SNES ont besoin de gâchettes que les dispositions NES n'ont pas. Validez une combinaison de manette dans une véritable scène de jeu avant de supposer que le cœur a perdu une entrée."
      },
      {
        "title": "Changement de cœur et conservation de la progression",
        "body": "Changer le cœur d'émulation nécessite Retropa Plus, même lorsque le système portable lui-même est disponible sans achat. Ne comparez que des cœurs qui couvrent à la fois le système et le format de fichier. La sélection est mémorisée jeu par jeu ; sauvegardez la sauvegarde interne du jeu et les états de sauvegarde du cœur d'origine avant de tester la même scène pour comparer le son, l'image et les entrées.",
        "points": [
          "Les états de sauvegarde enregistrent l'état interne d'un cœur précis ; n'attendez pas de compatibilité entre cœurs.",
          "Sauvegardez et vérifiez aussi les sauvegardes internes ; la migration automatique n'est pas garantie.",
          "Changer de cœur ne convertit pas le fichier de jeu et ne fournit pas un BIOS manquant."
        ]
      },
      {
        "title": "La couverture Sega n'implique pas un cœur alternatif",
        "body": "Le catalogue de Retropa référence JGenesis comme seul cœur pour ses systèmes Sega à cartouche. Plus débloque le changement de cœur là où des alternatives existent ; il n'ajoute pas d'implémentation non référencée. La prise en charge multi-systèmes du projet amont n'implique pas non plus que le CD, les matériels additionnels ou chaque option de bureau soient disponibles dans Retropa. Fiez-vous au catalogue et aux invites réelles de l'app pour établir le chemin pris en charge."
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "Une extension .gen prouve-t-elle qu'un jeu est nord-américain ?",
        "answer": "Non. Genesis et Mega Drive sont des noms régionaux, mais une extension n'établit pas de façon fiable la région d'un jeu ni ses exigences de rythme."
      },
      {
        "id": "upstream",
        "question": "Retropa expose-t-il chaque système du projet JGenesis amont ?",
        "answer": "Aucune garantie de ce type n'est apportée. Cette page tire sa couverture du catalogue propre à Retropa, et non de la liste complète des fonctionnalités du projet amont."
      }
    ],
    "related": [
      "sega-genesis-emulator",
      "master-system-emulator",
      "game-gear-emulator",
      "lakesnes-core",
      "plus"
    ]
  },
  "ares-core": {
    "kind": "core",
    "slug": "ares-core",
    "label": "Ares",
    "title": "Cœur Ares sur iPhone et iPad | Retropa",
    "description": "Ares dans Retropa : couverture catalogue GBA, WonderSwan et Neo Geo Pocket, détection des modèles couleur, dispositions pivotées, précautions de sauvegarde et changement de cœur avec Plus.",
    "summary": "Ares couvre une sélection de familles portables dans Retropa. Sa large identité dans le projet amont ne signifie pas que chaque système ou accessoire amont soit intégré à l'app.",
    "sections": [
      {
        "title": "Systèmes et formats du catalogue",
        "body": "Projet amont Ares : https://github.com/ares-emulator/ares. La couverture ci-dessous provient du catalogue de Retropa, et non de la liste complète des fonctionnalités du projet amont. Une extension référencée ne garantit pas la compatibilité avec chaque titre. Retropa ne fournit ni jeu ni fichier BIOS ; n'importez que les fichiers que vous êtes en droit d'utiliser.",
        "points": [
          "Game Boy Advance : .gba",
          "WonderSwan : .ws",
          "WonderSwan Color : .wsc",
          "Neo Geo Pocket : .ngp",
          "Neo Geo Pocket Color : .ngpc, .ngc"
        ]
      },
      {
        "title": "Faites correspondre le modèle monochrome ou couleur",
        "body": "Importez une image téléchargée en local et vérifiez si Retropa a détecté la WonderSwan ou la WonderSwan Color d'origine, et la Neo Geo Pocket ou la Neo Geo Pocket Color. Les modèles couleur disposent de capacités que le matériel monochrome n'a pas. Renommer un fichier n'est pas une conversion et ne peut pas faire tourner un titre exclusivement couleur comme un jeu du modèle d'origine.",
        "points": [
          "Conservez l'image d'origine et une sauvegarde de progression distincte.",
          "Vérifiez le modèle détecté avant de diagnostiquer des problèmes de palette.",
          "Suivez une invite de firmware propre au système si elle apparaît ; aucun BIOS n'est fourni."
        ]
      },
      {
        "title": "L'orientation WonderSwan demande plus que le portrait",
        "body": "Les jeux WonderSwan peuvent être conçus pour le jeu horizontal ou vertical. Vérifiez l'orientation attendue par le jeu, les deux groupes de boutons directionnels et la disposition de skin disponible. Passer le téléphone en portrait ne suffit pas à prouver que l'écran émulé et toutes les commandes ont été pivotés correctement. Si une disposition ne peut pas exposer les entrées nécessaires, utilisez une autre disposition adaptée plutôt que de supposer que le cœur peut les réaffecter automatiquement."
      },
      {
        "title": "La Pocket n'est pas de l'arcade Neo Geo",
        "body": "La Neo Geo Pocket utilise des images portables, et non les ensembles arcade multi-fichiers associés au matériel Neo Geo MVS. Une archive BIOS d'arcade ne peut pas remplacer une image Pocket. Testez les diagonales et les deux boutons d'action avec la disposition par défaut. L'écran Pocket d'origine est monochrome ; seul le modèle Pocket Color doit être censé afficher les graphismes du modèle couleur. L'exécution arcade est une capacité Plus distincte."
      },
      {
        "title": "Changement de cœur et conservation de la progression",
        "body": "Changer le cœur d'émulation nécessite Retropa Plus, même lorsque le système portable lui-même est disponible sans achat. Ne comparez que des cœurs qui couvrent à la fois le système et le format de fichier. La sélection est mémorisée jeu par jeu ; sauvegardez la sauvegarde interne du jeu et les états de sauvegarde du cœur d'origine avant de tester la même scène pour comparer le son, l'image et les entrées.",
        "points": [
          "Les états de sauvegarde enregistrent l'état interne d'un cœur précis ; n'attendez pas de compatibilité entre cœurs.",
          "Sauvegardez et vérifiez aussi les sauvegardes internes ; la migration automatique n'est pas garantie.",
          "Changer de cœur ne convertit pas le fichier de jeu et ne fournit pas un BIOS manquant."
        ]
      },
      {
        "title": "Où la comparaison est possible, et où elle ne l'est pas",
        "body": "Le catalogue liste des alternatives pour la Game Boy Advance, mais ne référence qu'Ares pour les modèles WonderSwan et Neo Geo Pocket. Le changement de cœur avec Plus n'ajoute pas d'autre implémentation pour ces systèmes. Ares a également un périmètre amont bien plus large que cette intégration ; utilisez uniquement la couverture Retropa listée ici, plutôt que de supposer qu'un autre système amont peut être activé en changeant une extension."
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "La prise en charge Pocket d'Ares peut-elle faire tourner mon ensemble arcade Neo Geo ?",
        "answer": "Non. Pocket et l'arcade Neo Geo sont des familles matérielles différentes, avec des exigences de fichiers différentes. L'exécution arcade nécessite Retropa Plus."
      },
      {
        "id": "alternate",
        "question": "Plus ajoute-t-il un autre cœur WonderSwan ou Pocket ?",
        "answer": "Non. Ces systèmes ne référencent actuellement qu'Ares dans le catalogue de Retropa. Le changement de cœur s'applique là où une alternative compatible existe."
      }
    ],
    "related": [
      "wonderswan-emulator",
      "neogeo-pocket-emulator",
      "gba-emulator",
      "plus"
    ]
  },
  "delta-alternative": {
    "kind": "compare",
    "slug": "delta-alternative",
    "label": "Alternative à Delta",
    "title": "Alternative à l'émulateur Delta pour iPhone et iPad | Retropa",
    "description": "Vous cherchez une alternative à Delta sur iPhone et iPad ? Comparez la prise en charge de l'arcade, l'import des skins Delta, les filtres d'affichage et le mode console, y compris les points sur lesquels Delta reste le meilleur choix.",
    "summary": "Retropa est un émulateur arcade et portable pour iPhone et iPad qui importe directement les skins Delta, ajoute les familles arcade et des filtres d'affichage sans échelle entière, et conserve une interface pensée d'abord pour le jeu portable.",
    "sections": [
      {
        "title": "Ce qui est conservé depuis Delta",
        "body": "Changer d'émulateur ne vaut la peine que si votre configuration existante survit au transfert. Retropa importe les paquets .deltaskin de Delta : une disposition que vous avez déjà ajustée n'a donc pas à être reconstruite de zéro. Vérifiez que le paquet cible bien le système et l'orientation avec lesquels vous jouez, puis confirmez que la zone de jeu n'est pas masquée.",
        "points": [
          "Les paquets .deltaskin s'importent directement.",
          "Vérifiez le système visé avant de vous fier à un skin.",
          "La prise en charge du paysage et du portrait dépend du paquet."
        ]
      },
      {
        "title": "Là où Retropa apporte ce que Delta n'a pas",
        "body": "La différence la plus nette est la prise en charge de l'arcade. Retropa fait tourner les familles arcade prises en charge CPS I, CPS II, CPS III, Neo Geo, PGM et M92 aux côtés des systèmes portables : une seule bibliothèque couvre donc les deux. Les cœurs arcade nécessitent Retropa Plus, et les jeux comme les fichiers BIOS ne sont pas inclus.",
        "points": [
          "Les familles arcade dans la même bibliothèque que les portables.",
          "Retropa Plus est requis pour les cœurs arcade.",
          "Les ensembles arcade comportent plusieurs fichiers et peuvent nécessiter un BIOS."
        ]
      },
      {
        "title": "Des filtres d'affichage sans échelle entière imposée",
        "body": "De nombreux filtres rétro supposent que l'image du jeu corresponde à un nombre entier de pixels de l'écran. Sur un iPhone moderne, la zone disponible se divise rarement de façon exacte, ce qui laisse de l'espace inutilisé ou des lignes de balayage irrégulières. Les filtres avancés de Retropa travaillent à partir de la zone de sortie réelle, dans toutes les orientations et tous les types de dispositions. L'app iOS fait référence ; l'aperçu dans le navigateur sur ce site n'est qu'une approximation.",
        "points": [
          "Les filtres changent la présentation, pas la résolution du jeu.",
          "Les filtres avancés nécessitent Retropa Plus.",
          "Les incrustations de lignes de balayage classiques peuvent scintiller à des échelles fractionnaires."
        ]
      },
      {
        "title": "Là où Delta est le meilleur choix",
        "body": "Delta dispose d'une base d'utilisateurs bien plus large, d'un historique plus long sur l'App Store et d'une communauté plus vaste de skins publiés. Si vous voulez l'option la plus répandue, le catalogue de skins existant le plus riche ou le plus grand nombre de tutoriels tiers, Delta est un choix raisonnable, et cette page ne prétendra pas le contraire.",
        "points": [
          "Delta dispose d'une communauté plus large et de plus de contenus tiers.",
          "Delta bénéficie d'un effet de réseau autour des skins.",
          "Retropa est un produit plus récent, avec un catalogue plus restreint."
        ]
      },
      {
        "title": "Essayer les deux ne coûte rien",
        "body": "Les deux apps sont gratuites au téléchargement, avec des achats intégrés facultatifs. L'approche pratique consiste à importer un skin Delta dans Retropa, à charger un jeu portable et un ensemble arcade, puis à décider en fonction du ressenti réel des commandes et de l'image sur votre appareil.",
        "points": [
          "Téléchargement gratuit des deux côtés.",
          "Conservez vos fichiers et vos skins d'origine dans tous les cas.",
          "Jugez sur votre propre appareil, pas sur un tableau comparatif."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Retropa peut-il importer mes skins Delta existants ?",
        "answer": "Oui. Retropa importe les paquets .deltaskin. Conservez le fichier de paquet d'origine et vérifiez qu'il cible le système et l'orientation avec lesquels vous jouez."
      },
      {
        "id": "free",
        "question": "Retropa est-il gratuit ?",
        "answer": "Retropa est gratuit au téléchargement, avec des achats intégrés facultatifs. Les cœurs arcade, les skins premium et les filtres avancés nécessitent Retropa Plus. Les tarifs sont affichés dans l'app."
      },
      {
        "id": "roms",
        "question": "Retropa inclut-il des jeux ?",
        "answer": "Non. Retropa est un émulateur et ne fournit ni jeu ni fichier BIOS. N'importez que du contenu que vous êtes en droit d'utiliser."
      },
      {
        "id": "which-better",
        "question": "Quel émulateur est le meilleur ?",
        "answer": "Ils sont optimisés pour des choses différentes. Delta dispose de la communauté et du catalogue de skins les plus larges ; Retropa ajoute les familles arcade, des filtres sans échelle entière et l'import des skins Delta. Essayez les deux sur votre propre appareil."
      }
    ],
    "attribution": "Delta est un produit tiers. Tous les noms de produits et de sociétés mentionnés sur cette page sont des marques de leurs propriétaires respectifs, et leur utilisation ici sert uniquement à l'identification et à une comparaison factuelle. Retropa n'est affilié à aucune de ces entités, et n'est ni approuvé ni sponsorisé par l'une d'entre elles.",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa face à Delta",
    "title": "Retropa vs Delta : arcade, filtres et skins comparés",
    "description": "Une comparaison directe de Retropa et Delta sur iPhone et iPad : systèmes émulés, prise en charge de l'arcade, compatibilité des skins, filtres d'affichage et ce qui convient le mieux à chacun.",
    "summary": "Retropa et Delta sont tous deux des émulateurs iOS, mais leurs optimisations diffèrent : Delta offre la communauté et le catalogue de skins les plus larges, tandis que Retropa ajoute les familles arcade et des filtres d'affichage sans échelle entière.",
    "sections": [
      {
        "title": "Systèmes émulés",
        "body": "Les deux apps couvrent les systèmes portables que la plupart des gens recherchent. Retropa fait en plus tourner les familles arcade prises en charge, ce qui constitue la différence fonctionnelle la plus importante. Les cœurs arcade nécessitent Retropa Plus ; les systèmes portables, non.",
        "points": [
          "La couverture des portables se recoupe largement.",
          "Les familles arcade sont propres à Retropa.",
          "Le jeu arcade nécessite Plus."
        ]
      },
      {
        "title": "Skins et dispositions",
        "body": "Retropa importe les paquets .deltaskin de Delta : une disposition que vous utilisez déjà peut donc être transférée. Au-delà de cela, l'écosystème de skins publiés de Delta est plus vaste, ce qui compte si parcourir un grand catalogue fait partie de ce que vous recherchez.",
        "points": [
          "Retropa importe les paquets .deltaskin.",
          "Delta dispose du catalogue publié le plus vaste.",
          "Vérifiez toujours qu'un paquet prend en charge votre système et votre orientation."
        ]
      },
      {
        "title": "Filtres d'affichage",
        "body": "Retropa propose des filtres CRT et LCD avancés qui s'adaptent à la zone de sortie réelle au lieu d'exiger un facteur d'échelle entier, et peut utiliser des chaînes de shaders RetroArch, notamment des préréglages .slang et .slangp. Les filtres avancés nécessitent Plus. L'aperçu sur le site web est une approximation ; l'app iOS fait référence.",
        "points": [
          "Aucune exigence d'échelle entière pour les filtres avancés.",
          "La prise en charge des chaînes de shaders RetroArch est référencée pour Retropa.",
          "Les filtres avancés nécessitent Plus."
        ]
      },
      {
        "title": "Communauté, documentation et historique",
        "body": "Delta est présent sur l'App Store depuis plus longtemps, compte bien plus d'utilisateurs et donc bien plus de documentation communautaire, de réponses sur les forums et de guides tiers. Retropa est plus récent et plus petit. Quiconque affirme le contraire ne décrit pas l'état actuel de l'un ou l'autre produit.",
        "points": [
          "Delta a l'historique App Store le plus long.",
          "Delta dispose de plus de réponses communautaires.",
          "Retropa a aujourd'hui la base d'utilisateurs la plus restreinte."
        ]
      },
      {
        "title": "Comment choisir",
        "body": "Si les titres arcade comptent pour vous, ou si vous voulez des filtres d'affichage qui ne supposent pas une échelle en nombre entier, Retropa vaut l'installation. Si vous recherchez le plus grand catalogue de skins et le plus de contenus communautaires, Delta est le choix le plus sûr. Les deux sont gratuits au téléchargement : le conseil honnête est donc de tester les deux avec vos propres fichiers.",
        "points": [
          "Téléchargement gratuit des deux côtés.",
          "Aucun engagement n'est nécessaire pour évaluer l'un ou l'autre.",
          "Les deux exigent que vous fournissiez vos propres fichiers de jeu."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Delta prend-il en charge les jeux d'arcade ?",
        "answer": "Cette comparaison n'est pas quelque chose que cette page peut vérifier. Ce qu'elle peut affirmer, c'est que Retropa fait tourner les familles arcade prises en charge CPS, Neo Geo, PGM et M92, et que les cœurs arcade nécessitent Retropa Plus."
      },
      {
        "id": "skins",
        "question": "Puis-je utiliser les mêmes skins dans les deux ?",
        "answer": "Retropa importe les paquets .deltaskin de Delta : un paquet qui fonctionne dans Delta peut donc généralement être importé dans Retropa. Vérifiez le système cible et l'orientation après l'import."
      },
      {
        "id": "price",
        "question": "Combien coûtent-ils ?",
        "answer": "Retropa est gratuit au téléchargement, avec des achats intégrés facultatifs. Retropa Plus est requis pour les cœurs arcade, les skins premium et les filtres avancés. Les tarifs actuels sont affichés dans l'app."
      }
    ],
    "attribution": "Delta est un produit tiers. Tous les noms de produits et de sociétés mentionnés sur cette page sont des marques de leurs propriétaires respectifs, et leur utilisation ici sert uniquement à l'identification et à une comparaison factuelle. Retropa n'est affilié à aucune de ces entités, et n'est ni approuvé ni sponsorisé par l'une d'entre elles.",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "Importer des jeux",
    "title": "Comment importer des jeux dans Retropa sur iPhone et iPad",
    "description": "Importez vos propres fichiers de jeu dans Retropa sur iPhone et iPad : où se trouve l'entrée d'import, pourquoi un espace réservé du cloud échoue, quels formats fonctionnent et que faire lorsqu'un fichier est refusé.",
    "summary": "Un guide pas à pas pour importer vos propres fichiers de jeu dans Retropa, avec les formats de fichiers qui fonctionnent, le comportement des conteneurs ZIP et la marche à suivre après un import échoué.",
    "sections": [
      {
        "title": "Avant de commencer",
        "body": "Retropa n'inclut ni jeu ni fichier BIOS. Il vous faut un fichier de jeu que vous êtes en droit d'utiliser, stocké sur l'appareil lui-même. Conservez une copie intacte en dehors de l'app, pour qu'une erreur pendant l'import ne vous coûte jamais l'original.",
        "points": [
          "N'importez que du contenu que vous avez le droit d'utiliser.",
          "Conservez une sauvegarde distincte de chaque fichier d'origine.",
          "L'app est gratuite au téléchargement ; les jeux ne sont pas fournis."
        ]
      },
      {
        "title": "Première étape : amener le fichier sur l'appareil",
        "body": "Téléchargez le fichier pour qu'il réside dans le stockage local, et non comme un espace réservé du cloud. C'est la cause la plus fréquente d'un import échoué : l'app Fichiers affiche l'élément, mais les octets ne sont pas encore sur l'appareil, si bien que l'émulateur ne reçoit rien d'exploitable.",
        "points": [
          "Ouvrez le fichier une fois dans Fichiers pour confirmer qu'il est téléchargé.",
          "Un fichier grisé ou signalé comme à télécharger est un espace réservé.",
          "Terminez le téléchargement avant d'importer."
        ]
      },
      {
        "title": "Deuxième étape : importer depuis la bibliothèque",
        "body": "Ouvrez l'entrée d'import de la bibliothèque Retropa et sélectionnez le fichier. Vérifiez que le système est correctement détecté, puis lancez le jeu avec la disposition par défaut avant de changer de skin ou de filtre, afin que tout problème ultérieur ait une cause évidente."
      },
      {
        "title": "Quels formats de fichiers fonctionnent",
        "body": "Retropa accepte les formats de fichiers correspondant à ses systèmes pris en charge, et peut aussi ouvrir directement les conteneurs ZIP et RetroPack. L'extension doit correspondre au système : un fichier Game Boy est en .gb, la Game Boy Color en .gbc, la Game Boy Advance en .gba et la DS en .nds.",
        "points": [
          "Changer une extension ne convertit pas un jeu d'un système à un autre.",
          "Les conteneurs ZIP et RetroPack peuvent être ouverts sans décompresser.",
          "Les ensembles arcade comportent plusieurs fichiers et sont traités différemment."
        ]
      },
      {
        "title": "Quand un import échoue",
        "body": "Lisez d'abord l'erreur exacte, puis vérifiez trois choses dans l'ordre : si le fichier est entièrement téléchargé, si l'extension correspond au système, et si le fichier est une image propre plutôt qu'un téléchargement partiel. Ce n'est qu'après ces vérifications qu'il vaut la peine de suspecter le cœur de l'émulateur.",
        "points": [
          "Achevez d'abord tout téléchargement incomplet.",
          "Confirmez que l'extension correspond au système.",
          "Essayez le cœur alternatif de ce système avant d'abandonner."
        ]
      },
      {
        "title": "Fichiers, sauvegardes et états de sauvegarde",
        "body": "Votre fichier de jeu, la sauvegarde interne du jeu et un état de sauvegarde d'émulateur sont trois choses différentes. Renommer l'une en l'autre ne la convertit pas. Sauvegardez les trois avant de passer d'un cœur ou d'une app à l'autre, car les formats d'état ne sont pas transférables entre tous les cœurs.",
        "points": [
          "Laissez le fichier de jeu d'origine intact.",
          "Sauvegardez séparément les sauvegardes internes et les états de sauvegarde.",
          "N'attendez pas qu'un état produit par un cœur se charge dans un autre."
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Retropa est-il livré avec des jeux ?",
        "answer": "Non. Retropa est un émulateur et ne fournit ni jeu ni fichier BIOS. Vous importez les fichiers que vous êtes en droit d'utiliser."
      },
      {
        "id": "cloud",
        "question": "Pourquoi mon fichier ne s'importe-t-il pas ?",
        "answer": "La cause la plus fréquente est un espace réservé du cloud plutôt qu'un fichier téléchargé. Ouvrez-le dans Fichiers pour forcer le téléchargement, puis importez-le à nouveau."
      },
      {
        "id": "zip",
        "question": "Puis-je importer un fichier ZIP ?",
        "answer": "Retropa peut ouvrir directement les conteneurs ZIP et RetroPack : la décompression est donc généralement inutile, sauf si un flux d'import précis la demande."
      }
    ],
    "related": [
      "connect-controller-ios",
      "save-states-and-rewind",
      "game-wont-load"
    ]
  },
  "connect-controller-ios": {
    "kind": "guide",
    "slug": "connect-controller-ios",
    "label": "Manettes",
    "title": "Connecter une manette à Retropa sur iPhone et iPad",
    "description": "Appairez une manette Bluetooth ou filaire avec iOS et configurez-la dans Retropa, avec en plus la marche à suivre face à des boutons qui ne répondent pas ou à des affectations qui changent selon le jeu.",
    "summary": "Appairez d'abord une manette compatible avec iOS, puis vérifiez son affectation dans Retropa, système par système et jeu par jeu. Ce guide couvre l'ordre de l'appairage, les erreurs de configuration courantes et les configurations mêlant tactile et manette.",
    "sections": [
      {
        "title": "Appairez la manette avec iOS avant d'ouvrir Retropa",
        "body": "La manette doit d'abord être reconnue par iOS. Appairez-la dans les réglages du système, confirmez qu'elle y répond, et n'ouvrez Retropa qu'ensuite. Une manette qui n'a jamais été appairée au niveau du système n'apparaîtra pas dans l'app, quels que soient les réglages que vous y modifiez.",
        "points": [
          "Appairez d'abord dans les réglages iOS.",
          "Confirmez que la manette répond dans le système.",
          "Vérifiez ensuite qu'elle est reconnue dans Retropa."
        ]
      },
      {
        "title": "L'affectation se vérifie par système, pas une fois pour toutes",
        "body": "Retropa conserve les dispositions de commandes par système, car une Game Boy a besoin de six entrées alors qu'une manette SNES en demande dix. Considérez la configuration comme un travail propre à chaque système : après un appairage unique, vérifiez l'affectation pour chacun des systèmes auxquels vous jouez réellement.",
        "points": [
          "Game Boy : croix directionnelle, A, B, Start, Select.",
          "La SNES ajoute X, Y, L et R.",
          "Les dispositions arcade ajoutent plusieurs boutons d'action."
        ]
      },
      {
        "title": "Les boutons que l'on oublie de tester",
        "body": "En pratique, les échecs se concentrent sur les mêmes entrées : les gâchettes des manettes à six boutons, Start et Select qu'il est facile de placer hors de portée, et les diagonales, qui comptent davantage sur les systèmes dont la manette d'origine utilisait un stick à microcommutateurs.",
        "points": [
          "Testez explicitement L et R lors de la configuration.",
          "Vérifiez que Start et Select restent accessibles.",
          "Testez les diagonales, pas seulement les quatre directions cardinales."
        ]
      },
      {
        "title": "Commandes tactiles et manette peuvent coexister",
        "body": "Certains jeux nécessitent une interaction tactile qu'une manette physique ne peut pas remplacer, en particulier sur les systèmes à deux écrans. Garder la disposition à l'écran disponible en parallèle d'une manette appairée est généralement plus pratique que de passer de l'une à l'autre.",
        "points": [
          "Ne désactivez pas les commandes tactiles si un jeu utilise l'écran tactile.",
          "Vérifiez que les incrustations ne recouvrent pas la zone de jeu.",
          "Le retour haptique et la disposition tactile peuvent être réglés séparément."
        ]
      },
      {
        "title": "Quand un bouton ne répond pas",
        "body": "Procédez en partant de la manette : confirmez qu'elle répond dans iOS, puis dans Retropa, puis dans un jeu qui utilise assurément ce bouton. Si l'affectation semble correcte mais qu'un jeu ignore une entrée, il est possible que ce jeu ne l'utilise pas du tout, ce qui est courant dans les premiers titres portables.",
        "points": [
          "Vérifiez d'abord la manette dans les réglages iOS.",
          "Contrôlez l'affectation dans Retropa.",
          "Confirmez que le jeu utilise réellement ce bouton."
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "Quelles manettes fonctionnent ?",
        "answer": "Les manettes prises en charge par iOS peuvent être utilisées avec Retropa. Appairez-les d'abord dans les réglages iOS, puis vérifiez l'affectation dans l'app."
      },
      {
        "id": "mapping-lost",
        "question": "Pourquoi mon affectation a-t-elle changé ?",
        "answer": "Les dispositions sont conservées par système et par jeu : une affectation définie pour un système ne s'applique donc pas automatiquement à un autre. Vérifiez l'affectation du système auquel vous jouez actuellement."
      },
      {
        "id": "touch",
        "question": "Les commandes tactiles cessent-elles de fonctionner avec une manette ?",
        "answer": "Non. Les commandes tactiles restent disponibles, ce qui est utile sur les systèmes où un jeu nécessite une interaction tactile ou un second écran."
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "gb-emulator"
    ]
  },
  "save-states-and-rewind": {
    "kind": "guide",
    "slug": "save-states-and-rewind",
    "label": "Sauvegardes",
    "title": "États de sauvegarde et retour en arrière dans Retropa | iPhone et iPad",
    "description": "Comprenez la différence entre les sauvegardes internes, les états de sauvegarde et le retour en arrière dans Retropa, comment déplacer des sauvegardes entre cœurs en toute sécurité et que vérifier quand une sauvegarde ne se charge pas.",
    "summary": "Les sauvegardes internes, les états de sauvegarde d'émulateur et le retour en arrière sont trois mécanismes différents, avec des possibilités de transfert différentes. Ce guide explique ce que fait chacun et comment les sauvegarder en sécurité.",
    "sections": [
      {
        "title": "Trois choses différentes appelées « sauvegarde »",
        "body": "La sauvegarde propre à un jeu est écrite par le jeu lui-même, un état de sauvegarde capture l'émulateur entier à un instant donné, et le retour en arrière rejoue l'historique récent. Leur comportement diffère, leur stockage diffère, et renommer l'un en l'autre ne le convertit pas.",
        "points": [
          "Les sauvegardes internes sont créées par le jeu.",
          "Les états de sauvegarde capturent l'intégralité de l'émulateur à un instant précis.",
          "Le retour en arrière dépend de l'historique récent, et non d'un fichier stocké."
        ]
      },
      {
        "title": "Créer et utiliser un état de sauvegarde",
        "body": "Un état de sauvegarde est utile avant une section difficile, avant de changer de cœur ou avant d'appliquer un nouveau filtre, car il permet de revenir à un moment connu comme fiable. La sauvegarde rapide et le chargement rapide sont prévus exactement pour ce type de point de contrôle à court terme.",
        "points": [
          "Prenez un état avant de changer de cœur.",
          "Les états sont le moyen le plus rapide de comparer deux préréglages.",
          "Gardez la sauvegarde propre au jeu comme référence à long terme."
        ]
      },
      {
        "title": "Déplacer une sauvegarde entre cœurs",
        "body": "Les états de sauvegarde ne sont pas transférables entre tous les cœurs, car un état enregistre l'état interne d'une implémentation précise. Les sauvegardes internes, écrites par le jeu, ont bien plus de chances de se transférer correctement. Sauvegardez les deux avant de changer le cœur sélectionné.",
        "points": [
          "Partez du principe que les états sont propres à un cœur.",
          "Les sauvegardes internes se transfèrent plus fiablement.",
          "Sauvegardez avant de changer de cœur."
        ]
      },
      {
        "title": "Quand une sauvegarde ne se charge pas",
        "body": "Vérifiez s'il s'agit de données internes au jeu ou d'un état, si le cœur a changé depuis son écriture et si la version de l'app a évolué. Si un état échoue, chargez plutôt la sauvegarde propre au jeu, car ce chemin ne dépend pas du format d'état interne de l'émulateur.",
        "points": [
          "Confirmez que le cœur n'a pas changé.",
          "Confirmez le type de sauvegarde.",
          "Revenez à la sauvegarde propre au jeu lorsque c'est possible."
        ]
      },
      {
        "title": "Conserver des sauvegardes qui survivent",
        "body": "Gardez le fichier de jeu d'origine, la sauvegarde propre au jeu et les états de sauvegarde auxquels vous tenez dans des endroits distincts. iCloud ou une copie sur ordinateur convient ; l'important est qu'une défaillance dans l'app ou sur l'appareil ne supprime pas toutes les copies d'un coup.",
        "points": [
          "Sauvegardez le fichier de jeu lui-même, pas seulement les sauvegardes.",
          "Gardez les sauvegardes séparées des fichiers d'état.",
          "Stockez au moins une copie en dehors de l'appareil."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "Quelle est la différence entre une sauvegarde et un état de sauvegarde ?",
        "answer": "Une sauvegarde est écrite par le jeu et représente la progression dans le format propre au jeu. Un état de sauvegarde capture l'émulateur entier à un instant donné et est spécifique au cœur qui l'a produit."
      },
      {
        "id": "rewind",
        "question": "Jusqu'où puis-je revenir en arrière ?",
        "answer": "Le retour en arrière rejoue l'historique récent depuis la mémoire plutôt que de restaurer un fichier stocké : sa profondeur est donc limitée par le tampon, et non par un nombre fixe d'emplacements de sauvegarde."
      },
      {
        "id": "transfer",
        "question": "Puis-je déplacer une sauvegarde vers un autre émulateur ?",
        "answer": "La sauvegarde propre au jeu est l'élément le plus transférable. Les états de sauvegarde dépendent du format interne d'un cœur précis et ne doivent pas être considérés comme chargeables ailleurs."
      }
    ],
    "related": [
      "import-roms-iphone",
      "game-wont-load",
      "gb-emulator"
    ]
  },
  "game-wont-load": {
    "kind": "guide",
    "slug": "game-wont-load",
    "label": "Dépannage",
    "title": "Un jeu ne se lance pas dans Retropa ? Ce qu'il faut vérifier",
    "description": "Un ordre de diagnostic pour un jeu qui refuse de démarrer dans Retropa : téléchargements incomplets, mauvaise extension, mauvais système détecté, BIOS manquant, mapper non pris en charge et problèmes propres à un cœur.",
    "summary": "Suivez un ordre de vérifications fixe — exhaustivité du téléchargement, extension, système détecté, exigence de BIOS, puis choix du cœur — avant de conclure qu'un fichier est inutilisable.",
    "sections": [
      {
        "title": "Suivez un ordre fixe, sans deviner",
        "body": "La plupart des échecs de chargement viennent d'un petit nombre de causes, et les vérifier dans un ordre cohérent évite de perdre du temps. L'ordre ci-dessous va de la vérification la moins coûteuse à la plus coûteuse : vous vous arrêtez donc dès que vous trouvez la véritable cause.",
        "points": [
          "D'abord l'exhaustivité du téléchargement.",
          "Ensuite l'extension et le système détecté.",
          "Puis le BIOS et le choix du cœur."
        ]
      },
      {
        "title": "Vérification une : le fichier est-il vraiment sur l'appareil ?",
        "body": "Si le fichier est un espace réservé du cloud, l'émulateur ne reçoit rien d'exploitable, même si le fichier apparaît dans la bibliothèque. Ouvrez-le dans l'app Fichiers pour forcer le téléchargement, attendez qu'il se termine, puis importez-le à nouveau.",
        "points": [
          "Un élément grisé ou en attente n'est pas téléchargé.",
          "Terminez le téléchargement avant de réessayer.",
          "C'est la cause la plus fréquente, de loin."
        ]
      },
      {
        "title": "Vérification deux : l'extension correspond-elle au système ?",
        "body": "Chaque système a sa propre extension, et une incohérence produit un fichier que le cœur ne peut pas interpréter. Renommer une extension ne convertit rien : un fichier .gb renommé en .gba reste un jeu Game Boy et ne se comportera pas comme un titre Game Boy Advance.",
        "points": [
          ".gb, .gbc, .gba et .nds correspondent à des systèmes différents.",
          "Renommer ne convertit jamais un jeu.",
          "Confirmez le système détecté dans la bibliothèque."
        ]
      },
      {
        "title": "Vérification trois : un BIOS ou un ensemble parent manque-t-il ?",
        "body": "Certains systèmes et familles arcade ont besoin d'un fichier BIOS supplémentaire, et les ensembles arcade peuvent dépendre d'un ensemble parent. Le cœur signale ce qui manque ; lisez ce message avec précision, car un BIOS manquant et un parent manquant sont deux problèmes différents aux corrections différentes.",
        "points": [
          "Lisez le texte exact de l'erreur.",
          "Un neogeo.zip d'arcade n'est pas un BIOS de portable.",
          "Retropa ne fournit aucun téléchargement de BIOS."
        ]
      },
      {
        "title": "Vérification quatre : essayez l'autre cœur",
        "body": "Plusieurs systèmes disposent de plus d'un cœur. Si un fichier est complet, correctement nommé et sans dépendance manquante, changer de cœur constitue le test suivant, car les cœurs diffèrent dans la rigueur avec laquelle ils émulent le matériel d'origine.",
        "points": [
          "Notez quel cœur a échoué.",
          "Changez de cœur et réessayez une fois.",
          "Comparez avec un second jeu sur le même cœur."
        ]
      },
      {
        "title": "Ce qu'il faut inclure dans une demande d'assistance",
        "body": "Si un jeu refuse toujours de démarrer, les informations utiles sont la version de l'app, le système, le cœur sélectionné et le texte exact de l'erreur. Ne joignez pas de fichiers de jeu ou BIOS commerciaux : ce n'est pas nécessaire pour diagnostiquer le problème et ces fichiers ne doivent pas être partagés.",
        "points": [
          "Version de l'app et système.",
          "Cœur sélectionné et texte de l'erreur.",
          "Ne joignez jamais de fichiers ROM ou BIOS commerciaux."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "Le jeu s'ouvre sur un écran noir. Que cela signifie-t-il ?",
        "answer": "Généralement un téléchargement incomplet, une variante de fichier non prise en charge ou une dépendance manquante comme un BIOS. Vérifiez d'abord le téléchargement, puis l'extension, puis l'erreur exacte signalée par le cœur."
      },
      {
        "id": "worked-before",
        "question": "Un jeu fonctionnait avant et plus maintenant. Pourquoi ?",
        "answer": "Vérifiez si la version de l'app, le cœur sélectionné ou l'emplacement du fichier ont changé. Les états de sauvegarde sont propres à un cœur : un état écrit par un autre cœur peut donc refuser de se charger alors que le jeu lui-même fonctionne toujours."
      },
      {
        "id": "support",
        "question": "Que dois-je envoyer avec une demande d'assistance ?",
        "answer": "La version de l'app, le système, le cœur sélectionné et le texte exact de l'erreur. Ne joignez pas de fichiers de jeu ou BIOS commerciaux."
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "arcade"
    ]
  },
  "plus": {
    "kind": "capability",
    "slug": "plus",
    "label": "Retropa Plus",
    "title": "Retropa Plus : ce qui est gratuit et ce qui nécessite Plus",
    "description": "Quelles fonctionnalités de Retropa sont gratuites et lesquelles nécessitent Retropa Plus : systèmes portables, familles arcade, skins premium, filtres avancés et mode console. Les tarifs actuels sont affichés dans l'app.",
    "summary": "Retropa est gratuit au téléchargement. L'émulation des consoles portables est disponible sans payer ; les familles arcade, les skins premium et les filtres d'affichage avancés font partie de Retropa Plus. Les tarifs actuels et les offres disponibles sont affichés dans l'app.",
    "sections": [
      {
        "title": "Ce qui est disponible gratuitement",
        "body": "Télécharger Retropa ne coûte rien, et l'émulation des consoles portables fonctionne sans achat. Vous pouvez importer vos propres fichiers de jeu, utiliser les skins standard, employer les préréglages d'affichage classiques et configurer les états de sauvegarde ainsi que les manettes. Rien dans l'import d'un fichier ne déclenche de paiement.",
        "points": [
          "Téléchargement gratuit.",
          "Systèmes portables disponibles sans achat.",
          "Skins standard et préréglages d'affichage classiques inclus.",
          "Importer un jeu ne débloque jamais une fonctionnalité payante et ne l'exige jamais."
        ]
      },
      {
        "title": "Ce qui nécessite Retropa Plus",
        "body": "Retropa Plus couvre les familles arcade, les skins premium et les filtres d'affichage avancés. Ce sont des capacités supplémentaires plutôt que des restrictions sur ce dont vous disposiez déjà : le jeu sur console portable continue de fonctionner, que vous preniez cet abonnement ou non.",
        "points": [
          "Familles arcade : CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Skins premium.",
          "Filtres CRT et LCD avancés.",
          "Mode console et flux de sauvegarde avancés."
        ]
      },
      {
        "title": "Pourquoi la prise en charge de l'arcade fait partie de Plus",
        "body": "L'émulation arcade représente un travail à part : cartes multiples, ensembles multi-fichiers, dépendances à un BIOS et compatibilité propre à chaque ensemble. La traiter comme une capacité supplémentaire garde l'offre gratuite simple et maintient l'expérience des consoles portables accessible à tous, sans frais.",
        "points": [
          "Le matériel arcade n'est pas du matériel portable.",
          "Les ensembles arcade comportent plusieurs fichiers et peuvent nécessiter un BIOS.",
          "La prise en charge des portables ne dépend pas de Plus."
        ]
      },
      {
        "title": "Les jeux et les fichiers BIOS ne sont jamais inclus",
        "body": "Aucune formule de Retropa ne fournit de fichiers de jeu ni de fichiers BIOS, car l'app est un émulateur. C'est vous qui fournissez le contenu que vous êtes en droit d'utiliser, et cette exigence ne change pas avec un achat. Un abonnement débloque des capacités d'émulation, pas du contenu.",
        "points": [
          "Aucun jeu n'est fourni, quelle que soit la formule.",
          "Aucun fichier BIOS n'est fourni.",
          "N'importez que du contenu que vous avez le droit d'utiliser."
        ]
      },
      {
        "title": "Où consulter les tarifs actuels",
        "body": "Les tarifs, les offres disponibles et les éventuelles promotions régionales sont affichés dans l'app, où l'App Store peut les présenter dans votre devise locale. Cette page n'indique volontairement aucun prix, afin qu'un changement de tarif ne la rende jamais obsolète.",
        "points": [
          "Les tarifs sont affichés dans l'app.",
          "La disponibilité peut varier selon la région.",
          "Les achats sont gérés par l'App Store."
        ]
      },
      {
        "title": "Les achats sont gérés par l'App Store",
        "body": "Tous les achats et abonnements passent par l'App Store. Retropa ne traite aucun paiement sur le web, et ce site web ne demande jamais de coordonnées bancaires. Les renouvellements, les résiliations et les remboursements sont gérés par l'App Store selon ses propres conditions.",
        "points": [
          "Aucun paiement n'est encaissé sur ce site web.",
          "Gérez ou résiliez un abonnement dans les réglages de l'App Store.",
          "Les remboursements suivent la politique de l'App Store."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "Puis-je utiliser Retropa sans payer ?",
        "answer": "Oui. Télécharger Retropa est gratuit et l'émulation des consoles portables fonctionne sans achat. Les familles arcade, les skins premium et les filtres avancés nécessitent Retropa Plus."
      },
      {
        "id": "price",
        "question": "Combien coûte Retropa Plus ?",
        "answer": "Les tarifs et les offres disponibles sont affichés dans l'app, où l'App Store peut les présenter dans votre devise locale. Cette page n'indique aucun prix, pour qu'un changement de tarif ne la rende jamais obsolète."
      },
      {
        "id": "buy-here",
        "question": "Puis-je m'abonner sur ce site web ?",
        "answer": "Non. Les achats sont entièrement gérés via l'App Store. Ce site web ne collecte jamais de coordonnées de paiement."
      },
      {
        "id": "content",
        "question": "Plus inclut-il des jeux ?",
        "answer": "Non. Aucune formule de Retropa ne fournit de fichiers de jeu ni de BIOS. Vous importez du contenu que vous êtes en droit d'utiliser."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
