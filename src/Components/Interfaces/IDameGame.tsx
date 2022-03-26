import { I_APP_GLOBAL_FUNCTIONS } from "./IAppDameGame";

export interface I_DAME_GAME_PROPS {
    instanceMAPcell: I_DAME_GAME;

    //Action sous forme globale (technique simplifiant l'utilisation des fonctions et des variables)
    APP_GLOBAL_FUNCTIONS: I_APP_GLOBAL_FUNCTIONS;
}

//---------------------------------------------------------------------------------------------------------------------
export interface I_DAME_GAME {// On gère les ITEMS
    id: number; //Correspond à l'Id de la cellule
    Item: string;
    player: number; // Permet de savoir à qui le tour. Par défaut, c'est le joueur du bas...
    couleurDuJoueur: string; // 8 couleurs au choix seront proposées et seront définies ailleurs
    priseAdversaire?: boolean; // true: pris par l'adversaire, false: l'inverse
    statusDame: boolean; //Détermine si on est en Dame ou pas
}
