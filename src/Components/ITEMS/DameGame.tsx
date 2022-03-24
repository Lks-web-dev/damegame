import * as React from "react";
// Import de la CSS
import "../../CSS/dameGame.css";
import { I_DAME_GAME_PROPS } from "../Interfaces/IDameGame";
// Import de mom Interface


export class DAME_GAME extends React.Component<I_DAME_GAME_PROPS, {}>
{
    render(): JSX.Element {
        return <div className={this.props.instanceMAPcell.Item}>

            <span className="DAMEGAME_PION" onClick={() => (this.props.APP_GLOBAL_FUNCTIONS.movePion as Function)(this.props.instanceMAPcell.id)}>
                {
                    this.props.instanceMAPcell.Item === "ITEM_" && this.props.instanceMAPcell.player !== 0 &&
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 16 16">
                        <g>
                            <path id="path1" transform="rotate(0,8,8) translate(0.237001419067383,0) scale(0.5,0.5)  " fill={this.props.instanceMAPcell.couleurDuJoueur} d="M2.2927691,29.869995L29.987991,29.869995C30.572986,29.869995 31.051994,30.350006 31.051994,30.93399 31.051994,31.522003 30.572986,32 29.987991,32L2.2927691,32C1.7077578,32 1.2287654,31.522003 1.2287652,30.93399 1.2287654,30.350006 1.7077578,29.869995 2.2927691,29.869995z M9.8858304,11.558014L2.1267674,19.368011 7.0638022,24.429993C7.4928064,24.862,8.5888075,25.610016,9.1948151,25.610016L12.466844,25.610016C13.073843,25.610016,13.934858,24.862,14.364853,24.429993L18.478898,20.153992z M19.202903,0C19.747905,0,20.292909,0.24398804,20.707904,0.65899658L29.412975,9.3980103C30.240983,10.225006,30.240983,11.653992,29.412975,12.483002L16.103881,25.936005C15.274865,26.766998,13.640849,27.73999,12.466844,27.73999L9.1948151,27.73999C8.0238165,27.73999,6.3878021,26.766998,5.5577931,25.936005L0.62175103,20.708008C-0.20725034,19.880005,-0.20725034,18.52301,0.62175103,17.697998L17.69688,0.6210022C18.108886,0.20599365,18.656894,0,19.202903,0z" />
                        </g>
                    </svg>
                }
                {
                    this.props.instanceMAPcell.Item === "ITEM_" && this.props.instanceMAPcell.player === 0 &&
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 16 16">
                        <g>
                            
                        </g>
                    </svg>
                }
            </span>

        </div>
    }
}