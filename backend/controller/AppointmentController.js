import Appointment from "../model/AppointModel.js";
import Booked from "../model/BookedAppointment.js";

export const createAppointment = async (req, res) => {
  try {
    const { name, email, contact, date, message } = req.body;

    const appointment = await Appointment.create({
      name,
      email,
      contact,
      date,
      message,
    });

      const UserIs=req.userId
      const AppointmentId=req.params.id
      const bookedAppointment=

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      total: appointments.length,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getSingleAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    const { name, email, contact, date, message, status } = req.body;

    appointment.name = name || appointment.name;
    appointment.email = email || appointment.email;
    appointment.contact = contact || appointment.contact;
    appointment.date = date || appointment.date;
    appointment.message = message || appointment.message;
    appointment.status = status || appointment.status;

    await appointment.save();

    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    await appointment.deleteOne();

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




// 🔹 Book Appointment
export const bookAppointment = async (req, res) => {
  try {
    const userId = req.userId; // from auth middleware
    const appointmentId = req.params.id;

    // 🔍 Step 1: Check if appointment exists
    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // 🔍 Step 2: Check duplicate booking
    const alreadyBooked = await Booked.findOne({
      userId,
      appointmentId,
    });

    if (alreadyBooked) {
      return res.status(400).json({
        success: false,
        message: "You have already booked this appointment.",
      });
    }

    // 💾 Step 3: Save booking reference
    const booking = await Booked.create({
      userId,
      appointmentId,
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// 🔹 Get Logged-in User Appointments (with populate)
export const getUserAppointments = async (req, res) => {
  try {
    const userId = req.userId;

    const bookings = await Booked.find({ userId })
      .populate("appointmentId"); // 🔥 join like system

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};