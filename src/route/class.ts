import express from 'express';
import controller from '../controller/class';

const router = express.Router();

// POST
// Apply Class
router.post('/apply', controller.applyClass);

// PUT
// Reduce remaining PT
router.put('/:class_id/reduce', controller.reduceRemainPT);

// Accept PT
router.put('/:class_id/accept', controller.acceptClass);

// Deny PT
router.put('/:class_id/deny', controller.denyClass);

export = router;
