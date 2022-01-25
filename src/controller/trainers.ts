import e, { NextFunction, Request, Response } from 'express';
import { env } from 'process';
import { Connect, Query } from '../config/mysql';

// POST
const createTrainer = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating trainer");

  let { login_id, login_pw, name, sex, age, instagram, career, intro, gym_city, gym_name } = req.body;
  // let thumbnail = req.body.thumbnail ? req.body.thumbnail : 
  let thumbnail = req.body.thumbnail ? req.body.thumbnail : process.env.BASE_TRAINER_THUMBNAIL;

  let query = 'INSERT INTO trainers (login_id, login_pw, name, sex, age, thumbnail, instagram, career, intro, gym_id) ';
  query    += `SELECT "${login_id}", "${login_pw}", "${name}", "${sex}", "${age}", "${thumbnail}", "${instagram}", "${career}", "${intro}", id `;
  query    += `FROM gyms WHERE city="${gym_city}" and name="${gym_name}"`;

  Connect()
  // connection success
  .then(connection => {
    Query(connection, query)
    // query success
    .then((result: any) => {
      if (result.affectedRows === 0){
        console.log('query error: No match gym');

        return res.status(500).json({
          message: 'query error: No match gym',
        });
      }
      else {
        return res.status(200).json({
          result
        });
      }
    })

    // query error
    .catch(error => {
      console.log('query error: ' + error.message);
      
      if (error.errno === 1062){
        return res.status(200).json({
          status: "duplicate"
        })
      }
      
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

const loginTrainer = (req: Request, res: Response, next: NextFunction) => {
  console.log("Login trainer");

  let { login_id, login_pw } = req.body;
  let query = `SELECT * FROM trainers `;
  query    += `WHERE login_id="${login_id}" AND login_pw="${login_pw}"`;

  Connect()
  // connection success
  .then(connection => {
    Query(connection, query)
    // query success
    .then((result: any) => {
      if (result.length === 0){
        console.log('query error: No match trainer account');
      }
      else{
        console.log("Success: Login User");
      }
      return res.status(200).json({
        result
      });
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

// GET
const getALLTrainers = (req: Request, res: Response, next: NextFunction) => {
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

const getTrainer = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting trainer");

  let { id } = req.params;
  let query = `SELECT * FROM trainers where id=${id}`;

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

const getTrainerTeachingClass = (req: Request, res:Response, next: NextFunction) => {
  console.log("Getting trainer`s teaching classes");

  let { id } = req.params;
  let query = `SELECT * FROM class JOIN users ON class.user_id = users.id WHERE trainer_id=${id} and status='teaching'`;
  
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

const getTrainerPendingClass = (req: Request, res:Response, next: NextFunction) => {
  console.log("Getting trainer`s pending users");

  let { id } = req.params;
  let query = `SELECT * FROM class JOIN users ON class.user_id = users.id WHERE trainer_id=${id} and status='pending'`;
  
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

const checkTrainerId = (req: Request, res:Response, next: NextFunction) => {
  console.log("Check duplicate trainer id");

  let { login_id } = req.params;
  let query = `SELECT NOT EXISTS (SELECT * FROM trainers WHERE login_id="${login_id}") as isValidTrainerId`;
  
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

const getTrainerThumbnail = (req: Request, res:Response, next: NextFunction) => {
  console.log("Getting Trainer Thumbnail");

  let { id } = req.params;
  let query = `SELECT thumbnail FROM trainers WHERE id="${id}"`;
  
  Connect()
  // connection success
  .then(connection => {
    Query(connection, query)
    // query success
    .then((result: any) => {
      return res.status(200).json(
        result
      );
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

const updateTrainerThumbnail = (req: Request, res:Response, next: NextFunction) => {
  console.log("Update Trainer Thumbnail");
  let { id } = req.params;
  let { thumbnail } = req.body;

  let query = `UPDATE trainers SET thumbnail="${thumbnail}" WHERE id=${id}`;
  
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
  })
};

const updateTrainer = (req: Request, res:Response, next: NextFunction) => {
  console.log("Update Trainer");
  let { id } = req.params;
  let { instagram, career, intro, gym_city, gym_name } = req.body;

  let query = `UPDATE trainers `;
  query    += `SET instagram="${instagram}", career="${career}", intro="${intro}", gym_id=(SELECT id FROM gyms WHERE city="${gym_city}" AND name="${gym_name}") `;
  query    += `WHERE id=${id}`;
  
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
  })
};



export default {
  createTrainer,
  loginTrainer,
  getALLTrainers,
  getTrainer,
  getTrainerTeachingClass,
  getTrainerPendingClass,
  checkTrainerId,
  getTrainerThumbnail,
  updateTrainerThumbnail,
  updateTrainer
};