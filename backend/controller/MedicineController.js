import Medicine from "../model/MedicineModel.js";
import cloudinary from "cloudinary";


export const addMedicine = async (req, res) => {
  try {
    const { title, subtitle, inStock, price } = req.body;

    if (!title || !subtitle || !inStock || !price) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    let imageData = null;

    if (req.file) {
      const uploadedImage = await cloudinary.v2.uploader.upload(
        req.file.path,
        { resource_type: "auto" }
      );

      imageData = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

    const newMedicine = new Medicine({
      title,
      subtitle,
      inStock,
      price,
      mediImage: imageData,
    });

    await newMedicine.save();

    res.status(201).json({
      success: true,
      message: "Medicine added successfully",
      medicine: newMedicine,
    });
  } catch (error) {
    console.error("Error adding medicine:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: medicines.length,
      medicines,
    });
  } catch (error) {
    console.error("Error fetching medicines:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const getSingleMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);

    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: "Medicine not found",
      });
    }

    res.status(200).json({
      success: true,
      medicine,
    });
  } catch (error) {
    console.error("Error fetching medicine:", error);
    res.status(500).json({
      success: false,
      message: "Invalid ID or server error",
    });
  }
};


export const updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);

    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: "Medicine not found",
      });
    }

    const { title, subtitle, inStock, price } = req.body;

    // Use nullish coalescing to allow 0 or empty string
    medicine.title = title ?? medicine.title;
    medicine.subtitle = subtitle ?? medicine.subtitle;
    medicine.inStock = inStock ?? medicine.inStock;
    medicine.price = price ?? medicine.price;

    // Handle file upload
    if (req.file) {
      if (medicine.mediImage?.public_id) {
        await cloudinary.v2.uploader.destroy(medicine.mediImage.public_id);
      }

      const uploadedImage = await cloudinary.v2.uploader.upload(req.file.path, {
        resource_type: "auto",
      });

      medicine.mediImage = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

    await medicine.save();

    res.status(200).json({
      success: true,
      message: "Medicine updated successfully",
      medicine,
    });
  } catch (error) {
    console.error("Error updating medicine:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


export const deleteMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);

    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: "Medicine not found",
      });
    }

    if (medicine.mediImage?.public_id) {
      await cloudinary.v2.uploader.destroy(medicine.mediImage.public_id);
    }

    await medicine.deleteOne();

    res.status(200).json({
      success: true,
      message: "Medicine deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting medicine:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};