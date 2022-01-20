import express from 'express';
import controller from '../controller/trainers';

const router = express.Router();

router.get('/check', controller.getALLTrainers);

router.post('/update', controller.createTrainer);

export = router;
