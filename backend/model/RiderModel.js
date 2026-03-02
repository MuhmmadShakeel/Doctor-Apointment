import mongoose from "mongoose";
const riderSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
         type:String,
        required:true
    },
    rideimage:{
        public_id:{
           type:String,
        },
        url:{
            type:String,
        }
    },
     time:{
     type:String,
     required:true
     },
     price:{
       type:String,
       required:true
     }
})
const Rider=mongoose.model('rider',riderSchema)
export default Rider