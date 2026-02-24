import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import { z } from "zod";
import cloudinary from 'cloudinary';
import jwt from "jsonwebtoken";

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.string().optional(),
  profilePicture: z.string().optional(),
  standard: z.string().optional()
});

export const SignUp = async (req, res) => {
  try {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.errors[0].message,
      });
    }

    const { name, email, password, role, standard } = result.data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      standard,
      profilePicture: imageData, 
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });

  } catch (error) {
    console.error("Error during sign up:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1day' });
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const logout =async (req, res) => {
    try{
        res.clearCookie('token');   
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getUser=(req, res) => {
    try {
        const userId = req.userId;
        const user = User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, password, role, profilePicture, standard } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = await bcrypt.hash(password, 10);
        if (role) user.role = role;
        if (profilePicture) user.profilePicture = profilePicture;
        if (standard) user.standard = standard;
        await user.save();
        res.status(200).json({ message: 'User profile updated successfully', user });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};



