import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';

const uploadTrainerImage = (req: Request, res: Response, next: NextFunction) => {
  console.log("Upload trainer image");

  let { id } = req.params;
  let { image } = req.body;
  
  let query = "INSERT INTO trainer_images (trainer_id, image) ";
  query    += `VALUES(${id}, "${image}") `;

  Connect()
  // connection success
  .then(connection => {
    Query(connection, query)
    // query success
    .then((result: any) => {
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

const getTrainerImage = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting trainer image");

  let { id } = req.params;

  let query = `SELECT * FROM trainer_images WHERE trainer_id=${id}`;

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

const deleteTrainerImage = (req: Request, res: Response, next: NextFunction) => {
  console.log("Delete trainer image");
  
  let { image } = req.body;

  let query = `DELETE FROM trainer_images WHERE image="${image}"`;

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
  uploadTrainerImage,
  getTrainerImage,
  deleteTrainerImage
};