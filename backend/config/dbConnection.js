import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectdb= async ()=>{
     try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Database connected successfully",
            connect.connection.host,
            connect.connection.name
        );
     }catch(err){
        console.log(err);
        process.exit(1);
     }
}

export default connectdb;