import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getSingleAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controller/AppointmentController.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/addappointment", createAppointment);

appointmentRouter.get("/getappointments", getAllAppointments);

appointmentRouter.get("/getoneappointment/:id", getSingleAppointment);

appointmentRouter.put("/updateappointment/:id", updateAppointment);

appointmentRouter.delete("/deleteappointment/:id", deleteAppointment);
export default appointmentRouter;