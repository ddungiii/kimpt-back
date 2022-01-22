import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from '../config/mysql';


// POST
const createUser = (req: Request, res: Response, next: NextFunction) => {
  console.log("Creating user");

  let { login_id, login_pw, name, sex, age, career, purpose } = req.body;

  let query = 'INSERT INTO users (login_id, login_pw, name, sex, age, career, purpose) ';
  query += `VALUES ("${login_id}", "${login_pw}", "${name}", "${sex}", "${age}", "${career}", "${purpose}")`;

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

        return res.status(500).json({
          message: 'query error: No match user account',
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

//GET
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

export default {
  createUser,
  loginUser,
  getALLUsers,
  getUser,
  getUserClass
};