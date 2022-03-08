import express from 'express';
import cors from 'cors';
import fakeRouter from './router/hello.router.js';
// import controller from './controler/hello.controller.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const port = process.env.PORT || 4000;


app.use('/', fakeRouter) // todo lo k empieza por /, voy al directorio/carpeta/archivo router

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));