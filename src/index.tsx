import React from 'react';
import ReactDOM from 'react-dom';
// Mon fichier importé
import { APP_DAME_GAME } from './Components/APP/AppDameGame';
// Ma css global
import './CSS/index.css'; 
// Voir à quoi correspond le fichier reportWebVitals
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        <APP_DAME_GAME/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();