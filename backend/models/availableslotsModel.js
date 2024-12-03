import mongoose from "mongoose";

const availableslotsSchema= mongoose.Schema({
    notary:{
        type:String,
    },
    date:{
        type:Date
    },
    timestamp:{
        type:String
    }
});

const availableslots = mongoose.model("availableslots",availableslotsSchema);
export default availableslots;