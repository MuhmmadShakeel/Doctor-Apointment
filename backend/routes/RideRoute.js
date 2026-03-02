import express from "express";
import upload from "../middleware/Multer.js";
import {
  addRider,
  getAllRiders,
  getSingleRider,
  updateRider,
  deleteRider
} from "../controller/RiderController.js";

const riderRouter = express.Router();

riderRouter.post("/addrider", upload.single("rideimage"), addRider);
riderRouter.get("/getallriders", getAllRiders);
riderRouter.get("/getrider/:id", getSingleRider);
riderRouter.put("/updaterider/:id", upload.single("rideimage"), updateRider);
riderRouter.delete("/deleterider/:id", deleteRider);

export default riderRouter;