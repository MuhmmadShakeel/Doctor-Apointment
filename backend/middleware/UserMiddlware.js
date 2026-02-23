import jwt from 'jsonwebtoken';
import User from '../model/UserModel.js';
import dotenv from 'dotenv';
dotenv.config();
export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access token is missing or invalid' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access token is missing' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.userRole = decoded.role;
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(403).json({ message: 'Invalid token' });
    }
};

export const restrictLogin=async(req,res)=>{
const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access token is missing or invalid' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access token is missing' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.userRole = decoded.role;
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
           if (!user.role=='admin') {
            return res.status(404).json({ message: 'Only Admin can Excess' });
        }
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(403).json({ message: 'Invalid token' });
    }   

}


