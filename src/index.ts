import 'reflect-metadata';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'

import UsuarioRoutes from './routes/usuario.routers'
import path from 'path';

const app = express()
createConnection();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
console.log(__dirname)
app.use('/', express.static(__dirname + '/riscclien'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

//routes
app.use(UsuarioRoutes);

app.listen(3000);
console.log('Server on Port', 3000);