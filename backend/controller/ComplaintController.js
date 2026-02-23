import Complaint from "../model/ComplaintModel.js";
export const submitComplaint = async (req, res) => {
    try {
        const { complaintText } = req.body;
        if (!complaintText) {
            return res.status(400).json({ message: 'Complaint text is required' });
        }
        const complaint = new Complaint({
            user: req.userId,
            complaintText,
        });
        await complaint.save();
        res.status(201).json({ message: 'Complaint submitted successfully' });
    } catch (error) {
        console.error('Error submitting complaint:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getUserComplaints = async (req, res) => {
    try {
      const complaints = await Complaint
            .find()
            .populate('user', 'name email role');
         if (!complaints || complaints.length === 0) {
            return res.status(404).json({ message: 'No complaints found for this user' });
        }
        res.status(200).json(complaints);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

