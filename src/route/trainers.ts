import express from 'express';
import controller from '../controller/trainers';

const router = express.Router();

// Get informations for All trainers
router.get('/all', controller.getALLTrainers);

// Get information for Trainer
router.get('/:id', controller.getTrainer);

// Register Trainer at SignUp
router.post('/register', controller.createTrainer);

export = router;
