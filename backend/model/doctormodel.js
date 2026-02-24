import mongoose from 'mongoose'
const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    drimage:{
      public_id:{
        type:String
      },
      url:{
        type:String
      }  
    },
    qualification:{
        type:String,
        required:true
    },
   availability: {
    type: String,
    required:true
}
})
const Doctor=mongoose.model('doctor',doctorSchema)
export default Doctor