import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';

const uploadUserImage = (req: Request, res: Response, next: NextFunction) => {
  console.log("Upload user image");

  let { id, type } = req.params;
  let { image, date } = req.body;
  console.log(type);
  
  let query = "INSERT INTO user_images (user_id, type, image, date) ";
  query    += `VALUES(${id}, "${type}", "${image}", "${date}") `;

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

const getUserImage = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting user image");

  let { id, type } = req.params;
  console.log(type);

  let query = `SELECT * FROM user_images WHERE user_id=${id} AND type="${type}"`;

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

const deleteUserImage = (req: Request, res: Response, next: NextFunction) => {
  console.log("Delete user image");

  let { image } = req.body;

  let query = `DELETE FROM user_images WHERE image="${image}"`;

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
  uploadUserImage,
  getUserImage,
  deleteUserImage
};