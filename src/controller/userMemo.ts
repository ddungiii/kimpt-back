import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';

const createMemo = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating Memo");

  let { class_id, date, content } = req.body;

  let query = 'INSERT INTO user_memo (class_id, date, content) ';
  query += `VALUES ("${class_id}", "${date}", "${content}")`;

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

export default { createMemo };