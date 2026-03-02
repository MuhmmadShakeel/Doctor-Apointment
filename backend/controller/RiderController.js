import Rider from "../model/RiderModel.js";
import cloudinary from "cloudinary";


export const addRider = async (req, res) => {
  try {
    const { title, subtitle, time, price } = req.body;
    if (!title || !subtitle || !time || !price) {
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

    const newRider = new Rider({
      title,
      subtitle,
      time,
      price,
      rideimage: imageData,
    });

    await newRider.save();

    res.status(201).json({
      success: true,
      message: "Rider added successfully",
      rider: newRider,
    });
  } catch (error) {
    console.error("Error adding rider:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const getAllRiders = async (req, res) => {
  try {
    const riders = await Rider.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: riders.length,
      riders,
    });
  } catch (error) {
    console.error("Error fetching riders:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const getSingleRider = async (req, res) => {
  try {
    const rider = await Rider.findById(req.params.id);

    if (!rider) {
      return res.status(404).json({
        success: false,
        message: "Rider not found",
      });
    }

    res.status(200).json({
      success: true,
      rider,
    });
  } catch (error) {
    console.error("Error fetching rider:", error);
    res.status(500).json({
      success: false,
      message: "Invalid ID or Server error",
    });
  }
};


export const updateRider = async (req, res) => {
  try {
    const rider = await Rider.findById(req.params.id);

    if (!rider) {
      return res.status(404).json({
        success: false,
        message: "Rider not found",
      });
    }

const { title, subtitle, time, price } = req.body;

    rider.title = title || rider.title;
    rider.subtitle = subtitle || rider.subtitle;
    rider.time = time || rider.time;
    rider.price = price || rider.price;

    if (req.file) {
      if (rider.rideimage?.public_id) {
        await cloudinary.v2.uploader.destroy(rider.rideimage.public_id);
      }

      const uploadedImage = await cloudinary.v2.uploader.upload(
        req.file.path,
        { resource_type: "auto" }
      );

      rider.rideimage = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

    await rider.save();

    res.status(200).json({
      success: true,
      message: "Rider updated successfully",
      rider,
    });
  } catch (error) {
    console.error("Error updating rider:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const deleteRider = async (req, res) => {
  try {
    const rider = await Rider.findById(req.params.id);

    if (!rider) {
      return res.status(404).json({
        success: false,
        message: "Rider not found",
      });
    }

    // Delete image from cloudinary
    if (rider.rideimage?.public_id) {
      await cloudinary.v2.uploader.destroy(rider.rideimage.public_id);
    }

    await rider.deleteOne();

    res.status(200).json({
      success: true,
      message: "Rider deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting rider:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};