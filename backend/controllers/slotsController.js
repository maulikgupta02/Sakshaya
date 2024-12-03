import AvailableSlots from "../models/availableslotsModel.js"; 

export const slots = async (req, res) => {
    try {
        const { notary, date, timestamp } = req.body;

        if (!notary || !date || !timestamp) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const slot = await AvailableSlots.create({
            notary,
            date,
            timestamp,
        });

        res.status(201).json(slot);
        console.log(slot)
    } catch (error) {
        console.error("Error creating slot:", error);
        res.status(500).json({ message: "An error occurred while adding slots." });
    }
};
