import Doctor from "../model/doctormodel.js";
import cloudinary from "cloudinary";
import fs from "fs";

export const addDoctor = async (req, res) => {
  try {

    const { name, qualification, availability } = req.body;

    // Basic Validation
    if (!name || !qualification) {
      return res.status(400).json({
        success: false,
        message: "Name and qualification are required",
      });
    }

    let imageData = null;

    if (req.file) {
      const uploadedImage = await cloudinary.v2.uploader.upload(
        req.file.path,
        { resource_type: "auto",}
      );

      imageData = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

    const newDoctor = new Doctor({
      name,
      qualification,
      availability, 
      drimage: imageData,
    });

    await newDoctor.save();

    res.status(201).json({
      success: true,
      message: "Doctor registered successfully",
      doctor: newDoctor,
    });

  } catch (error) {
    console.error("Error adding doctor:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json({
      success: true,
      count: doctors.length,
      doctors,
    });

  } catch (error) {
    console.error("Get Doctors Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getSingleDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      doctor,
    });

  } catch (error) {
    console.error("Get Single Doctor Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


export const updateDoctor = async (req, res) => {
  try {
    const { name, qualification, availability } = req.body;

    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    if (req.file) {

      if (doctor.image?.public_id) {
        await cloudinary.v2.uploader.destroy(doctor.image.public_id);
      }

      const uploadedImage = await cloudinary.v2.uploader.upload(
        req.file.path,
        { folder: "doctors" }
      );

      doctor.image = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };

      fs.unlinkSync(req.file.path);
    }

    doctor.name = name || doctor.name;
    doctor.qualification = qualification || doctor.qualification;
    doctor.availability = availability || doctor.availability;

    await doctor.save();

    res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      doctor,
    });

  } catch (error) {
    console.error("Update Doctor Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    if (doctor.image?.public_id) {
      await cloudinary.v2.uploader.destroy(doctor.image.public_id);
    }

    await doctor.deleteOne();

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });

  } catch (error) {
    console.error("Delete Doctor Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};