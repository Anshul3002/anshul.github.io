const websocket = require('ws');
const wss = new websocket.Server({port:8020})

wss.on('connection', ws=>{
    console.log('working')
    ws.on('message', data=>{
        const fs = require('fs');
        fs.appendFileSync('info.txt', data)
    });
    ws.on('close', ()=>{
        console.log('disconnected')
    });
});