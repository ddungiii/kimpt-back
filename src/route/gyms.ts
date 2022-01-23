import express from 'express';
import controller from '../controller/gyms';

const router = express.Router();

// POST
// Register Gym
router.post('/register', controller.createGym);

// GET
// Get informations for All Gyms
router.get('/all', controller.getALLGyms);

// Get Cities for All Gyms
router.get('/cities', controller.getAllCities);

// Get Gyms in City
router.get('/:city/all', controller.getAllGymsInCity);

// Get information for a Gym
router.get('/:id', controller.getGym);

// Get Trainers By Gym
router.get('/:id/trainers', controller.getTrainersByGym);



export = router;
