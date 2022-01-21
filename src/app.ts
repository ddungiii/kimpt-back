import express, { Request, Response, NextFunction } from 'express';

import bodyParser from 'body-parser';
import trainersRoutes from './route/trainers';
import gymsRoutes from './route/gyms';
import usersRoutes from './route/users';
import classRoutes from './route/class';

const mysql = require('mysql');
const dbconfig = require('./config/config.ts');
const connection = mysql.createConnection(dbconfig);
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 443;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

app.use('/trainers', trainersRoutes);
app.use('/users', usersRoutes);
app.use('/gyms', gymsRoutes);
app.use('/class', classRoutes);

app.listen('443', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 443🛡️
  ################################################
`);
});