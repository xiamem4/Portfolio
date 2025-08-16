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
    { selector: '.tintin' , mobile: './src/main/Tintin_mobile.webp', desktop: './src/main/Tintin_laptop.webp'},
    { selector: '.geekdays', mobile: './src/main/GeekDays_mobile.webp', desktop: './src/main/GeekDays_laptop.webp'},
    { selector: '.fitfriends', mobile: './src/main/FitFriends_mobile.webp', desktop: './src/main/FitFriends_laptop.webp'},
    { selector: '.systeme_solaire', mobile: './src/main/Systeme_solaire_mobile.webp', desktop: './src/main/Systeme_solaire_laptop.webp'},
    { selector: '.frontiere-reel', mobile: './src/main/Fontieres_du_reel_mobile.webp', desktop: './src/main/Fontieres_du_reel_laptop.webp'}
  ];

  images.forEach(img=> {
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

