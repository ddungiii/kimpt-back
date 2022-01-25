import express from 'express';
import controller from '../controller/userImages';

const router = express.Router();

// GET
// Get User Image
router.get('/:id/:type', controller.getUserImage);

// POST
// Upload User Image
router.post('/:id/:type', controller.uploadUserImage);

// DELETE
// Delete User Image
router.delete('/', controller.deleteUserImage);

export = router;
