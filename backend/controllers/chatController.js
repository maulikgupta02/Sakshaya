import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';

// Initialize Google Generative AI with the API key
const genAI = new GoogleGenerativeAI("AIzaSyDw0QN-bfQ9xHIh7wjNqaNCIzcVl2zmHrI");  // Use environment variable for the API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Main API handler function
const chat = async (req, res) => {
  try {
    const { prompt } = req.body;

    // Initialize chat with conversation history
    const chatSession = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello" }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ],
    });

    // Send the user's prompt to the chat model
    let result = await chatSession.sendMessage(prompt);

    const responseText = result.response.text(); // Extract text from the model's response

    // Return the response text and RAG status to the client
    res.status(200).json({
      text: responseText,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default chat;  // Export chat as default
