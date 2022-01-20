import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';

const createTrainer = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating trainer");

  let { loginID, loginPW, name, sex, age, thumbnail, instagram, carrer, intro } = req.body;

  let query = 'INSERT INTO trainers (loginID, loginPW, name, sex, age, thumbnail, instagram, carrer, intro) ';
  query += `VALUES ("${loginID}", "${loginPW}", "${name}", "${sex}", "${age}", "${thumbnail}", "${instagram}", "${carrer}", "${intro}")`;

  Connect()
  // connection success
  .then(connection => {
    Query(connection, query)
    // query success
    .then(result => {
      return res.status(200).json({
        result
      })
    })

    // query error
    .catch(error => {
      console.log('query error: ' + error.message);

      return res.status(500).json({
        message: error.message,
        error
      });
    })

    .finally(() => {
      connection.end();
    })
  })

  // connection error
  .catch(error => {
    console.log('connection error: ' + error.message);

    return res.status(500).json({
      message: error.message,
      error
    })
  });
};

const getALLTrainer = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting all trainer");

  let query = 'SELECT * FROM trainers'

  Connect()
  // connection success
  .then(connection => {
    Query(connection, query)
    // query success
    .then(result => {
      return res.status(200).json({
        result
      })
    })

    // query error
    .catch(error => {
      console.log('query error: ' + error.message);

      return res.status(500).json({
        message: error.message,
        error
      });
    })

    .finally(() => {
      connection.end();
    })
  })

  // connection error
  .catch(error => {
    console.log('connection error: ' + error.message);

    return res.status(500).json({
      message: error.message,
      error
    })
  })
};

export default { createTrainer, getALLTrainer };