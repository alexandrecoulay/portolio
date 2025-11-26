export interface Skill {
    title: string;
    options: SkillSubItem[];
}

interface SkillItem {
    title: string;
    bold: string[];
}

interface SkillSubItem {
    title: string;
    options: {
        title: string;
        bold?: string[];
        skills?: SkillItem[];
    }[];
};

export const skills_fr: Skill[] = [
    {
        title: "Compétences fonctionnelles",
        options: [
            {
                title: "Outils de gestion de projet et collaboration",
                options: [
                    {
                        title: "Outils API",
                        skills: [
                            {
                                title: "Postman",
                                bold: ["Postman"]
                            }
                        ]
                    },
                    {
                        title: "Modélisation",
                        skills: [
                            {
                                title: "UML",
                                bold: ["UML"]
                            },
                            {
                                title: "Merise",
                                bold: ["Merise"]
                            }
                        ]
                    },
                    {
                        title: "Design et workflows",
                        skills: [
                            {
                                title: "Lucidchart",
                                bold: ["Lucidchart"]
                            },
                            {
                                title: "Draw.io",
                                bold: ["Draw.io"]
                            }
                        ]
                    },
                    {
                        title: "Gestion",
                        skills: [
                            {
                                title: "Jira",
                                bold: ["Jira"]
                            },
                            {
                                title: "Notion",
                                bold: ["Notion"]
                            },
                            {
                                title: "Trello",
                                bold: ["Trello"]
                            },
                            {
                                title: "Squash",
                                bold: ["Squash"]
                            },
                            {
                                title: "ClickUp",
                                bold: ["ClickUp"]
                            }
                        ]
                    },
                    {
                        title: "Communication",
                        skills: [
                            {
                                title: "Slack",
                                bold: ["Slack"]
                            },
                            {
                                title: "Discord",
                                bold: ["Discord"]
                            },
                            {
                                title: "Teams",
                                bold: ["Teams"]
                            }
                        ]
                    },
                    {
                        title: "Bureautique",
                        skills: [
                            {
                                title: "Suite Office 365",
                                bold: ["Suite", "Office", "365"]
                            },
                            {
                                title: "Adobe Creative Cloud",
                                bold: ["Adobe", "Creative", "Cloud"]
                            },
                            {
                                title: "Google Suite",
                                bold: ["Google", "Suite"]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Gestion de projet agile",
                options: [
                    {
                        title: "Définition du cadre du projet & KPI",
                        bold: ["cadre", "du", "projet", "KPI"]
                    },
                    {
                        title: "Rédaction des user stories",
                        bold: ["user", "stories"]
                    },
                    {
                        title: "Recette / validation des développements",
                        bold: ["Recette", "validation"]
                    },
                    {
                        title: "Communication / formation auprès des équipes métier et applicatives",
                        bold: ["Communication", "formation"]
                    },
                    {
                        title: "Go/Nogo projet",
                        bold: ["Go/Nogo"]
                    },
                    {
                        title: "Reporting et suivi des livrables",
                        bold: ["Reporting", "livrables"]
                    }
                ]
            },
            {
                title: "Gestion de projet classique",
                options: [
                    {
                        title: "Planification / organisation / animation des réunions",
                        bold: ["Planification", "organisation", "animation"]
                    },
                    {
                        title: "Recueil / analyse / spécification des besoins fonctionnels",
                        bold: ["Recueil", "analyse", "spécification"]
                    },
                    {
                        title: "Rédaction des cahiers de charges & cahiers de recette",
                        bold: ["cahiers", "de", "charges", "cahiers", "de", "recette"]
                    },
                    {
                        title: "Développement de la logique métier",
                        bold: ["logique", "métier"]
                    },
                    {
                        title: "Animation de points pour le suivi et l'amélioration du projet",
                        bold: ["suivi", "amélioration"]
                    },
                    {
                        title: "Reporting et suivi des livrables",
                        bold: ["Reporting", "livrables"]
                    },
                    {
                        title: "Mise en place et suivi des budgets",
                        bold: ["budgets"]
                    },
                    {
                        title: "Mise en place et suivi des plannings",
                        bold: ["plannings"]
                    },
                    {
                        title: "Mise en place et validation des architectures applicatives",
                        bold: ["architectures", "applicatives"]
                    }
                ]
            },
            {
                title: "Conformité et Sécurité",
                options: [
                    {
                        title: "RGPD",
                        bold: ["RGPD"]
                    },
                    {
                        title: "CGU / CGV",
                        bold: ["CGU", "CGV"]
                    },
                    {
                        title: "Gestion des données",
                        bold: ["données"]
                    },
                    {
                        title: "Conformité légale",
                        bold: ["Conformité", "légale"]
                    },
                    {
                        title: "Sécurité Informatique",
                        bold: ["Sécurité", "Informatique"]
                    }
                ]
            }
        ]
    },
    {
        title: "Compétences techniques",
        options: [
            {
                title: "Applicatifs",
                options: [
                    {
                        title: "Systèmes d'exploitation",
                        skills: [
                            {
                                title: "Linux",
                                bold: ["Linux"]
                            },
                            {
                                title: "Mac",
                                bold: ["Mac"]
                            },
                            {
                                title: "Windows",
                                bold: ["Windows"]
                            }
                        ]
                    },
                    {
                        title: "Architecture logicielle",
                        skills: [
                            {
                                title: "SOLID",
                                bold: ["SOLID"]
                            },
                            {
                                title: "Clean Code",
                                bold: ["Clean", "Code"]
                            }
                            /*{
                                title: "Architecture Hexagonale",
                                bold: ["Architecture", "Hexagonale"]
                            }*/
                        ]
                    },
                    {
                        title: "Cloud",
                        skills: [
                            {
                                title: "AWS",
                                bold: ["AWS"]
                            },
                            {
                                title: "GCP",
                                bold: ["GCP"]
                            },
                            {
                                title: "OVH",
                                bold: ["OVH"]
                            },
                            {
                                title: "Azure",
                                bold: ["Azure"]
                            },
                            {
                                title: "Firebase",
                                bold: ["Firebase"]
                            }
                        ]
                    },
                    {
                        title: "Conteneurisation",
                        skills: [
                            {
                                title: "Docker",
                                bold: ["Docker"]
                            }
                        ]
                    },
                    {
                        title: "CI/CD et Versioning",
                        skills: [
                            {
                                title: "Jenkins",
                                bold: ["Jenkins"]
                            },
                            {
                                title: "Github Action",
                                bold: ["Github", "Action"]
                            },
                            {
                                title: "Git",
                                bold: ["Git"]
                            },
                            {
                                title: "Github",
                                bold: ["Github"]
                            }
                        ]
                    },
                    {
                        title: "Frontend",
                        skills: [
                            {
                                title: "HTML",
                                bold: ["HTML"]
                            },
                            {
                                title: "XML",
                                bold: ["XML"]
                            },
                            {
                                title: "SASS/SCSS",
                                bold: ["SASS/SCSS"]
                            },
                            {
                                title: "CSS",
                                bold: ["CSS"]
                            },
                            {
                                title: "ReactJS",
                                bold: ["ReactJS"]
                            }
                        ]
                    },
                    {
                        title: "Frameworks",
                        skills: [
                            {
                                title: "Express.js",
                                bold: ["Express.js"]
                            },
                            {
                                title: "Nest.js",
                                bold: ["Nest.js"]
                            },
                            {
                                title: "Next.js",
                                bold: ["Next.js"]
                            },
                            {
                                title: "Flutter",
                                bold: ["Flutter"]
                            },
                            {
                                title: "React Native",
                                bold: ["React", "Native"]
                            }
                        ]
                    },
                    {
                        title: "Runtime",
                        skills: [
                            {
                                title: "Node.js",
                                bold: ["Node.js"]
                            }
                        ]
                    },
                    {
                        title: "Langages",
                        skills: [
                            {
                                title: "JavaScript",
                                bold: ["JavaScript"]
                            },
                            {
                                title: "Python",
                                bold: ["Python"]
                            },
                            {
                                title: "PHP",
                                bold: ["PHP"]
                            }
                        ]
                    },
                    {
                        title: "Bases de données",
                        skills: [
                            {
                                title: "MongoDB",
                                bold: ["MongoDB"]
                            },
                            {
                                title: "PostgreSQL",
                                bold: ["PostgreSQL"]
                            },
                            {
                                title: "Weaviate",
                                bold: ["Weaviate"]
                            },
                            {
                                title: "Typesense",
                                bold: ["Typesense"]
                            },
                            {
                                title: "MySQL",
                                bold: ["MySQL"]
                            }
                        ]
                    },
                    {
                        title: "Intelligence Artificielle",
                        skills: [
                            {
                                title: "OpenAI GPT",
                                bold: ["OpenAI", "GPT"]
                            },
                            {
                                title: "LangChain",
                                bold: ["LangChain"]
                            },
                            {
                                title: "Mistral",
                                bold: ["Mistral"]
                            },
                            {
                                title: "Whisper",
                                bold: ["Whisper"]
                            },
                            {
                                title: "TensorFlow",
                                bold: ["TensorFlow"]
                            },
                            {
                                title: "Claude",
                                bold: ["Claude"]
                            },
                            {
                                title: "DeepSeek",
                                bold: ["DeepSeek"]
                            }
                        ]
                    },
                    {
                        title: "Monitoring et gestion des processus",
                        skills: [
                            {
                                title: "Prometheus",
                                bold: ["Prometheus"]
                            },
                            {
                                title: "Grafana",
                                bold: ["Grafana"]
                            },
                            {
                                title: "Portainer",
                                bold: ["Portainer"]
                            },
                            {
                                title: "Traefik",
                                bold: ["Traefik"]
                            },
                            {
                                title: "PM2",
                                bold: ["PM2"]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Réseaux et Sécurité",
                options: [
                    {
                        title: "Réseaux",
                        skills: [
                            {
                                title: "Cisco (routage, communication)",
                                bold: ["Cisco"]
                            }
                        ]
                    },
                    {
                        title: "Gestion des serveurs",
                        skills: [
                            {
                                title: "Windows Server",
                                bold: ["Windows", "Server"]
                            }
                        ]
                    },
                    {
                        title: "Sécurité",
                        skills: [
                            {
                                title: "Gestion des accès",
                                bold: ["accès"]
                            },
                            {
                                title: "Pare-feu",
                                bold: ["Pare-feu"]
                            },
                            {
                                title: "Sécurité des données",
                                bold: ["Sécurité", "données"]
                            },
                            {
                                title: "Sécurité réseau",
                                bold: ["Sécurité", "réseau"]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
