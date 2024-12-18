import Notary from "../models/notary-documentsModel.js"; // Make sure the model name starts with an uppercase letter as a convention

// Store a new notary document
export const store = async (req, res) => {
    try {
        const { notary, client, timestamp, hash } = req.body;

        // Validate required fields
        if (!notary || !client || !timestamp || !hash) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // Create a new document in the database
        const doc = await Notary.create({
            notary,
            client,
            timestamp,
            hash,
        });

        res.status(201).json({ message: "Document stored successfully!", data: doc });
        console.log(doc);
    } catch (error) {
        console.error("Error adding new notary document to the database:", error);
        res.status(500).json({ message: "An error occurred while adding to database" });
    }
};

// Retrieve notary documents by client
export const retrieve = async (req, res) => {
    try {
        const { client } = req.query;

        if (!client) {
            return res.status(400).json({ message: "Client field is required!" });
        }

        // Retrieve documents for the specified client
        const docs = await Notary.find({client});

        if (docs.length === 0) {
            return res.status(404).json({ message: "No documents found for the specified client" });
        }

        res.status(200).json({ message: "Documents retrieved successfully!", data: docs });
    } catch (error) {
        console.error("Error retrieving notary documents from the database:", error);
        res.status(500).json({ message: "An error occurred while retrieving documents" });
    }
};
