export type SeoFeatureKey =
  | "crm"
  | "ia"
  | "whatsapp"
  | "visites"
  | "relances"
  | "catalogue"
  | "equipe";

export interface SeoPage {
  slug: string;
  kind: "national" | "feature" | "profession" | "city";
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  problemsTitle: string;
  problems: { title: string; text: string }[];
  solutionsTitle: string;
  solutions: { title: string; text: string }[];
  examplesTitle: string;
  examples: { title: string; text: string }[];
  features: SeoFeatureKey[];
  faq: { q: string; a: string }[];
  related: string[];
}

export const SEO_FEATURES: Record<SeoFeatureKey, { title: string; text: string }> = {
  crm: { title: "CRM immobilier centralisé", text: "Tous vos prospects, échanges, biens et visites réunis dans un seul espace, accessible depuis votre téléphone ou votre ordinateur." },
  ia: { title: "Qualification automatique par IA", text: "L’assistant identifie le budget, le quartier, le type de bien et le délai du projet avant de vous transmettre le prospect." },
  whatsapp: { title: "WhatsApp, Instagram et Messenger", text: "Les messages reçus sur vos canaux sociaux arrivent au même endroit et reçoivent une réponse, même en dehors de vos horaires." },
  visites: { title: "Planification des visites", text: "L’assistant propose des créneaux selon vos disponibilités et enregistre chaque rendez-vous dans votre planning." },
  relances: { title: "Relances automatiques", text: "Les prospects silencieux sont relancés au bon moment, avec un message adapté à leur projet." },
  catalogue: { title: "Catalogue de biens", text: "Vos biens sont décrits une fois ; l’assistant recommande ceux qui correspondent aux critères de chaque prospect." },
  equipe: { title: "Gestion des collaborateurs", text: "Répartissez les prospects entre vos conseillers et suivez l’avancement de chaque dossier." },
};

const coreFeatures: SeoFeatureKey[] = ["crm", "ia", "whatsapp", "visites", "relances", "catalogue"];

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "crm-immobilier-maroc",
    kind: "national",
    breadcrumb: "CRM immobilier Maroc",
    metaTitle: "CRM immobilier au Maroc avec assistant IA | Wafy Immo",
    metaDescription: "Wafy Immo, le CRM immobilier marocain avec assistant IA : prospects WhatsApp centralisés, qualification, visites et relances automatisées. Essai gratuit 30 jours.",
    eyebrow: "CRM immobilier · Maroc",
    h1: "Le CRM immobilier avec assistant IA pensé pour le Maroc",
    intro: "Au Maroc, l’essentiel de la relation client immobilière se joue sur WhatsApp, souvent en français, en darija ou en arabe, et à toute heure. Wafy Immo réunit ces conversations dans un CRM conçu pour les agents, agences et promoteurs, et confie à un assistant IA les tâches répétitives : répondre, qualifier, proposer des biens, planifier les visites et relancer.",
    problemsTitle: "Ce qui freine les professionnels de l’immobilier",
    problems: [
      { title: "Des prospects éparpillés", text: "Annonces sur les portails, messages WhatsApp, appels, Instagram : chaque demande arrive par un canal différent et aucune vue d’ensemble n’existe." },
      { title: "Des réponses trop tardives", text: "Pendant une visite ou en soirée, les messages attendent. Le prospect contacte entre-temps d’autres agences." },
      { title: "Un suivi qui repose sur la mémoire", text: "Relances notées sur un carnet, visites dans un agenda séparé : les oublis coûtent des affaires." },
    ],
    solutionsTitle: "Ce que Wafy Immo change au quotidien",
    solutions: [
      { title: "Un seul espace de travail", text: "Chaque prospect a sa fiche avec l’historique des échanges, ses critères et ses rendez-vous." },
      { title: "Une réponse immédiate, 24h/24", text: "L’assistant IA répond aux demandes entrantes et pose les bonnes questions pendant que vous êtes occupé." },
      { title: "Des tâches qui ne s’oublient plus", text: "Visites planifiées, rappels et relances sont gérés automatiquement et visibles dans votre tableau de bord." },
    ],
    examplesTitle: "Exemples d’utilisation",
    examples: [
      { title: "Une demande reçue un dimanche soir", text: "Un prospect écrit au sujet d’un appartement. L’assistant répond, vérifie son budget et le quartier souhaité, puis propose deux créneaux de visite pour la semaine." },
      { title: "Un prospect qui ne répond plus", text: "Après une visite sans retour, Wafy Immo relance le prospect quelques jours plus tard avec des biens similaires à celui visité." },
    ],
    features: coreFeatures,
    faq: [
      { q: "Wafy Immo est-il adapté au marché immobilier marocain ?", a: "Oui. Wafy Immo a été conçu pour les usages des professionnels au Maroc, où WhatsApp est le principal canal d’échange avec les prospects. Les prix sont exprimés en dirhams." },
      { q: "Faut-il des compétences techniques pour l’utiliser ?", a: "Non. Vous connectez votre WhatsApp, ajoutez vos biens et l’assistant commence à répondre. Une démo personnalisée est proposée si vous souhaitez être accompagné." },
      { q: "Combien coûte Wafy Immo après l’essai ?", a: "L’essai est gratuit pendant 30 jours ou 30 prospects, jusqu’à 5 biens. L’abonnement démarre ensuite à partir de 250 DH HT par mois." },
    ],
    related: ["assistant-ia-immobilier", "whatsapp-immobilier", "crm-agence-immobiliere", "crm-immobilier-casablanca"],
  },
  {
    slug: "assistant-ia-immobilier",
    kind: "feature",
    breadcrumb: "Assistant IA immobilier",
    metaTitle: "Assistant IA immobilier : qualifiez vos prospects 24h/24 | Wafy Immo",
    metaDescription: "Un assistant IA immobilier qui répond à vos prospects, qualifie leur projet, recommande vos biens et planifie les visites. Testez Wafy Immo gratuitement 30 jours.",
    eyebrow: "Assistant IA immobilier",
    h1: "Un assistant IA immobilier qui travaille pendant que vous faites visiter",
    intro: "L’assistant IA de Wafy Immo prend en charge la première partie de la relation client : il répond aux questions, comprend le projet du prospect et prépare le terrain pour votre rendez-vous. Vous gardez la main à tout moment et n’intervenez que sur les prospects sérieux.",
    problemsTitle: "Pourquoi un assistant IA devient nécessaire",
    problems: [
      { title: "Les mêmes questions, toute la journée", text: "Prix, surface, disponibilité, quartier : une grande partie du temps passe à répéter les mêmes informations." },
      { title: "Des prospects difficiles à trier", text: "Sans qualification, il est impossible de savoir qui a un projet réel et un budget cohérent." },
      { title: "Une disponibilité limitée", text: "Un agent ne peut pas répondre à tout instant, alors que les demandes arrivent à toute heure." },
    ],
    solutionsTitle: "Ce que fait l’assistant IA",
    solutions: [
      { title: "Il répond avec vos informations", text: "Les réponses s’appuient sur votre catalogue de biens et les consignes que vous définissez." },
      { title: "Il qualifie chaque demande", text: "Budget, type de bien, localisation, délai et mode de financement sont collectés au fil de la conversation." },
      { title: "Il vous passe le relais", text: "Vous pouvez désactiver l’assistant, reprendre une conversation et fixer ses jours et horaires de fonctionnement." },
    ],
    examplesTitle: "L’assistant en situation",
    examples: [
      { title: "Recommandation de biens", text: "Un prospect cherche un trois-pièces avec un budget donné : l’assistant propose les biens de votre catalogue qui correspondent." },
      { title: "Prospect hors critères", text: "Si la demande ne correspond à aucun bien, l’assistant l’enregistre afin que vous puissiez le recontacter lorsqu’une offre adaptée arrive." },
    ],
    features: ["ia", "catalogue", "whatsapp", "visites", "relances", "crm"],
    faq: [
      { q: "L’assistant IA remplace-t-il l’agent immobilier ?", a: "Non. Il prend en charge les échanges répétitifs et la qualification. La visite, la négociation et la relation de confiance restent entre vos mains." },
      { q: "Puis-je contrôler ce que répond l’assistant ?", a: "Oui. Il s’appuie sur vos biens et vos consignes, et vous pouvez reprendre une conversation à tout moment." },
      { q: "Sur quels canaux l’assistant répond-il ?", a: "Wafy Immo gère les conversations WhatsApp, Instagram et Messenger dans un même espace." },
    ],
    related: ["whatsapp-immobilier", "gestion-visites-immobilieres", "automatisation-relances-immobilieres", "crm-immobilier-maroc"],
  },
  {
    slug: "whatsapp-immobilier",
    kind: "feature",
    breadcrumb: "WhatsApp immobilier",
    metaTitle: "WhatsApp immobilier : gérez vos prospects avec l’IA | Wafy Immo",
    metaDescription: "Centralisez vos conversations WhatsApp, Instagram et Messenger, répondez 24h/24 et ne perdez plus un prospect immobilier. Essai gratuit Wafy Immo 30 jours.",
    eyebrow: "WhatsApp immobilier",
    h1: "WhatsApp immobilier : ne laissez plus un message sans réponse",
    intro: "Pour beaucoup de professionnels de l’immobilier au Maroc, WhatsApp est devenu le principal outil commercial. Wafy Immo s’y connecte pour transformer chaque conversation en prospect suivi, qualifié et relancé, sans changer vos habitudes.",
    problemsTitle: "Les limites de WhatsApp utilisé seul",
    problems: [
      { title: "Des conversations noyées", text: "Les messages professionnels se mêlent aux échanges personnels et les demandes importantes disparaissent dans la liste." },
      { title: "Aucun historique exploitable", text: "Il est difficile de retrouver les critères d’un prospect ou la date de sa dernière relance." },
      { title: "Plusieurs canaux à surveiller", text: "Instagram et Messenger s’ajoutent à WhatsApp et multiplient les applications à consulter." },
    ],
    solutionsTitle: "WhatsApp, connecté à votre CRM",
    solutions: [
      { title: "Votre numéro habituel", text: "Vous pouvez conserver votre numéro et indiquer les conversations personnelles auxquelles l’assistant ne doit pas répondre." },
      { title: "Une fiche par prospect", text: "Chaque conversation alimente automatiquement la fiche du prospect dans le CRM." },
      { title: "Tous vos canaux réunis", text: "WhatsApp, Instagram et Messenger sont regroupés dans une seule boîte de réception." },
    ],
    examplesTitle: "Exemples concrets",
    examples: [
      { title: "Un message issu d’une annonce", text: "Un prospect clique sur votre annonce et vous écrit sur WhatsApp. L’assistant répond, présente le bien et propose une visite." },
      { title: "Un message Instagram", text: "Une question posée en commentaire ou en message privé est traitée de la même manière et rejoint votre CRM." },
    ],
    features: ["whatsapp", "ia", "crm", "visites", "relances", "catalogue"],
    faq: [
      { q: "Puis-je utiliser mon numéro WhatsApp habituel ?", a: "Oui. Vous pouvez utiliser le même numéro pour vos échanges professionnels et personnels, et exclure vos contacts personnels depuis la plateforme." },
      { q: "Mes conversations restent-elles confidentielles ?", a: "Vos conversations ne sont ni publiques ni accessibles aux autres agences. Elles sont analysées uniquement pour répondre à vos prospects." },
      { q: "Wafy Immo gère-t-il aussi Instagram et Messenger ?", a: "Oui, les trois canaux sont regroupés dans le même espace." },
    ],
    related: ["assistant-ia-immobilier", "automatisation-relances-immobilieres", "crm-immobilier-maroc", "gestion-visites-immobilieres"],
  },
  {
    slug: "gestion-visites-immobilieres",
    kind: "feature",
    breadcrumb: "Gestion des visites",
    metaTitle: "Gestion des visites immobilières automatisée | Wafy Immo",
    metaDescription: "Planifiez automatiquement vos visites immobilières, envoyez les rappels et suivez chaque rendez-vous depuis un seul CRM. Essai gratuit de 30 jours.",
    eyebrow: "Gestion des visites",
    h1: "Gestion des visites immobilières : un planning qui se remplit tout seul",
    intro: "Organiser une visite demande souvent plusieurs échanges : trouver un créneau, confirmer l’adresse, rappeler la veille. Wafy Immo automatise ces étapes pour que vous consacriez votre temps aux visites elles-mêmes.",
    problemsTitle: "Ce qui complique l’organisation des visites",
    problems: [
      { title: "Des allers-retours sans fin", text: "Trouver un créneau commun prend parfois plus de temps que la visite." },
      { title: "Des rendez-vous oubliés", text: "Sans rappel, certains prospects ne se présentent pas." },
      { title: "Des visites non qualifiées", text: "Faire visiter un bien à un prospect hors budget fait perdre une demi-journée." },
    ],
    solutionsTitle: "Comment Wafy Immo organise vos visites",
    solutions: [
      { title: "Créneaux proposés automatiquement", text: "L’assistant propose des horaires selon vos disponibilités et confirme le rendez-vous." },
      { title: "Prospects qualifiés avant la visite", text: "Vous connaissez le budget et les critères du prospect avant de vous déplacer." },
      { title: "Rappels et suivi", text: "Les rappels sont envoyés et la visite est enregistrée dans l’historique du prospect." },
    ],
    examplesTitle: "Exemples d’utilisation",
    examples: [
      { title: "Plusieurs visites sur un même bien", text: "Plusieurs prospects intéressés par le même appartement se voient proposer des créneaux qui s’enchaînent sur une même demi-journée." },
      { title: "Après la visite", text: "Le prospect reçoit un message de suivi pour recueillir son avis et préparer la suite." },
    ],
    features: ["visites", "ia", "relances", "crm", "whatsapp", "catalogue"],
    faq: [
      { q: "L’assistant peut-il fixer un rendez-vous sans moi ?", a: "Oui, selon les disponibilités que vous définissez. Vous retrouvez chaque rendez-vous dans votre planning." },
      { q: "Puis-je modifier ou annuler une visite ?", a: "Oui, vous gardez la main sur votre planning et pouvez reprendre la conversation avec le prospect à tout moment." },
      { q: "La planification est-elle incluse dans l’essai gratuit ?", a: "Oui, la planification des visites fait partie de l’essai gratuit de 30 jours." },
    ],
    related: ["automatisation-relances-immobilieres", "assistant-ia-immobilier", "crm-agence-immobiliere", "crm-immobilier-maroc"],
  },
  {
    slug: "automatisation-relances-immobilieres",
    kind: "feature",
    breadcrumb: "Automatisation des relances",
    metaTitle: "Automatisation des relances immobilières | Wafy Immo",
    metaDescription: "Relancez automatiquement vos prospects immobiliers au bon moment, sans oubli. Wafy Immo suit chaque dossier jusqu’à la visite. Essai gratuit 30 jours.",
    eyebrow: "Relances automatiques",
    h1: "Automatisez vos relances immobilières sans perdre le contact humain",
    intro: "Une grande partie des ventes et des locations se décide après plusieurs échanges. Pourtant, la relance est souvent la première tâche abandonnée quand l’agenda se remplit. Wafy Immo s’en charge, avec des messages adaptés au projet de chaque prospect.",
    problemsTitle: "Pourquoi les relances sont oubliées",
    problems: [
      { title: "Manque de temps", text: "Les urgences du jour passent avant les prospects qui n’ont pas répondu." },
      { title: "Pas de visibilité", text: "Sans outil, il est difficile de savoir qui relancer et quand." },
      { title: "Messages génériques", text: "Une relance standard, sans rapport avec le projet du prospect, obtient peu de réponses." },
    ],
    solutionsTitle: "Des relances qui suivent le projet du prospect",
    solutions: [
      { title: "Au bon moment", text: "Les prospects silencieux sont relancés automatiquement selon l’avancement de leur dossier." },
      { title: "Avec le bon message", text: "Les relances s’appuient sur les critères exprimés et peuvent proposer de nouveaux biens." },
      { title: "Sous votre contrôle", text: "Vous voyez les relances effectuées et reprenez la conversation dès qu’un prospect répond." },
    ],
    examplesTitle: "Exemples de relances",
    examples: [
      { title: "Nouveau bien disponible", text: "Un bien correspondant aux critères d’un ancien prospect est ajouté : il en est informé." },
      { title: "Projet en réflexion", text: "Un prospect qui souhaitait acheter dans quelques mois est recontacté le moment venu." },
    ],
    features: ["relances", "ia", "crm", "catalogue", "whatsapp", "visites"],
    faq: [
      { q: "Les relances sont-elles envoyées sur WhatsApp ?", a: "Oui, les relances sont envoyées sur le canal utilisé par le prospect." },
      { q: "Puis-je arrêter les relances pour un prospect ?", a: "Oui, vous pouvez reprendre la conversation vous-même ou désactiver l’assistant." },
      { q: "Les relances risquent-elles d’agacer mes prospects ?", a: "Les relances restent liées au projet du prospect et s’arrêtent dès qu’il répond ou que vous reprenez la main." },
    ],
    related: ["gestion-visites-immobilieres", "whatsapp-immobilier", "assistant-ia-immobilier", "crm-immobilier-maroc"],
  },
  {
    slug: "crm-agence-immobiliere",
    kind: "profession",
    breadcrumb: "CRM agence immobilière",
    metaTitle: "CRM pour agence immobilière au Maroc | Wafy Immo",
    metaDescription: "Le CRM des agences immobilières : prospects centralisés, répartition entre conseillers, assistant IA WhatsApp et rapports de performance. Essai gratuit.",
    eyebrow: "Agences immobilières",
    h1: "Le CRM des agences immobilières qui veulent suivre chaque prospect",
    intro: "Dans une agence, les prospects passent d’un conseiller à l’autre et les informations se perdent facilement. Wafy Immo donne à toute l’équipe une base commune : les mêmes fiches prospects, le même catalogue et un assistant IA qui répond à la place de l’agence quand personne n’est disponible.",
    problemsTitle: "Les défis d’une agence immobilière",
    problems: [
      { title: "Des prospects attachés à un téléphone", text: "Quand un conseiller est absent ou quitte l’agence, ses échanges partent avec lui." },
      { title: "Une répartition floue", text: "Il est difficile de savoir qui suit quel prospect et où en est chaque dossier." },
      { title: "Peu d’indicateurs", text: "Sans données, on ne sait pas d’où viennent les prospects ni quelles annonces fonctionnent." },
    ],
    solutionsTitle: "Wafy Immo pour toute l’équipe",
    solutions: [
      { title: "Gestion des collaborateurs", text: "Attribuez les prospects à vos conseillers et suivez leurs dossiers." },
      { title: "Catalogue partagé", text: "Tous les biens de l’agence sont accessibles à l’assistant et à l’équipe." },
      { title: "Rapports de performance", text: "Suivez le volume de prospects, les visites planifiées et l’activité commerciale." },
    ],
    examplesTitle: "Exemples d’utilisation en agence",
    examples: [
      { title: "Un conseiller en congé", text: "Ses prospects restent suivis : l’historique est visible par l’équipe et l’assistant continue de répondre." },
      { title: "Une nouvelle annonce", text: "Les demandes générées sont qualifiées puis attribuées au conseiller chargé du bien." },
    ],
    features: ["equipe", "crm", "ia", "catalogue", "visites", "relances"],
    faq: [
      { q: "Plusieurs conseillers peuvent-ils utiliser le même compte ?", a: "Oui, l’abonnement inclut la gestion des collaborateurs pour répartir et suivre les prospects." },
      { q: "Le catalogue de biens est-il limité ?", a: "Pendant l’essai, jusqu’à 5 biens. L’abonnement inclut un catalogue de biens illimité." },
      { q: "Peut-on avoir une démonstration pour l’équipe ?", a: "Oui, vous pouvez réserver une démo personnalisée pour présenter Wafy Immo à votre agence." },
    ],
    related: ["crm-immobilier-maroc", "assistant-ia-immobilier", "crm-promoteur-immobilier", "gestion-visites-immobilieres"],
  },
  {
    slug: "crm-promoteur-immobilier",
    kind: "profession",
    breadcrumb: "CRM promoteur immobilier",
    metaTitle: "CRM promoteur immobilier avec IA au Maroc | Wafy Immo",
    metaDescription: "Gérez les leads de vos projets immobiliers : qualification IA sur WhatsApp, prise de rendez-vous et suivi commercial pour promoteurs au Maroc.",
    eyebrow: "Promoteurs immobiliers",
    h1: "Un CRM pour promoteur immobilier qui qualifie vos leads à grande échelle",
    intro: "Le lancement d’un programme immobilier génère souvent un afflux de leads en quelques jours, via les campagnes publicitaires et les réseaux sociaux. Wafy Immo répond à chacun, identifie les acheteurs sérieux et organise les rendez-vous avec votre équipe commerciale.",
    problemsTitle: "Les difficultés des promoteurs",
    problems: [
      { title: "Des pics de leads difficiles à absorber", text: "Une campagne réussie peut saturer l’équipe commerciale en quelques heures." },
      { title: "Beaucoup de demandes peu qualifiées", text: "Une part importante des leads ne correspond pas au budget ou à la typologie du programme." },
      { title: "Plusieurs projets en parallèle", text: "Chaque programme a ses typologies, ses prix et son avancement." },
    ],
    solutionsTitle: "Ce que Wafy Immo apporte aux promoteurs",
    solutions: [
      { title: "Réponse instantanée à chaque lead", text: "L’assistant IA traite les demandes au fil de l’eau, quel que soit leur volume." },
      { title: "Qualification avant transmission", text: "Votre équipe reçoit les leads avec leur budget, leur typologie et leur délai." },
      { title: "Multi-projets", text: "Gérez plusieurs programmes immobiliers d’un même groupe dans le même outil." },
    ],
    examplesTitle: "Exemples d’utilisation",
    examples: [
      { title: "Lancement commercial", text: "Les leads issus d’une campagne Meta reçoivent une réponse immédiate et un rendez-vous au bureau de vente leur est proposé." },
      { title: "Typologie épuisée", text: "Quand une typologie n’est plus disponible, l’assistant oriente le prospect vers une alternative du programme." },
    ],
    features: ["ia", "whatsapp", "visites", "crm", "relances", "equipe"],
    faq: [
      { q: "Existe-t-il une offre dédiée aux promoteurs ?", a: "Oui, les promoteurs disposent de packs prépayés valables un an. Consultez la page Promoteur immobilier pour les découvrir." },
      { q: "Peut-on gérer plusieurs projets ?", a: "Oui, plusieurs projets immobiliers d’un même groupe peuvent être gérés." },
      { q: "Wafy Immo s’intègre-t-il à notre CRM existant ?", a: "Une intégration CRM est proposée sur devis. Demandez une démo pour en discuter." },
    ],
    related: ["crm-agence-immobiliere", "assistant-ia-immobilier", "whatsapp-immobilier", "crm-immobilier-maroc"],
  },
  {
    slug: "crm-immobilier-casablanca",
    kind: "city",
    breadcrumb: "CRM immobilier Casablanca",
    metaTitle: "CRM immobilier à Casablanca avec assistant IA | Wafy Immo",
    metaDescription: "Agents et agences immobilières à Casablanca : centralisez vos prospects WhatsApp, qualifiez-les par IA et remplissez votre planning de visites. Essai gratuit.",
    eyebrow: "Casablanca",
    h1: "CRM immobilier à Casablanca : répondez plus vite que la concurrence",
    intro: "Casablanca concentre une forte densité d’agences et de biens, des quartiers d’affaires aux zones résidentielles en périphérie. Sur un marché aussi concurrentiel, le prospect contacte souvent plusieurs agences en même temps : la rapidité de réponse et la qualité du suivi font la différence. Wafy Immo, dont l’équipe est basée à Casablanca, aide les professionnels de la ville à ne laisser passer aucune demande.",
    problemsTitle: "Le quotidien d’un agent à Casablanca",
    problems: [
      { title: "Un marché très concurrentiel", text: "Le même prospect interroge plusieurs agences : la première réponse pertinente prend souvent l’avantage." },
      { title: "Des déplacements qui prennent du temps", text: "Entre deux visites dans des quartiers éloignés, les messages s’accumulent." },
      { title: "Des demandes très variées", text: "Location, achat, bureaux, résidences secondaires : chaque demande nécessite des questions différentes." },
    ],
    solutionsTitle: "Comment Wafy Immo vous aide à Casablanca",
    solutions: [
      { title: "Réponse pendant vos trajets", text: "L’assistant répond et qualifie pendant que vous êtes en déplacement ou en visite." },
      { title: "Des visites mieux regroupées", text: "Les créneaux proposés tiennent compte de votre planning pour limiter les allers-retours." },
      { title: "Une qualification par type de projet", text: "Location ou achat, budget et quartier sont identifiés avant votre premier appel." },
    ],
    examplesTitle: "Exemples d’utilisation",
    examples: [
      { title: "Plusieurs demandes sur un même bien", text: "Un appartement bien placé génère de nombreux messages : chacun reçoit une réponse et les prospects qualifiés obtiennent une visite." },
      { title: "Location ou achat", text: "L’assistant distingue rapidement les demandes de location et d’achat pour les orienter vers les bons biens." },
    ],
    features: coreFeatures,
    faq: [
      { q: "Wafy Immo a-t-il une équipe à Casablanca ?", a: "Oui, Wafy Immo est une marque de BIRDEV, dont les bureaux sont situés à Maârif, Casablanca." },
      { q: "Puis-je réserver une démo en personne ?", a: "Demandez une démo personnalisée : notre équipe vous recontacte pour convenir des modalités." },
      { q: "Wafy Immo convient-il aux agents indépendants ?", a: "Oui, l’offre d’entrée est pensée pour les agents indépendants, avec un essai gratuit de 30 jours." },
    ],
    related: ["crm-immobilier-maroc", "crm-agence-immobiliere", "whatsapp-immobilier", "gestion-visites-immobilieres"],
  },
];

export const getSeoPage = (slug: string) => SEO_PAGES.find((p) => p.slug === slug);
