import express, { request, response } from 'express'
import {postList, SERVER_PORT, SERVER_URL} from './data/postsArray.js'

const server = express();


server.get('/', ((requerst, response) => {
    response.json(`Server del mio blog ${SERVER_URL}${SERVER_PORT}`)
}));

server.get('/bacheca', ((request, response) => {
    response.json(postList.map(post => {
        const {immagine} = post;
        return {...post, immagine : new URL(immagine, SERVER_URL+SERVER_PORT) }
}));
}));

server.use(express.static('public'));





server.listen(SERVER_PORT,(error) => {
    if(error){
        console.log(`c'é stato un errore stronzo ${error}`);
    }else{
        console.log(`sei connesso al server ${SERVER_URL}${SERVER_PORT}`);
    }
    
});