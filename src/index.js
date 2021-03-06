import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module'
import Routes from 'routes';
import { HashRouter } from 'react-router-dom';
import { MainProvider } from 'stores';
import registerServiceWorker from './registerServiceWorker';
import * as pjson from '../package.json'
import GlobalStyles from './styles/global'

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID,
    dataLayer: {
        version: pjson.version
    }
}

window.version = () => {
    console.log(pjson.version)
}
 
TagManager.initialize(tagManagerArgs)

window.version = () => {
    console.log(pjson.version)
}

ReactDOM.render(
    <HashRouter>
        <MainProvider>
            <Routes />
            <GlobalStyles />
        </MainProvider>
    </HashRouter>,
    document.getElementById('root')
)

registerServiceWorker()