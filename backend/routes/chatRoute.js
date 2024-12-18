import express from 'express';
import chat from "../controllers/chatController.js"; // Import the default export

const router = express.Router(); 

router.route('/').post(chat); // Setup POST route for the chat endpoint

export default router;
