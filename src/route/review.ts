import express from 'express';
import controller from '../controller/review';

const router = express.Router();

// GET
// Write review
router.post('/', controller.createReview);

// POST
// Get Review by Trainer
router.get('/:class_id', controller.getReviewByTrainer);



export = router;
