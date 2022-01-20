import express from 'express';
import controller from '../controller/gyms';

const router = express.Router();

router.get('/all', controller.getALLGyms);

router.post('/register', controller.createGym);

export = router;
