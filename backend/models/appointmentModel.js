import mongoose from "mongoose";

const appointmentSchema= mongoose.Schema({
    notary_username:{
        type:String,
    },
    client_username:{
        type:String
    },
    title:{
        type:String
    },
    timestamp:{
        type:String
    },
    doc:{
        type:String
    },
    meetlink:{
        type:String
    }
});

const Appointment = mongoose.model("Appointment",appointmentSchema);
export default Appointment;