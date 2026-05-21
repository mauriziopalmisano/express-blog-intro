import express from 'express'

const server = express();
const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_URL = process.env.SERVER_URL;

server.get('/', ((requerst, response) => {
    response.json(`Server del mio blog ${SERVER_URL}${SERVER_PORT}`)
}));







server.listen(SERVER_PORT,(error) => {
    if(error){
        console.log(`c'é stato un errore stronzo ${error}`);
    }else{
        console.log(`sei connesso al server ${SERVER_URL}${SERVER_PORT}`);
    }
    
})