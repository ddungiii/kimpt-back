import express from 'express';
import controller from '../controller/gyms';

const router = express.Router();

// Get informations for All Gyms
router.get('/all', controller.getALLGyms);

// Get information for a Gym
router.get('/:id', controller.getGym);

// Register Gym
router.post('/register', controller.createGym);

export = router;
