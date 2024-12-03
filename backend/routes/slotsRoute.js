import express from 'express';
import {slots} from "../controllers/slotsController.js"

const router = express.Router(); 

router.route('/').post(slots);

export default router;