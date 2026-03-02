import express from "express";
import upload from "../middleware/Multer.js";
import {
  addMedicine,
  getAllMedicines,
  getSingleMedicine,
  updateMedicine,
  deleteMedicine,
} from "../controller/MedicineController.js";

const medicineRouter = express.Router();

medicineRouter.post("/addmedicine", upload.any(), addMedicine);
medicineRouter.get("/getallmedicine", getAllMedicines);
medicineRouter.get("/getonemedicine/:id", getSingleMedicine);
medicineRouter.put("/updatemedicine/:id", upload.any(), updateMedicine);
medicineRouter.delete("/deletemedicine/:id", deleteMedicine);

export default medicineRouter;