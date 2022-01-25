import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';


// POST
const createUser = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating user");

  let { login_id, login_pw, name, sex, age, contact, career, purpose } = req.body;

  let query = 'INSERT INTO users (login_id, login_pw, name, sex, age, contact, career, purpose) ';
  query += `VALUES ("${login_id}", "${login_pw}", "${name}", "${sex}", "${age}", "${contact}", "${career}", "${purpose}")`;

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

const loginUser = (req: Request, res: Response, next: NextFunction) => {
  console.log("Login user");

  let { login_id, login_pw } = req.body;
  let query = `SELECT * FROM users `;
  query    += `WHERE login_id="${login_id}" AND login_pw="${login_pw}"`;

  Connect()
  // connection success
  .then(connection => {
    Query(connection, query)
    // query success
    .then((result: any) => {
      if (result.length === 0){
        console.log('query error: No match user account');
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
const getALLUsers = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting all users");

  let query = 'SELECT * FROM users'

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

const getUser = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting user");

  let { id } = req.params;
  let query = `SELECT * FROM users where id=${id}`;

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

const getUserClass = (req: Request, res:Response, next: NextFunction) => {
  console.log("Getting user`s classes");

  let { id } = req.params;
  let query = `SELECT * FROM class WHERE user_id=${id}`;
  
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
}

const checkUserId = (req: Request, res:Response, next: NextFunction) => {
  console.log("Check duplicate user id");

  let { login_id } = req.params;
  let query = `SELECT NOT EXISTS (SELECT * FROM users WHERE login_id="${login_id}") as isValidUserId`;
  
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
}

const getIsMyTrainer = (req: Request, res:Response, next: NextFunction) => {
  console.log("Check hasTrainer, IsMyTrainer, Is review wrote");

  let { id, trainer_id } = req.params;
  let query = `SELECT EXISTS (SELECT * FROM class WHERE user_id=${id}) as hasTrainer, `;
  query    += `EXISTS (SELECT * FROM class WHERE user_id="${id}" AND trainer_id=${trainer_id}) as isMyTrainer, `
  query    += `EXISTS (SELECT is_review FROM class WHERE user_id="${id}" AND trainer_id=${trainer_id} AND is_review=1) as isReviewWrote`;
  
  
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
}

// PUT
const updateUser = (req: Request, res:Response, next: NextFunction) => {
  console.log("Update User");
  let { id } = req.params;
  let { contact, career, purpose } = req.body;

  let query = `UPDATE users `;
  query    += `SET contact="${contact}", career="${career}", purpose="${purpose}" `;
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
  createUser,
  loginUser,
  getALLUsers,
  getUser,
  getUserClass,
  checkUserId,
  getIsMyTrainer,
  updateUser
};