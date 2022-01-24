import express, { Request, Response, NextFunction } from 'express';

import bodyParser from 'body-parser';
import trainersRoutes from './route/trainers';
import gymsRoutes from './route/gyms';
import usersRoutes from './route/users';
import classRoutes from './route/class';
import memoRoutes from './route/userMemo';
import reviewRoutes from './route/review';
import userImageRoutes from './route/userImages';

const mysql = require('mysql');
const dbconfig = require('./config/config.ts');
const connection = mysql.createConnection(dbconfig);
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 443;

app.use(bodyParser.json({
  limit: "50mb"
}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: "50mb"
}));

app.use('/trainers', trainersRoutes);
app.use('/users', usersRoutes);
app.use('/gyms', gymsRoutes);
app.use('/class', classRoutes);
app.use('/memo', memoRoutes);
app.use('/review', reviewRoutes);
app.use('/images/user/', userImageRoutes);

app.listen('443', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 443🛡️
  ################################################
`);
});