import mongoose from "mongoose";

const notarySchema = mongoose.Schema({
    title:{
        type:String
    },
    client:{
        type:String
    },
    notary:{
        type:String
    },
    timestamp:{
        type:String
    },
    hash:{
        type:String
    }
})

const notary = mongoose.model("Notary", notarySchema);
export default notary;