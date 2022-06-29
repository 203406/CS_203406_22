import express from 'express';
import cors from 'cors';
import { api } from './config/config.js';
import user from './router/user.js';
import son from './router/son.js';
//import login from './router/login.js';
//import respose from './router/response.js';
import imagen from './router/imagenes.js';
import dad from './router/dad.js';


const app = express();

app.use(cors({ origin: true, credentials: false }));

app.use('/api/son', son)
app.use('/api/user', user)
//app.use('/api/login', login)
//app.use('/api/response', respose)
app.use('/api/imagenes', imagen)
app.use('/api/dad', dad)

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(api.port, () => {

    console.log('Servidor corriendo en el puerto en el puerto =>', api.port)
}
);