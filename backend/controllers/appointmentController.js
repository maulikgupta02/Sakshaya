import Appointment from "../models/appointmentModel.js";

export const getAppointment = async (req, res) => {
    try {
        const { client_username } = req.query;

        // Validate the input
        if (!client_username) {
            return res.status(400).json({ message: "Username is required!" });
        }

        // Query the database using Sequelize's 'where' clause
        const appointments = await Appointment.find({client_username});

        if (appointments.length === 0) {
            return res.status(404).json({ message: "No appointments found for the specified username" });
        }

        // Send response
        res.status(200).json({ message: "Appointments retrieved successfully", data: appointments });
    } catch (error) {
        console.error("Error retrieving appointments:", error);
        res.status(500).json({ message: "An error occurred while retrieving appointments" });
    }
};


export const postAppointment = async (req, res) => {
    try {
        const { 
            notary_username,
            client_username,
            timestamp,
            doc,
            meetlink
        } = req.body;

        // Validate input
        // if (!notary_username || !client_username || !timestamp || !doc || !meetlink) {
        //     return res.status(400).json({ message: "All inputs are required!" });
        // }

        // Create a new appointment
        const newAppointment = new Appointment({
            notary_username,
            client_username,
            timestamp,
            doc,
            meetlink
        });

        // Save the appointment to the database
        await newAppointment.save();

        res.status(201).json({ 
            message: "Appointment scheduled successfully", 
            data: newAppointment 
        });
    } catch (error) {
        console.error("Error scheduling appointment:", error);
        res.status(500).json({ 
            message: "An error occurred while scheduling the appointment" 
        });
    }
};
