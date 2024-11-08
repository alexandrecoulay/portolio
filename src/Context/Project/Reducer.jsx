import EricWebsiteBanner from "../../Images/EricWebsite.jpg";
import TrenderBanner from "../../Images/TrenderWebsite.jpg";
import FlyAwayPanoramic from "../../Images/FlyAwayPanoramic.png";
import PlaceHolderBanner from "../../Images/PlaceHolder.png"

export const initialState = [
    { 
        url: "https://flyawaygolf.com",
        title: "FlyAway, Communauté de golf", 
        description: "FlyAway facilite la rencontre avec d'autres golfeurs, la discussion et l'organisation de parties.", 
        image: FlyAwayPanoramic,
        favicon: "https://cdn.flyawaygolf.com/assets/icons/icon_round/apple-touch-icon.png",
        created_at: "Octobre 2024",
        language: "NextJS & Express/TypeScript & React Native"
    
    },
    { 
        url: "https://trenderapp.com",
        title: "Trender, create the next trend", 
        description: "Un réseau social pour les communautés par la communauté (en cours de création avec des testeurs)", 
        image: TrenderBanner,
        favicon: "https://cdn.trenderapp.com/assets/icons/notification.png",
        created_at: "Janvier 2021",
        language: "NextJS & Express/TypeScript & React Native"
    
    },
    {
    url: "https://boteric.fr", 
    title: "Eric, le bot Discord complet 100% gratuit", 
    description: "Dashboard, Notification Twitch, modération, système de niveau et plein d'autre commandes disponible gratuitement pour personnaliser votre serveur Discord facilement.", 
    image: EricWebsiteBanner,
    favicon: "https://boteric.fr/assets/favicons/apple-icon.png",
    github: "https://github.com/alexandrecoulay/eric_website",
    created_at: "Mars 2017",
    language: "NextJS & Express/TypeScript"
},
{ 
    url: "https://github.com/alexandrecoulay/simple-twitch-api",
    title: "Simple Twitch Api", 
    description: "A simpler way to interact with the Twitch API write in Typescript", 
    image: PlaceHolderBanner,
    favicon: PlaceHolderBanner,
    created_at: "Décembre 2020",
    language: "TypeScript"
},
{ 
    url: "https://github.com/alexandrecoulay/CSGO-wallhack",
    title: "CSGO Wallhack", 
    description: "Un simple Wallhack CSGO fait en C# pour un cours de C#", 
    image: "/images/activated.png",
    favicon: PlaceHolderBanner,
    created_at: "Février 2022",
    language: "C#"

},
/*{ 
    url: "https://github.com/alexandrecoulay/covid19tracker",
    title: "Covid Tracker", 
    description: "Un simple Covid Tracker", 
    image: PlaceHolderBanner,
    favicon: PlaceHolderBanner,
    created_at: "Janvier 2022",
    language: "ReactJS"

},*/
/*{ 
    url: "https://github.com/alexandrecoulay/loto-stats ",
    title: "Stats du Loto", 
    description: "L'argent c'est important donc j'ai créer un site gérer manuellement pour les stats du Loto (toutes les données ne sont pas affichés)", 
    image: PlaceHolderBanner,
    favicon: PlaceHolderBanner,
    created_at: "Mars 2022",
    language: "ReactJS & Express"

},*/
/*{ 
    url: "https://github.com/alexandrecoulay/crypto_website",
    title: "Transaction tracker Binance", 
    description: "Automatiquement récuperer ses transactions Binance pour suivre les stats complètes de ses cryptos. Mise a jour prévu pour une amélioration avec Oauth2 et un lancement publique.", 
    image: PlaceHolderBanner,
    favicon: PlaceHolderBanner,
    created_at: "XXX 2021",
    language: "ReactJS & Express"
}*/]

const ADD_PROJECT = "ADD_PROJECT";
const DELETE_PROJECT = "DELETE_PROJECT";

export const addProject = (info) => {
    return {
      type: ADD_PROJECT,
      info: info
    }
}

export const deleteProject = (info) => {
    return {
      type: DELETE_PROJECT,
      info: info
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PROJECT:
            return [action.info, ...state];
        case DELETE_PROJECT :
            return state.filter(p => p.url !== action.info.url);
        default:
            return state;
    }
}