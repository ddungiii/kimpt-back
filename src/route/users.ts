import express from 'express';
import controller from '../controller/users';

const router = express.Router();

// GET
// Get informations for All Users
router.get('/all', controller.getALLUsers);

// Get information for User
router.get('/:id', controller.getUser);

// Get User Class
router.get('/:id/class', controller.getUserClass);

// Check duplicate User ID
router.get('/check/:login_id', controller.checkUserId);

// POST
// Register User at SignUp
router.post('/register', controller.createUser);

// Login Trainer
router.post('/login', controller.loginUser);

export = router;
