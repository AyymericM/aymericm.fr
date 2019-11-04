import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/main';
import history from './routes/history'
import { Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/global'
import { MainProvider } from './stores/MainStore';

ReactDOM.render(
    <Router history={history}>
        <MainProvider>
            <Routes />
        </MainProvider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();