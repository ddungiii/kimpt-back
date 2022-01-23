import express from 'express';
import controller from '../controller/class';

const router = express.Router();

// POST
// Register Class
router.post('/register', controller.createClass);

// PUT
// Reduce remaining PT
router.put('/:class_id/reduce', controller.reduceRemainPT);

export = router;
