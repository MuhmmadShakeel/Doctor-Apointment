import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import router from './routes/UserRoute.js';
import complainRouter from './routes/ComplaintRoute.js';
import appointmentRouter from './routes/AppointmenRoute.js';
import doctorrouter from './routes/DoctorRoute.js';
import riderRouter from './routes/RideRoute.js';
import medicineRouter from './routes/MedicineRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use('/api/user', router);
app.use('/api/complaint', complainRouter);
app.use('/api/doctor', doctorrouter);
app.use('/api/rider',riderRouter)
app.use('/api/medicine',medicineRouter)
app.use('/api/appointment',appointmentRouter)
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });




