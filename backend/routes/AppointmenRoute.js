import express from "express";
import { authenticateToken } from "../middleware/UserMiddlware.js";
import {
  createAppointment,
  getAllAppointments,
  getSingleAppointment,
  updateAppointment,
  deleteAppointment,
  bookAppointment,
  getUserAppointments,
} from "../controller/AppointmentController.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/addappointment",  createAppointment);

appointmentRouter.get("/getappointments", getAllAppointments);

appointmentRouter.get("/getoneappointment/:id", getSingleAppointment);

appointmentRouter.put("/updateappointment/:id", updateAppointment);

appointmentRouter.delete("/deleteappointment/:id", deleteAppointment);

appointmentRouter.get("/bookappointment/:id",authenticateToken, bookAppointment);

appointmentRouter.get("/getoneappointment/:id", getUserAppointments);

export default appointmentRouter;