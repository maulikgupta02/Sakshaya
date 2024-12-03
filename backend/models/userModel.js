import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    mobile:{
        type:Number
    },
    dob:{
        type:Date
    },
    sex:{
        type:String
    },
    permanent_address:{
        type:String
    },
    current_address:{
        type:String
    },
    certificate_id:{
        type:String
    },
    citizenship:{
        type:String
    }
})

const User = mongoose.model("User", userSchema);
export default User;