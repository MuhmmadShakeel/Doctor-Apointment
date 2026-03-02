import mongoose from "mongoose"
const appointSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Appointment=mongoose.model("appointment",appointSchema)
export default Appointment