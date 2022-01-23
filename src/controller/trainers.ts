import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';

const path = require("path");
const fs = require("fs");

// POST
const createTrainer = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating trainer");

  let { login_id, login_pw, name, sex, age, instagram, career, intro, gym_city, gym_name } = req.body;
  // let thumbnail = req.body.thumbnail ? req.body.thumbnail : 
  let thumbnail = req.body.thumbnail ? req.body.thumbnail : 'blank_profile.png';

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
  let query = `SELECT * FROM trainers where id="${id}"`;

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
  let query = `SELECT * FROM class WHERE trainer_id=${id} and status='teaching'`;
  
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
  let query = `SELECT * FROM class WHERE trainer_id=${id} and status='pending'`;
  
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

const getTrainerFinishClass = (req: Request, res:Response, next: NextFunction) => {
  console.log("Getting trainer`s finish users");

  let { id } = req.params;
  let query = `SELECT * FROM class WHERE trainer_id=${id} and status='finish'`;
  
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
      const file = result[0].thumbnail;
      
      let test = fs.readFileSync(path.join(__dirname, "../../public/images/", file));

      return res.status(200).json(test);
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


// PUT
interface MulterRequest extends Request {
  file: any;
};

const updateTrainerThumbnail = (req: Request, res:Response, next: NextFunction) => {
  console.log("Update Trainer Thumbnail");

  console.log(req.file);
  let { id } = req.params;
  const thumbnail = `trainers/thumbnail/${(req as MulterRequest).file.filename}`;
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

export default {
  createTrainer,
  loginTrainer,
  getALLTrainers,
  getTrainer,
  getTrainerTeachingClass,
  getTrainerPendingClass,
  getTrainerFinishClass,
  checkTrainerId,
  getTrainerThumbnail,
  updateTrainerThumbnail
};