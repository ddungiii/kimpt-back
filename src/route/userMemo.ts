import express from 'express';
import controller from '../controller/userMemo';

const router = express.Router();

// Get Memo by User
router.get('/:user_id', controller.getUserMemo);

// Write memo
router.post('/', controller.createMemo);

export = router;
