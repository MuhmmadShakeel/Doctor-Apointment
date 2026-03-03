import React, { useState } from "react";
import { useSignUpMutation } from "../../redux/AuthApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ import toast

function Signup() {
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignUpMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await signUp(formData).unwrap();

      // ✅ Success toast
      toast.success(response?.message || "User registered successfully");

      // Delay redirect slightly so user can see toast
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.log("Signup error:", error);

      // ✅ Error toast
      toast.error(error?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;