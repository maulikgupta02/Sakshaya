import express from 'express';
import {getAppointment} from "../controllers/appointmentController.js"

const router = express.Router(); 

router.route('/').get(getAppointment);

export default router;