import mongoose from "mongoose";

const bookedSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    appointmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "appointment",
      required: true,
    },
  },
  { timestamps: true }
);

const Booked = mongoose.model("Booked", bookedSchema);
export default Booked;