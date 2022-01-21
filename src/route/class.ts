import express from 'express';
import controller from '../controller/class';

const router = express.Router();

// Register Class
router.post('/register', controller.createClass);

export = router;
