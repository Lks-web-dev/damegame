import * as React from "react";
// Import de ma CSS
import "../../CSS/appDameGame.css"
import { rulesVerificator } from "../../TOOLS/verificator";
import { I_APP_DAME_GAME_PROPS_STATE, I_APP_GLOBAL_DATA, I_APP_GLOBAL_FUNCTIONS } from "../Interfaces/IAppDameGame";
import { DAME_GAME } from "../ITEMS/DameGame";


export class APP_DAME_GAME extends React.Component<{}, I_APP_DAME_GAME_PROPS_STATE>
{
    constructor(props: any) {
        super(props);

        this.state = {

            playGameStatus: false,
            selectedPion: 999,

            matrixDownLeftToRight: [
                //bas G => D
                [98,89],
                [96,87,78,69],
                [94,85,76,67,58,49],
                [92,83,74,65,56,47,38,29],
                [90,81,72,63,54,45,36,27,18,9],
                [70,61,52,43,34,25,16,7],
                [50,41,32,23,14,5],
                [30,21,12,3],
                [10,1]
            ],

            matrixDownRightToLeft: [
                //bas D => G
                [90],
                [92,81,70],
                [94,83,72,61,50],
                [96,85,74,63,52,41,30],
                [98,87,76,65,54,43,32,21,10],
                [89,78,67,56,45,34,23,12,1],
                [69,58,47,36,25,14,3],
                [49,38,27,16,5],
                [29,18,7],
                [9]
            ],
            //Mes données globales
            APP_GLOBAL_DATA: {
                cadrillageDameMap: [],
            },

            //Mes fonction globales
            APP_GLOBAL_FUNCTIONS: {

            }

        }
        //Element à Binder !
        this.onPlayGame = this.onPlayGame.bind(this);
        this.createMap = this.createMap.bind(this);
        this.movePion = this.movePion.bind(this);
    }

    movePion(idCell: number) {
        let moving: I_APP_GLOBAL_DATA = this.state.APP_GLOBAL_DATA;
        let idSelected: number = this.state.selectedPion; //permet de garder l'état de la sélection
        let matrixbRToL: number[][] = this.state.matrixDownRightToLeft; //Contient les id des cellule et le sens de déplacement
        let matrixbLToR: number[][] = this.state.matrixDownLeftToRight; //Contient les id des cellule et le sens de déplacement
        let transfertData: any[] = []; //Permet de transvaser des données
        //Le vérificator contient 3 informations
        //[0] à true : je peux déplacer le pion
        //[1] est l'id du pion adverse à manger
        //[3] ne nous sert pas mais est hérité du traitement des fonction "rulesVerificator"
        let verificator: any[]=[];


        //On sélectionne une première fois le pion à déplacer
        if (idSelected === 999) { //999 peut être assimilé à "undefined"
            idSelected = idCell;
            (moving.cadrillageDameMap).forEach(search => {
                if (search.id === idSelected) {
                    if (search.player === 1) {
                        search.couleurDuJoueur = "#00ccff";
                    } else if (search.player === 2) {
                        search.couleurDuJoueur = "#ffb3b3";
                    } else {
                        idSelected = 999;
                    }
                }
                this.setState({ APP_GLOBAL_DATA: moving, selectedPion: idSelected })
            })

        } else if (idCell !== idSelected) { //On selectionne une deuxième fois sur la case visée
            
            verificator = rulesVerificator(matrixbLToR, matrixbRToL, idCell, idSelected, this.state.APP_GLOBAL_DATA.cadrillageDameMap.map(t=>t));
            //console.log(verificator);
            if (verificator[0]) {
                (moving.cadrillageDameMap).forEach(search => {
                    if (search.id === idSelected) {
                        (search.player === 1) ? transfertData[0] = "blue" : transfertData[0] = "red";

                        search.couleurDuJoueur = "";
                        transfertData[1] = search.player;
                        search.player = 0;
                        transfertData[2] = search.priseAdversaire;
                        search.priseAdversaire = false;
                        transfertData[3] = search.statusDame;
                        search.statusDame = false;
                    }

                });
                (moving.cadrillageDameMap).forEach(search => {
                    if (search.id === idCell) {
                        search.couleurDuJoueur = transfertData[0];
                        search.player = transfertData[1];
                        search.priseAdversaire = transfertData[2];
                        search.statusDame = transfertData[3];
                    }
                })
                this.setState({ APP_GLOBAL_DATA: moving, selectedPion: 999 })
            }
            
        } else { //On déselectionne le pion
            (moving.cadrillageDameMap).forEach(search => {
                if (search.id === idSelected) {
                    if (search.player === 1) {
                        search.couleurDuJoueur = "blue";
                    } else if (search.player === 2) {
                        search.couleurDuJoueur = "red";
                    }
                }
                this.setState({ APP_GLOBAL_DATA: moving, selectedPion: 999 })
            })
        }

    }

    onPlayGame() {
        let statutGame: boolean = this.state.playGameStatus;
        statutGame = true;
        this.createMap();
        this.setState({ playGameStatus: statutGame });
    }

    createMap() {
        let cadrillage: I_APP_GLOBAL_DATA = this.state.APP_GLOBAL_DATA;
        let multiplicateur: number = 1;
        let playerDameGame: number = 0;
        let color: string = "";
        //let celluleActive:number;
        let itemBarStyle: string = "ITEM_";

        for (let i = 0; i < 100; i++) {
            if (i === 10 * multiplicateur) {
                //cellule = '<div className="' + itemBarStyle + '">' + i + '</div>';

                multiplicateur++;
            } else {
                switch (itemBarStyle) {
                    case "ITEM":
                        itemBarStyle = "ITEM_";
                        if (i <= 40) {
                            playerDameGame = 2;
                            color = "red";
                        } else if (i > 40 && i <= 60) {
                            playerDameGame = 0;
                            color = "";
                        } else {
                            playerDameGame = 1;
                            color = "blue";
                        }
                        break;
                    case "ITEM_":
                        itemBarStyle = "ITEM";
                        break;
                    default:
                        break;
                }
            }
            cadrillage.cadrillageDameMap.push({
                id: i, //Correspond à l'Id de la cellule
                Item: itemBarStyle,
                player: playerDameGame, // Permet de placer un joueur
                couleurDuJoueur: color, // 8 couleurs au choix seront proposées et seront définies ailleurs
                priseAdversaire: false, // true: pris par l'adversaire, false: l'inverse
                statusDame: false //Détermine si on est en Dame ou pas
            });
        }

        this.setState({ APP_GLOBAL_DATA: cadrillage });

    }
    //Montage des composants
    componentDidMount() {
        let tmpAPPFUNCTIONS: I_APP_GLOBAL_FUNCTIONS = {
            onPlayGame: this.onPlayGame,
            createMap: this.createMap,
            movePion: this.movePion
        }
        this.setState({ APP_GLOBAL_FUNCTIONS: tmpAPPFUNCTIONS })
    }
    //rendu du document
    render(): JSX.Element {
        return <div className="APPDAMEGAME_CONTAINER">
            <div className="APPDAMEGAME_TITLE">
                MY FIRST GAME IN REACTjsx...
            </div>
            <div className="APPDAMEGAME_RULES">
                <h3>Bienvenue dans votre jeu de Dame</h3>
                <h4>Principe :</h4>
                <p>une prise peut avoir lieu quand un pion se trouve à côté (toujours en diagonale) d'un pion adverse, et qu'une case libre se trouve derrière. Le premier pion peut alors sauter le second pour arriver sur la case vide. Une prise peut s'effectuer à la fois vers l'avant et vers l'arrière. Le pion sauté est alors supprimé du jeu. Il est possible de réaliser des combinaisons à partir du moment où il y a toujours une case vide entre les pions pris successivement.</p>
                <h4>La Dame :</h4>
                <p>La dame : elle prend de la même manière que le pion, excepté qu'elle a la possibilité, lorsqu'un pion adverse se trouve dans sa diagonale, de sauter les cases vides les séparant. Elle atterrit alors sur la case vide de son choix se trouvant derrière le pion sauté.</p>
            </div>
            <hr />
            <div className="APPDAMEGAME_BODY">
                {
                    !this.state.playGameStatus &&
                    <div>
                        <button title={"playgame"} onClick={() => { this.onPlayGame() }}>PLAY GAME</button>
                    </div>
                }
                {
                    this.state.playGameStatus &&
                    <div className="DAMEGAME_BODY">
                        {
                            this.state.APP_GLOBAL_DATA.cadrillageDameMap.map(t => {
                                return < DAME_GAME
                                    instanceMAPcell={t}
                                    APP_GLOBAL_FUNCTIONS={this.state.APP_GLOBAL_FUNCTIONS}
                                    key={t.id}
                                />
                            })
                        }
                    </div>
                }
            </div>
            <hr />
            <div className="APPDAMEGAME_FOOTER">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa minus reprehenderit, voluptas minima natus maxime optio. Omnis eligendi quia obcaecati amet voluptas dignissimos aperiam quasi provident vitae. Corporis, esse?
            </div>
        </div>
    }
}