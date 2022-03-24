import { I_DAME_GAME } from "./IDameGame";

export interface I_APP_DAME_GAME_PROPS_STATE{
    playGameStatus:boolean;
    matrixDownLeftToRight:number[][];
    matrixDownRightToLeft:number[][];
    Historique?: number[][];
    // 1: joueur 1, id de la case, 3:status dame, 
    // 2: Joueur 2 ...
    selectedPion: number;
    
    //Elements type GLOBAL
    APP_GLOBAL_DATA: I_APP_GLOBAL_DATA;
    APP_GLOBAL_FUNCTIONS: I_APP_GLOBAL_FUNCTIONS;
}

//---------------------------------------------------------------------------------------------------------------------
export  interface I_APP_GLOBAL_DATA{

    cadrillageDameMap: I_DAME_GAME[];
}

export interface I_APP_GLOBAL_FUNCTIONS{
    //On va définir nos fonctions ici !
    onPlayGame?: Function;
    createMap?: Function;
    movePion?: Function;
}