import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['patient', 'doctor', 'admin'],
        default: 'patient'
    },
     profilePicture :{
       public_id: {
        type: String,
         },
         url: {
            type: String,
         }
    },
}, { timestamps: true });
const User = mongoose.model('user', userSchema);
export default User;

