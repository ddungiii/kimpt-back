import express from 'express';
import controller from '../controller/trainerImages';

const router = express.Router();

// GET
// Get Trainer Image
router.get('/:id', controller.getTrainerImage);

// POST
// Upload Trainer Image
router.post('/:id', controller.uploadTrainerImage);

export = router;
