import express from 'express';
import controller from '../controller/trainer';

const router = express.Router();

router.get('/check', controller.getALLTrainer);

router.post('/update', controller.createTrainer);

export = router;
