import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './fa-svg-with-js.css'
import './index.css';
import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import pollTheme from './style/theme.js';


ReactDOM.render(
    <MuiThemeProvider theme={pollTheme}> 
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
