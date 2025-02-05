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
        date: `Depuis ${formatExperienceDate(new Date(2025, 2), fr)}`,
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
        sideProject: false,
        date: `Depuis ${formatExperienceDate(new Date(2025, 1), fr)}`,
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
        title: "Création du réseau social FlyAway Golf",
        website: "https://flyawaygolf.com",
        company: "Trender Inc.",
        contexte: "L'objectif du réseau social et de permettre aux golfeurs de se connecter, trouver des partenaires, partager leurs passions et créer des événements en moins de 2 minutes.",
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
            "Développement et sécurisation d’application Web et Mobile",
            "Développement et sécurisation de l’API",
            "Création d’IA pour la détection des langues et des contenus explicites",
            "Préparation pour les futures améliorations",
            "Rédaction des documentations et des documents légaux (CGU / CGV / Mentions légale)",
            "Mise en place des tests",
            "Mise en place d’un pipeline CI/CD",
            "Mise en ligne sur l’App Store et Play Store",
            "Création d’une stratégie SEO",
            "Création du marketing digital"
        ],
        technologies: ["NodeJS", "TypeScript", "React", "React Native", "MongoDB", "Docker", "Linux", "Postman", "Grafana", "Prometheus", "Websockets", "OVH", "Google Cloud Platform", "AWS", "Stripe"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2022, 10), fr)} - ${formatExperienceDate(new Date(2024, 0), fr)}`,
        title: "Chef de Projet Informatique",
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
        technologies: ["SQUASH", "JIRA", "POWER BI", "PowerApps"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2023, 9), fr)} - ${formatExperienceDate(new Date(2024, 1), fr)}`,
        title: "Développeur fullStack Node.Js et architecte applicatif",
        company: "Freelance",
        contexte: "Projet Freelance confidentiel.",
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
            "Gestion des incidents"
        ],
        technologies: ["NodeJS", "TypeScript", "React", "MongoDB", "Docker", "Postman"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2021, 1), fr)} - ${formatExperienceDate(new Date(2024, 10), fr)}`,
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
            "Rédaction des documentations et des documents légaux (CGU / CGV / Mentions légale)",
            "Mise en place des tests",
            "Mise en place d’un pipeline CI/CD",
            "Création d’entreprise",
            "Mise en ligne sur l’App Store et Play Store",
            "Création d’une stratégie SEO"
        ],
        technologies: ["NodeJS", "TypeScript", "React", "React Native", "MongoDB", "Docker", "Linux", "Postman", "Grafana", "Prometheus", "Websockets", "OVH", "Google Cloud Platform", "AWS", "Stripe"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2021, 4), fr)} - ${formatExperienceDate(new Date(2022, 9), fr)}`,
        title: "Alternant Informatique",
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
        technologies: ["NodeJS", "TypeScript", "React", "React Native", "Linux", "MongoDB", "Docker", "OVH"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2019, 10), fr)} - ${formatExperienceDate(new Date(2021, 4), fr)}`,
        title: "Alternant Digital",
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
        date: `Depuis ${formatExperienceDate(new Date(2018, 12), fr)}`,
        title: "Fondateur du bot Discord certifié Eric",
        website: "https://boteric.fr",
        company: "Eric",
        contexte: "L'objectif est de créer un bot Discord 100% gratuit en regroupant les fonctionnalités des autres bots Discord afin de gérer 1 seul et non plusieurs bots.",
        realisations: [
            "Utilisation de l'API Discord",
            "Utilisation de l’Oauth2 pour l’authentification",
            "Création d’un site web avec Dashboard pour la gestion du bot",
            "Création d’une API pour les fonctionnalités du bot",
            "Sécurisation des données",
            "Configuration d'un serveur d'hébergement",
            "Mise en place du SEO",
            "Mise en place de KPI",
            "Gestion de budget",
            "Mise en place d'un planning de développement",
            "Support utilisateur",
            "Publicité ciblée"
        ],
        technologies: ["NodeJS", "React", "NextJS", "MongoDB", "Oauth2", "Discord API", "Linux"]
    }
];

export const experiences_en = [
    {
        sideProject: true,
        date: `From ${formatExperienceDate(new Date(2025, 2), en)}`,
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
        sideProject: false,
        date: `From ${formatExperienceDate(new Date(2025, 1), en)}`,
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
        title: "Creation of FlyAway Golf social network",
        website: "https://flyawaygolf.com",
        company: "Trender Inc.",
        contexte: "The goal of the social network is to allow golfers to connect, find partners, share their passions and create events in less than 2 minutes.",
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
            "Web and Mobile application development and security",
            "API development and security",
            "AI creation for language and explicit content detection",
            "Preparation for future improvements",
            "Documentation and legal documents writing (Terms of Use / Terms of Sale / Legal Notice)",
            "Test implementation",
            "CI/CD pipeline implementation",
            "App Store and Play Store publication",
            "SEO strategy creation",
            "Digital marketing creation"
        ],
        technologies: ["NodeJS", "TypeScript", "React", "React Native", "MongoDB", "Docker", "Linux", "Postman", "Grafana", "Prometheus", "Websockets", "OVH", "Google Cloud Platform", "AWS", "Stripe"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2022, 10), en)} - ${formatExperienceDate(new Date(2024, 0), en)}`,
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
        technologies: ["SQUASH", "JIRA", "POWER BI", "PowerApps"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2023, 9), en)} - ${formatExperienceDate(new Date(2024, 1), en)}`,
        title: "Node.Js Full Stack Developer and Application Architect",
        company: "Freelance",
        contexte: "Confidential Freelance Project.",
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
            "Incident management"
        ],
        technologies: ["NodeJS", "TypeScript", "React", "MongoDB", "Docker", "Postman"]
    },
    {
        sideProject: true,
        date: `${formatExperienceDate(new Date(2021, 1), en)} - ${formatExperienceDate(new Date(2024, 10), en)}`,
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
        technologies: ["NodeJS", "TypeScript", "React", "React Native", "MongoDB", "Docker", "Linux", "Postman", "Grafana", "Prometheus", "Websockets", "OVH", "Google Cloud Platform", "AWS", "Stripe"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2021, 4), en)} - ${formatExperienceDate(new Date(2022, 9), en)}`,
        title: "IT Apprentice",
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
        technologies: ["NodeJS", "TypeScript", "React", "React Native", "Linux", "MongoDB", "Docker", "OVH"]
    },
    {
        sideProject: false,
        date: `${formatExperienceDate(new Date(2019, 10), en)} - ${formatExperienceDate(new Date(2021, 4), en)}`,
        title: "Digital Apprentice",
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
        date: `From ${formatExperienceDate(new Date(2018, 12), en)}`,
        title: "Founder of certified Discord bot Eric",
        website: "https://boteric.fr",
        company: "Eric",
        contexte: "The goal is to create a 100% free Discord bot by grouping the features of other Discord bots to manage 1 single bot instead of several.",
        realisations: [
            "Discord API usage",
            "Oauth2 authentication implementation",
            "Website creation with Dashboard for bot management",
            "API creation for bot features",
            "Data security",
            "Hosting server configuration",
            "SEO implementation",
            "KPI implementation",
            "Budget management",
            "Development schedule implementation",
            "User support",
            "Targeted advertising"
        ],
        technologies: ["NodeJS", "React", "NextJS", "MongoDB", "Oauth2", "Discord API", "Linux"]
    }
];
