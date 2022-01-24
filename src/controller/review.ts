import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';

const createReview = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating Review");

  let { trainer_id, user_id, content, rating } = req.body;

  let query = "INSERT INTO trainer_review (trainer_id, user_id, content, rating) ";
  query    += `SELECT ${trainer_id}, ${user_id}, "${content}", ${rating} `;
  query    += `FROM class WHERE trainer_id=${trainer_id} AND user_id=${user_id} AND is_Review=0 AND (status="teaching")`;

  Connect()
  // connection success
  .then(connection => {
    Query(connection, query)
    // query success
    .then((result: any) => {
      if (result.affectedRows === 0){
        return res.status(200).json({
          status: "invalid review"
        })
      }
      query = `UPDATE class SET is_review=1 `;
      query+= `WHERE trainer_id=${trainer_id} AND user_id=${user_id};`;
      
      Query(connection, query)
      .then(result => {
        return res.status(200).json({
          result
        })
      })
      .catch(error => {
        console.log('query error: ' + error.message);

        return res.status(500).json({
          message: error.message,
          error
        });
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

const getReviewByTrainer = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting Review by Trainer");

  let { class_id } = req.params;

  let query = `SELECT * FROM trainer_review WHERE class_id=${class_id}`;

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
  createReview,
  getReviewByTrainer
};