import React, { useEffect } from 'react';
import Config from './config';
import Socket from './socket/index';

function App({env}) {
    useEffect(() => {
        Config.getConfig().then(config => {
            if(config.socketUrl) {
                const socket = new Socket(config.socketUrl);
            }
        })

    }, []);

    return (
        <div>
            Hello App
            {JSON.stringify(env)}
        </div>

    )
}

module.exports = App;