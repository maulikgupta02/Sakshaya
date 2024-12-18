import express from 'express';
import dotenv from 'dotenv';
import login from './routes/login-signupRoute.js'
import Appointment from './routes/appointmentRoute.js';
import slots from './routes/slotsRoute.js';
import connectdb from './config/dbConnection.js'
import notaryDocument from './routes/notary-documentRoute.js'
import meet from "./routes/meetRoute.js"
import chat from "./routes/chatRoute.js"
import cors from 'cors'

dotenv.config();
connectdb();

const app=express();

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers)
}));

app.use(express.json());

const port=process.env.PORT;

app.use("/api/user",login);
app.use("/api/appointments",Appointment)
app.use("/api/set-slots",slots)
app.use("/api/notary-document",notaryDocument)
app.use("/api/create-meet",meet)
app.use("/api/chat",chat)

app.listen(port,()=>{
    console.log(`Server started at port: ${port}`);
});