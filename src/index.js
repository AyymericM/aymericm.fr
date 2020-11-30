import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module'
import Routes from './routes/main';
import { Router } from 'react-router-dom';
import history from './routes/history'
import { MainProvider } from './stores/MainStore';
import registerServiceWorker from './registerServiceWorker';
import * as pjson from '../package.json'
import './styles/global'

const tagManagerArgs = {
    gtmId: 'GTM-MZQTPRC',
    dataLayer: {
        version: pjson.version
    }
}
 
TagManager.initialize(tagManagerArgs)

window.version = () => {
    console.log(pjson.version)
}

ReactDOM.render(
    <Router history={history}>
        <MainProvider>
            <Routes />
        </MainProvider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();