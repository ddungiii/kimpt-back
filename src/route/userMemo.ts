import express from 'express';
import controller from '../controller/userMemo';

const router = express.Router();

// Register Class
router.post('/', controller.createMemo);

export = router;
