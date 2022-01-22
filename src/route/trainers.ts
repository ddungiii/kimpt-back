import express from 'express';
import controller from '../controller/trainers';

const router = express.Router();

// GET
// Get informations for All trainers
router.get('/all', controller.getALLTrainers);

// Get information for Trainer
router.get('/:id', controller.getTrainer);

// Get Trainer Teaching Class
router.get('/:id/class/teaching', controller.getTrainerTeachingClass);

// Get Trainer Teaching Class
router.get('/:id/class/pending', controller.getTrainerPendingClass);

// Get Trainer Teaching Class
router.get('/:id/class/finish', controller.getTrainerFinishClass);

// Check duplicate Trainer ID
router.get('/check/:login_id', controller.checkTrainerId);

// Get trainer Thumbnail
router.get('/:id/thumbnail', controller.getTrainerThumbnail);


// POST
// Register Trainer at SignUp
router.post('/register', controller.createTrainer);

// Login Trainer
router.post('/login', controller.loginTrainer);

export = router;
