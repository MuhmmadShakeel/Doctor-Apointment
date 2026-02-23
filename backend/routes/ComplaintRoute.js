import express from 'express';
import { submitComplaint,getUserComplaints } from '../controller/ComplaintController.js';
import { authenticateToken } from '../middleware/UserMiddlware.js';
const complainRouter = express.Router();
complainRouter.post('/complain',authenticateToken,submitComplaint )
complainRouter.get('/user-complaints', getUserComplaints)
export default complainRouter;