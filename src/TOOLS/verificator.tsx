import { verificatorCell } from "./verificatorCell";

export const rulesVerificator = (matrixBGD: number[][], matrixBDG: number[][], idCible: number, iddeDepart: number, tabCell: any[]) => {
    //Joueur 1 sens croissant
    let whoPlayDepart: number = 0;
    let rulesVerificatorReturn: any[] = [false]; //On renvoie un tableau 
    let statusDame: boolean = false;
    let whoPlayCible: number = 0;

    tabCell.forEach(search => {//On vérifie le joueur 1 ou 2 et son statusDame
        if (search.id === iddeDepart) {
            whoPlayDepart = search.player;
            statusDame = search.statusDame;
        }
        if (search.id === idCible) {//on vérifie s'il y a un joueur à la cellule cible
            whoPlayCible = search.player;
        }
    })

    if (whoPlayCible === 0) {
        for (let index = 0; index < matrixBGD.length; index++) {
            //console.log(matrixBGD[index].length);
            //on vérifie quel joueur et le status de la Dame
            rulesVerificatorReturn = verificatorCell(matrixBGD[index], statusDame, iddeDepart, idCible, whoPlayDepart, tabCell);
        }
        if (rulesVerificatorReturn[2]) {
            for (let index = 0; index < matrixBDG.length; index++) {
                //console.log(matrixBGD[index].length);
                //on vérifie quel joueur et le status de la Dame
                rulesVerificatorReturn = verificatorCell(matrixBDG[index], statusDame, iddeDepart, idCible, whoPlayDepart, tabCell);
            }
        }
    }

    return rulesVerificatorReturn;
}