export const verificatorCell = (matrix: number[], statusDame: boolean, idCible: number, iddeDepart: number, whoPlay: number, tabCellInfoPlayer: any[]) => {
    let rulesVerificatorReturn: any[] = []; //pour test
    //let findPion: boolean = false;
    let tabCell: number = matrix.length;

    for (let index = 0; index < tabCell; index++) {
        if (whoPlay === 1) {// Gestion du déplacement du joueur 1
            if (statusDame) {
                //gestion du déplacement de la dame
            } else {
                //Déplacement pion simple
                if (matrix.includes(iddeDepart)) {
                    //On ne fait rien jusqu'à la prochaine occurrence...
                    console.log("Je suis ici");
                    for (let i = index + 1; i < tabCell; i++) {
                        switch (i) {
                            case index + 1:
                                if (matrix[index + 1] === idCible) {
                                    console.log("je suis ici");
                                    rulesVerificatorReturn[0] = true; //Valide le déplacement
                                    rulesVerificatorReturn[1] = []; // pas de pion à manger id adverse
                                    rulesVerificatorReturn[3] = false; //idCible trouvé donc pas de vérification de la deuxième diagonal...
                                }
                                break;

                            case index + 2:
                                if (matrix[index + 2] === idCible) {
                                    tabCellInfoPlayer.forEach(t => {
                                        if (t.id === matrix[index + 1]) {
                                            switch (t.player) {
                                                case 1:
                                                    rulesVerificatorReturn[0] = false; //Valide le déplacement
                                                    rulesVerificatorReturn[1] = []; // pas de pion à manger id adverse
                                                    rulesVerificatorReturn[3] = false; //idCible trouvé donc pas de vérification de la deuxième diagonal...
                                                    break;
                                                case 2:
                                                    rulesVerificatorReturn[0] = true; //Valide le déplacement
                                                    rulesVerificatorReturn[1] = idCible; // pas de pion à manger id adverse
                                                    rulesVerificatorReturn[3] = false; //idCible trouvé donc pas de vérification de la deuxième diagonal...
                                                    break;
                                                default:
                                                    rulesVerificatorReturn[0] = false; //Valide le déplacement
                                                    rulesVerificatorReturn[1] = []; // pas de pion à manger id adverse
                                                    rulesVerificatorReturn[3] = false; //idCible trouvé donc pas de vérification de la deuxième diagonal...
                                                    break;
                                            }
                                        }
                                    })
                                } else if (index - 2 >= 0) {
                                    if (matrix[index - 2] === idCible) {
                                        tabCellInfoPlayer.forEach(t => {
                                            if (t.id === matrix[index -1]) { //INFO: faire un DRY ici car une répétition !!!
                                                switch (t.player) {
                                                    case 1:
                                                        rulesVerificatorReturn[0] = false; //Valide le déplacement
                                                        rulesVerificatorReturn[1] = []; // pas de pion à manger id adverse
                                                        rulesVerificatorReturn[3] = false; //idCible trouvé donc pas de vérification de la deuxième diagonal...
                                                        break;
                                                    case 2:
                                                        rulesVerificatorReturn[0] = true; //Valide le déplacement
                                                        rulesVerificatorReturn[1] = idCible; // pas de pion à manger id adverse
                                                        rulesVerificatorReturn[3] = false; //idCible trouvé donc pas de vérification de la deuxième diagonal...
                                                        break;
                                                    default:
                                                        rulesVerificatorReturn[0] = false; //Valide le déplacement
                                                        rulesVerificatorReturn[1] = []; // pas de pion à manger id adverse
                                                        rulesVerificatorReturn[3] = false; //idCible trouvé donc pas de vérification de la deuxième diagonal...
                                                        break;
                                                }
                                            }
                                        })
                                    }
                                }

                                break;

                            default:
                                rulesVerificatorReturn[0] = true; //Valide le déplacement
                                rulesVerificatorReturn[1] = []; // pas de pion à manger id adverse
                                rulesVerificatorReturn[3] = false;
                                break;
                        }
                    }


                } else {
                    rulesVerificatorReturn[2] = true;
                }
            }
        } else if (whoPlay === 2) {
            // Gestion du déplacement du joueur 1
            if (statusDame) {

            } else {

            }
        }
    }
    return rulesVerificatorReturn;
}