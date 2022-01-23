import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';

const createMemo = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating Memo");

  let { class_id, date, content } = req.body;

  let query = 'INSERT INTO user_memo (class_id, date, content) ';
  query += `SELECT ${class_id}, "${date}", "${content}" `;
  query += `FROM class WHERE id=${class_id} AND status="teaching" `;

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

const getUserMemo = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting Memo by User");

  let { class_id } = req.params;

  let query = `SELECT * FROM user_memo WHERE class_id="${class_id}"`;

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

export default {
  createMemo,
  getUserMemo
};