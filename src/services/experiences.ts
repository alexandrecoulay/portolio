import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en";

const fr = "fr";
const en = "en";

// Fonction utilitaire pour formater les dates
const formatExperienceDate = (date: Date, locale: string) => {
    return `${dayjs(date).locale(locale).format("MMMM YYYY")}`;
}

export const experiences_fr = [
    {
        sideProject: true,
        date: `Depuis ${formatExperienceDate(new Date(2025, 0), fr)}`,
        title: "Création d'une IA de détection des limites de greens de golf",
        company: "FlyAway",
        contexte: "Développement d'un système de machine learning pour détecter automatiquement les limites des greens de golf à partir d'images satellites, améliorant la précision de détection de 80% à 90-95% grâce à un modèle U-Net avec ResNet50.",
        realisations: [
            "Architecture et planification d'un projet ML complet (4 phases)",
            "Extraction de 500 échantillons de greens diversifiés à partir de +400k trous",
            "Récupération et traitement d'images satellites via Mapbox",
            "Annotation de données avec SAM2 + outil interne créé pour l'occasion",
            "Entraînement d'un modèle U-Net avec ResNet50 sur GPU RTX 3070",
            "Conversion de pixels en coordonnées GPS pour génération de points d'élévation",
            "Intégration d'un système de fallback intelligent basé sur la confiance",
            "Export du modèle en ONNX pour l'inférence en production",
            "Réduction des coûts API grâce à des points d'élévation plus précis"
        ],
        technologies: ["Python", "PyTorch", "U-Net", "ResNet50", "ONNX", "OpenCV", "Roboflow", "Mapbox", "Google Elevation API", "Weights & Biases", "FastAPI", "NodeJS", "TypeScript"]
    },
    {
        sideProject: true,
        date: `Depuis ${formatExperienceDate(new Date(2025, 8), fr)}`,
        title: "Création d'un Assistant IA RAG intelligent pour le golf avec agent FlyAI",
        company: "FlyAway",
        contexte: "Développement d'un système RAG (Retrieval-Augmented Generation) complet pour ingérer et interroger les règles USGA via recherche vectorielle, couplé à un agent intelligent FlyAI capable d'utiliser 42+ outils dynamiquement pour répondre aux questions sur les réseaux sociaux.",
        realisations: [
            "Pipeline RAG complet : PDF → chunking sémantique (500-600 tokens) → embeddings (384-dim) → Weaviate",
            "Ingestion des règles USGA multilingues (EN/FR) : 900-1100 chunks avec métadonnées enrichies",
            "Recherche vectorielle avec cosine similarity et HNSW pour recherche en <50ms",
            "Chunking hiérarchique intelligent respectant la structure des règles (Rule > Section > Subsection)",
            "Overlap de 100 tokens entre chunks pour préserver le contexte aux frontières",
            "Agent FlyAI avec architecture tool-enabled : 42+ outils partagés avec AIAssistant",
            "ToolRegistry centralisé : golf search, weather, stats, rules, videos, user profiles, coaching",
            "ToolExecutor avec cache, permissions, et exécution parallèle des outils",
            "Orchestration Gemini avec function calling : 3 turns max optimisé pour réseaux sociaux",
            "Système de recherche sémantique de vidéos d'entraînement avec Weaviate",
            "Réponses optimisées pour médias sociaux : 500 chars max, <2s latence",
            "Feature flag pour déploiement graduel avec monitoring des métriques",
            "Embeddings multilingues avec sentence-transformers (paraphrase-multilingual-MiniLM-L12-v2)",
            "Validation de retrieval avec tests automatisés (>90% précision top-5)"
        ],
        technologies: ["Weaviate", "Gemini", "sentence-transformers", "PyMuPDF", "HNSW", "Redis", "TypeScript", "NodeJS", "MongoDB"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2025, 2), fr)} - ${formatExperienceDate(new Date(2025, 4), fr)}`,
        title: "Création d’une IA pour la recherche immobilière",
        company: "Trender Inc.",
        contexte: "L'objectif est de créer une IA pour rechercher des biens immobilier en fonction de ses besoins, achat, location, spécifité, etc...",
        realisations: [
            "Utilsation des IA Open Source DeepSeek et Whisper",
            "Mise en place d'une stratégie de marketing",
            "Création du site web"
        ],
        technologies: ["Mistral", "Whisper", "NodeJS", "PostgreSQL"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2025, 1), fr)} - ${formatExperienceDate(new Date(2025, 2), fr)}`,
        title: "Fondateur d'une DApps Blockchain",
        company: " ",
        contexte: "L'objectif est de créer un site de bataille entre utilisateurs 100% décentralisé, sans backend, uniquement avec un site et des smartcontracts",
        realisations: [
            "Mise en place d'un business plan",
            "Mise en place d'une stratégie de marketing",
            "Création du site web",
            "Création et utilisation des smart contracts"
        ],
        technologies: ["NextJs", "Solidity", "Wagmi"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2024, 10), fr)} - ${formatExperienceDate(new Date(2024, 11), fr)}`,
        title: "Recherche par Image",
        company: "Trender Inc.",
        contexte: "Side Project de création d’un système de recherche par image grâce à Weaviate. L’utilisateur met une image et nous retournons les images similaires (comme sur Google).",
        realisations: [
            "Création d’un système de recherche par image",
            "Utilisation de Weaviate pour la recherche sémantique d’images",
            "Retour des images similaires à celle envoyée par l’utilisateur"
        ],
        technologies: ["Weaviate", "NodeJS", "TypeScript", "React"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2024, 3), fr)} - ${formatExperienceDate(new Date(2024, 7), fr)}`,
        title: "IA de détection contenu explicite",
        company: "Trender Inc.",
        contexte: "Création d’une IA pour détecter les contenus explicites sur les images et vidéos. Utilisé dans FlyAway et anciennement Trender afin de protéger les utilisateurs automatiquement, et améliorer la modération.",
        realisations: [
            "Développement d'une IA fiable à 97% pour la détection de contenus explicites",
            "Intégration dans les plateformes FlyAway et Trender",
            "Amélioration de la modération et protection automatique des utilisateurs"
        ],
        technologies: ["Python", "TensorFlow", "NodeJS", "TypeScript"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2025, 1), fr)} - ${formatExperienceDate(new Date(2025, 5), fr)}`,
        title: "Chef de projet",
        company: "Solvay",
        contexte: "Suivi de transfert d'utilisateurs de Solvay vers Syensqo, le but est de vérifier que chaque vague de transfert se passe bien et que les tâches sont bien effectuées à temps. Mise en relation des équipes à travers le monde.",
        realisations: [
            "Mise en place de documentation",
            "Suivie de planning",
            "Réunions et prise de note en anglais"
        ],
        technologies: ["Google Workspace"]
    },
    {
        sideProject: true,
        date: `Depuis ${formatExperienceDate(new Date(2024, 10), fr)}`,
        title: "Création du réseau social FlyAway Golf avec coaching IA intégré",
        website: "https://flyawaygolf.com",
        company: "FlyAway",
        contexte: "Plateforme sociale complète dédiée au golf combinant réseau social, gestion de parcours/scores, et coaching IA personnel. Base de données mondiale de 30k+ parcours, 400k+ greens, millions de teeboxes et scorecards. Architecture Multi-LLM (Groq, Gemini, Mistral) avec système Agentic RAG. Gestion à grande échelle avec optimisation MongoDB, indexation performante et agrégations complexes.",
        realisations: [
            "Architecture Multi-LLM avec routage intelligent (Groq pour vitesse, Gemini pour qualité, Mistral pour embeddings)",
            "Développement d'un assistant IA public avec architecture Agentic RAG orchestrant dynamiquement 6 outils",
            "Création de FlyAcademy : système d'apprentissage gamifié type 'Duolingo du golf' avec contenu généré par IA",
            "Implémentation de streaming SSE temps réel avec cache sémantique Redis (similarité cosinus 90%)",
            "Architecture backend en cluster Node.js avec 47 composants API et 75+ schémas de données gérant 30k+ parcours, 400k+ greens, millions de teeboxes/scorecards",
            "Application mobile React Native (110+ écrans, 35 managers API) iOS/Android avec WebSocket temps réel",
            "Système de Shot Tracking GPS avec heatmaps personnalisées et statistiques par club",
            "Intégration Weaviate (vector DB) pour recherche sémantique de vidéos et parcours",
            "Système de coaching IA Premium : programmes personnalisés, checklists quotidiennes, défis, rapports hebdomadaires",
            "Architecture temps réel : WebSocket bidirectionnel, Redis pub/sub, Firebase Cloud Messaging",
            "Optimisation MongoDB à grande échelle : indexation performante, agrégations complexes, requêtes optimisées sur millions d'enregistrements",
            "Système d'affiliation avec 14 jours gratuits et codes promo (4 types de promotions)",
            "Intégration RevenueCat pour abonnements iOS/Android avec modèle freemium (2 tiers)",
            "Mode cluster avec connection pooling MongoDB, rate limiting, et graceful shutdown",
            "Système de gamification : achievements, badges, points d'activité, lootbox quotidienne",
            "Intégration Typesense pour recherche full-text ultra-rapide (users, golfs, posts, events)",
            "Modération automatique avec NSFWJS, système de signalement avancé et OTP par email",
            "Pipeline CI/CD complet avec tests, monitoring Grafana/Prometheus, déploiement multi-plateforme",
            "Documentation technique complète et support multilingue (FR/EN) avec i18next"
        ],
        technologies: ["React Native", "TypeScript", "NodeJS", "Redux Toolkit", "Realm", "MMKV", "Mapbox", "WebSocket", "MongoDB", "Redis", "Weaviate", "Typesense", "Groq", "Gemini", "Mistral", "Firebase", "RevenueCat", "Google Cloud Platform", "Docker", "Grafana", "Prometheus", "Sharp", "FFmpeg", "FastText", "NSFWJS", "i18next"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2022, 10), fr)} - ${formatExperienceDate(new Date(2024, 10), fr)}`,
        title: "Chef de Projet IT",
        company: "SNCF Voyageur",
        contexte: "L'objectif de la mission était de piloter la migration des applications Métier obsolètes en partant des besoins du client, jusqu'à la mise en production de l'évolution, ou la fin de vie de celle-ci.",
        realisations: [
            "Mise en place de plan de tests et validation des environnements",
            "Suivi et amélioration des KPIs liés à la gestion de projet",
            "Mise en place et suivi du budget",
            "Mise en place et suivi du planning",
            "Rédaction des Users Stories",
            "Rédaction des documents tel que le PCA et DAL",
            "Création de l’architecture applicative et infra",
            "Pilotage, préparation et animation des réunions",
            "Création d’un PowerBI",
            "Suivi des migrations de données et contrôle qualité"
        ],
        technologies: ["AWS", "SQL", "SQUASH", "JIRA", "POWER BI", "PowerApps"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2023, 9), fr)} - ${formatExperienceDate(new Date(2024, 1), fr)}`,
        title: "Création d’un Chatbot & Développeur Fullstack Node.Js et Architecte Applicatif",
        company: "Freelance",
        contexte: "Création d’un système de chatbot réaliste avec GPT-4 pour applications de rencontre. Avec une interface de suivie des bots et statistique",
        realisations: [
            "Rédaction des Users Stories",
            "Création d’une architecture applicative, base de données, serveur",
            "Mise en place d’un planning",
            "Création d’une propale",
            "Mise en place de l’architecture applicative et infra",
            "Mise en place du modèle de données",
            "Mise en place des systèmes de sécurité",
            "Développement et sécurisation d’application Web et Mobile",
            "Développement et sécurisation de l’API",
            "Suivi régulier avec les clients",
            "Mise en place des tests",
            "Mise en place des environnements de DEV / Recette / Production",
            "Mise en place d’un pipeline CI/CD",
            "Démonstration",
            "Mise en production",
            "Mise à jour",
            "Maintenance",
            "Gestion des incidents",
            "Mise en place d’un système de paiement",
            "Mise en place de GPT-4 pour le chatbot"
        ],
        technologies: ["NodeJS", "TypeScript", "NextJS", "React", "MongoDB", "Docker", "Postman", "OpenAI GPT-4", "LangChain"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2020, 10), fr)} - ${formatExperienceDate(new Date(2024, 10), fr)}`,
        title: "Création du réseau social Trender",
        website: "https://trenderapp.com",
        company: "Trender Inc.",
        contexte: "L'objectif du réseau social et de permettre aux créateurs de contenus de se faire connaitre et rémunérer facilement sans en impacter le travail des créateurs les plus influant.",
        realisations: [
            "Mise en place d’un business plan",
            "Définition du cadre du projet & KPI",
            "Mise en place et suivi du budget",
            "Mise en place et suivi du planning",
            "Mise en place d’un SLO / SLI",
            "Création et mise en place de l’architecture applicative et infra",
            "Création et mise en place du modèle de données",
            "Création et mise en place des systèmes de sécurité",
            "Création UI / UX",
            "Gestion d’une petite équipe de développeurs et administrateurs réseaux et responsable communication",
            "Développement et sécurisation d’application Web et Mobile",
            "Développement et sécurisation de l’API",
            "Création d’IA pour la détection des langues et des contenus explicites",
            "Préparation pour les futures améliorations",
            "Rédaction des documentations et des documents légals (CGU / CGV / Mentions légale)",
            "Mise en place des tests",
            "Mise en place d’un pipeline CI/CD",
            "Création d’entreprise",
            "Mise en ligne sur l’App Store et Play Store",
            "Création d’une stratégie SEO"
        ],
        technologies: ["NodeJS", "TypeScript", "NextJS", "React", "React Native", "MongoDB", "Docker", "Linux", "Postman", "Grafana", "Prometheus", "Websockets", "OVH", "Google Cloud Platform", "AWS", "Stripe"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2021, 4), fr)} - ${formatExperienceDate(new Date(2022, 9), fr)}`,
        title: "Chef de Projet IT & Developpeur Fullstack",
        company: "Mairie du Péage de Roussillon",
        contexte: "L'objectif de la mission était de suivre et vérifier l'installation et la configuration du réseau fibre au sein des bâtiments publics.",
        realisations: [
            "Mise en place de plan de tests et validation des environnements",
            "Mise en place et suivi du budget",
            "Mise en place et suivi du planning",
            "Rédaction des Users Stories",
            "Création et mise en place de l’architecture applicative et infra",
            "Pilotage, préparation et animation des réunions",
            "Support de niveau 1",
            "Suivi et test de configuration des Switch et Routeur",
            "Développement sécurisation d’application Web et Mobile",
            "Développement et sécurisation d’une API",
            "Développement d’une application de gestion et suivie des astreintes",
            "Développement d’une application pour créer des formulaires",
            "Développement d’une application pour la gestion du prêt de matériel",
            "Mise en place d’un pipeline CI/CD",
            "Configuration et sécurisation d’un serveur web et d’API sous linux"
        ],
        technologies: ["NodeJS", "TypeScript", "NextJS", "React", "React Native", "Linux", "MongoDB", "Docker", "OVH"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2019, 10), fr)} - ${formatExperienceDate(new Date(2021, 4), fr)}`,
        title: "Chef de Projet IT - Migration Postes",
        company: "SNCF Réseau",
        contexte: "L'objectif de la mission était de suivre la migration des postes SNCF de Windows 10 à Windows 11 sur l'ensemble de la ligne LGV Sud Est Européen.",
        realisations: [
            "Participation aux points de suivi sur la migration des postes",
            "Amélioration du SharePoint de la LGV SEE",
            "Modification des utilisateurs des listes de diffusion",
            "Création et modification de groupe d'accès SharePoint",
            "Amélioration d'une PowerApps",
            "Création d'une formation d'un outil interne pour plusieurs centaines d'agents",

        ],
        technologies: ["SharePoint", "Office 365", "PowerApps"]
    },
    {
        sideProject: true,
        date: `Depuis ${formatExperienceDate(new Date(2018, 1), fr)}`,
        title: "Fondateur du bot Discord certifié Eric - Application hybride Bot + API",
        website: "https://boteric.fr",
        company: "Eric",
        contexte: "Application hybride combinant un bot Discord avancé avec une API REST Express. Suite complète de fonctionnalités pour gestion de serveurs Discord incluant leveling/XP, modération IA, chatbot OpenAI, et intégrations tierces (Twitch, GCS). Version 3.4.0 avec migration progressive JS vers TypeScript.",
        realisations: [
            "Architecture hybride: Bot Discord.js 13.11.0 + API REST Express 5.2.1 en TypeScript strict mode",
            "Système de leveling/XP automatique avec génération de cartes personnalisées via Canvas",
            "Modération IA avec détection NSFW par machine learning (TensorFlow.js + NSFWJS 2.4.2)",
            "Chatbot OpenAI GPT avec conversations contextuelles configurables par serveur",
            "Dashboard web avec authentification OAuth2 Discord pour gestion des paramètres",
            "20+ slash commands: /level, /leaderboard, /automod, /chatbot, /warn, /ban, modération",
            "Intégration Twitch pour notifications de stream en temps réel",
            "Google Cloud Storage pour hébergement d'assets et CDN (fonts, images)",
            "Architecture event-driven avec event handlers pour messages, réactions, nouveaux membres",
            "Système de backup MongoDB automatique avec graceful shutdown",
            "Déploiement Docker sur Ubuntu 20.04 avec reverse proxy Traefik et SSL automatique",
            "Pattern MVC: Routes → Controllers → Services → Schemas Mongoose",
            "Migration progressive JavaScript vers TypeScript avec allowJs et strict mode",
            "Gestion complète d'intents Discord (GUILDS, MEMBERS, MESSAGES, REACTIONS, VOICE)",
            "Système de warns persistants, ban/kick avec logging, clear messages en masse",
            "API REST avec CORS, logging Morgan, gestion erreurs avec CatchAsync wrapper"
        ],
        technologies: ["TypeScript", "JavaScript", "Discord.js", "Express", "NodeJS", "MongoDB", "Mongoose", "TensorFlow.js", "NSFWJS", "OpenAI", "Canvas", "Google Cloud Storage", "Twitch API", "OAuth2", "Docker", "Traefik", "ESLint", "Prettier"]
    }
];

export const experiences_en = [
    {
        sideProject: true,
        date: `Since ${formatExperienceDate(new Date(2025, 0), en)}`,
        title: "Creation of an AI for golf green boundary detection",
        company: "FlyAway",
        contexte: "Development of a machine learning system to automatically detect golf green boundaries from satellite imagery, improving detection accuracy from 80% to 90-95% using a U-Net model with ResNet50.",
        realisations: [
            "Architecture and planning of a complete ML project (4 phases)",
            "Extraction of 500 diverse green samples from +400k holes",
            "Satellite image retrieval and processing via Mapbox",
            "Data annotation with SAM2 + internal tool created for this purpose",
            "U-Net with ResNet50 model training on RTX 3070 GPU",
            "Pixel to GPS coordinate conversion for elevation point generation",
            "Integration of confidence-based intelligent fallback system",
            "ONNX model export for production inference",
            "API cost reduction through more precise elevation points"
        ],
        technologies: ["Python", "PyTorch", "U-Net", "ResNet50", "ONNX", "OpenCV", "Roboflow", "Mapbox", "Google Elevation API", "Weights & Biases", "FastAPI", "NodeJS", "TypeScript"]
    },
    {
        sideProject: true,
        date: `From ${formatExperienceDate(new Date(2025, 8), en)}`,
        title: "Creation of an intelligent RAG AI Assistant for golf with FlyAI agent",
        company: "FlyAway",
        contexte: "Development of a complete RAG (Retrieval-Augmented Generation) system to ingest and query USGA rules via vector search, coupled with an intelligent FlyAI agent capable of dynamically using 42+ tools to answer questions on social media.",
        realisations: [
            "Complete RAG pipeline: PDF → semantic chunking (500-600 tokens) → embeddings (384-dim) → Weaviate",
            "Ingestion of multilingual USGA rules (EN/FR): 900-1100 chunks with enriched metadata",
            "Vector search with cosine similarity and HNSW for <50ms search performance",
            "Intelligent hierarchical chunking respecting rule structure (Rule > Section > Subsection)",
            "100-token overlap between chunks to preserve context at boundaries",
            "FlyAI agent with tool-enabled architecture: 42+ tools shared with AIAssistant",
            "Centralized ToolRegistry: golf search, weather, stats, rules, videos, user profiles, coaching",
            "ToolExecutor with caching, permissions, and parallel tool execution",
            "Gemini orchestration with function calling: 3 turns max optimized for social media",
            "Semantic search system for training videos with Weaviate",
            "Responses optimized for social media: 500 chars max, <2s latency",
            "Feature flag for gradual deployment with metrics monitoring",
            "Multilingual embeddings with sentence-transformers (paraphrase-multilingual-MiniLM-L12-v2)",
            "Retrieval validation with automated tests (>90% top-5 accuracy)"
        ],
        technologies: ["Weaviate", "Gemini", "sentence-transformers", "PyMuPDF", "HNSW", "Redis", "TypeScript", "NodeJS", "MongoDB"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2025, 2), en)} - ${formatExperienceDate(new Date(2025, 4), en)}`,
        title: "Creation of an AI for real estate search",
        company: "Trender Inc.",
        contexte: "The goal is to create an AI to search for real estate properties based on needs, purchase, rental, specifics, etc...",
        realisations: [
            "Use of Open Source AIs DeepSeek and Whisper",
            "Implementation of a marketing strategy",
            "Website creation"
        ],
        technologies: ["Mistral", "Whisper", "NodeJS", "PostgreSQL"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2025, 1), en)} - ${formatExperienceDate(new Date(2025, 2), en)}`,
        title: "Blockchain DApps Founder",
        company: " ",
        contexte: "The goal is to create a 100% decentralized battle site between users, without backend, only with a website and smart contracts",
        realisations: [
            "Implementation of a business plan",
            "Implementation of a marketing strategy",
            "Website creation",
            "Creation and use of smart contracts"
        ],
        technologies: ["NextJs", "Solidity", "Wagmi"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2024, 10), en)} - ${formatExperienceDate(new Date(2024, 11), en)}`,
        title: "Image Search",
        company: "Trender Inc.",
        contexte: "Side Project creating an image search system using Weaviate. Users upload an image and we return similar images (like Google).",
        realisations: [
            "Creation of an image search system",
            "Use of Weaviate for semantic image search",
            "Return of images similar to the one sent by the user"
        ],
        technologies: ["Weaviate", "NodeJS", "TypeScript", "React"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2024, 3), en)} - ${formatExperienceDate(new Date(2024, 7), en)}`,
        title: "Explicit content detection AI",
        company: "Trender Inc.",
        contexte: "Creation of an AI to detect explicit content in images and videos. Used in FlyAway and formerly Trender to automatically protect users and improve moderation.",
        realisations: [
            "Development of a 97% reliable AI for explicit content detection",
            "Integration into FlyAway and Trender platforms",
            "Improved moderation and automatic user protection"
        ],
        technologies: ["Python", "TensorFlow", "NodeJS", "TypeScript"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2025, 1), en)} - ${formatExperienceDate(new Date(2025, 5), en)}`,
        title: "Project Manager",
        company: "Solvay",
        contexte: "Monitoring user transfer from Solvay to Syensqo, the goal is to verify that each transfer wave goes well and that tasks are completed on time. Connecting teams across the world.",
        realisations: [
            "Documentation setup",
            "Schedule monitoring",
            "Meetings and note-taking in English"
        ],
        technologies: ["Google Workspace"]
    },
    {
        sideProject: true,
        date: `From ${formatExperienceDate(new Date(2024, 10), en)}`,
        title: "Creation of FlyAway Golf social network with integrated AI coaching",
        website: "https://flyawaygolf.com",
        company: "FlyAway",
        contexte: "Complete social platform dedicated to golf combining social network, course/score management, and personal AI coaching. Global database of 30k+ courses, 400k+ greens, millions of teeboxes and scorecards. Multi-LLM architecture (Groq, Gemini, Mistral) with Agentic RAG system. Large-scale data management with MongoDB optimization, performant indexing, and complex aggregations.",
        realisations: [
            "Multi-LLM architecture with intelligent routing (Groq for speed, Gemini for quality, Mistral for embeddings)",
            "Development of public AI assistant with Agentic RAG architecture dynamically orchestrating 6 tools",
            "Creation of FlyAcademy: gamified learning system 'Duolingo of golf' with AI-generated content",
            "Implementation of real-time SSE streaming with semantic Redis cache (90% cosine similarity)",
            "Backend cluster architecture with Node.js featuring 47 API components and 75+ data schemas managing 30k+ courses, 400k+ greens, millions of teeboxes/scorecards",
            "React Native mobile app (110+ screens, 35 API managers) iOS/Android with real-time WebSocket",
            "GPS Shot Tracking system with personalized heatmaps and club statistics",
            "Weaviate integration (vector DB) for semantic search of videos and courses",
            "Premium AI coaching system: personalized programs, daily checklists, challenges, weekly reports",
            "Real-time architecture: bidirectional WebSocket, Redis pub/sub, Firebase Cloud Messaging",
            "Large-scale MongoDB optimization: performant indexing, complex aggregations, optimized queries on millions of records",
            "Affiliation system with 14-day free trial and promo codes (4 promotion types)",
            "RevenueCat integration for iOS/Android subscriptions with freemium model (2 tiers)",
            "Cluster mode with MongoDB connection pooling, rate limiting, and graceful shutdown",
            "Gamification system: achievements, badges, activity points, daily lootbox",
            "Typesense integration for ultra-fast full-text search (users, courses, posts, events)",
            "Automatic moderation with NSFWJS, advanced reporting system and email OTP",
            "Complete CI/CD pipeline with tests, Grafana/Prometheus monitoring, multi-platform deployment",
            "Comprehensive technical documentation and multilingual support (FR/EN) with i18next"
        ],
        technologies: ["React Native", "TypeScript", "NodeJS", "Redux Toolkit", "Realm", "MMKV", "Mapbox", "WebSocket", "MongoDB", "Redis", "Weaviate", "Typesense", "Groq", "Gemini", "Mistral", "Firebase", "RevenueCat", "Google Cloud Platform", "Docker", "Grafana", "Prometheus", "Sharp", "FFmpeg", "FastText", "NSFWJS", "i18next"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2022, 10), en)} - ${formatExperienceDate(new Date(2024, 10), en)}`,
        title: "IT Project Manager",
        company: "SNCF Voyageur",
        contexte: "The mission objective was to manage the migration of obsolete Business applications from client needs to production deployment or end-of-life.",
        realisations: [
            "Test plan implementation and environment validation",
            "Project management KPIs monitoring and improvement",
            "Budget implementation and monitoring",
            "Schedule implementation and monitoring",
            "User Stories writing",
            "Documents writing such as BCP and DAL",
            "Application and infrastructure architecture creation",
            "Meeting management, preparation and facilitation",
            "PowerBI creation",
            "Data migration monitoring and quality control"
        ],
        technologies: ["AWS", "SQL", "SQUASH", "JIRA", "POWER BI", "PowerApps"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2023, 9), en)} - ${formatExperienceDate(new Date(2024, 1), en)}`,
        title: "Chatbot Creation & Node.Js Full Stack Developer and Application Architect",
        company: "Freelance",
        contexte: "Creation of a realistic chatbot system with GPT-4 for dating applications. With an interface for monitoring bots and statistics.",
        realisations: [
            "User Stories writing",
            "Application, database, server architecture creation",
            "Schedule implementation",
            "Proposal creation",
            "Application and infrastructure architecture implementation",
            "Data model implementation",
            "Security systems implementation",
            "Web and Mobile application development and security",
            "API development and security",
            "Regular client follow-up",
            "Test implementation",
            "DEV / UAT / Production environments setup",
            "CI/CD pipeline implementation",
            "Demonstration",
            "Production deployment",
            "Updates",
            "Maintenance",
            "Incident management",
            "Payment system implementation",
            "GPT-4 implementation for chatbot"
        ],
        technologies: ["NodeJS", "TypeScript", "NextJS", "React", "MongoDB", "Docker", "Postman", "OpenAI GPT-4", "LangChain"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2020, 10), en)} - ${formatExperienceDate(new Date(2024, 10), en)}`,
        title: "Creation of Trender social network",
        website: "https://trenderapp.com",
        company: "Trender Inc.",
        contexte: "The goal of the social network is to allow content creators to get known and paid easily without impacting the work of the most influential creators.",
        realisations: [
            "Implementation of a business plan",
            "Project framework & KPI definition",
            "Budget implementation and monitoring",
            "Schedule implementation and monitoring",
            "SLO / SLI implementation",
            "Creation and implementation of application and infrastructure architecture",
            "Creation and implementation of data model",
            "Creation and implementation of security systems",
            "UI / UX Creation",
            "Management of a small team of developers, network administrators and communication manager",
            "Web and Mobile application development and security",
            "API development and security",
            "AI creation for language and explicit content detection",
            "Preparation for future improvements",
            "Documentation and legal documents writing (Terms of Use / Terms of Sale / Legal Notice)",
            "Test implementation",
            "CI/CD pipeline implementation",
            "Company creation",
            "App Store and Play Store publication",
            "SEO strategy creation"
        ],
        technologies: ["NodeJS", "TypeScript", "NextJS", "React", "React Native", "MongoDB", "Docker", "Linux", "Postman", "Grafana", "Prometheus", "Websockets", "OVH", "Google Cloud Platform", "AWS", "Stripe"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2021, 4), en)} - ${formatExperienceDate(new Date(2022, 9), en)}`,
        title: "Fullstack Developer & IT Project Manager",
        company: "Mairie du Péage de Roussillon",
        contexte: "The mission objective was to monitor and verify the installation and configuration of the fiber network within public buildings.",
        realisations: [
            "Test plan implementation and environment validation",
            "Budget implementation and monitoring",
            "Schedule implementation and monitoring",
            "User Stories writing",
            "Application and infrastructure architecture creation and implementation",
            "Meeting management, preparation and facilitation",
            "Level 1 support",
            "Switch and Router configuration monitoring and testing",
            "Web and Mobile application development and security",
            "API development and security",
            "On-call management and monitoring application development",
            "Form creation application development",
            "Equipment loan management application development",
            "CI/CD pipeline implementation",
            "Linux web server and API configuration and security"
        ],
        technologies: ["NodeJS", "TypeScript", "NextJS", "React", "React Native", "Linux", "MongoDB", "Docker", "OVH"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2019, 10), en)} - ${formatExperienceDate(new Date(2021, 4), en)}`,
        title: "IT ProjectManager - Workstation Migration",
        company: "SNCF Réseau",
        contexte: "The mission objective was to monitor the migration of SNCF workstations from Windows 10 to Windows 11 across the entire LGV South East European line.",
        realisations: [
            "Participation in workstation migration monitoring meetings",
            "LGV SEE SharePoint improvement",
            "Distribution list users modification",
            "SharePoint access group creation and modification",
            "PowerApps improvement",
            "Internal tool training creation for hundreds of agents"
        ],
        technologies: ["SharePoint", "Office 365", "PowerApps"]
    },
    {
        sideProject: true,
        date: `From ${formatExperienceDate(new Date(2018, 1), en)}`,
        title: "Founder of certified Discord bot Eric - Hybrid Bot + API Application",
        website: "https://boteric.fr",
        company: "Eric",
        contexte: "Hybrid application combining an advanced Discord bot with an Express REST API. Complete feature suite for Discord server management including leveling/XP, AI moderation, OpenAI chatbot, and third-party integrations (Twitch, GCS). Version 3.4.0 with progressive JS to TypeScript migration.",
        realisations: [
            "Hybrid architecture: Discord.js 13.11.0 Bot + Express 5.2.1 REST API in TypeScript strict mode",
            "Automatic leveling/XP system with custom card generation via Canvas",
            "AI moderation with NSFW detection using machine learning (TensorFlow.js + NSFWJS 2.4.2)",
            "OpenAI GPT chatbot with contextual conversations configurable per server",
            "Web dashboard with Discord OAuth2 authentication for settings management",
            "20+ slash commands: /level, /leaderboard, /automod, /chatbot, /warn, /ban, moderation",
            "Twitch integration for real-time stream notifications",
            "Google Cloud Storage for asset hosting and CDN (fonts, images)",
            "Event-driven architecture with handlers for messages, reactions, new members",
            "Automatic MongoDB backup system with graceful shutdown",
            "Docker deployment on Ubuntu 20.04 with Traefik reverse proxy and automatic SSL",
            "MVC pattern: Routes → Controllers → Services → Mongoose Schemas",
            "Progressive JavaScript to TypeScript migration with allowJs and strict mode",
            "Complete Discord intents management (GUILDS, MEMBERS, MESSAGES, REACTIONS, VOICE)",
            "Persistent warn system, ban/kick with logging, bulk message clearing",
            "REST API with CORS, Morgan logging, error handling with CatchAsync wrapper"
        ],
        technologies: ["TypeScript", "JavaScript", "Discord.js", "Express", "NodeJS", "MongoDB", "Mongoose", "TensorFlow.js", "NSFWJS", "OpenAI", "Canvas", "Google Cloud Storage", "Twitch API", "OAuth2", "Docker", "Traefik", "ESLint", "Prettier"]
    }
];
