import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';

const applyClass = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating class");

  let { trainer_id, user_id, day, time, num_pt } = req.body;

  let query = 'INSERT INTO class (trainer_id, user_id, day, time, remaining_pt, status) ';
  query += `VALUES ("${trainer_id}", "${user_id}", "${day}", "${time}", ${num_pt}, "pending")`;

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

const reduceRemainPT = (req: Request, res: Response, next: NextFunction) => {
  console.log("Reduce remaining pt");

  let { class_id } = req.params;

  let query = `UPDATE class SET remaining_pt=remaining_pt-1 WHERE id=${class_id} AND status="teaching"`;

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

const acceptClass = (req: Request, res: Response, next: NextFunction) => {
  console.log("Accept pt");

  let { class_id } = req.params;

  let query = `UPDATE class SET status="teaching" WHERE id=${class_id} AND status="pending"`;

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

const denyClass = (req: Request, res: Response, next: NextFunction) => {
  console.log("Deny pt");

  let { class_id } = req.params;

  let query = `DELETE FROM class WHERE id=${class_id} AND status="pending"`;

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
  applyClass,
  reduceRemainPT,
  acceptClass,
  denyClass
};