import express from "express";
import upload from "../middleware/Multer.js";
import { addDoctor, deleteDoctor, getAllDoctors, getSingleDoctor, updateDoctor } from "../controller/DoctorController.js";

const doctorrouter = express.Router();

doctorrouter.post("/adddoctor", upload.single("drimage"), addDoctor);
doctorrouter.get("/getalldoctor", getAllDoctors);
doctorrouter.get("/getdoctor/:id", getSingleDoctor);
doctorrouter.put("/updatedoctor/:id", upload.single("drimage"), updateDoctor);
doctorrouter.delete("/deletedoctor/:id", deleteDoctor);
export default doctorrouter;