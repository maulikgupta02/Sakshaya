import express from 'express';
import {meet} from "../controllers/meetController.js"

const router = express.Router(); 

router.route('/').post(meet);

export default router;