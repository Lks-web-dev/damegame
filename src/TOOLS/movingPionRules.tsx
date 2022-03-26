export const movingPionRules = (idCible: number, idSelected: number, cellRulesMap: number[][],
    whoPlayCible: any[], whoIsInSelected: number, whoIsInTarget: number, whoIsInTargetAdvers: number) => {
    let tab: any[] = [false, false, ""]; // renvoi vrai si le pion doit se déplacer ++ l'indice du pion à remplacer
    let indiceIdSelected: number = 999;
    let indiceIdCible: number = 999;
    let indiceIdAdversaire: number = 999;
    let sensPath: number = 999;

    indiceIdSelected = cellRulesMap[idSelected].indexOf(idSelected); //On récupère l'indice de la selection 
    indiceIdCible = cellRulesMap[idSelected].indexOf(idCible);

    sensPath = (whoIsInSelected === 1) ? (indiceIdCible - indiceIdSelected) : (indiceIdSelected - indiceIdCible);
    switch (sensPath) {
        case 1:

            tab[0] = true;
            tab[1] = false;
            break;
        case 2:

            if (whoIsInSelected === 1)
                indiceIdAdversaire = cellRulesMap[idSelected][indiceIdCible - 1];
            else
                indiceIdAdversaire = cellRulesMap[idSelected][indiceIdCible + 1];

            whoPlayCible.forEach(search => {
                if (search.id === indiceIdAdversaire) {//On récupère l'état de la cellule cible (0: pas de joueur, 1: joueur bleu, 2: joueur rouge)
                    whoIsInTargetAdvers = search.player;
                }
            })
            if (whoIsInTargetAdvers !== whoIsInSelected && whoIsInTargetAdvers !== 0) {
                tab[0] = true;
                tab[1] = true;
                tab[2] = indiceIdAdversaire;
            } else {
                tab[0] = false;
                tab[1] = false;
            }
            break;
        case -1: // ce bout de code a été mis pour la compréhension du code mais n'est pas utile car par défaut tab[0]= false

            tab[0] = false;
            tab[1] = false;
            break;
        case -2:

            if (whoIsInSelected === 1)
                indiceIdAdversaire = cellRulesMap[idSelected][indiceIdCible - 1];
            else
                indiceIdAdversaire = cellRulesMap[idSelected][indiceIdCible + 1];

            whoPlayCible.forEach(search => {

                if (search.id === indiceIdAdversaire) {//On récupère l'état de la cellule cible (0: pas de joueur, 1: joueur bleu, 2: joueur rouge)
                    whoIsInTargetAdvers = search.player;
                }
                if (whoIsInTargetAdvers !== whoIsInSelected) {
                    tab[0] = true;
                    tab[1] = true;
                    tab[2] = indiceIdAdversaire;
                } else {
                    tab[0] = false;
                    tab[1] = false;
                }
            })
            break;

        default:
            break;
    }
    return tab;
}