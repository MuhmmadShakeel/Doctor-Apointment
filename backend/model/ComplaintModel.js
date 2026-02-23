import mongoose from "mongoose";
const complaintSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    complaintText: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'resolved'],
        default: 'pending',
    },
}, { timestamps: true });
const Complaint = mongoose.model('Complaint', complaintSchema);
export default Complaint;