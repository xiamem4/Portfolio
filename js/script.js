const video = document.getElementById("bg-video");
if (video && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.preload = "auto";
        video.play();
        observer.unobserve(video);
      }
    });
  });
  observer.observe(video);
} else if (video) {
  video.preload = "auto";
  video.play();
}

// Système de traduction
let currentLang = localStorage.getItem('lang') || 'fr';

const translations = {
  fr: {
    video_error: "Votre navigateur ne supporte pas la lecture vidéo.",
    presentation_txt1:
      "À 20 ans, je m'intéresse de près à l'<strong>UI Design</strong> et la <strong>création audiovisuelle</strong>. Je suis actuellement en <strong>BUT (Bac + 3) en Multimédia et Internet</strong>, à Laval, en France. Curieux et créatif, j'essaie d'expérimenter tous les aspects de la création numérique, du développement web à la modélisation 3D en passant par le montage vidéo.",
    presentation_txt2:
      "Je vous invite à explorer mon portfolio pour découvrir <strong>mon univers</strong> et <strong>mes créations</strong>.",
    softskill_1:
      "Autonome",
    softskill_2:
      "Travail d'équipe",
    softskill_3:
      "Proactif",
    hardskills_title:
      "Compétences",
    hardskill_1:
      "Retouche d'images",
    hardskill_2:
      "Montage vidéo",
    hardskill_3:
      "Graphisme",
    hardskill_4:
      "Développement web",
    hardskill_5:
      "Programmation",
    hardskill_6:
      "Gestion de base de données",
    hardskill_7:
      "Design d'interface",
    projects_title:
      "Projets",
    contact_title:
      "Me contacter",
    name:
      "Nom",
    first_name:
      "Prénom",
    phone:
      "Numéro de téléphone",
    mail:
      "Adresse e-mail",
    cv_btn:
      "Voir le CV",
    follow:
      "Me suivre",
    credit:
      "© 2025 Maxime Croissant - Tous droits réservés",
    prenom_placeholder:
      "Prénom",
    nom_placeholder:
      "Nom",
    email_placeholder:
      "exemple@mail.com",
    message_placeholder:
      "Écrire ici",
    submit_btn:
      "Envoyer",
    task_1:
      "Supprimer des éléments ou imperfections sur des photos",
    task_2:
      "Réaliser des photomontages créatifs ou publicitaires",
    task_3:
      "Améliorer les contrastes/couleurs/netteté pour du contenu professionnel",
    task_4:
      "Créer des visuels réseaux sociaux avec retouche avancée",
    task_5:
      "Détourer proprement des objets ou personnes",
    task_6:
      "Monter une vidéo YouTube dynamique avec transitions, cut, musiques",
    task_7:
      "Réaliser un récap d'événement ou aftermovie",
    task_8:
      "Créer une vidéo promotionnelle pour un produit ou un commerce",
    task_9:
      "Ajouter sous-titres, titres animés et effets visuels",
    task_10:
      "Faire un montage vertical pour TikTok / Shorts",
    task_11:
      "Créer un logo professionnel et ses déclinaisons",
    task_12:
      "Réaliser une affiche pour un événement ou un concert",
    task_13:
      "Dessiner des icônes vectorielles personnalisées",
    task_14:
      "Décliner une identité visuelle (charte graphique, palette de couleurs, typos)",
    task_15:
      "Intégrer un site vitrine responsive à partir d'une maquette",
    task_16:
      "Créer un formulaire de contact avec envoi de mail (PHP)",
    task_17:
      "Dynamiser une page avec des animations ou interactions JS",
    task_18:
      "Construire un site portfolio ou CV en ligne",
    task_19:
      "Développer un script Python d'automatisation",
    task_20:
      "Créer un jeu simple",
    task_21:
      "Générer des graphiques à partir de données",
    task_22:
      "Créer une base de données relationnelle pour une appli web",
    task_23:
      "Concevoir un système d'authentification avec login/mot de passe",
    task_24:
      "Gérer des requêtes SQL : filtrer, trier, croiser des données",
    task_25:
      "Connecter un site PHP à une base de données MySQL",
    task_26:
      "Sauvegarder/exporter/restaurer une BDD via phpMyAdmin",
    task_27:
      "Concevoir l'interface d'une application mobile ou d'un site web",
    task_28:
      "Créer un prototype interactif cliquable pour présentation",
    task_29:
      "Travailler sur l'expérience utilisateur (navigation, ergonomie)",
    project_geekdays_h2_title:
      "Promotion d'évènement <span>|</span> Décembre 2024",
    project_geekdays_description_p1:
      "L'objectif de ce projet était de créer <strong>une affiche pour un événement de type GeekDays</strong>, avec un recto attrayant et un verso informatif. J'ai <strong>pris les photos nécessaires en studio</strong>, puis j'ai <strong>utilisé la suite Affinity</strong> pour assembler le tout. Enfin, j'ai préparé le <strong>merchandising de l'événement</strong>, de la signalétique aux produits à vendre sur place.",
    project_geekdays_description_p2:
      "Tout au long de ce processus, j'ai consigné mes hésitations et mes choix. Sous la forme d'un journal, cela m'a permis de <strong>garder une idée claire</strong> de la direction que je prenais avec le projet.",
    project_h3_logiciels:
      "Logiciel(s)",
    project_h3_links:
      "Lien(s) utile(s)",
    project_geekdays_links_1:
      "Consulter le journal de bord",
    project_geekdays_tags_1:
      "# projet universitaire",
    project_geekdays_tags_2:
      "# photomontage",
    project_geekdays_tags_3:
      "# promotion d'évènement",
    project_geekdays_tags_4:
      "# suite Affinity",
    project_h2_gallerie:
      "Gallerie",
    project_geekdays_gallerie_1:
      "Recto du flyer",
    project_geekdays_gallerie_2:
      "Verso du flyer",
    project_geekdays_gallerie_3:
      "Signalétique",
    project_geekdays_gallerie_4:
      "Variations du logo",
    project_museum_h2_title:
      "Modélisation 3D <span>|</span> Mars 2024",
    project_museum_description_p1:
      "Ce projet consiste en la <strong>modélisation 3D d'une galerie de musée</strong>, que j'ai réalisé pour mon <strong>book vidéo</strong>, dans le but de soutenir mes candidatures sur la plateforme Parcoursup.",
    project_museum_description_p2:
      "J'ai modélisé l'allée centrale avec le positionnement des éléments, puis j'ai <strong>appliqué les textures</strong> que je jugeais cohérentes, et mis en place différentes sources de lumière. Enfin, j'ai défini la trajectoire de la caméra pour un <strong>rendu à la première personne d'un individu marchant</strong> vers un tableau.",
    project_museum_links_1:
      "Voir le rendu",
    project_museum_tags_1:
      "# projet personnel",
    project_museum_tags_2:
      "# book vidéo",
    project_museum_tags_3:
      "# modélisation 3D",
    project_museum_tags_4:
      "# cinema 4D",
    project_museum_gallerie_1:
      "Interface Cinema 4D",
    project_museum_gallerie_2:
      "Liste des textures",
    project_museum_gallerie_3:
      "Vue de la caméra",
    project_museum_gallerie_4:
      "Liste des éléments 3D",
    project_frontiere_h2_title:
      "Vidéo promotionnelle <span>|</span> Mars 2024",
    project_frontiere_description_p1:
      "Le projet consistait à produire un post vidéo Instagram carré pour <strong>promouvoir une exposition d'art fictive</strong> dans les rues de Laval, « Aux frontières du réel ». Le spot devait être <strong>réalisé à partir de photos</strong> que nous devions animer et durer moins de 30 secondes.",
    project_frontiere_description_p2:
      "J'ai donc utilisé <strong>Affinity Photo</strong> pour les photomontages et <strong>DaVinci Resolve</strong> pour le montage vidéo. J'ai également créé le logo de l'exposition et un slogan.",
    project_frontiere_links_1:
      "Voir la vidéo",
    project_frontiere_tags_1:
      "# projet universiaire",
    project_frontiere_tags_2:
      "# promotion d'évènement",
    project_frontiere_tags_3:
      "# format Instagram",
    project_frontiere_tags_4:
      "# Davinci Resolve",
    project_frontiere_gallerie_1:
      "Photomontage du premier plan",
    project_frontiere_gallerie_2:
      "Photomontage du deuxième plan",
    project_frontiere_gallerie_3:
      "Photomontage du troisième plan",
    project_frontiere_gallerie_4:
      "Logo & slogan",
    project_fitfriends_h2_title:
      "Mock-up Figma | Octobre 2024",
    project_fitfriends_description_p1:
      "FitFriends est une application que nous avons créée pour un projet lors de notre première année à BUT. Avec mon associé, nous avons élaboré le cahier des charges, le <strong>visuel et l'image graphique de l'application</strong> (logo, site internet et application). Elle permet aux sportifs de trouver des partenaires d'entraînement qui partagent les mêmes passions et objectifs, <strong>facilitant ainsi les rencontres sportives locales</strong>.",
    project_fitfriends_description_p2:
      "Le cahier des charges comprend : le contexte, un calendrier prévisionnel, les <strong>cibles</strong>, le marché, la <strong>charte graphique</strong>, une solution d'hébergement, le <strong>budget</strong>, etc.",
    project_fitfriends_links_1:
      "Voir la maquette Figma",
    project_fitfriends_links_2:
      "Lire le cahier des charges",
    project_fitfriends_tags_1:
      "# projet universitaire",
    project_fitfriends_tags_2:
      "# cahier de charges",
    project_fitfriends_tags_3:
      "# design d'application",
    project_fitfriends_tags_4:
      "# Figma",
    project_fitfriends_gallerie_1:
      "Page de connexion ( <span>app</span> )",
    project_fitfriends_gallerie_2:
      "Page d'explication du concept ( <span>site web</span> )",
    project_fitfriends_gallerie_3:
      "Page des abonnements ( <span>site web</span> )",
    project_tintin_h2_title:
      "Fiction sonore <span>|</span> Mars 2025",
    project_tintin_description_p1:
      "<strong>Tintin – Le Lotus Bleu (adaptation sonore)></strong> est un projet que j’ai réalisé en binôme lors de ma première année de BUT. L’objectif était d’adapter au format audio <strong>deux planches imposées</strong> de l’album <i>Le Lotus Bleu</i> de Hergé, en recréant l’ambiance et la narration de la bande dessinée uniquement par le son.",
    project_tintin_description_p2:
      "J’ai personnellement pris en charge une grande partie de la production : <strong>découpage du script à partir des cases</strong>, enregistrement des voix, conception des bruitages, création de l’<strong>ambiance sonore</strong> et montage final. Ce travail m’a permis d’explorer les codes du design sonore et de développer mes compétences en <strong>narration audio</strong>.",
    project_tintin_links_1:
      "Voir les planches",
    audio_btn_play:
       '<img src="./src/projects/play-btn.svg" class="emoji-audio" width="20" height="20" alt="Icône play" > Écouter l’adaptation',
    audio_btn_pause:
      '<img src="./src/projects/pause-btn.svg" class="emoji-audio" width="20" height="20" alt="Icône pause" > En cours d’écoute',
    audio_btn_resume:
       '<img src="./src/projects/play-btn.svg" class="emoji-audio" width="20" height="20" alt="Icône play" > Reprendre l’écoute',
    audio_btn_end:
      '<img src="./src/projects/play-btn.svg" class="emoji-audio" width="20" height="20" alt="Icône play" > Réécouter',
      project_tintin_tags_1:
      "# projet universitaire",
      project_tintin_tags_2:
    "# enregistrements sonores",
      project_tintin_tags_3:
      "# narration audio",
      project_tintin_tags_4:
      "# Davinci Resolve",
      project_tintin_gallerie_1:
      "Timeline du projet d'adaptation sonore",
      project_tintin_gallerie_2:
      "Liste des sons utilisés (🎙️ studio / 🌐 banque de sons)",
      project_distr_eat_h2_title:
      "Spot publicitaire <span>|</span> Juin 2025",
      project_distr_eat_description_p1:
      "Dans le cadre d’un <strong>projet universitaire</strong> en <strong>groupe</strong>, nous avons imaginé <strong>Distr-Eat</strong>, une entreprise fictive proposant des paniers repas composés de produits à date limite de consommation courte, vendus à prix réduit.",
      project_distr_eat_description_p2:
      "Nous avons réalisé un <strong>spot publicitaire</strong> en assurant l’écriture du scénario, la création du storyboard, réalisation d’un plan d’implantation, le réalisation, le tournage et le montage, développant ainsi nos compétences en créativité, narration visuelle, techniques audiovisuelles et travail collaboratif.",
      project_distr_eat_links_1:
      "Voir le storyboard",
      project_distr_eat_links_2:
      "Voir le dossier de production",
      project_distr_eat_links_3:
      "Voir le plan d'implantation",
      project_distr_eat_links_4:
      "Voir le spot publicitaire",
      project_distr_eat_tags_1:
      "# projet universitaire",
      project_distr_eat_tags_2:
      "# tournage",
      project_distr_eat_tags_3:
      "# spot publicitaire",
      project_distr_eat_tags_4:
      "# Davinci Resolve",
      project_distr_eat_gallerie_1:
      "Timeline du spot publicitaire",
      project_distr_eat_gallerie_2:
      "Logo de Distr-Eat",
      project_linktree_h2_title:
      "Page de liens <span>|</span> Juillet 2025",
      project_museum_description_p1 :
      "Pendant l'été 2025, j'ai conçu mon propre <strong>Linktree</strong> afin de centraliser mes différents profils et supports professionnels. J'ai d'abord réalisé un <strong>mock-up</strong> sur <strong>Figma</strong>, intégrant une option de thème sombre et en travaillant l'<strong>élaboration de la direction artistique</strong> : choix des <strong>couleurs</strong> et des <strong>polices</strong>, ensuite réutilisés dans mon Portfolio pour assurer une cohérence visuelle.",
      project_museum_description_p2 :
      "Le projet a ensuite été développé en <strong>HTML</strong>, <strong>CSS</strong> et <strong>JavaScript</strong>, avec un rendu personnalisé et responsive. Ce Linktree regroupe l'ensemble de mes liens essentiels : <strong>Portfolio</strong>, <strong>LinkedIn</strong>, <strong>Instagram</strong>, <strong>YouTube</strong>, <strong>GitHub</strong> et mon <strong>mail professionnel</strong>.",
      project_lintree_tags_1:
      "# projet universitaire",
      project_lintree_tags_2:
      "# university project",
      project_lintree_tags_3:
      "# développement web",
      project_lintree_tags_4:
      "# HTML, CSS & JS",
      project_museum_gallerie_1:
      "Identité graphique du site web",
  },
  en: {
    video_error: "Your browser does not support video playback.",
    presentation_txt1:
      "At 20, I'm deeply interested in <strong>UI Design</strong> and <strong>audiovisual creation</strong>. I'm currently studying for a <strong>BUT (3-year bachelor's degree) in Multimedia and Internet</strong> in Laval, France. Curious and creative, I enjoy exploring every aspect of digital creation — from web development to 3D modeling, including video editing.",
    presentation_txt2:
      "I invite you to explore my portfolio to discover <strong>my universe</strong> and <strong>my creations</strong>.",
    softskill_1:
      "Self-managed ",
    softskill_2:
      "Teamwork",
    softskill_3:
      "Proactive",
    hardskills_title:
      "Hardskills",
    hardskill_1:
      "Image editing",
    hardskill_2:
      "Video editing",
    hardskill_3:
      "Graphic design",
    hardskill_4:
      "Web development",
    hardskill_5:
      "Coding",
    hardskill_6:
      "Database management",
    hardskill_7:
      "Interface design",
    projects_title:
      "Projects",
    contact_title:
      "Contact me",
    name:
      "Name",
    first_name:
      "First name",
    phone:
      "Phone number",
    mail:
      "E-mail address",
    cv_btn:
      "See the CV",
    follow:
      "Follow me",
    credit:
      "© 2025 Maxime Croissant - All rights reserved",
    prenom_placeholder: "First name",
    nom_placeholder:
      "Last name",
    email_placeholder:
      "example@mail.com",
    message_placeholder:
      "Write here",
    submit_btn:
      "Send",
    task_1:
      "Remove elements or imperfections from photos",
    task_2:
      "Produce creative or advertising photomontages",
    task_3:
      "Improving contrast/colour/sharpness for professional content",
    task_4:
      "Create visuals for social networks with advanced retouching",
    task_5:
      "Carefully cut out objects or people",
    task_6:
      "Edit a dynamic YouTube video with transitions, cuts and music",
    task_7:
      "Produce an event recap or aftermovie",
    task_8:
      "Create a promotional video for a product or business",
    task_9:
      "Add subtitles, animated titles and visual effects",
    task_10:
      "Create a vertical edit for TikTok / Shorts",
    task_11:
      "Creating a professional logo and its variations",
    task_12:
      "Designing a poster for an event or concert",
    task_13:
      "Drawing custom vector icons",
    task_14:
      "Developing a visual identity (graphic charter, colour palette, fonts)",
    task_15:
      "Integrate a responsive showcase website from a design mockup",
    task_16:
      "Create a contact form and send it by email (PHP)",
    task_17:
      "Make a page more dynamic with JS animations or interactions",
    task_18:
      "Building an online portfolio or CV site",
    task_19:
      "Developing a Python automation script",
    task_20:
      "Creating a simple game",
    task_21:
      "Generate graphs from data",
    task_22:
      "Creating a relational database for a web application",
    task_23:
      "Design a login/password authentication system",
    task_24:
      "Managing SQL queries: filtering, sorting and cross-referencing data",
    task_25:
      "Connecting a PHP site to a MySQL database",
    task_26:
      "Backing up/exporting/restoring a DB via phpMyAdmin",
    task_27:
      "Designing the interface of a mobile application or website",
    task_28:
      "Creating a clickable interactive prototype for presentation",
    task_29:
      "Work on the user experience (navigation, ergonomics)",
    project_geekdays_h2_title:
      "Event Promotion <span>|</span> December 2024",
    project_geekdays_description_p1:
      "The goal of this project was to create <strong>a poster for a GeekDays-type event</strong>, with an attractive front and an informative back. I <strong>took the necessary photos in the studio</strong>, then <strong>used the Affinity suite</strong> to assemble everything. Finally, I prepared the <strong>event merchandising</strong>, from signage to products to be sold on-site.",
    project_geekdays_description_p2:
      "Throughout this process, I recorded my doubts and choices. In the form of a journal, this allowed me to <strong>keep a clear idea</strong> of the direction I was taking with the project.",
    project_h3_logiciels:
      "Software(s)",
    project_h3_links:
      "Useful Link(s)",
    project_geekdays_links_1:
      "View the project log",
    project_geekdays_tags_1:
      "# university project",
    project_geekdays_tags_2:
      "# photomontage",
    project_geekdays_tags_3:
      "# event promotion",
    project_geekdays_tags_4:
      "# Affinity suite",
    project_h2_gallerie:
      "Gallerie",
    project_geekdays_gallerie_1:
      "Front of the flyer",
    project_geekdays_gallerie_2:
      "Back of the flyer",
    project_geekdays_gallerie_3:
      "Signage",
    project_geekdays_gallerie_4:
      "Logo variations",
    project_museum_h2_title:
      "3D Modeling <span>|</span> March 2024",
    project_museum_description_p1:
      "This project involves the <strong>3D modeling of a museum gallery</strong>, which I created for my <strong>video portfolio</strong>, with the aim of supporting my applications on the Parcoursup platform.",
    project_museum_description_p2:
      "I modeled the central aisle with the placement of elements, then <strong>applied the textures</strong> I considered appropriate and set up various light sources. Finally, I defined the camera path for a <strong>first-person render of an individual walking</strong> toward a painting.",
    project_museum_links_1:
      "View the render",
    project_museum_tags_1:
      "# personnal project",
    project_museum_tags_2:
      "# video porfolio",
    project_museum_tags_3:
      "# 3D modeling",
    project_museum_tags_4:
      "# cinema 4D",
    project_museum_gallerie_1:
      "Cinema 4D interface",
    project_museum_gallerie_2:
      "Texture list",
    project_museum_gallerie_3:
      "Camera POV",
    project_museum_gallerie_4:
      "3D elements list",
    project_frontiere_h2_title:
      "Promotional Video <span>|</span> March 2024",
    project_frontiere_description_p1:
      "The project consisted of producing a square Instagram video post to <strong>promote a fictional art exhibition</strong> in the streets of Laval, “At the Frontiers of Reality.” The spot had to be <strong>created from photos</strong> that we had to animate and last less than 30 seconds.",
    project_frontiere_description_p2:
      "I therefore used <strong>Affinity Photo</strong> for the photomontages and <strong>DaVinci Resolve</strong> for the video editing. I also created the exhibition’s logo and a slogan.",
    project_frontiere_links_1:
      "Watch the video",
    project_frontiere_tags_1:
      "# university project",
    project_frontiere_tags_2:
      "# event promotion",
    project_frontiere_tags_3:
      "# Instagram format",
    project_frontiere_tags_4:
      "# Davinci Resolve",
    project_frontiere_gallerie_1:
      "First shot photomontage",
    project_frontiere_gallerie_2:
      "Second shot photomontage",
    project_frontiere_gallerie_3:
      "Third shot photomontage",
    project_frontiere_gallerie_4:
      "Logo & slogan",
    project_fitfriends_h2_title:
      "Figma Mock-up | October 2024",
    project_fitfriends_description_p1:
      "FitFriends is an application we created for a project during our first year at BUT. With my partner, we developed the specifications, the <strong>visuals and graphic identity of the app</strong> (logo, website, and application). It allows athletes to find training partners who share the same passions and goals, <strong>thus facilitating local sports meetups</strong>.",
    project_fitfriends_description_p2:
      "The specifications include: the context, a provisional schedule, the <strong>target audience</strong>, the market, the <strong>graphic charter</strong>, a hosting solution, the <strong>budget</strong>, etc.",
    project_fitfriends_links_1:
      "View the Figma mock-up",
    project_fitfriends_links_2:
      "Read the specifications",
    project_fitfriends_tags_1:
      "# university project",
    project_fitfriends_tags_2:
      "# specification",
    project_fitfriends_tags_3:
      "# app design",
    project_fitfriends_tags_4:
      "# Figma",
    project_fitfriends_gallerie_1:
      "Login page ( <span>app</span> )",
    project_fitfriends_gallerie_2:
      "Concept explanation page ( <span>website</span> )",
    project_fitfriends_gallerie_3:
      "Subscriptions page ( <span>website</span> )",
    project_tintin_h2_title:
      "Audio Fiction <span>|</span> March 2025",
    project_tintin_description_p1:
      "<strong>Tintin – The Blue Lotus (audio adaptation)</strong> is a project I carried out in pairs during my first year at BUT. The goal was to adapt <strong>two assigned pages</strong> from Hergé’s <i>The Blue Lotus</i> into an audio format, recreating the atmosphere and narration of the comic solely through sound.",
    project_tintin_description_p2:
      "I personally handled a large part of the production: <strong>breaking down the script from the panels</strong>, recording voices, designing sound effects, creating the <strong>sound atmosphere</strong>, and final editing. This work allowed me to explore the codes of sound design and develop my skills in <strong>audio storytelling</strong>.",
    project_tintin_links_1:
      "View the pages",
     audio_btn_play:
       '<img src="./src/projects/play-btn.svg" class="emoji-audio" width="20" height="20" alt="Icône play">  Écouter l’adaptation',
    audio_btn_pause:
      '<img src="./src/projects/pause-btn.svg" class="emoji-audio" width="20" height="20" alt="Icône pause"> En cours d’écoute',
    audio_btn_resume:
       '<img src="./src/projects/play-btn.svg" class="emoji-audio" width="20" height="20" alt="Icône play" > Reprendre l’écoute',
    audio_btn_end:
      '<img src="./src/projects/play-btn.svg" class="emoji-audio" width="20" height="20" alt="Icône play" > Réécouter',
      project_tintin_tags_1:
      "# university project",
      project_tintin_tags_2:
      "# sound recordings",
      project_tintin_tags_3:
      "# audio narration",
      project_tintin_tags_4:
      "# Davinci Resolve",
      project_tintin_gallerie_1:
      "Audio adaptation project timeline",
      project_tintin_gallerie_2:
      "List of sounds used (🎙️ studio / 🌐 sound library)",
      project_distr_eat_h2_title:
      "Commercial Spot <span>|</span> June 2025",
      project_distr_eat_description_p1:
      "As part of a <strong>university group project</strong>, we created <strong>Distr-Eat</strong>, a fictional company offering meal boxes made up of products with a short shelf life, sold at a discounted price.",
      project_distr_eat_description_p2:
      "We produced a <strong>commercial spot</strong>, handling the scriptwriting, storyboard creation, layout planning, directing, filming, and editing, thereby developing our skills in creativity, visual storytelling, audiovisual techniques, and collaborative work.",
      project_distr_eat_links_1:
      "View the storyboard",
      project_distr_eat_links_2:
      "View the production file",
      project_distr_eat_links_3:
      "View the layout plan",
      project_distr_eat_links_4:
      "Watch the commercial spot",
      project_distr_eat_tags_1:
      "# university project",
      project_distr_eat_tags_2:
      "# filming",
      project_distr_eat_tags_3:
      "# commercial spot",
      project_distr_eat_tags_4:
      "# Davinci Resolve",
      project_distr_eat_gallerie_1:
      "Commercial spot timeline",
      project_distr_eat_gallerie_2:
      "Distr-Eat Logo",
      project_linktree_h2_title:
      "Links Page <span>|</span> July 2025",
      project_museum_description_p1 :
      "During the summer of 2025, I designed my own <strong>Linktree</strong> to centralize my various professional profiles and platforms. I first created a <strong>mock-up</strong> on <strong>Figma</strong>, integrating a dark theme option and working on the <strong>art direction</strong>: selecting <strong>colors</strong> and <strong>fonts</strong>, which I later reused in my Portfolio to ensure visual consistency.",
      project_museum_description_p2 :
      "The project was then developed in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, with a customized and responsive design. This Linktree brings together all of my essential links: <strong>Portfolio</strong>, <strong>LinkedIn</strong>, <strong>Instagram</strong>, <strong>YouTube</strong>, <strong>GitHub</strong>, and my <strong>professional email</strong>.",
      project_lintree_tags_1:
      "# university project",
      project_lintree_tags_2:
      "# university project",
      project_lintree_tags_3:
      "# web developpement",
      project_lintree_tags_4:
      "# HTML, CSS & JS",
      project_museum_gallerie_1:
      "Website Graphic Identity",
  },
};

function applyLanguage(lang) {
  // Pour les textes intérieurs
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Pour les placeholders
  document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-lang-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Pour les valeurs (input type="submit", boutons, etc.)
  document.querySelectorAll("[data-lang-value]").forEach((el) => {
    const key = el.getAttribute("data-lang-value");
    if (translations[lang][key]) {
      el.setAttribute("value", translations[lang][key]);
    }
  });
}

function switchLanguage() {
  currentLang = currentLang === "fr" ? "en" : "fr";
  applyLanguage(currentLang);
  localStorage.setItem('lang', currentLang);

  // Mise à jour du texte du bouton (optionnel)
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.innerHTML = currentLang === "fr"
      ? 'EN <img src="./src/emoji-gb.webp" alt="Drapeau Royaume-Uni" width="20" height="20" />'
      : 'FR <img src="./src/emoji-fr.webp" alt="Drapeau France" width="20" height="20" />';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.onclick = switchLanguage;

    // Initialise le texte du bouton au chargement
    btn.innerHTML = currentLang === "fr"
      ? 'EN <img src="./src/emoji-gb.webp" alt="Drapeau Royaume-Uni" width="20" height="20" />'
      : 'FR <img src="./src/emoji-fr.webp" alt="Drapeau France" width="20" height="20" />';
  }
});

// Scroll vidéo

window.addEventListener('wheel', (e) => {
  if (window.scrollY < window.innerHeight / 2 && e.deltaY > 0) {
    e.preventDefault();
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
}, { passive: false });

// Responsive des image projet

const img = document.getElementById('img-projets');

function updateProjectImages() {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  const images = [
    { selector: '.bullshitness', mobile: './src/main/BullShitness_mobile.webp', desktop: './src/main/BullShitness_laptop.webp' },
    { selector: '.distr-eat', mobile: './src/main/Distr-Eat_mobile.webp', desktop: './src/main/Distr-Eat_laptop.webp' },
    { selector: '.linktree', mobile: './src/main/LinkTree_mobile.webp', desktop: './src/main/LinkTree_laptop.webp' },
    { selector: '.museum', mobile: './src/main/Museum_mobile.webp', desktop: './src/main/Museum_laptop.webp' },
    { selector: '.maxime²', mobile: './src/main/Maxime²_mobile.webp', desktop: './src/main/Maxime²_laptop.webp' },
    { selector: '.tintin', mobile: './src/main/Tintin_mobile.webp', desktop: './src/main/Tintin_laptop.webp' },
    { selector: '.geekdays', mobile: './src/main/GeekDays_mobile.webp', desktop: './src/main/GeekDays_laptop.webp' },
    { selector: '.fitfriends', mobile: './src/main/FitFriends_mobile.webp', desktop: './src/main/FitFriends_laptop.webp' },
    { selector: '.systeme_solaire', mobile: './src/main/Systeme_solaire_mobile.webp', desktop: './src/main/Systeme_solaire_laptop.webp' },
    { selector: '.frontiere-reel', mobile: './src/main/Fontieres_du_reel_mobile.webp', desktop: './src/main/Fontieres_du_reel_laptop.webp' }
  ];

  images.forEach(img => {
    const image = document.querySelector(img.selector);
    if (image) {
      image.src = isDesktop ? img.desktop : img.mobile
    }
  });
}

document.addEventListener("DOMContentLoaded", updateProjectImages);

window.addEventListener('resize', updateProjectImages);

// Bouton retour projet

const btn = document.querySelector('.return-button-end');

window.addEventListener("scroll", () => {
  const scrolledToBottom =
    window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;

  if (scrolledToBottom) {
    btn.classList.add("visible");
  } else {
    btn.classList.remove("visible");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // animation douce
  });
});

// Bouton fichier audio

const audio = document.getElementById("audio");
const btn_lecture = document.getElementById("btnLecture");

btn_lecture.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn_lecture.innerHTML = translations[currentLang].audio_btn_pause;
  } else {
    audio.pause();
    btn_lecture.innerHTML = translations[currentLang].audio_btn_resume;
  }
});

// Quand la musique se termine
audio.addEventListener("ended", () => {
  btn_lecture.innerHTML = translations[currentLang].audio_btn_end;
});