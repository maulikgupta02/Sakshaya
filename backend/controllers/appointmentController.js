import Appointment from "../models/appointmentModel.js";

export const getAppointment= async (req,res) => {
    const {username} =req.body;
    const appointments=await Appointment.findAll({username});
    res.json(appointments);
};