import express from "express";
import { SignUp, deleteUser, getAllUsers, getUser, login, logout, updateUserProfile, } from "../controller/UserController.js";
const router = express.Router();
import upload from "../middleware/Multer.js";
router.post('/signup', upload.single('profilePicture'), SignUp);
router.post('/login',login);
router.post('/logout', logout);
router.get('/users',getAllUsers)
router.get('/profile/:id',getUser)
router.put('/updateprofile/:id',updateUserProfile)
router.delete('/deleteprofile/:id',deleteUser)
export default router;
