import 'babel-polyfill';
import Socket from './socket/index';
import Config from './config';

import ReactDOM from 'react-dom';
import React from 'react';

import App from './app';


// import './style/main.scss'
const init = (config) => {
    const socket = new Socket(config.socketUrl);
    ReactDOM.render(
    <App env={{test:'test'}} socket={socket} />
        ,
        document.getElementById('root'));
};

Config.getConfig().then(config => {
    init(config);
});

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
