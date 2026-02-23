import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/UserRoute.js';
import cloudinary from 'cloudinary';
import complainRouter from './routes/ComplaintRoute.js';
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
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });




