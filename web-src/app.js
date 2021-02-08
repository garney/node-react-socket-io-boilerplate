import React, { useEffect, useState } from 'react';
import Config from './config';

import './app.scss';

import Dice from './dice';

function App({socket}) {
    
    const [connectionDetails, setConnectionDetails] = useState({});

    useEffect(() => {
        socket.on('connected', (id) => {
            setConnectionDetails({
                id,
                status: socket.status
            })
        });
    

    }, []);


    return (
        <div className="app">
            <div>
                <span className="status">{connectionDetails.status}</span> with
                connection ID <span className="id">{connectionDetails.id}</span>
            </div>
            <Dice socket={socket}/>
        </div>
    )
}

module.exports = App;