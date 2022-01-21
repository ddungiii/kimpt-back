import express from 'express';
import controller from '../controller/users';

const router = express.Router();

// Get informations for All Users
router.get('/all', controller.getALLUsers);

// Get information for User
router.get('/:id', controller.getUser);

// Get User Class
router.get('/:id/class', controller.getUserClass);

// Register User at SignUp
router.post('/register', controller.createUser);

export = router;
