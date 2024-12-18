import express from 'express';
import {getAppointment, postAppointment} from "../controllers/appointmentController.js"

const router = express.Router(); 

router.route('/').get(getAppointment).post(postAppointment);

export default router;