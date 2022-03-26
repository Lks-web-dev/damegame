import {movingPionRules} from "../TOOLS/movingPionRules"
export const rulesVerificator = (idCible: number, idSelected: number, cellRulesMapDLR: number[][], cellRulesMapDRL: number[][], whoPlayCible: any[]) => {
    let tab: any[] = [false, false, ""]; // renvoi vrai si le pion doit se déplacer ++ l'indice du pion à remplacer

    let whoIsInTarget: number = 0;
    let whoIsInTargetAdvers: number = 0;
    let whoIsInSelected: number = 0;

    let statusDameDepart: boolean;
    let statusDameCible: boolean;


    whoPlayCible.forEach(search => {
        if (search.id === idCible) {//On récupère l'état de la cellule cible (0: pas de joueur, 1: joueur bleu, 2: joueur rouge)
            whoIsInTarget = search.player;
        }
        if (search.id === idSelected) {//On récupère l'état de la cellule de départ (0: pas de joueur, 1: joueur bleu, 2: joueur rouge)
            whoIsInSelected = search.player;
        }
    })

    if (whoIsInTarget !== 0) { //Quelque soit le joueur on ne peut pas jouer sur un pion déjà en place
        tab[0] = false;
    } else { //Sinon on gère le déplacement sur des espace vide
        //Ici on va gérer 2 cas :
        //Cas ou le joueur 1 et la cible sont sur la diag DLR et progresse dans le sens du joueur 1
        //Cas ou le joueur 1 et la cible sont sur la diag DRL et progresse dans le sens du joueur 1
        if (cellRulesMapDLR[idSelected].includes(idCible)) { //Si je trouve ma cible sur la même ligne que ma selection
            tab = movingPionRules(idCible, idSelected, cellRulesMapDLR, whoPlayCible, whoIsInSelected, whoIsInTarget, whoIsInTargetAdvers);

        } else {
            tab = movingPionRules(idCible, idSelected, cellRulesMapDRL, whoPlayCible, whoIsInSelected, whoIsInTarget, whoIsInTargetAdvers);
        } 
    }
    return tab;
}