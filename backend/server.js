import express from 'express';
import dotenv from 'dotenv';
import login from './routes/login-signupRoute.js'
import Appointment from './routes/appointmentRoute.js';
import slots from './routes/slotsRoute.js';
import connectdb from './config/dbConnection.js'

dotenv.config();
connectdb();

const app=express();
app.use(express.json());

const port=process.env.PORT;

app.use("/api/user",login);
app.use("/api/appointments",Appointment)
app.use("/api/set-slots",slots)

app.listen(port,()=>{
    console.log(`Server started at port: ${port}`);
});