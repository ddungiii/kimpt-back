import express from 'express';
import multer from "multer";
import controller from '../controller/trainers';

const router = express.Router();

const path = require("path");

// var storage = multer.diskStorage({
//   destination: function (req: any, file: any, cb: any) {
//     cb(null, "/root/KIMPT/BACK/public/images/trainers/thumbnail/");
//   },
//   filename: function (req: any, file: any, cb: any) {
//     const ext = path.extname(file.originalname);
//     cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
//   }
// });

// const fileFilter = (req: any, file: any, cb: any) => {
//   if(file.mimetype === "image/jpg"  || 
//     file.mimetype ==="image/jpeg"  || 
//     file.mimetype ===  "image/png"){
   
//     cb(null, true);
//   }
//   else{
//     cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
//   }
// }

// var upload = multer({ storage: storage, fileFilter: fileFilter });

// GET
// Get informations for All trainers
router.get('/all', controller.getALLTrainers);

// Get information for Trainer
router.get('/:id', controller.getTrainer);

// Get Trainer Teaching Class
router.get('/:id/class/teaching', controller.getTrainerTeachingClass);

// Get Trainer Teaching Class
router.get('/:id/class/pending', controller.getTrainerPendingClass);

// Get Trainer Teaching Class
router.get('/:id/class/finish', controller.getTrainerFinishClass);

// Check duplicate Trainer ID
router.get('/check/:login_id', controller.checkTrainerId);

// Get trainer Thumbnail
router.get('/:id/thumbnail', controller.getTrainerThumbnail);


// POST
// Register Trainer at SignUp
router.post('/register', controller.createTrainer);

// Login Trainer
router.post('/login', controller.loginTrainer);

// PUT
// Update trainer Thumbnail
// router.put('/:id/thumbnail', upload.single("thumbnail"), controller.updateTrainerThumbnail);
router.put('/:id/thumbnail', controller.updateTrainerThumbnail);

export = router;
