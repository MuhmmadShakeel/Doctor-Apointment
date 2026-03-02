import mongoose from "mongoose";
const medicationSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     mediImage:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    },
    subtitle:{
       type:String,
       required:true
    },
    inStock:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})
const Medicine=mongoose.model('medicine',medicationSchema)
export default Medicine