const { readFile } = require('fs/promises');
const websocket = require('ws');
const wss = new websocket.Server({port:8020})

wss.on('connection', ws=>{
    console.log('working')
    ws.on('message', data=>{
        const fs = require('fs');
        // const info = require('./info');
        let text = fs.readFileSync("info.js", 'utf-8');
        text = text.replace('null', data);
        fs.writeFileSync('info.js', text);
        // fs.appendFileSync('info.js', data)
    });
    ws.on('close', ()=>{
        console.log('disconnected')
    });
});