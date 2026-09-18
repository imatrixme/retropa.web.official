import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  "metaTitle": "Importer des ROM dans Retropa | Guide iPhone et iPad",
  "description": "Importez des jeux GBA, DS et arcade sur iPhone et iPad. Réponses sur les ROM, les BIOS, les skins Delta, les manettes, les sauvegardes, Plus et les filtres avancés sans mise à l'échelle entière.",
  "title": "Votre premier jeu dans Retropa.",
  "intro": "D'un fichier qui vous appartient à un jeu auquel vous pouvez jouer. Commencez par un système portable pris en charge, puis adaptez les commandes et l'image à vos envies.",
  "steps": [
    [
      "Installez Retropa",
      "Installez Retropa depuis l'App Store sur un iPhone ou un iPad sous iOS 18 ou version ultérieure. L'app est gratuite ; certaines fonctions nécessitent Plus."
    ],
    [
      "Importez votre jeu",
      "Ouvrez l'entrée d'import de votre bibliothèque et choisissez une ROM prise en charge dans Fichiers. Pour la GBA, utilisez un fichier .gba ; pour la DS, un fichier .nds. Conservez le fichier d'origine comme sauvegarde. Les ROM et les fichiers BIOS ne sont pas fournis."
    ],
    [
      "Ouvrez-le depuis votre bibliothèque",
      "Sélectionnez le jeu importé et commencez à jouer. Vérifiez les commandes à l'écran avant de changer de skin ou de filtre. Si un jeu ne démarre pas, vérifiez son système, son format de fichier et tout BIOS requis."
    ]
  ],
  "faqTitle": "Avant de commencer",
  "systems": "Voir les systèmes pris en charge",
  "support": "Besoin d'aide ?",
  "faqs": [
    {
      "id": "devices",
      "question": "Quels iPhone et iPad peuvent exécuter Retropa ?",
      "answer": "Retropa est disponible sur l'App Store pour iPhone et iPad sous iOS 18 ou version ultérieure. Consultez la section de compatibilité de l'App Store pour votre appareil. Les cœurs arcade plus exigeants et les filtres d'affichage à plusieurs passes peuvent demander plus de performances qu'un simple jeu portable."
    },
    {
      "id": "systems",
      "question": "Retropa peut-il exécuter des jeux GBA, Nintendo DS et arcade ?",
      "answer": "Retropa prend en charge la GBA, la DS et d'autres systèmes portables et de salon listés, aux côtés de familles arcade prises en charge comme CPS, PGM et M92. La compatibilité dépend de l'app installée, du cœur et du format de jeu ; elle ne signifie pas que tous les jeux ou toutes les archives arcade sont pris en charge.",
      "link": "cores",
      "linkLabel": "Voir les systèmes et formats de fichier pris en charge"
    },
    {
      "id": "games",
      "question": "Retropa inclut-il des jeux ou des ROM téléchargeables ?",
      "answer": "Non. Retropa est un émulateur, pas un abonnement commercial à des jeux ni une boutique de ROM. Apportez du contenu que vous avez le droit d'employer, comme vos propres projets ou des homebrews distribués avec autorisation. Les ROM commerciales et les fichiers BIOS ne sont pas fournis."
    },
    {
      "id": "import",
      "question": "Comment importer une ROM GBA ou DS sur iPhone ?",
      "answer": "Placez le fichier de jeu dans un emplacement accessible depuis l'app Fichiers d'iOS. Ouvrez l'entrée d'import de la bibliothèque de Retropa, sélectionnez le fichier pris en charge et ouvrez le jeu importé depuis la bibliothèque. La GBA utilise .gba et la DS utilise .nds. Renommer une autre extension de fichier ne convertit pas un jeu au bon format."
    },
    {
      "id": "bios",
      "question": "Ai-je besoin d'un fichier BIOS pour Retropa ?",
      "answer": "Les exigences de BIOS varient selon le système et le cœur. Si Retropa signale un BIOS manquant, consultez l'exigence de ce système et fournissez le bon fichier via le flux de travail pris en charge par l'app. Un BIOS destiné à un autre système ne remplace rien. Retropa ne fournit pas de téléchargement de BIOS.",
      "link": "cores",
      "linkLabel": "Vérifier les prérequis système"
    },
    {
      "id": "arcade-zip",
      "question": "Pourquoi mon ZIP ou mon ensemble de ROM arcade ne démarre-t-il pas ?",
      "answer": "Une archive arcade doit correspondre à la carte et au jeu de ROM attendus par son cœur. Certains ensembles dépendent aussi d'un ensemble parent ou d'un BIOS, si bien qu'un ZIP de clone seul peut être incomplet. Laissez l'archive intacte, sauf si l'app demande de l'extraire. L'exécution de jeux arcade nécessite aussi Plus ; un abonnement ne peut pas réparer des données de ROM manquantes ou incompatibles."
    },
    {
      "id": "missing-file",
      "question": "Pourquoi un jeu apparaît-il dans Fichiers sans que je puisse l'importer ?",
      "answer": "Vérifiez que le fichier réel est disponible localement, et pas seulement sous forme d'espace réservé dans le cloud, et que son format correspond à un système pris en charge. Vérifiez toute erreur affichée par Retropa. Gardez une sauvegarde de l'original pendant que vous analysez l'import, et ne supposez pas qu'un ZIP renommé ou un téléchargement incomplet soit une ROM valide."
    },
    {
      "id": "offline",
      "question": "Puis-je jouer à des jeux stockés localement sans les diffuser en streaming ?",
      "answer": "Retropa exécute les fichiers de jeu pris en charge sur votre appareil plutôt que de diffuser la partie depuis un émulateur cloud. Importez d'abord les fichiers de jeu et de BIOS nécessaires. Le téléchargement de paquets, la consultation d'informations en ligne et l'usage des fonctions cloud nécessitent toujours leur propre accès réseau."
    },
    {
      "id": "delta-skins",
      "question": "Puis-je utiliser des skins Delta dans Retropa ?",
      "answer": "Retropa prend en charge l'import de paquets .deltaskin. Utilisez le paquet complet, choisissez une disposition pour le système correspondant et vérifiez sa prise en charge du portrait ou du paysage. La prise en charge du format ne garantit pas que chaque skin tiers convienne à chaque iPhone. La compatibilité Delta désigne un format de fichier, pas une affiliation.",
      "link": "delta-skins",
      "linkLabel": "Lire le guide d'import des skins Delta"
    },
    {
      "id": "controllers",
      "question": "Retropa prend-il en charge les manettes Bluetooth ou externes ?",
      "answer": "Retropa prend en charge les manettes externes compatibles et un mappage des boutons configurable. Connectez d'abord la manette via iOS, puis vérifiez son mappage dans Retropa. Pour les jeux arcade, vérifiez les affectations de pièce et de départ autant que les boutons d'action. La compatibilité dépend de la manette et de la prise en charge d'iOS."
    },
    {
      "id": "saves",
      "question": "Les sauvegardes en jeu et les états de sauvegarde de l'émulateur sont-ils identiques ?",
      "answer": "Non. Une sauvegarde en jeu est créée par le jeu ; un état de sauvegarde capture l'exécution de l'émulateur. Les états de sauvegarde peuvent dépendre du cœur et de la version exacts, donc ne supposez pas qu'ils soient transférables entre apps ou cœurs. Préservez vos fichiers d'origine et vos sauvegardes avant de déplacer ou de remplacer des sauvegardes."
    },
    {
      "id": "plus",
      "question": "Retropa est-il gratuit, et que débloque Plus ?",
      "answer": "Retropa est gratuit. Les cœurs arcade, les skins premium et les filtres avancés nécessitent Retropa Plus. Les offres actuelles, les prix régionaux et les conditions d'achat sont affichés dans l'app avant l'achat. Un téléchargement gratuit ne signifie pas que chaque cœur ou chaque ressource est inclus."
    },
    {
      "id": "restore",
      "question": "Comment restaurer un achat Retropa Plus précédent ?",
      "answer": "Utilisez l'action de restauration des achats de l'app avec l'Apple Account utilisé pour l'achat d'origine. Vérifiez que l'achat ou l'abonnement est toujours valide. Restaurer un droit ne restaure pas les fichiers ROM ni les sauvegardes de jeu manquants. Contactez le support avec la version de l'app et le problème d'achat, pas avec les mots de passe du compte."
    },
    {
      "id": "advanced-filters",
      "question": "En quoi les filtres avancés de Retropa diffèrent-ils des filtres CRT ordinaires ?",
      "answer": "Les filtres d'affichage simples superposent souvent des lignes de balayage ou des grilles de pixels échantillonnées. Les préréglages avancés de Retropa, comme CRT V4 et Trinitron, modélisent la structure du faisceau et du phosphore avec une intégration des pixels de sortie ou un filtrage à bande limitée. DMG inclut des cellules à cristaux liquides intégrées et un substrat réfléchissant. Ce sont des modèles d'affichage, pas une simple teinte de couleur.",
      "link": "crt-filters",
      "linkLabel": "Comparer les filtres d'affichage avancés"
    },
    {
      "id": "integer-scaling",
      "question": "Les filtres avancés de Retropa exigent-ils une mise à l'échelle entière ?",
      "answer": "Non. Les filtres avancés de Retropa tiennent compte de la taille de sortie réelle au lieu d'exiger une échelle de 2, de 3 ou un autre multiple entier. Vous gagnez ainsi plus de liberté pour faire tenir un jeu dans la zone d'affichage de votre téléphone, de votre orientation ou du skin choisi. Le rapport d'aspect d'origine peut rester intact. Les résultats dépendent toujours du préréglage et de l'appareil ; les filtres ne créent pas de résolution source supplémentaire.",
      "link": "crt-filters",
      "linkLabel": "En savoir plus sur le rendu à échelle fractionnaire"
    },
    {
      "id": "shader-import",
      "question": "Retropa peut-il importer des shaders .slang et .slangp de RetroArch ?",
      "answer": "Retropa prend en charge les flux de travail de shaders .slang et .slangp. Un préréglage peut référencer plusieurs passes ou textures ; gardez ces dépendances ensemble lors de l'import. Tous les préréglages tiers ne fonctionnent pas forcément. Si l'un échoue, vérifiez ses fichiers et sa compatibilité plutôt que de le renommer ou de modifier le jeu.",
      "link": "crt-filters",
      "linkLabel": "En savoir plus sur la compatibilité des shaders"
    },
    {
      "id": "performance",
      "question": "Les filtres avancés affectent-ils la fréquence d'images ou l'autonomie ?",
      "answer": "C'est possible. Le rendu à plusieurs passes demande plus de travail GPU qu'une image sans filtre, et le coût varie selon le préréglage, la taille de sortie, l'appareil et le cœur de l'émulateur. Comparez avec l'image d'origine si vous constatez des ralentissements, puis essayez un filtre plus léger. La mise à l'échelle sans multiple entier est une fonction de qualité d'affichage, pas une promesse de performances GPU illimitées."
    },
    {
      "id": "packages",
      "question": "Où trouver des skins et des paquets de filtres pour Retropa ?",
      "answer": "Parcourez PackHub pour découvrir des paquets de skins et de shaders. Consultez dans l'app le système, le format et les prérequis Plus du paquet. Les ressources importées ne contournent pas les vérifications de droits. Si vous avez besoin d'aide, indiquez la version de l'app, le nom du paquet et le message d'erreur, mais n'envoyez pas de ROM commerciales ni de fichiers BIOS."
    }
  ]
}
